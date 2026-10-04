/**
 * 百度翻译 TTS 播放引擎 (主发音引擎, 跨平台统一音质)
 * 背景: Android/华为 系统TTS英文质量差, iPhone 质量好 → 用百度云端TTS统一所有平台音质
 * 接口: https://fanyi.baidu.com/gettts?lan=en&text=...&spd=N&source=web
 *   - 免费/无需key/国内直连稳定/长短句均可(实测211+字符)
 *   - 仅女声: 男声段用 playbackRate=0.85 降调模拟
 *   - 校验Referer: 需页面 <meta name="referrer" content="same-origin">
 * 策略: 会话级探测, 首次播放前探测一次; 任何失败回调 onFallback 由 speak.js 回落系统TTS
 */
(function () {
  'use strict';

  var TTS_URL = 'https://fanyi.baidu.com/gettts';
  var LOAD_TIMEOUT = 6000;   // 音频加载超时(移动网络)
  var PROBE_TIMEOUT = 4000;  // 探测超时
  var SESSION_KEY = 'baidu_tts_ok';
  var MAX_CACHE = 60;

  // 会话级状态: null=未探测 true=可用 false=不可用
  var status = null;
  var probing = null;        // 探测Promise(防并发)
  var audioCache = [];       // LRU: [{url, audio}]
  var currentAudio = null;
  var stopped = false;       // 当前序列是否被停止

  function buildUrl(text, spd) {
    return TTS_URL + '?lan=en&text=' + encodeURIComponent(text) + '&spd=' + spd + '&source=web';
  }

  /** 从缓存取Audio对象(LRU) */
  function getAudio(url) {
    for (var i = 0; i < audioCache.length; i++) {
      if (audioCache[i].url === url) {
        var hit = audioCache[i];
        audioCache.splice(i, 1);
        audioCache.unshift(hit);  // 移到队首
        return hit.audio;
      }
    }
    var audio = new Audio(url);
    audio.preload = 'auto';
    audioCache.unshift({ url: url, audio: audio });
    if (audioCache.length > MAX_CACHE) audioCache.pop();
    return audio;
  }

  /** 探测接口可用性(会话级缓存) */
  function probe() {
    if (status !== null) return Promise.resolve(status);
    if (probing) return probing;
    probing = new Promise(function (resolve) {
      // 本会话已探测失败过(刷新前) 直接走系统TTS
      try {
        if (sessionStorage.getItem(SESSION_KEY) === '0') { status = false; resolve(false); return; }
      } catch (e) {}
      var audio = new Audio(buildUrl('hello', 5));
      var done = false;
      var timer = setTimeout(function () {
        if (done) return; done = true;
        finish(false);
      }, PROBE_TIMEOUT);
      function finish(ok) {
        status = ok;
        try { sessionStorage.setItem(SESSION_KEY, ok ? '1' : '0'); } catch (e) {}
        resolve(ok);
      }
      audio.addEventListener('canplaythrough', function () {
        if (done) return; done = true;
        clearTimeout(timer); finish(true);
      });
      audio.addEventListener('error', function () {
        if (done) return; done = true;
        clearTimeout(timer); finish(false);
      });
      audio.load();
    });
    return probing;
  }

  /** 停止当前播放与整个序列 */
  function stop() {
    stopped = true;
    if (currentAudio) {
      try { currentAudio.pause(); } catch (e) {}
      currentAudio = null;
    }
  }

  /**
   * 播放序列
   * @param {array} steps [{text, spd, pitchRate, gap}]
   * @param {object} opts {onProgress(cur,total), onSegmentStart(idx,step), onAllEnd(), onFallback(remainingSteps)}
   */
  function playSequence(steps, opts) {
    opts = opts || {};
    stopped = false;
    return probe().then(function (ok) {
      if (!ok) {
        if (opts.onFallback) opts.onFallback(steps);  // 全链回落
        return;
      }
      playFrom(steps, 0, steps.length, opts);
    });
  }

  function playFrom(steps, i, total, opts) {
    if (stopped || i >= steps.length) {
      if (!stopped && opts.onAllEnd) opts.onAllEnd();
      return;
    }
    var step = steps[i];
    if (opts.onProgress) opts.onProgress(i + 1, total);
    if (opts.onSegmentStart) opts.onSegmentStart(i, step);

    var audio = getAudio(buildUrl(step.text, step.spd));
    try { audio.pause(); } catch (e) {}
    audio.currentTime = 0;
    audio.playbackRate = step.pitchRate || 1;
    currentAudio = audio;

    var failed = false;
    var timer = setTimeout(function () {
      // 加载超时: readyState不足则判定失败
      if (!failed && audio.readyState < 3) { failed = true; fallback(i); }
    }, LOAD_TIMEOUT);

    function cleanup() { clearTimeout(timer); }

    function onEnded() {
      cleanup();
      if (stopped) return;
      playFrom(steps, i + 1, total, opts);
    }
    function onError() {
      cleanup();
      if (stopped || failed) return;
      failed = true;
      fallback(i);
    }
    function fallback(idx) {
      stopped = true;   // 中断百度链
      try { audio.pause(); } catch (e) {}
      currentAudio = null;
      if (opts.onFallback) opts.onFallback(steps.slice(idx));  // 从失败这条起系统TTS接力
    }

    audio.onended = onEnded;
    audio.onerror = onError;
    var p = audio.play();
    if (p && p.catch) p.catch(function () { onError(); });
  }

  /** 会话级可用性(speak.js 快速判断, 未探测时视为不可用走系统TTS) */
  function isOk() { return status === true; }

  window.BaiduTTS = {
    probe: probe,
    ok: isOk,
    playSequence: playSequence,
    stop: stop,
    buildUrl: buildUrl,
    speaking: function () { return !!(currentAudio && !currentAudio.paused); }
  };
})();
