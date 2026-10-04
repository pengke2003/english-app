/**
 * 发音工具模块 v3
 * 引擎策略:
 *  1. 百度TTS(baidu-tts.js) 为主引擎: 全平台统一音质, 根治 Android/华为 系统TTS质量差问题
 *  2. 系统 speechSynthesis 为兜底: 百度探测失败/网络中断/离线时自动接力, iPhone上本就是高质量
 * 功能:
 *  1. 单词/句子发音  2. 序列播报(单词×3+例句)  3. 对话男女声(W:/M:)
 *  4. 口音选择(US/GB): 百度只有单一音色, 系统TTS兜底时仍支持
 *  5. 系统TTS模式下保留逐词高亮(onboundary); 百度模式下高亮在整句播完后清除
 */
(function () {
  'use strict';

  var synth = window.speechSynthesis;
  var voicesCache = [];

  function loadVoices() {
    if (!synth) return;
    voicesCache = synth.getVoices() || [];
  }
  if (synth) {
    loadVoices();
    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoices;
  }

  // ============ 系统 TTS (兜底引擎) ============

  function pickVoice(accent, gender) {
    if (synth) {
      var freshVoices = synth.getVoices();
      if (freshVoices && freshVoices.length > 0) voicesCache = freshVoices;
    }
    if (!voicesCache.length) loadVoices();
    var lang = accent === 'GB' ? 'en-GB' : 'en-US';
    var langPrefix = lang;
    var femaleNames = ['Samantha', 'Victoria', 'Karen', 'Moira', 'Tessa', 'Fiona',
      'Serena', 'Allison', 'Ava', 'Susan', 'Zira', 'Hazel', 'Catherine',
      'Microsoft Zira', 'Microsoft Hazel', 'Microsoft Susan', 'Microsoft Catherine',
      'Google UK English Female', 'Google US English', 'Female', 'woman', 'Martha', 'Elena', 'Helena'];
    var maleNames = ['Alex', 'Daniel', 'Oliver', 'Arthur', 'Tom', 'David',
      'Mark', 'George', 'James', 'Microsoft David', 'Microsoft Mark',
      'Microsoft George', 'Microsoft Ravi', 'Google UK English Male', 'Male', 'man', 'Aaron', 'Gordon'];
    var nameList = gender === 'male' ? maleNames : femaleNames;
    var i, j, v;
    for (i = 0; i < nameList.length; i++) {
      for (j = 0; j < voicesCache.length; j++) {
        v = voicesCache[j];
        if (v.lang === lang && v.name.indexOf(nameList[i]) >= 0) return v;
      }
    }
    for (i = 0; i < nameList.length; i++) {
      for (j = 0; j < voicesCache.length; j++) {
        v = voicesCache[j];
        if (v.lang.indexOf(langPrefix) === 0 && v.name.indexOf(nameList[i]) >= 0) return v;
      }
    }
    var fallback = voicesCache.find(function (v) { return v.lang === lang; });
    if (fallback && fallback.name && fallback.name.indexOf('Google') >= 0) {
      var localAlt = voicesCache.find(function (v) {
        return v.lang === lang && v.name.indexOf('Google') < 0;
      });
      if (localAlt) fallback = localAlt;
    }
    if (!fallback) fallback = voicesCache.find(function (v) { return v.lang.indexOf(langPrefix) === 0; });
    if (!fallback || (fallback.name && fallback.name.indexOf('Google') >= 0 && accent === 'GB')) {
      var usLocal = voicesCache.find(function (v) {
        return v.lang === 'en-US' && v.name.indexOf('Google') < 0 && v.name.indexOf(gender === 'male' ? 'David' : 'Zira') >= 0;
      }) || voicesCache.find(function (v) { return v.lang === 'en-US' && v.name.indexOf('Google') < 0; });
      if (usLocal) fallback = usLocal;
    }
    if (!fallback) fallback = voicesCache.find(function (v) { return v.lang === 'en-US'; })
                 || voicesCache.find(function (v) { return v.lang.indexOf('en') === 0; });
    return fallback;
  }

  var currentHighlightFn = null;

  function sysStop() {
    if (synth && synth.speaking) synth.cancel();
    if (currentHighlightFn) { try { currentHighlightFn(-1); } catch (e) {} currentHighlightFn = null; }
  }

  function sysSpeakWord(word, opts) {
    if (!synth) return;
    opts = opts || {};
    var u = new SpeechSynthesisUtterance(word);
    var voice = pickVoice(opts.accent || 'US', opts.gender || 'female');
    u.lang = voice ? voice.lang : (opts.accent === 'GB' ? 'en-GB' : 'en-US');
    if (voice) u.voice = voice;
    u.rate = opts.rate || 0.9;
    u.pitch = opts.gender === 'male' ? 0.9 : 1.05;
    if (opts.onEnd) u.onend = opts.onEnd;
    synth.speak(u);
  }

  function sysSpeakSentence(sentence, onWord, opts) {
    if (!synth) { if (opts && opts.onEnd) opts.onEnd(); return; }
    opts = opts || {};
    var words = sentence.replace(/[.,!?;:"']/g, ' ').split(/\s+/).filter(Boolean);
    var u = new SpeechSynthesisUtterance(sentence);
    var voice = pickVoice(opts.accent || 'US', opts.gender || 'female');
    u.lang = voice ? voice.lang : (opts.accent === 'GB' ? 'en-GB' : 'en-US');
    if (voice) u.voice = voice;
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
      currentHighlightFn = null;
    };
    u.onerror = function () {
      if (onWord) try { onWord(-1); } catch (e) {}
      currentHighlightFn = null;
      if (opts.onEnd) opts.onEnd();
    };
    currentHighlightFn = onWord;
    synth.speak(u);
  }

  // ============ 引擎分流与序列播放 ============

  function baiduOk() {
    return !!(window.BaiduTTS && window.BaiduTTS.ok());
  }

  /** 停止全部引擎 */
  function stop() {
    if (window.BaiduTTS) window.BaiduTTS.stop();
    sysStop();
  }

  /** 超长文本按句切分(百度单次建议<=250字符) */
  function splitLongText(text, maxLen) {
    maxLen = maxLen || 250;
    if (text.length <= maxLen) return [text];
    var parts = [];
    var sentences = text.match(/[^.!?]+[.!?]*/g) || [text];
    var buf = '';
    for (var i = 0; i < sentences.length; i++) {
      if ((buf + sentences[i]).length > maxLen && buf) {
        parts.push(buf.trim());
        buf = '';
      }
      buf += sentences[i];
    }
    if (buf.trim()) parts.push(buf.trim());
    return parts.length ? parts : [text];
  }

  /** 语速映射: 相对语率(0.82~0.95) → 百度spd(0-15, 5为正常) */
  function rateToSpd(rate) {
    if (rate >= 0.93) return 4;
    if (rate >= 0.85) return 3;
    return 2;
  }

  /**
   * 序列播报主入口(自动分流百度/系统)
   * sequence: [{text, type:'word'|'sentence'|'dialog', repeat, gap, gender}]
   * opts: {accent, gender, wordRate, sentenceRate, onWord, onProgress, onAllEnd, onSegment}
   */
  function speakSequence(sequence, opts) {
    opts = opts || {};
    stop();

    // 展开 repeat 并拆分超长句
    var steps = [];
    sequence.forEach(function (item) {
      var repeat = item.repeat || 1;
      var pieces = splitLongText(item.text);
      for (var r = 0; r < repeat; r++) {
        pieces.forEach(function (p, pi) {
          steps.push({
            text: p,
            type: item.type || 'sentence',
            gender: item.gender || opts.gender || 'female',
            gap: (pi === pieces.length - 1) ? (item.gap || 400) : 120,  // 切分段间隙小
            lastPiece: pi === pieces.length - 1,
            segIdx: item.segIdx,
            segTotal: item.segTotal
          });
        });
      }
    });
    if (steps.length === 0) { if (opts.onAllEnd) opts.onAllEnd(); return; }

    var total = steps.length;

    // ---- 百度引擎 ----
    function baiduPlay() {
      var bSteps = steps.map(function (s) {
        var rate = s.type === 'word' ? (opts.wordRate || 0.9) : (opts.sentenceRate || 0.85);
        return {
          text: s.text,
          spd: rateToSpd(rate),
          // 对话男声段: 降调模拟 (仅对dialog类型生效, 且最后一段切分片才恢复语速间隙)
          pitchRate: (s.type === 'dialog' && s.gender === 'male') ? 0.85 : 1,
          gap: s.gap
        };
      });
      window.BaiduTTS.playSequence(bSteps, {
        onProgress: function (cur, t) { if (opts.onProgress) opts.onProgress(cur, t); },
        onSegmentStart: function (idx, step) {
          // 对话段开始回调(供UI更新 W:/M: 标签); 非切分末段不重复回调
          if (opts.onSegment && steps[idx] && steps[idx].segIdx !== undefined && steps[idx].lastPiece) {
            opts.onSegment(steps[idx].segIdx, steps[idx].segTotal, steps[idx].gender);
          }
        },
        onAllEnd: function () {
          if (opts.onWord) try { opts.onWord(-1); } catch (e) {}
          if (opts.onAllEnd) opts.onAllEnd();
        },
        onFallback: function (remaining) {
          // 网络失败: 系统TTS接力剩余步骤
          sysPlaySteps(remaining.map(function (s) { return s.sysStep || s; }), opts);
        }
      });
    }

    // ---- 系统引擎序列 ----
    function sysPlaySteps(sysSteps, o) {
      var i = 0;
      function playNext() {
        if (i >= sysSteps.length) { if (o.onAllEnd) o.onAllEnd(); return; }
        var step = sysSteps[i];
        if (o.onProgress) o.onProgress(i + 1, sysSteps.length);
        if (o.onSegment && step.segIdx !== undefined && step.lastPiece) {
          o.onSegment(step.segIdx, step.segTotal, step.gender);
        }
        var stepOpts = {
          accent: o.accent, gender: step.gender,
          rate: step.type === 'word' ? (o.wordRate || 0.9) : (o.sentenceRate || 0.85),
          onEnd: function () { i++; setTimeout(playNext, step.gap || 400); }
        };
        if (step.type !== 'word' && o.onWord) {
          sysSpeakSentence(step.text, function (idx) { o.onWord(idx); }, stepOpts);
        } else {
          sysSpeakWord(step.text, stepOpts);
        }
      }
      playNext();
    }

    if (window.BaiduTTS) {
      // 为对话段附加段号信息并落到 sysStep 备份
      steps.forEach(function (s) { s.sysStep = s; });
      baiduPlay();
    } else {
      sysPlaySteps(steps, opts);
    }
  }

  /** 朗读单个单词(入口分流) */
  function speakWord(word, opts) {
    opts = opts || {};
    stop();
    if (window.BaiduTTS) {
      speakSequence([{ text: word, type: 'word', repeat: 1, gap: 0 }], {
        accent: opts.accent, gender: opts.gender, wordRate: opts.rate || 0.9,
        onEnd: opts.onEnd, onAllEnd: opts.onEnd
      });
      return;
    }
    sysSpeakWord(word, opts);
  }

  /** 朗读整句(入口分流) */
  function speakSentence(sentence, onWord, opts) {
    opts = opts || {};
    stop();
    if (window.BaiduTTS) {
      speakSequence([{ text: sentence, type: 'sentence', repeat: 1, gap: 0 }], {
        accent: opts.accent, gender: opts.gender, sentenceRate: opts.rate || 0.85,
        onWord: onWord, onAllEnd: opts.onEnd
      });
      return;
    }
    sysSpeakSentence(sentence, onWord, opts);
  }

  function isSpeaking() {
    if (window.BaiduTTS && window.BaiduTTS.speaking()) return true;
    return !!(synth && synth.speaking);
  }

  /**
   * 对话播报: 解析 W:/M: 标记 → 女声/男声(百度用降调区分)
   */
  function speakDialogue(audio, opts) {
    opts = opts || {};
    stop();

    var segments = [];
    var pattern = /\b([WM]):\s*/g;
    var hasMarkers = pattern.test(audio);
    if (hasMarkers) {
      pattern.lastIndex = 0;
      var match, lastIndex = 0, currentGender = null, currentStart = 0;
      while ((match = pattern.exec(audio)) !== null) {
        if (currentGender !== null && match.index > currentStart) {
          segments.push({ text: audio.slice(currentStart, match.index).trim(), gender: currentGender });
        }
        currentGender = match[1] === 'W' ? 'female' : 'male';
        currentStart = pattern.lastIndex;
      }
      if (currentGender !== null && currentStart < audio.length) {
        segments.push({ text: audio.slice(currentStart).trim(), gender: currentGender });
      }
    } else {
      segments.push({ text: audio, gender: opts.defaultGender || 'female' });
    }
    segments = segments.filter(function (s) { return s.text; });
    if (segments.length === 0) { if (opts.onEnd) opts.onEnd(); return; }

    // 构建 sequence, 附加段号供 onSegment 回调
    var seq = segments.map(function (s, idx) {
      return { text: s.text, type: 'dialog', gender: s.gender, repeat: 1, gap: opts.segmentGap || 350, segIdx: idx, segTotal: segments.length };
    });

    speakSequence(seq, {
      accent: opts.accent,
      sentenceRate: opts.rate || 0.85,
      onSegment: opts.onSegment,
      onWord: opts.onWord,
      onAllEnd: opts.onEnd
    });
  }

  function getVoicesInfo() {
    return {
      total: voicesCache.length,
      usFemale: voicesCache.filter(function (v) { return v.lang === 'en-US'; }).length,
      gbFemale: voicesCache.filter(function (v) { return v.lang === 'en-GB'; }).length,
      engine: baiduOk() ? 'baidu' : 'system'
    };
  }

  window.Speak = {
    word: speakWord,
    sentence: speakSentence,
    sequence: speakSequence,
    dialogue: speakDialogue,
    stop: stop,
    speaking: isSpeaking,
    supported: !!(synth || window.BaiduTTS),
    voicesInfo: getVoicesInfo,
    pickVoice: pickVoice
  };
})();
