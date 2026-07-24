/**
 * 音效模块 (Web Audio API) —— 零下载、程序合成
 * correct()  答对：「叮」—— 清脆高频上行双音（C6→E6 和弦感）
 * wrong()    答错：「当」—— 低沉短促下行音
 *
 * Web Audio 首次播放需要用户交互后才能创建 AudioContext（浏览器策略）
 * 所以在首次调用时延迟初始化
 */
(function () {
  'use strict';

  var audioCtx = null;
  var enabled = true;

  // 懒加载 AudioContext（必须在用户交互后调用）
  function getCtx() {
    if (!enabled) return null;
    if (audioCtx) return audioCtx;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
      // 如果处于 suspended 状态（移动端常见），尝试恢复
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    } catch (e) {
      console.warn('[SFX] AudioContext 创建失败:', e.message);
      return null;
    }
  }

  /**
   * 播放一个带包络的正弦波音调
   * @param {object} ctx   AudioContext
   * @param {number} freq  频率(Hz)
   * @param {number} start 开始时间偏移(秒)
   * @param {number} dur   持续时间(秒)
   * @param {number} peak  峰值音量 0-1
   * @param {string} type  波形 sine|triangle|square
   */
  function playTone(ctx, freq, start, dur, peak, type) {
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;

    var t0 = ctx.currentTime + start;
    // ADSR 包络：快速起音 → 缓慢衰减
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(peak, t0 + 0.008);    // 起音 8ms
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); // 衰减

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  /**
   * 答对音效：「叮」
   * 两个高频正弦波叠加（1046Hz + 1318Hz，即 C6+E6），明亮上行，像铃铛
   */
  function correct() {
    var ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    // 主音 C6(1046Hz) + 泛音 E6(1318Hz) 同时响起，持续 0.18s
    playTone(ctx, 1046.50, 0,    0.20, 0.28, 'sine');
    playTone(ctx, 1318.51, 0,    0.20, 0.18, 'sine');
    // 尾音 G6(1568Hz) 稍后加入，营造上行"叮~"的余韵
    playTone(ctx, 1567.98, 0.06, 0.22, 0.14, 'sine');
  }

  /**
   * 答错音效：「当」
   * 低频方波，200Hz，短促下行，沉闷有力，像敲击错误铃
   */
  function wrong() {
    var ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    // 低频 220Hz 主音 + 165Hz 低音叠加，方波带嗡鸣感
    playTone(ctx, 220.00, 0,    0.16, 0.30, 'square');
    playTone(ctx, 164.81, 0,    0.16, 0.20, 'square');
    // 下行尾音 110Hz，营造"当~"的下坠感
    playTone(ctx, 110.00, 0.10, 0.18, 0.22, 'triangle');
  }

  // 开关
  function setEnabled(on) { enabled = !!on; }
  function isEnabled() { return enabled; }

  window.Sfx = {
    correct: correct,
    wrong: wrong,
    setEnabled: setEnabled,
    isEnabled: isEnabled,
    supported: !!(window.AudioContext || window.webkitAudioContext)
  };
})();
