/**
 * 发音工具模块 (Web Speech API) v2
 * 功能：
 *  1. 单词/句子发音
 *  2. 朗读时同步高亮当前单词
 *  3. 支持口音选择（美式 en-US / 英式 en-GB）
 *  4. 支持性别选择（男声 male / 女声 female）
 *  5. 支持序列播报（如：单词×3 + 例句×1）
 * 零下载、零依赖，浏览器原生支持
 */
(function () {
  'use strict';

  var synth = window.speechSynthesis;
  var voicesCache = [];        // 所有可用发音人
  var currentUtter = null;
  var currentHighlightFn = null;

  // 加载所有发音人并分类缓存
  function loadVoices() {
    if (!synth) return;
    voicesCache = synth.getVoices() || [];
  }
  if (synth) {
    loadVoices();
    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoices;
  }

  /**
   * 按口音+性别挑选发音人
   * @param {string} accent  'US'(美式) 或 'GB'(英式)
   * @param {string} gender  'female'(女) 或 'male'(男)
   */
  function pickVoice(accent, gender) {
    if (!voicesCache.length) loadVoices();
    var lang = accent === 'GB' ? 'en-GB' : 'en-US';
    var langPrefix = accent === 'GB' ? 'en-GB' : 'en-US';

    // 女声常见名字关键词
    var femaleNames = ['Samantha', 'Victoria', 'Karen', 'Moira', 'Tessa', 'Fiona',
      'Serena', 'Allison', 'Ava', 'Susan', 'Zira', 'Hazel', 'Catherine',
      'Google US English', 'Google UK English Female', 'Microsoft Zira',
      'Microsoft Hazel', 'Microsoft Susan', 'Microsoft Catherine',
      'Female', 'woman', 'Martha', 'Elena', 'Helena'];
    // 男声常见名字关键词
    var maleNames = ['Alex', 'Daniel', 'Oliver', 'Arthur', 'Tom', 'David',
      'Mark', 'George', 'James', 'Microsoft David', 'Microsoft Mark',
      'Microsoft George', 'Microsoft Ravi', 'Google UK English Male',
      'Male', 'man', 'Aaron', 'Gordon'];

    var nameList = gender === 'male' ? maleNames : femaleNames;

    // 1) 先精确匹配口音 + 性别名字
    for (var i = 0; i < nameList.length; i++) {
      for (var j = 0; j < voicesCache.length; j++) {
        var v = voicesCache[j];
        if (v.lang === lang && v.name.indexOf(nameList[i]) >= 0) return v;
      }
    }
    // 2) 匹配口音前缀 + 性别名字
    for (i = 0; i < nameList.length; i++) {
      for (j = 0; j < voicesCache.length; j++) {
        v = voicesCache[j];
        if (v.lang.indexOf(langPrefix) === 0 && v.name.indexOf(nameList[i]) >= 0) return v;
      }
    }
    // 3) 只要口音对（不挑性别）
    var exactLang = voicesCache.find(function (v) { return v.lang === lang; });
    if (exactLang) return exactLang;
    var prefixLang = voicesCache.find(function (v) { return v.lang.indexOf(langPrefix) === 0; });
    if (prefixLang) return prefixLang;
    // 4) 兜底：没有指定口音的voice，用任意英语voice（保证有声音）
    var anyEn = voicesCache.find(function (v) { return v.lang.indexOf('en') === 0; });
    console.warn('[Speak] 无', lang, '发音人，降级使用', anyEn ? anyEn.lang : '无', '-', anyEn ? anyEn.name : '');
    return anyEn || null;
  }

  /** 停止所有朗读 */
  function stop() {
    if (synth && synth.speaking) synth.cancel();
    currentUtter = null;
    if (currentHighlightFn) { try { currentHighlightFn(-1); } catch (e) {} currentHighlightFn = null; }
  }

  /**
   * 朗读单个单词
   * @param {string} word
   * @param {object} opts {accent, gender, rate, onEnd}
   */
  function speakWord(word, opts) {
    if (!synth) { console.warn('浏览器不支持语音合成'); return; }
    opts = opts || {};
    stop();
    var u = new SpeechSynthesisUtterance(word);
    u.lang = opts.accent === 'GB' ? 'en-GB' : 'en-US';
    var voice = pickVoice(opts.accent || 'US', opts.gender || 'female');
    if (voice) {
      u.voice = voice;
      u.lang = voice.lang;  // 关键：用实际voice的语言，避免lang与voice不匹配导致静音
    }
    u.rate = opts.rate || 0.9;
    u.pitch = opts.gender === 'male' ? 0.9 : 1.05;  // 男声略低沉，女声略明亮
    if (opts.onEnd) u.onend = opts.onEnd;
    currentUtter = u;
    synth.speak(u);
  }

  /**
   * 朗读整句，朗读时同步高亮单词
   * @param {string} sentence
   * @param {function} onWord  高亮回调，参数为单词索引，结束回调 -1
   * @param {object} opts {accent, gender, rate, onEnd}
   */
  function speakSentence(sentence, onWord, opts) {
    if (!synth) { console.warn('浏览器不支持语音合成'); return; }
    opts = opts || {};
    stop();
    var words = sentence.replace(/[.,!?;:"']/g, ' ').split(/\s+/).filter(Boolean);

    var u = new SpeechSynthesisUtterance(sentence);
    u.lang = opts.accent === 'GB' ? 'en-GB' : 'en-US';
    var voice = pickVoice(opts.accent || 'US', opts.gender || 'female');
    if (voice) {
      u.voice = voice;
      u.lang = voice.lang;  // 关键：用实际voice的语言
    }
    u.rate = opts.rate || 0.85;
    u.pitch = opts.gender === 'male' ? 0.9 : 1.05;

    u.onboundary = function (e) {
      if (e.name && e.name !== 'word') return;
      if (typeof e.charIndex !== 'number') return;
      var prefix = sentence.slice(0, e.charIndex);
      var idx = prefix.split(/\s+/).filter(Boolean).length - 1;
      if (idx < 0) idx = 0;
      if (onWord && idx < words.length + 5) onWord(idx);
    };
    u.onend = function () {
      if (onWord) try { onWord(-1); } catch (e) {}
      if (opts.onEnd) opts.onEnd();
      currentUtter = null;
      currentHighlightFn = null;
    };
    u.onerror = function () {
      if (onWord) try { onWord(-1); } catch (e) {}
      currentUtter = null;
      currentHighlightFn = null;
    };

    currentUtter = u;
    currentHighlightFn = onWord;
    synth.speak(u);
  }

  /**
   * 序列播报：依次朗读多个片段（用于"单词×3+例句×1"）
   * @param {array} sequence  [{text, type:'word'|'sentence', repeat, gap}]
   * @param {object} opts {accent, gender, rate, onWord, onProgress, onAllEnd}
   *   - onWord(idx)        句子朗读时的高亮回调（仅对 type=sentence 有效）
   *   - onProgress(cur,total) 进度回调
   *   - onAllEnd()         全部播报结束回调
   */
  function speakSequence(sequence, opts) {
    if (!synth) { console.warn('浏览器不支持语音合成'); return; }
    opts = opts || {};
    stop();

    // 展开为单步播放列表
    var steps = [];
    sequence.forEach(function (item) {
      var repeat = item.repeat || 1;
      for (var r = 0; r < repeat; r++) {
        steps.push({ text: item.text, type: item.type, gap: item.gap || 400 });
      }
    });
    var total = steps.length;
    var i = 0;

    function playNext() {
      if (i >= total) { if (opts.onAllEnd) opts.onAllEnd(); return; }
      var step = steps[i];
      if (opts.onProgress) opts.onProgress(i + 1, total);
      var stepOpts = {
        accent: opts.accent, gender: opts.gender,
        rate: step.type === 'word' ? (opts.wordRate || 0.9) : (opts.sentenceRate || 0.85),
        onEnd: function () {
          i++;
          setTimeout(playNext, step.gap);  // 步骤间停顿
        }
      };
      if (step.type === 'sentence' && opts.onWord) {
        // 句子需要高亮
        var localOnWord = opts.onWord;
        speakSentence(step.text, function (idx) { localOnWord(idx); }, stepOpts);
      } else {
        speakWord(step.text, stepOpts);
      }
    }
    playNext();
  }

  function isSpeaking() { return !!(synth && synth.speaking); }

  /**
   * 对话/独白智能播报（按说话人标记切换男女声）
   * 解析 audio 中的 W:（女声）/ M:（男声）标记，分句播报
   * 无标记的整段统一用 defaultGender 播报
   *
   * @param {string} audio     听力原文
   * @param {object} opts      {accent, defaultGender, rate, onSegment, onEnd, onWord}
   *   - onSegment(idx, total, gender)  每段开始时的回调（用于更新UI标签）
   *   - onEnd()                        全部播报结束
   *   - onWord(idx)                    单句内单词高亮回调
   */
  function speakDialogue(audio, opts) {
    if (!synth) { console.warn('浏览器不支持语音合成'); return; }
    opts = opts || {};
    stop();

    var segments = [];
    // 解析 W:/M: 标记，拆成 {text, gender} 段
    var pattern = /\b([WM]):\s*/g;
    var hasMarkers = pattern.test(audio);
    if (hasMarkers) {
      // 重置 pattern（test 会消费 lastIndex）
      pattern.lastIndex = 0;
      var match;
      var lastIndex = 0;
      var currentGender = null;
      var currentStart = 0;
      while ((match = pattern.exec(audio)) !== null) {
        // 遇到新的说话人标记，先把之前的文本归为上一位说话人
        if (currentGender !== null && match.index > currentStart) {
          segments.push({ text: audio.slice(currentStart, match.index).trim(), gender: currentGender });
        }
        currentGender = match[1] === 'W' ? 'female' : 'male';
        currentStart = pattern.lastIndex;
      }
      // 最后一段
      if (currentGender !== null && currentStart < audio.length) {
        segments.push({ text: audio.slice(currentStart).trim(), gender: currentGender });
      }
    } else {
      // 无标记：整段用默认声（女声）
      segments.push({ text: audio, gender: opts.defaultGender || 'female' });
    }
    // 过滤空段
    segments = segments.filter(function (s) { return s.text; });
    if (segments.length === 0) { if (opts.onEnd) opts.onEnd(); return; }

    var i = 0;
    var total = segments.length;
    function playNext() {
      if (i >= total) { if (opts.onEnd) opts.onEnd(); return; }
      var seg = segments[i];
      if (opts.onSegment) opts.onSegment(i, total, seg.gender);
      var segOpts = {
        accent: opts.accent,
        gender: seg.gender,
        rate: opts.rate || 0.85,
        onEnd: function () {
          i++;
          // 段间稍作停顿，模拟对话节奏
          setTimeout(playNext, opts.segmentGap || 350);
        }
      };
      // 统一用 speakSentence 播报（支持任意长度文本，无高亮回调时传 null）
      var onWordFn = opts.onWord ? function (idx) { opts.onWord(idx); } : null;
      speakSentence(seg.text, onWordFn, segOpts);
    }
    playNext();
  }


  /** 获取可用发音人数量（调试用） */
  function getVoicesInfo() {
    return {
      total: voicesCache.length,
      usFemale: voicesCache.filter(function (v) { return v.lang === 'en-US'; }).length,
      gbFemale: voicesCache.filter(function (v) { return v.lang === 'en-GB'; }).length
    };
  }

  // 暴露
  window.Speak = {
    word: speakWord,
    sentence: speakSentence,
    sequence: speakSequence,
    dialogue: speakDialogue,
    stop: stop,
    speaking: isSpeaking,
    supported: !!synth,
    voicesInfo: getVoicesInfo,
    pickVoice: pickVoice  // 暴露供测试
  };
})();
