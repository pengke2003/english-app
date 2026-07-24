/**
 * 初中英语辅导 H5 应用主逻辑
 * 功能：单词记忆、语法记忆、单词挑战、语法挑战、真题测试
 */
(function () {
  'use strict';

  // ============ 数据合并 ============
  // 把紧凑格式的 WORDS_EXTRA 合并到完整词库，自动补全字段
  var ALL_WORDS = WORDS_CORE.slice();
  WORDS_EXTRA.forEach(function (item) {
    ALL_WORDS.push({
      en: item[0],
      phonetic: '/' + item[0] + '/',
      pos: '',
      cn: item[1],
      example: 'Learn the word: ' + item[0] + '.',
      grade: item[2]
    });
  });

  // ============ 全局状态 ============
  var state = {
    currentPage: 'home',
    // 单词记忆
    wmGrade: 'all',
    wmList: [],
    wmIndex: 0,
    // 单词挑战
    wc: {
      grade: '7', count: 50, queue: [], current: 0,
      wrong: [], totalAnswered: 0, correctCount: 0, round: 1, originalCount: 0
    },
    // 语法挑战
    gc: {
      grade: '7', count: 20, queue: [], current: 0,
      correctCount: 0, answered: false
    },
    // 真题测试
    exam: {
      started: false, finished: false,
      wordQuestions: [], grammarQuestions: [],
      currentSection: 'word', timeLeft: 3600, timerId: null,
      answers: {}
    },
    // 听力测验
    listening: {
      scope: 'all',          // all / 7 / 8 / 9
      accent: 'US',          // US(美式) / GB(英式)
      questions: [],          // 本次试卷题目
      current: 0,             // 当前题号
      answers: {},            // 用户答案
      started: false,
      finished: false
    }
  };

  // ============ 工具函数 ============
  function $(id) { return document.getElementById(id); }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr, n) { return shuffle(arr).slice(0, n); }

  // 持久化（历史成绩）
  var STORAGE_KEY = 'english_app_scores';
  function loadScores() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function saveScore(score) {
    var list = loadScores();
    list.unshift(score);
    if (list.length > 20) list = list.slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  // ============ 页面路由 ============
  window.showPage = function (name) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].classList.remove('active');
      pages[i].style.display = '';  // 清除inline style，让CSS class接管显示控制
    }
    var target = $(name + '-page') || $(name === 'home' ? 'home-page' : '');
    if (target) target.classList.add('active');
    state.currentPage = name;
    window.scrollTo(0, 0);

    // 进入页面时初始化
    if (name === 'word-memorize') initWordMemorize();
    if (name === 'grammar-memorize') initGrammarMemorize();
    if (name === 'exam-test') renderScoreHistory();
    if (name === 'listening-test') initListeningPage();
  };

  // ============ 单词记忆 ============
  function getWordsByGrade(grade) {
    if (grade === 'all') return ALL_WORDS.slice();
    return ALL_WORDS.filter(function (w) { return w.grade === parseInt(grade); });
  }

  window.selectWordGrade = function (grade) {
    state.wmGrade = grade;
    var tabs = document.querySelectorAll('#word-memorize-page .grade-tab');
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
    event.target.classList.add('active');
    state.wmIndex = 0;
    state.wmList = shuffle(getWordsByGrade(grade));
    renderWordCard();
  };

  function initWordMemorize() {
    if (state.wmList.length === 0) {
      state.wmList = shuffle(getWordsByGrade(state.wmGrade));
    }
    renderWordCard();
  }

  function renderWordCard() {
    if (state.wmList.length === 0) return;
    var w = state.wmList[state.wmIndex];
    $('word-en').textContent = w.en;
    $('word-phonetic').textContent = w.phonetic || '';
    $('word-meaning').textContent = w.cn;
    $('word-pos').textContent = w.pos || '';
    $('word-example').textContent = w.example || '';
    $('word-progress').textContent = (state.wmIndex + 1) + ' / ' + state.wmList.length;
    // 自动播报：单词中速×3 + 例句×1
    autoPlayWord(w);
  }

  /**
   * 自动播报：单词中速播报3次，再播报例句1次
   */
  function autoPlayWord(w) {
    if (!window.Speak || !window.Speak.sequence) return;
    var indicator = $('auto-play-indicator');
    if (indicator) indicator.classList.add('playing');
    window.Speak.sequence([
      { text: w.en, type: 'word', repeat: 3, gap: 300 },
      { text: w.example || '', type: 'sentence', repeat: 1, gap: 500 }
    ], {
      accent: 'US', gender: 'female',
      wordRate: 0.95,       // 单词中速
      sentenceRate: 0.82,   // 例句稍慢
      onProgress: function (cur, total) {
        if (indicator) {
          var dots = indicator.querySelectorAll('.play-dot');
          for (var i = 0; i < dots.length; i++) {
            dots[i].classList.toggle('active', i < cur);
          }
        }
      },
      onWord: function (idx) {
        // 例句朗读时高亮单词
        if (idx < 0) { $('word-example').textContent = w.example; return; }
        var words = (w.example || '').split(/\s+/);
        var html = words.map(function (wd, i) {
          return i === idx ? '<span class="hl-word">' + wd + '</span>' : wd;
        }).join(' ');
        $('word-example').innerHTML = html;
      },
      onAllEnd: function () {
        if (indicator) indicator.classList.remove('playing');
      }
    });
  }

  // 重听单词（手动按钮）
  window.speakCurrentWord = function (e) {
    if (e) e.stopPropagation();
    var w = state.wmList[state.wmIndex];
    if (w && window.Speak) window.Speak.word(w.en, { accent: 'US', gender: 'female', rate: 0.95 });
  };
  // 重听例句（手动按钮）
  window.speakCurrentExample = function (e) {
    if (e) e.stopPropagation();
    var w = state.wmList[state.wmIndex];
    if (!w || !w.example || !window.Speak) return;
    var el = $('word-example');
    var words = w.example.split(/\s+/);
    window.Speak.sentence(w.example, function (idx) {
      if (idx < 0) { el.textContent = w.example; return; }
      var html = words.map(function (wd, i) {
        return i === idx ? '<span class="hl-word">' + wd + '</span>' : wd;
      }).join(' ');
      el.innerHTML = html;
    }, { accent: 'US', gender: 'female', rate: 0.82 });
  };

  window.prevWord = function () {
    if (window.Speak) window.Speak.stop();
    if (state.wmIndex > 0) { state.wmIndex--; renderWordCard(); }
  };
  window.nextWord = function () {
    if (window.Speak) window.Speak.stop();
    if (state.wmIndex < state.wmList.length - 1) { state.wmIndex++; renderWordCard(); }
    else { state.wmList = state.wmList.concat(shuffle(getWordsByGrade(state.wmGrade))); state.wmIndex++; renderWordCard(); }
  };

  // ============ 语法记忆 ============
  window.selectGrammarGrade = function (grade, evt) {
    var tabs = document.querySelectorAll('#grammar-memorize-page .grade-tab');
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
    var e = evt || window.event;
    if (e && e.target) e.target.classList.add('active');
    if (grade === 'all') {
      // 全部：显示语法点列表
      $('grammar-list').classList.remove('hidden');
      $('dialogue-zone').classList.add('hidden');
      renderGrammarList(null);
    } else {
      // 七/八/九年级：显示情景对话（保留语法点列表在上方）
      $('grammar-list').classList.remove('hidden');
      $('dialogue-zone').classList.remove('hidden');
      renderGrammarList(parseInt(grade));
      renderDialogueGrid(grade);
      // 关闭可能正在播放的对话
      if ($('dialogue-player')) $('dialogue-player').classList.add('hidden');
    }
  };

  function initGrammarMemorize() { renderGrammarList(null); }

  function renderGrammarList(grade) {
    var list = GRAMMAR.filter(function (g) { return !grade || g.grade === grade; });
    var html = '';
    list.forEach(function (g, idx) {
      var pointsHtml = g.points.map(function (p) { return '<li>' + p + '</li>'; }).join('');
      var exHtml = g.examples.map(function (e) { return '<div class="ex-item">✦ ' + e + '</div>'; }).join('');
      html +=
        '<div class="grammar-card">' +
          '<div class="grammar-title" onclick="toggleGrammar(this)"> ' +
            '<span class="grade-tag g' + g.grade + '">G' + g.grade + '</span>' +
            '<span class="g-name">' + g.title + '</span>' +
            '<span class="arrow">▾</span>' +
          '</div>' +
          '<div class="grammar-body">' +
            '<p class="g-summary">' + g.summary + '</p>' +
            '<h4>📋 要点</h4><ul class="g-points">' + pointsHtml + '</ul>' +
            '<h4>💬 例句</h4><div class="g-examples">' + exHtml + '</div>' +
          '</div>' +
        '</div>';
    });
    $('grammar-list').innerHTML = html;
  }

  window.toggleGrammar = function (el) {
    var body = el.nextElementSibling;
    body.classList.toggle('open');
    el.classList.toggle('expanded');
  };

  // ============ 发音功能（补充）============
  // 单词挑战 - 听单词发音（拼写前）
  window.speakChallengeWord = function (e) {
    if (e) { e.stopPropagation(); }
    var w = state.wc.queue[state.wc.current];
    if (w && window.Speak) window.Speak.word(w.en, { accent: 'US', gender: 'female', rate: 0.85 });
  };

  // ============ 情景对话 ============
  function getDialoguesByGrade(grade) {
    return DIALOGUES.filter(function (d) { return d.grade === parseInt(grade); });
  }

  // 渲染对话主题列表（双列卡片）
  function renderDialogueGrid(grade) {
    var list = getDialoguesByGrade(grade);
    if (list.length === 0) {
      $('dialogue-grid').innerHTML = '<p class="no-record">暂无对话</p>';
      return;
    }
    var html = '';
    list.forEach(function (d) {
      html +=
        '<div class="dlg-card" style="background:' + d.gradient + '" onclick="openDialogue(\'' + d.id + '\')">' +
          '<div class="dlg-emoji">' + d.emoji + '</div>' +
          '<div class="dlg-title">' + d.title + '</div>' +
          '<div class="dlg-meta">' + d.rounds.length + ' 轮对话</div>' +
        '</div>';
    });
    $('dialogue-grid').innerHTML = html;
  }

  // 打开某个对话进行播放
  window.openDialogue = function (id) {
    var d = DIALOGUES.find(function (x) { return x.id === id; });
    if (!d) return;
    var html =
      '<div class="dlg-header">' +
        '<button class="dlg-close" onclick="closeDialogue()">✕</button>' +
        '<div class="dlg-h-emoji">' + d.emoji + '</div>' +
        '<h3>' + d.title + '</h3>' +
      '</div>' +
      '<div class="dlg-rounds" id="dlg-rounds"></div>' +
      '<div class="dlg-controls">' +
        '<button class="pron-btn big" onclick="playDialogue(\'' + d.id + '\')">▶️ 整段对话（美式发音）</button>' +
        '<button class="pron-btn small-stop" onclick="Speak.stop()">⏹ 停止</button>' +
      '</div>';
    $('dialogue-player').innerHTML = html;
    $('dialogue-player').classList.remove('hidden');
    // 渲染对话轮次
    var roundsHtml = '';
    d.rounds.forEach(function (r, i) {
      var side = r.speaker === 'A' ? 'left' : 'right';
      var words = r.en.split(/\s+/);
      var wordSpans = words.map(function (w, j) {
        return '<span class="dw" data-r="' + i + '" data-w="' + j + '">' + w + '</span>';
      }).join(' ');
      roundsHtml +=
        '<div class="dlg-round ' + side + '">' +
          '<div class="speaker">' + r.speaker + '</div>' +
          '<div class="bubble" id="bubble-' + i + '">' + wordSpans + '</div>' +
          '<div class="cn">' + r.cn + '</div>' +
          '<button class="pron-btn tiny" onclick="playOneRound(' + i + ',\'' + d.id + '\')">🔊</button>' +
        '</div>';
    });
    $('dlg-rounds').innerHTML = roundsHtml;
    $('dialogue-player').scrollIntoView({ behavior: 'smooth' });
  };

  window.closeDialogue = function () {
    if (window.Speak) window.Speak.stop();
    $('dialogue-player').classList.add('hidden');
    $('dialogue-player').innerHTML = '';
  };

  // 高亮某轮对话的第 wordIdx 个单词
  function highlightWord(roundIdx, wordIdx) {
    var bubble = $('bubble-' + roundIdx);
    if (!bubble) return;
    var spans = bubble.querySelectorAll('.dw');
    for (var i = 0; i < spans.length; i++) {
      if (i === wordIdx) spans[i].classList.add('active');
      else spans[i].classList.remove('active');
    }
  }
  function clearHighlight(roundIdx) {
    var bubble = $('bubble-' + roundIdx);
    if (!bubble) return;
    var spans = bubble.querySelectorAll('.dw');
    for (var i = 0; i < spans.length; i++) spans[i].classList.remove('active');
  }

  // 播放整段对话（按顺序朗读每轮，同步高亮）
  window.playDialogue = function (id) {
    var d = DIALOGUES.find(function (x) { return x.id === id; });
    if (!d || !window.Speak) return;
    window.Speak.stop();
    // 顺序播放队列
    var queue = d.rounds.slice();
    var roundIdx = 0;
    function next() {
      if (queue.length === 0) { clearAllHighlight(d); return; }
      var r = queue.shift();
      var curIdx = roundIdx++;
      var words = r.en.split(/\s+/);
      // 清除之前的高亮
      for (var k = 0; k < d.rounds.length; k++) clearHighlight(k);
      window.Speak.sentence(r.en, function (idx) {
        if (idx < 0) {
          clearHighlight(curIdx);
          setTimeout(next, 350); // 轮次间停顿
        } else {
          highlightWord(curIdx, idx);
        }
      });
    }
    next();
  };

  function clearAllHighlight(d) {
    for (var i = 0; i < d.rounds.length; i++) clearHighlight(i);
  }

  // 播放单轮对话
  window.playOneRound = function (roundIdx, id) {
    var d = DIALOGUES.find(function (x) { return x.id === id; });
    if (!d || !window.Speak) return;
    window.Speak.stop();
    for (var k = 0; k < d.rounds.length; k++) clearHighlight(k);
    var r = d.rounds[roundIdx];
    window.Speak.sentence(r.en, function (idx) {
      if (idx < 0) clearHighlight(roundIdx);
      else highlightWord(roundIdx, idx);
    });
  };

  // ============ 单词挑战 ============
  window.selectWcGrade = function (btn, grade) {
    state.wc.grade = grade;
    var sib = btn.parentNode.children;
    for (var i = 0; i < sib.length; i++) sib[i].classList.remove('active');
    btn.classList.add('active');
  };
  window.selectWcCount = function (btn, count) {
    state.wc.count = count;
    var sib = btn.parentNode.children;
    for (var i = 0; i < sib.length; i++) sib[i].classList.remove('active');
    btn.classList.add('active');
  };

  window.startWordChallenge = function () {
    var pool = getWordsByGrade(state.wc.grade);
    if (pool.length === 0) { alert('该年级暂无词汇！'); return; }
    var n = Math.min(state.wc.count, pool.length);
    state.wc.queue = pick(pool, n);
    state.wc.originalCount = n;
    state.wc.current = 0;
    state.wc.wrong = [];
    state.wc.totalAnswered = 0;
    state.wc.correctCount = 0;
    state.wc.round = 1;
    $('wc-config').classList.add('hidden');
    $('wc-area').classList.remove('hidden');
    $('wc-result').classList.add('hidden');
    $('wc-title').textContent = '单词挑战 · 第 1 轮';
    renderWcQuestion();
  };

  function renderWcQuestion() {
    if (state.wc.current >= state.wc.queue.length) {
      finishWcRound();
      return;
    }
    var w = state.wc.queue[state.wc.current];
    $('wc-question').textContent = w.cn;
    $('wc-meaning').textContent = (w.pos ? '[' + w.pos + '] ' : '') + (w.phonetic || '');
    $('wc-input').value = '';
    $('wc-input').focus();
    var total = state.wc.queue.length;
    $('wc-progress-fill').style.width = (state.wc.current / total * 100) + '%';
    $('wc-progress-text').textContent = (state.wc.current + 1) + ' / ' + total +
      ' （第' + state.wc.round + '轮 · 已对' + state.wc.correctCount + '）';
  }

  window.checkWordAnswer = function () {
    var w = state.wc.queue[state.wc.current];
    var input = $('wc-input').value.trim().toLowerCase();
    if (!input) { alert('请输入单词！'); return; }
    state.wc.totalAnswered++;
    if (input === w.en.toLowerCase()) {
      state.wc.correctCount++;
      if (window.Sfx) window.Sfx.correct();   // 答对：「叮」
      flashFeedback(true, '✓ 正确！' + w.en + ' = ' + w.cn);
    } else {
      state.wc.wrong.push(w);
      if (window.Sfx) window.Sfx.wrong();     // 答错：「当」
      flashFeedback(false, '✗ 正确答案：' + w.en + '（' + w.cn + '）');
    }
    state.wc.current++;
    setTimeout(renderWcQuestion, 900);
  };

  window.skipWordQuestion = function () {
    var w = state.wc.queue[state.wc.current];
    state.wc.wrong.push(w);
    state.wc.current++;
    renderWcQuestion();
  };

  function flashFeedback(ok, msg) {
    var card = document.querySelector('#wc-area .question-card');
    var old = $('wc-feedback');
    if (old) old.remove();
    var div = document.createElement('div');
    div.id = 'wc-feedback';
    div.className = 'feedback ' + (ok ? 'ok' : 'no');
    div.textContent = msg;
    card.appendChild(div);
  }

  function finishWcRound() {
    if (state.wc.wrong.length === 0) {
      // 全部通过！
      var html =
        '<div class="result-success">' +
          '<div class="big-emoji">🎉</div>' +
          '<h3>挑战完成！100% 通过</h3>' +
          '<p>共答题 ' + state.wc.totalAnswered + ' 道，全部正确！</p>' +
          '<p>经历 ' + state.wc.round + ' 轮重考，最终通关。</p>' +
          '<button class="start-btn" onclick="resetWc()">再来一次</button>' +
        '</div>';
      $('wc-area').classList.add('hidden');
      $('wc-result').innerHTML = html;
      $('wc-result').classList.remove('hidden');
      $('wc-title').textContent = '单词挑战';
      return;
    }
    // 错题进入下一轮重考
    state.wc.round++;
    state.wc.queue = state.wc.wrong.slice();
    state.wc.wrong = [];
    state.wc.current = 0;
    $('wc-title').textContent = '单词挑战 · 第 ' + state.wc.round + ' 轮（错题重考）';
    renderWcQuestion();
  }

  window.resetWc = function () {
    $('wc-config').classList.remove('hidden');
    $('wc-area').classList.add('hidden');
    $('wc-result').classList.add('hidden');
    $('wc-title').textContent = '单词挑战';
  };

  window.exitChallenge = function (type) {
    try { if (type === 'word' && window.resetWc) resetWc(); } catch (e) {}
    try { if (type === 'grammar' && window.resetGc) resetGc(); } catch (e) {}
    window.showPage('home');
  };

  // 回车提交
  document.addEventListener('DOMContentLoaded', function () {
    var input = $('wc-input');
    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); checkWordAnswer(); }
      });
    }
  });

  // ============ 语法挑战 ============
  window.selectGcGrade = function (btn, grade) {
    state.gc.grade = grade;
    var sib = btn.parentNode.children;
    for (var i = 0; i < sib.length; i++) sib[i].classList.remove('active');
    btn.classList.add('active');
  };
  window.selectGcCount = function (btn, count) {
    state.gc.count = count;
    var sib = btn.parentNode.children;
    for (var i = 0; i < sib.length; i++) sib[i].classList.remove('active');
    btn.classList.add('active');
  };

  window.startGrammarChallenge = function () {
    var pool = GRAMMAR_QUIZ.filter(function (q) {
      return state.gc.grade === 'all' || q.grade === parseInt(state.gc.grade);
    });
    if (pool.length === 0) { alert('该年级暂无题目！'); return; }
    var n = Math.min(state.gc.count, pool.length);
    state.gc.queue = pick(pool, n);
    state.gc.current = 0;
    state.gc.correctCount = 0;
    state.gc.answered = false;
    $('gc-config').classList.add('hidden');
    $('gc-area').classList.remove('hidden');
    $('gc-result').classList.add('hidden');
    renderGcQuestion();
  };

  function renderGcQuestion() {
    if (state.gc.current >= state.gc.queue.length) { finishGc(); return; }
    var q = state.gc.queue[state.gc.current];
    $('gc-question').textContent = q.q;
    var optsHtml = '';
    q.options.forEach(function (opt, i) {
      optsHtml += '<button class="option-btn" data-idx="' + i + '" onclick="answerGc(' + i + ')">' +
        '<span class="opt-letter">' + String.fromCharCode(65 + i) + '</span>' + opt + '</button>';
    });
    $('gc-options').innerHTML = optsHtml;
    state.gc.answered = false;
    var total = state.gc.queue.length;
    $('gc-progress-fill').style.width = (state.gc.current / total * 100) + '%';
    $('gc-progress-text').textContent = (state.gc.current + 1) + ' / ' + total +
      ' · 已对 ' + state.gc.correctCount;
  }

  window.answerGc = function (idx) {
    if (state.gc.answered) return;
    state.gc.answered = true;
    var q = state.gc.queue[state.gc.current];
    var btns = document.querySelectorAll('#gc-options .option-btn');
    btns.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.answer) b.classList.add('correct');
      else if (i === idx) b.classList.add('wrong');
    });
    if (idx === q.answer) state.gc.correctCount++;
    // 显示解析
    var exp = document.createElement('div');
    exp.className = 'explain-box';
    exp.innerHTML = '<strong>💡 解析：</strong>' + q.explain;
    $('gc-options').appendChild(exp);
    state.gc.current++;
    setTimeout(renderGcQuestion, 1600);
  };

  function finishGc() {
    var total = state.gc.queue.length;
    var correct = state.gc.correctCount;
    var rate = Math.round(correct / total * 100);
    var emoji = rate >= 90 ? '🌟' : rate >= 60 ? '👍' : '💪';
    var html =
      '<div class="result-success">' +
        '<div class="big-emoji">' + emoji + '</div>' +
        '<h3>语法挑战完成</h3>' +
        '<p>共 ' + total + ' 题，答对 <strong>' + correct + '</strong> 题，正确率 <strong>' + rate + '%</strong></p>' +
        '<button class="start-btn" onclick="resetGc()">再来一次</button>' +
      '</div>';
    $('gc-area').classList.add('hidden');
    $('gc-result').innerHTML = html;
    $('gc-result').classList.remove('hidden');
  }

  window.resetGc = function () {
    $('gc-config').classList.remove('hidden');
    $('gc-area').classList.add('hidden');
    $('gc-result').classList.add('hidden');
  };

  // ============ 真题测试 ============
  window.startExam = function () {
    // 生成试题：单词35题(每题2分) + 语法15题(每题2分) = 100分
    var wordPool = ALL_WORDS.slice();
    var grammarPool = GRAMMAR_QUIZ.slice();

    state.exam.wordQuestions = [];
    // 35道单词题：给中文拼写英文（简化为选择正确英文）
    var wSample = pick(wordPool, 35);
    wSample.forEach(function (w, i) {
      var distractors = pick(wordPool.filter(function (x) { return x.en !== w.en; }), 3).map(function (x) { return x.en; });
      var options = shuffle([w.en].concat(distractors));
      state.exam.wordQuestions.push({
        type: 'word', no: i + 1, stem: w.cn + (w.pos ? ' [' + w.pos + ']' : ''),
        options: options, answer: options.indexOf(w.en)
      });
    });

    state.exam.grammarQuestions = [];
    var gSample = pick(grammarPool, 15);
    gSample.forEach(function (q, i) {
      state.exam.grammarQuestions.push({
        type: 'grammar', no: i + 1, stem: q.q, options: q.options, answer: q.answer, explain: q.explain
      });
    });

    state.exam.started = true;
    state.exam.finished = false;
    state.exam.currentSection = 'word';
    state.exam.answers = {};
    state.exam.timeLeft = 3600;

    $('exam-intro').classList.add('hidden');
    $('exam-area').classList.remove('hidden');
    $('exam-result').classList.add('hidden');
    $('exam-title').textContent = '真题测试 · 进行中';

    renderExamQuestions();
    startTimer();
  };

  function renderExamQuestions() {
    var list = state.exam.currentSection === 'word' ? state.exam.wordQuestions : state.exam.grammarQuestions;
    var sectionTitle = state.exam.currentSection === 'word' ?
      '一、单词部分（共35题，每题2分，共70分）' :
      '二、语法部分（共15题，每题2分，共30分）';
    var html = '<h3 class="section-title">' + sectionTitle + '</h3>';
    list.forEach(function (q) {
      var key = q.type + '_' + q.no;
      var chosen = state.exam.answers[key];
      var optsHtml = q.options.map(function (opt, i) {
        var cls = 'exam-opt' + (chosen === i ? ' selected' : '');
        return '<label class="' + cls + '" data-key="' + key + '" data-idx="' + i + '">' +
          '<input type="radio" name="' + key + '" value="' + i + '" ' + (chosen === i ? 'checked' : '') + '>' +
          '<span class="opt-letter">' + String.fromCharCode(65 + i) + '</span>' + opt + '</label>';
      }).join('');
      html +=
        '<div class="exam-q">' +
          '<div class="q-no">' + q.no + '. ' + q.stem + '</div>' +
          '<div class="q-opts">' + optsHtml + '</div>' +
        '</div>';
    });
    html += '<div class="exam-submit-area"><button class="start-btn" onclick="confirmSubmit()">交卷</button></div>';
    $('questions-container').innerHTML = html;

    // 绑定选项点击
    document.querySelectorAll('.exam-opt').forEach(function (el) {
      el.addEventListener('click', function () {
        var key = el.getAttribute('data-key');
        var idx = parseInt(el.getAttribute('data-idx'));
        state.exam.answers[key] = idx;
        renderExamQuestions();
      });
    });
  }

  window.switchExamSection = function (sec) {
    state.exam.currentSection = sec;
    var tabs = document.querySelectorAll('.exam-tab');
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
    event.target.classList.add('active');
    renderExamQuestions();
    window.scrollTo(0, 0);
  };

  function startTimer() {
    if (state.exam.timerId) clearInterval(state.exam.timerId);
    updateTimerDisplay();
    state.exam.timerId = setInterval(function () {
      state.exam.timeLeft--;
      updateTimerDisplay();
      if (state.exam.timeLeft <= 0) {
        clearInterval(state.exam.timerId);
        alert('时间到，自动交卷！');
        submitExam();
      }
    }, 1000);
  }
  function updateTimerDisplay() {
    var m = Math.floor(state.exam.timeLeft / 60);
    var s = state.exam.timeLeft % 60;
    $('timer-display').textContent =
      (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  }

  window.confirmSubmit = function () {
    var answered = Object.keys(state.exam.answers).length;
    var total = state.exam.wordQuestions.length + state.exam.grammarQuestions.length;
    if (confirm('已答 ' + answered + ' / ' + total + ' 题，确定交卷吗？')) submitExam();
  };

  function submitExam() {
    if (state.exam.timerId) clearInterval(state.exam.timerId);
    state.exam.finished = true;

    var wordScore = 0, grammarScore = 0;
    var wordDetail = [], grammarDetail = [];
    state.exam.wordQuestions.forEach(function (q) {
      var key = q.type + '_' + q.no;
      var chosen = state.exam.answers[key];
      var ok = chosen === q.answer;
      if (ok) wordScore += 2;
      wordDetail.push({ q: q, chosen: chosen, ok: ok });
    });
    state.exam.grammarQuestions.forEach(function (q) {
      var key = q.type + '_' + q.no;
      var chosen = state.exam.answers[key];
      var ok = chosen === q.answer;
      if (ok) grammarScore += 2;
      grammarDetail.push({ q: q, chosen: chosen, ok: ok });
    });
    var total = wordScore + grammarScore;

    // 保存历史
    saveScore({
      date: new Date().toLocaleString('zh-CN'),
      total: total, word: wordScore, grammar: grammarScore,
      wordTotal: 70, grammarTotal: 30
    });

    // 渲染结果
    var emoji = total >= 90 ? '🏆' : total >= 75 ? '🎉' : total >= 60 ? '👍' : '💪';
    var html =
      '<div class="result-success">' +
        '<div class="big-emoji">' + emoji + '</div>' +
        '<h3>考试结束</h3>' +
        '<div class="score-board">' +
          '<div class="score-total">' + total + '<span> / 100</span></div>' +
          '<div class="score-row"><span>单词部分</span><span>' + wordScore + ' / 70</span></div>' +
          '<div class="score-row"><span>语法部分</span><span>' + grammarScore + ' / 30</span></div>' +
        '</div>' +
        '<h4 class="detail-title">📋 答题详情</h4>' +
        renderExamDetail('单词', wordDetail) +
        renderExamDetail('语法', grammarDetail, true) +
        '<button class="start-btn" onclick="exitExam()">返回</button>' +
      '</div>';
    $('exam-area').classList.add('hidden');
    $('exam-result').innerHTML = html;
    $('exam-result').classList.remove('hidden');
    $('exam-title').textContent = '真题测试';
  }

  function renderExamDetail(name, detail, withExplain) {
    var html = '<div class="detail-section"><h5>' + name + '部分</h5>';
    detail.forEach(function (d) {
      var mark = d.ok ? '<span class="mark-ok">✓</span>' : '<span class="mark-no">✗</span>';
      var chosenText = (d.chosen === undefined) ? '未作答' : d.q.options[d.chosen];
      var answerText = d.q.options[d.q.answer];
      html += '<div class="detail-q ' + (d.ok ? 'right' : 'wrong') + '">' +
        mark + '<span class="d-no">' + d.q.no + '.</span> ' + d.q.stem +
        '<div class="d-ans">你的答案：<span class="d-your">' + chosenText + '</span> | 正确答案：<span class="d-correct">' + answerText + '</span></div>' +
        (withExplain && d.q.explain ? '<div class="d-exp">💡 ' + d.q.explain + '</div>' : '') +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  window.exitExam = function () {
    try { if (state.exam.timerId) clearInterval(state.exam.timerId); } catch (e) {}
    try {
      state.exam.started = false;
      state.exam.finished = false;
      $('exam-intro').classList.remove('hidden');
      $('exam-area').classList.add('hidden');
      $('exam-result').classList.add('hidden');
      $('exam-title').textContent = '真题测试';
      renderScoreHistory();
    } catch (e) {}
    window.showPage('home');
  };

  function renderScoreHistory() {
    var list = loadScores();
    var el = $('score-list');
    if (!el) return;
    if (list.length === 0) { el.innerHTML = '<p class="no-record">暂无考试记录，加油！</p>'; return; }
    var html = '<table class="score-table"><tr><th>时间</th><th>总分</th><th>单词</th><th>语法</th></tr>';
    list.forEach(function (s) {
      var cls = s.total >= 90 ? 'excellent' : s.total >= 75 ? 'good' : s.total >= 60 ? 'pass' : 'fail';
      html += '<tr class="' + cls + '"><td>' + s.date + '</td><td><strong>' + s.total + '</strong></td><td>' + s.word + '/' + s.wordTotal + '</td><td>' + s.grammar + '/' + s.grammarTotal + '</td></tr>';
    });
    html += '</table>';
    el.innerHTML = html;
  }

  // ============================================================
  // ============ 听力测验模块（自适应算法）======================
  // ============================================================

  var LISTENING_KEY = 'english_listening_records';

  // 读取听力历史记录
  function loadListeningRecords() {
    try { return JSON.parse(localStorage.getItem(LISTENING_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function saveListeningRecord(rec) {
    var list = loadListeningRecords();
    list.unshift(rec);
    if (list.length > 30) list = list.slice(0, 30);
    localStorage.setItem(LISTENING_KEY, JSON.stringify(list));
  }

  /**
   * 能力分析：基于历史记录，统计每个维度的正确率
   * 维度：grade(7/8/9) × type(A/B/C/D) × level(1/2/3)
   * 返回：{ '7':rate, '8':rate, 'A':rate, 'level1':rate, ... }
   */
  function analyzeAbility() {
    var records = loadListeningRecords();
    var stats = {};   // {维度: {correct, total}}
    var totalCorrect = 0, totalQ = 0;

    records.forEach(function (rec) {
      if (!rec.details) return;
      rec.details.forEach(function (d) {
        totalCorrect += d.ok ? 1 : 0;
        totalQ++;
        // 三个维度分别统计
        ['grade:' + d.grade, 'type:' + d.type, 'level:' + d.level].forEach(function (key) {
          if (!stats[key]) stats[key] = { correct: 0, total: 0 };
          stats[key].total++;
          if (d.ok) stats[key].correct++;
        });
      });
    });

    var ability = {};
    for (var k in stats) {
      ability[k] = stats[k].total > 0 ? stats[k].correct / stats[k].total : 0.5;
    }
    ability['_overall'] = totalQ > 0 ? totalCorrect / totalQ : 0.5;
    ability['_hasData'] = totalQ > 0;
    return ability;
  }

  /**
   * 自适应出题核心算法
   * 策略：短板维度权重高（60%），优势维度权重低（40%）
   */
  function adaptiveSelect(scope, ability) {
    var pool = LISTENING.filter(function (q) {
      if (scope !== 'all' && q.grade !== parseInt(scope)) return false;
      return true;
    });
    if (pool.length === 0) return [];

    // 计算每道题的权重
    function weightOf(q) {
      var gradeRate = ability['grade:' + q.grade] !== undefined ? ability['grade:' + q.grade] : 0.5;
      var typeRate = ability['type:' + q.type] !== undefined ? ability['type:' + q.type] : 0.5;
      var levelRate = ability['level:' + q.level] !== undefined ? ability['level:' + q.level] : 0.5;
      // 短板 = 正确率低 → 权重高；公式：权重 = 0.6 × (1 - 正确率) + 0.4 × 0.5
      var w = 0.6 * ((1 - gradeRate) + (1 - typeRate) + (1 - levelRate)) / 3 + 0.4 * 0.5;
      return w;
    }

    // 按题型分组，确保每个题型都有题
    var groups = { A: [], B: [], C: [], D: [] };
    pool.forEach(function (q) {
      groups[q.type].push({ q: q, w: weightOf(q) });
    });

    // 目标本卷结构：A=5, B=10, C=5, D=5 (共25题，但受限于题库容量)
    var targets = { A: 5, B: 10, C: 5, D: 5 };
    var result = [];
    ['A', 'B', 'C', 'D'].forEach(function (type) {
      var g = groups[type].slice().sort(function (a, b) {
        // 按权重降序，加入随机扰动避免每次完全一样
        return (b.w + Math.random() * 0.3) - (a.w + Math.random() * 0.3);
      });
      var n = Math.min(targets[type], g.length);
      for (var i = 0; i < n; i++) result.push(g[i].q);
    });

    return result;
  }

  // 选择听力范围
  window.selectListeningScope = function (btn, scope) {
    state.listening.scope = scope;
    var sib = btn.parentNode.children;
    for (var i = 0; i < sib.length; i++) sib[i].classList.remove('active');
    btn.classList.add('active');
  };

  // 选择发音口音
  window.selectAccent = function (btn, accent) {
    state.listening.accent = accent;
    var sib = btn.parentNode.children;
    for (var i = 0; i < sib.length; i++) sib[i].classList.remove('active');
    btn.classList.add('active');
    var tip = $('accent-tip');
    if (tip) {
      tip.textContent = accent === 'US'
        ? '已选美式发音 🇺🇸：对话女声(A) + 男声(B)，问题用男声播报'
        : '已选英式发音 🇬🇧：对话女声(A) + 男声(B)，问题用男声播报';
    }
    // 试听一句所选口音
    if (window.Speak) {
      var sample = accent === 'US'
        ? 'Hello, this is American English.'
        : 'Hello, this is British English.';
      window.Speak.sentence(sample, null, { accent: accent, gender: 'female', rate: 0.85 });
    }
  };

  // 开始听力测验
  window.startListeningTest = function () {
    var ability = analyzeAbility();
    var questions = adaptiveSelect(state.listening.scope, ability);
    if (questions.length === 0) { alert('该范围暂无题目！'); return; }

    state.listening.questions = questions;
    state.listening.current = 0;
    state.listening.answers = {};
    state.listening.started = true;
    state.listening.finished = false;

    $('listening-intro').classList.add('hidden');
    $('listening-area').classList.remove('hidden');
    $('listening-result').classList.add('hidden');
    $('listening-title').textContent = '听力测验 · 进行中（共' + questions.length + '题）';

    renderListeningQuestion();
  };

  // 渲染当前听力题
  function renderListeningQuestion() {
    var L = state.listening;
    if (L.current >= L.questions.length) { finishListeningTest(); return; }
    var q = L.questions[L.current];
    var key = q.id;
    var chosen = L.answers[key];
    var partNames = { A: '图片题', B: '短对话', C: '长对话', D: '听写填空' };
    var html = '';

    html += '<div class="listen-q-card">';
    html += '<div class="listen-q-head">';
    html += '<span class="listen-part part-' + q.type + '">Part ' + q.type + ' · ' + partNames[q.type] + '</span>';
    html += '<span class="listen-level">难度' + '⭐'.repeat(q.level) + '</span>';
    html += '</div>';

    // 播放按钮区
    html += '<div class="listen-audio-area" id="listen-audio-area">';
    html += '<div class="listen-voice-tags">';
    html += '<span class="voice-tag female">👩 说话者A（女声）</span>';
    html += '<span class="voice-tag male">👨 说话者B（男声）+ 提问</span>';
    html += '</div>';
    html += '<button class="listen-play-btn" onclick="playListeningAudio()">▶️ 点击播放听力</button>';
    html += '<div class="listen-wave" id="listen-wave"></div>';
    html += '</div>';

    // 题目
    html += '<div class="listen-question">' + q.question + '</div>';

    if (q.type === 'D') {
      // D部分：听写填空
      html += '<div class="listen-dictation">';
      html += renderDictation(q, chosen);
      html += '</div>';
    } else {
      // A/B/C 部分：选项
      html += '<div class="listen-options">';
      q.options.forEach(function (opt, i) {
        var cls = 'listen-opt' + (chosen === i ? ' selected' : '');
        html += '<div class="' + cls + '" data-idx="' + i + '" onclick="answerListening(' + i + ')">';
        html += '<span class="opt-letter">' + String.fromCharCode(65 + i) + '</span>';
        html += '<span class="opt-text">' + opt + '</span>';
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div>';

    $('listening-question-container').innerHTML = html;
    $('listening-progress-text').textContent = '第 ' + (L.current + 1) + ' / ' + L.questions.length + ' 题';

    // 自动播放：男声先报题号引导，女声再播背景音频
    setTimeout(function () { playListeningAudio(); }, 400);
  }

  // 渲染听写填空题
  function renderDictation(q, chosen) {
    var parts = q.sentence.split('_____');
    var html = '<p class="dict-instruction">听完后，在空格处填入听到的单词：</p>';
    html += '<div class="dict-sentence">';
    parts.forEach(function (part, i) {
      html += '<span class="dict-text">' + part + '</span>';
      if (i < parts.length - 1) {
        var val = (chosen && chosen[i]) ? chosen[i] : '';
        html += '<input type="text" class="dict-input" data-blank="' + i + '" value="' + val + '" placeholder="?" autocomplete="off" spellcheck="false">';
      }
    });
    html += '</div>';
    return html;
  }

  // 播放听力音频：男声报题号引导 → 女声播背景音频
  window.playListeningAudio = function () {
    var L = state.listening;
    var q = L.questions[L.current];
    if (!q || !window.Speak) return;
    var accent = L.accent || 'US';

    // 生成波纹条
    var wave = $('listen-wave');
    if (wave && wave.children && wave.children.length === 0) {
      var barsHtml = '';
      for (var i = 0; i < 15; i++) barsHtml += '<span class="wave-bar"></span>';
      wave.innerHTML = barsHtml;
    }

    var guide = 'Question ' + (L.current + 1) + '.';
    playWithDualVoice(guide, q.audio, q.question, accent);
  };

  // 智能播放：男声报题号 → 对话原文按W:/M:区分男女声 → 男声播报问题
  function playWithDualVoice(guide, audio, question, accent) {
    window.Speak.stop();
    var area = $('listen-audio-area');
    var wave = $('listen-wave');

    // 波纹动画辅助
    function animateWave() {
      if (wave && wave.children) {
        var bars = wave.children;
        for (var i = 0; i < bars.length; i++) {
          bars[i].style.height = (20 + Math.random() * 30) + 'px';
        }
      }
    }

    // 阶段1：男声报题号引导（如 "Question 3."）
    if (area) area.classList.add('male-speaking');
    window.Speak.word(guide, {
      accent: accent, gender: 'male', rate: 0.9,
      onEnd: function () {
        // 阶段2：对话原文按说话人标记区分男女声播报
        if (area) area.classList.remove('male-speaking');
        window.Speak.dialogue(audio, {
          accent: accent,
          defaultGender: 'female',   // 无标记的整句默认女声
          rate: 0.8,
          segmentGap: 380,           // 对话段间停顿
          onSegment: function (idx, total, gender) {
            // 根据当前说话人切换声音标签高亮
            if (!area) return;
            if (gender === 'male') {
              area.classList.remove('female-speaking');
              area.classList.add('male-speaking', 'playing');
            } else {
              area.classList.remove('male-speaking');
              area.classList.add('female-speaking', 'playing');
            }
            animateWave();
          },
          onWord: function (idx) { animateWave(); },
          onEnd: function () {
            // 阶段3：男声播报问题（让学生听清要答什么）
            if (area) { area.classList.remove('female-speaking'); area.classList.add('male-speaking'); }
            // 问题前加 "Question:" 引导，便于学生识别
            var qText = 'Question. ' + question;
            window.Speak.sentence(qText, null, {
              accent: accent, gender: 'male', rate: 0.82,
              onEnd: function () {
                if (area) area.classList.remove('playing', 'male-speaking', 'female-speaking');
              }
            });
          }
        });
      }
    });
  }

  // 渲染听写填空题
  function renderDictation(q, chosen) {
    // 将 sentence 按 _____ 分割，插入输入框
    var parts = q.sentence.split('_____');
    var html = '<p class="dict-instruction">听完后，在空格处填入听到的单词：</p>';
    html += '<div class="dict-sentence">';
    parts.forEach(function (part, i) {
      html += '<span class="dict-text">' + part + '</span>';
      if (i < parts.length - 1) {
        var val = (chosen && chosen[i]) ? chosen[i] : '';
        html += '<input type="text" class="dict-input" data-blank="' + i + '" value="' + val + '" placeholder="?" autocomplete="off" spellcheck="false">';
      }
    });
    html += '</div>';
    return html;
  }

  window.replayListening = function () {
    if (window.Speak) { window.Speak.stop(); window.playListeningAudio(); }
  };

  // 作答（A/B/C 选择题）
  window.answerListening = function (idx) {
    var q = state.listening.questions[state.listening.current];
    state.listening.answers[q.id] = idx;
    // 更新选中样式
    var opts = document.querySelectorAll('.listen-opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].classList.remove('selected');
      if (parseInt(opts[i].getAttribute('data-idx')) === idx) opts[i].classList.add('selected');
    }
  };

  // 下一题（D部分需先收集输入）
  window.nextListeningQuestion = function () {
    var q = state.listening.questions[state.listening.current];
    if (q.type === 'D') {
      // 收集听写输入
      var inputs = document.querySelectorAll('.dict-input');
      var blanks = [];
      for (var i = 0; i < inputs.length; i++) blanks.push(inputs[i].value.trim());
      state.listening.answers[q.id] = blanks;
    }
    if (window.Speak) window.Speak.stop();
    state.listening.current++;
    renderListeningQuestion();
  };

  // 完成测验，评分 + 分析
  function finishListeningTest() {
    var L = state.listening;
    L.finished = true;
    if (window.Speak) window.Speak.stop();

    var details = [];
    var scoreByPart = { A: { c: 0, t: 0 }, B: { c: 0, t: 0 }, C: { c: 0, t: 0 }, D: { c: 0, t: 0 } };
    var totalScore = 0;
    var totalFull = 0;

    L.questions.forEach(function (q, idx) {
      var userAns = L.answers[q.id];
      var ok = false;
      if (q.type === 'D') {
        // D部分：每个空正确得部分分
        var correctBlanks = 0;
        if (userAns && userAns.length === q.answer.length) {
          for (var i = 0; i < q.answer.length; i++) {
            if (userAns[i] && userAns[i].toLowerCase() === q.answer[i].toLowerCase()) correctBlanks++;
          }
        }
        // D题每题4分，按空均分
        var perBlank = 4 / q.answer.length;
        totalScore += correctBlanks * perBlank;
        ok = correctBlanks === q.answer.length;
      } else {
        ok = userAns === q.answer;
        if (ok) totalScore += 4;
      }
      totalFull += 4;
      scoreByPart[q.type].t += 4;
      if (ok) scoreByPart[q.type].c += 4;
      details.push({
        id: q.id, grade: q.grade, type: q.type, level: q.level,
        ok: ok, audio: q.audio, question: q.question,
        options: q.options, answer: q.answer, chosen: userAns,
        explain: q.explain, sentence: q.sentence, blanks: q.blanks, answerArr: q.answer
      });
    });

    totalScore = Math.round(totalScore);
    // 折算到100分制
    var finalScore = Math.round(totalScore / totalFull * 100);

    // 保存记录
    var record = {
      date: new Date().toLocaleString('zh-CN'),
      scope: L.scope,
      score: finalScore,
      rawScore: totalScore,
      rawFull: totalFull,
      totalQ: L.questions.length,
      details: details
    };
    saveListeningRecord(record);

    // 渲染结果
    renderListeningResult(record, scoreByPart);
  }

  function renderListeningResult(rec, scoreByPart) {
    var emoji = rec.score >= 90 ? '🏆' : rec.score >= 75 ? '🎉' : rec.score >= 60 ? '👍' : '💪';
    // 各部分正确率
    var partHtml = '';
    var partNames = { A: '图片识别', B: '短对话', C: '长对话', D: '听写填空' };
    ['A', 'B', 'C', 'D'].forEach(function (t) {
      var s = scoreByPart[t];
      if (s.t === 0) return;
      var rate = Math.round(s.c / s.t * 100);
      var bar = rate >= 75 ? 'good' : rate >= 50 ? 'mid' : 'bad';
      partHtml += '<div class="part-stat"><span>Part ' + t + ' ' + partNames[t] + '</span>' +
        '<div class="part-bar"><div class="part-fill ' + bar + '" style="width:' + rate + '%"></div></div>' +
        '<span class="part-rate">' + rate + '%</span></div>';
    });

    // 生成评价
    var ability = analyzeAbility();
    var evaluation = generateEvaluation(rec.score, ability);

    // 错题详情
    var wrongHtml = '';
    var wrongList = rec.details.filter(function (d) { return !d.ok; });
    if (wrongList.length === 0) {
      wrongHtml = '<div class="all-correct">🌟 全部答对！太棒了！</div>';
    } else {
      wrongList.forEach(function (d, i) {
        wrongHtml += '<div class="listen-detail-q wrong">';
        wrongHtml += '<span class="mark-no">✗</span> ';
        wrongHtml += '<span class="listen-part-tag part-' + d.type + '">' + d.type + '</span> ';
        wrongHtml += d.question;
        if (d.type === 'D') {
          wrongHtml += '<div class="d-ans">你的答案：<span class="d-your">' + (d.chosen ? d.chosen.join(', ') : '未填') + '</span></div>';
          wrongHtml += '<div class="d-ans">正确答案：<span class="d-correct">' + d.answerArr.join(', ') + '</span></div>';
        } else {
          wrongHtml += '<div class="d-ans">你的答案：<span class="d-your">' + (d.chosen !== undefined ? d.options[d.chosen] : '未答') + '</span></div>';
          wrongHtml += '<div class="d-ans">正确答案：<span class="d-correct">' + d.options[d.answer] + '</span></div>';
        }
        wrongHtml += '<div class="d-exp">💡 ' + d.explain + '</div>';
        wrongHtml += '<button class="pron-btn tiny" onclick="playListenDetail(\'' + d.id + '\')">🔊 重听</button>';
        wrongHtml += '</div>';
      });
    }

    var html =
      '<div class="result-success">' +
        '<div class="big-emoji">' + emoji + '</div>' +
        '<h3>听力测验完成</h3>' +
        '<div class="score-board">' +
          '<div class="score-total">' + rec.score + '<span> / 100</span></div>' +
          '<div class="score-row"><span>答对题数</span><span>' + rec.details.filter(function(d){return d.ok}).length + ' / ' + rec.totalQ + '</span></div>' +
        '</div>' +
        '<h4 class="detail-title">📊 各部分正确率</h4>' +
        '<div class="part-stats">' + partHtml + '</div>' +
        '<h4 class="detail-title">🧠 智能评价</h4>' +
        '<div class="evaluation-box">' + evaluation + '</div>' +
        (wrongList.length > 0 ? '<h4 class="detail-title">📋 错题回顾（点击🔊重听）</h4>' + '<div class="wrong-list">' + wrongHtml + '</div>' : wrongHtml) +
        '<button class="start-btn" onclick="restartListeningTest()">📊 再测一次（自适应强化）</button>' +
        '<button class="pron-btn small-stop" onclick="exitListening()" style="margin-top:10px">返回</button>' +
      '</div>';

    $('listening-area').classList.add('hidden');
    $('listening-result').innerHTML = html;
    $('listening-result').classList.remove('hidden');
    $('listening-title').textContent = '听力测验 · 成绩报告';

    // 缓存错题音频供重听
    window.__wrongAudio = {};
    rec.details.forEach(function (d) { window.__wrongAudio[d.id] = d.audio; });
  }

  // 重听错题（女声背景音频，使用本次测验口音）
  window.playListenDetail = function (id) {
    var audio = window.__wrongAudio && window.__wrongAudio[id];
    if (audio && window.Speak) window.Speak.sentence(audio, null, { accent: state.listening.accent || 'US', gender: 'female', rate: 0.8 });
  };

  // 生成智能评价
  function generateEvaluation(score, ability) {
    var html = '';
    if (!ability._hasData) {
      // 首次考试
      html += '<p>🎯 这是你的第一次听力测验。本次得分 <strong>' + score + '</strong> 分。</p>';
      if (score >= 80) html += '<p>基础不错！继续保持，下次系统会适度提升难度。</p>';
      else if (score >= 60) html += '<p>有一定基础，但还有提升空间。下次会针对薄弱题型加强训练。</p>';
      else html += '<p>听力还需多加练习。下次系统会从基础题开始，逐步帮你建立信心。</p>';
      return html;
    }

    // 有历史数据，分析短板
    html += '<p>本次得分 <strong>' + score + '</strong> 分（历史平均 ' + Math.round(ability._overall * 100) + ' 分）。</p>';

    // 找出最薄弱的维度
    var weaknesses = [];
    var dims = [
      { key: 'grade:7', name: '七年级基础题' },
      { key: 'grade:8', name: '八年级进阶题' },
      { key: 'grade:9', name: '九年级高阶题' },
      { key: 'type:A', name: '图片识别(Part A)' },
      { key: 'type:B', name: '短对话(Part B)' },
      { key: 'type:C', name: '长对话(Part C)' },
      { key: 'type:D', name: '听写填空(Part D)' },
      { key: 'level:1', name: '基础难度' },
      { key: 'level:2', name: '进阶难度' },
      { key: 'level:3', name: '挑战难度' }
    ];
    dims.forEach(function (d) {
      var rate = ability[d.key];
      if (rate !== undefined && rate < 0.6) {
        weaknesses.push({ name: d.name, rate: Math.round(rate * 100) });
      }
    });
    weaknesses.sort(function (a, b) { return a.rate - b.rate; });

    if (weaknesses.length === 0) {
      html += '<p>🌟 各项能力均衡发展，表现优秀！下次将整体提升难度挑战你。</p>';
    } else {
      html += '<p>📌 你的主要短板：</p><ul class="weak-list">';
      weaknesses.slice(0, 3).forEach(function (w) {
        html += '<li>' + w.name + '（正确率 ' + w.rate + '%）</li>';
      });
      html += '</ul>';
      html += '<p>💡 <strong>下次出题策略</strong>：系统已自动加大对上述薄弱环节的出题权重（约占 60%），帮助你针对性补齐短板。</p>';
    }

    // 进步趋势
    var records = loadListeningRecords();
    if (records.length >= 2) {
      var lastScore = records[1].score;
      var diff = score - lastScore;
      if (diff > 0) html += '<p class="trend-up">📈 比上次进步了 ' + diff + ' 分，继续加油！</p>';
      else if (diff < 0) html += '<p class="trend-down">📉 比上次退步了 ' + Math.abs(diff) + ' 分，别灰心，针对性练习后一定能提升！</p>';
      else html += '<p>➡️ 成绩与上次持平，保持稳定。</p>';
    }
    return html;
  }

  // 再测一次（自动用最新能力分析出题）
  window.restartListeningTest = function () {
    $('listening-result').classList.add('hidden');
    $('listening-intro').classList.remove('hidden');
    $('listening-title').textContent = '听力测验';
    renderListeningHistory();
    renderAbilityRadar();
  };

  window.exitListening = function () {
    try { if (window.Speak) window.Speak.stop(); } catch (e) {}
    try {
      state.listening.started = false;
      state.listening.finished = false;
      $('listening-intro').classList.remove('hidden');
      $('listening-area').classList.add('hidden');
      $('listening-result').classList.add('hidden');
      $('listening-title').textContent = '听力测验';
      renderListeningHistory();
      renderAbilityRadar();
    } catch (e) {}
    window.showPage('home');
  };

  // 渲染历史成绩
  function renderListeningHistory() {
    var list = loadListeningRecords();
    var el = $('listening-score-list');
    if (!el) return;
    if (list.length === 0) { el.innerHTML = '<p class="no-record">暂无听力记录，开始第一次测验吧！</p>'; return; }
    var html = '<table class="score-table"><tr><th>时间</th><th>分数</th><th>范围</th><th>对/总</th></tr>';
    list.slice(0, 10).forEach(function (r) {
      var cls = r.score >= 90 ? 'excellent' : r.score >= 75 ? 'good' : r.score >= 60 ? 'pass' : 'fail';
      var scopeText = r.scope === 'all' ? '全部' : r.scope + '年级';
      var correct = r.details ? r.details.filter(function (d) { return d.ok; }).length : '-';
      html += '<tr class="' + cls + '"><td>' + r.date.slice(5, 16) + '</td><td><strong>' + r.score + '</strong></td><td>' + scopeText + '</td><td>' + correct + '/' + r.totalQ + '</td></tr>';
    });
    html += '</table>';
    el.innerHTML = html;
  }

  // 渲染能力雷达（简化版：用进度条表示各维度）
  function renderAbilityRadar() {
    var ability = analyzeAbility();
    var el = $('ability-radar');
    if (!el) return;
    if (!ability._hasData) {
      el.innerHTML = '<p class="no-record">完成至少一次测验后，这里会显示你的能力分析</p>';
      return;
    }
    var dims = [
      { key: 'grade:7', name: '七年级', color: '#48bb78' },
      { key: 'grade:8', name: '八年级', color: '#ed8936' },
      { key: 'grade:9', name: '九年级', color: '#e53e3e' },
      { key: 'type:A', name: '图片题', color: '#4299e1' },
      { key: 'type:B', name: '短对话', color: '#9f7aea' },
      { key: 'type:C', name: '长对话', color: '#ec4899' },
      { key: 'type:D', name: '听写', color: '#38b2ac' }
    ];
    var html = '';
    dims.forEach(function (d) {
      var rate = ability[d.key] !== undefined ? ability[d.key] : 0;
      var pct = Math.round(rate * 100);
      html += '<div class="radar-row">' +
        '<span class="radar-name">' + d.name + '</span>' +
        '<div class="radar-bar"><div class="radar-fill" style="width:' + pct + '%;background:' + d.color + '"></div></div>' +
        '<span class="radar-pct">' + pct + '%</span>' +
        '</div>';
    });
    el.innerHTML = html;
  }

  // 进入听力页时初始化
  function initListeningPage() {
    renderListeningHistory();
    renderAbilityRadar();
  }

  // ============================================================
  // ============ 账户认证 UI（登录/用户栏/管理员） =============
  // ============================================================

  // 全局：记录上次保存数据的时间戳（节流）
  var lastSaveTime = 0;

  /** 登录处理（重写：极简健壮版） */
  window.handleLogin = async function () {
    console.log('===== handleLogin 开始 =====');
    var usernameEl = document.getElementById('login-username');
    var passwordEl = document.getElementById('login-password');
    var errEl = document.getElementById('login-error');
    var btn = document.getElementById('login-submit');
    if (!usernameEl || !passwordEl) { alert('错误：找不到输入框'); return; }
    var username = usernameEl.value.trim();
    var password = passwordEl.value;
    console.log('[Login] 用户名:', username, '密码长度:', password.length);
    if (!username || !password) {
      if (errEl) errEl.textContent = '请输入用户名和密码';
      return;
    }
    if (errEl) errEl.textContent = '';
    if (btn) { btn.textContent = '登录中...'; btn.disabled = true; }

    // 超时兜底：15秒后如果还没结果，恢复按钮
    var timeoutHit = false;
    var timer = setTimeout(function () {
      timeoutHit = true;
      console.error('[Login] 超时！15秒无响应');
      if (btn) { btn.textContent = '登 录'; btn.disabled = false; }
      if (errEl) errEl.textContent = '登录超时，请检查网络后重试';
    }, 15000);

    try {
      console.log('[Login] 调用 Auth.login...');
      var r = await window.Auth.login(username, password);
      console.log('[Login] Auth.login返回:', JSON.stringify(r));
      if (timeoutHit) return;
      clearTimeout(timer);
      if (!r || !r.ok) {
        if (errEl) errEl.textContent = (r && r.error) ? r.error : '登录失败';
        if (btn) { btn.textContent = '登 录'; btn.disabled = false; }
        return;
      }
      // ===== 登录成功，直接操作DOM切换页面（绕过所有封装） =====
      console.log('[Login] 登录成功! 开始切换页面...');
      var lp = document.getElementById('login-page');
      var hp = document.getElementById('home-page');
      console.log('[Login] login-page:', !!lp, 'home-page:', !!hp);
      if (lp) lp.classList.remove('active');   // 隐藏登录页(靠class控制)
      if (hp) hp.classList.add('active');      // 显示首页
      console.log('[Login] 页面切换DOM操作完成');

      // 渲染用户栏
      try {
        var bar = document.getElementById('user-bar');
        var u = window.Auth.current;
        if (bar && u) {
          bar.innerHTML = '<div class="user-info">' +
            '<span class="user-avatar">' + (u.role === 'admin' ? '👨‍💼' : '👤') + '</span>' +
            '<span class="user-name">' + (u.nickname || u.username) + '</span>' +
            '<span class="user-login-count">第 ' + (r.loginCount || 1) + ' 次登录</span></div>' +
            '<button class="logout-btn" onclick="handleLogout()">退出</button>';
          console.log('[Login] 用户栏已渲染');
        }
      } catch (e) { console.warn('[Login] 用户栏渲染失败:', e.message); }

      // 管理员入口
      try {
        if (window.Auth.isAdmin()) {
          var items = document.querySelectorAll('.admin-only');
          for (var i = 0; i < items.length; i++) items[i].classList.remove('hidden');
        }
      } catch (e) {}

      state.currentPage = 'home';
      console.log('[Login] 全部完成!');
      // 滚动到顶部
      window.scrollTo(0, 0);

      // 异步恢复数据（不阻塞）
      try { await restoreUserData(window.Auth.current.id); } catch (e) {}
      try {
        if (window.Auth.isAdmin()) window.Auth._cacheAdminPwd(await window.Auth_sha256(password));
      } catch (e) {}

    } catch (e) {
      console.error('[Login] 异常:', e.message, e.stack);
      clearTimeout(timer);
      if (!timeoutHit) {
        if (errEl) errEl.textContent = '登录失败：' + e.message;
        if (btn) { btn.textContent = '登 录'; btn.disabled = false; }
      }
    }
  };

  /** SHA256 暴露给登录逻辑（auth.js 内部用，这里也需要） */
  window.Auth_sha256 = async function (text) {
    if (window.crypto && window.crypto.subtle) {
      var buf = new TextEncoder().encode(text);
      var hash = await window.crypto.subtle.digest('SHA-256', buf);
      return Array.from(new Uint8Array(hash)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    }
    return text; // 降级
  };

  /** 进入应用主页 */
  function enterApp(loginCount) {
    console.log('[enterApp] 开始, loginCount:', loginCount);
    try {
      var lp = $('login-page');
      var hp = $('home-page');
      console.log('[enterApp] login-page元素:', !!lp, 'home-page元素:', !!hp);
      if (lp) lp.classList.remove('active');
      if (hp) hp.classList.add('active');
      console.log('[enterApp] 页面切换完成');
      renderUserBar(loginCount);
      console.log('[enterApp] 用户栏渲染完成');
      // 管理员显示用户管理入口
      if (window.Auth.isAdmin()) {
        var adminEntries = document.querySelectorAll('.admin-only');
        for (var i = 0; i < adminEntries.length; i++) adminEntries[i].classList.remove('hidden');
      }
      state.currentPage = 'home';
      console.log('[enterApp] 完成');
      // 首次登录提示
      if (loginCount === 1) {
        setTimeout(function () { alert('🎉 欢迎首次使用！'); }, 300);
      }
    } catch (e) {
      console.error('[enterApp] 异常:', e.message, e.stack);
    }
  }

  /** 渲染顶部用户信息栏 */
  function renderUserBar(loginCount) {
    var u = window.Auth.current;
    if (!u) return;
    var html =
      '<div class="user-info">' +
        '<span class="user-avatar">' + (u.role === 'admin' ? '👨‍💼' : '👤') + '</span>' +
        '<span class="user-name">' + u.nickname + '</span>' +
        '<span class="user-login-count">第 ' + loginCount + ' 次登录</span>' +
      '</div>' +
      '<button class="logout-btn" onclick="handleLogout()">退出</button>';
    $('user-bar').innerHTML = html;
  }

  /** 退出登录：先保存数据 */
  window.handleLogout = async function () {
    if (!confirm('确定退出登录吗？学习进度已自动保存。')) return;
    try { await saveUserData(); } catch (e) {}
    window.Auth.logout();
    location.reload();
  };

  /** 恢复用户学习数据 */
  async function restoreUserData(userId) {
    try {
      var data = await window.Auth.loadData(userId);
      if (!data) return;
      // 恢复单词记忆进度
      if (data.wm_grade) state.wmGrade = data.wm_grade;
      // 恢复真题历史
      if (data.exam_scores) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data.exam_scores)); } catch (e) {}
      }
      // 恢复听力历史
      if (data.listen_scores) {
        try { localStorage.setItem(LISTENING_KEY, JSON.stringify(data.listen_scores)); } catch (e) {}
      }
      // 恢复听力统计（自适应）
      if (data.listen_stats) {
        try { localStorage.setItem('english_listening_stats', JSON.stringify(data.listen_stats)); } catch (e) {}
      }
    } catch (e) { console.warn('恢复数据失败:', e.message); }
  }

  /** 保存用户学习数据到云端 */
  async function saveUserData() {
    if (!window.Auth.current) return;
    var now = Date.now();
    if (now - lastSaveTime < 5000) return; // 5秒节流
    lastSaveTime = now;
    var data = {
      user_id: window.Auth.current.id,
      wm_grade: state.wmGrade,
      wm_index: state.wmIndex,
      wc_total: state.wc.totalAnswered || 0,
      wc_correct: state.wc.correctCount || 0,
      exam_scores: loadScores(),
      listen_scores: loadListeningRecords(),
      listen_stats: {},
      updated_at: new Date().toISOString()
    };
    try { await window.Auth.saveData(window.Auth.current.id, data); } catch (e) {}
  }

  // 定期自动保存（每30秒）
  setInterval(function () { if (window.Auth.current) saveUserData(); }, 30000);
  // 页面隐藏时保存（切后台/关闭）
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && window.Auth.current) saveUserData();
  });

  // ===== 管理员面板逻辑 =====

  /** 创建用户 */
  window.handleCreateUser = async function () {
    var username = $('new-username').value.trim();
    var password = $('new-password').value;
    var nickname = $('new-nickname').value.trim() || username;
    var role = $('new-role').value;
    var resultEl = $('create-result');
    if (!username || !password) { resultEl.innerHTML = '<span class="err">请填写用户名和密码</span>'; return; }
    resultEl.innerHTML = '创建中...';
    try {
      var r = await window.Auth.createUser(username, password, role, nickname);
      if (r.ok) {
        resultEl.innerHTML = '<span class="ok">✓ 用户 ' + username + ' 创建成功</span>';
        $('new-username').value = ''; $('new-password').value = ''; $('new-nickname').value = '';
        loadUserList();
      } else {
        resultEl.innerHTML = '<span class="err">' + (r.error || '创建失败') + '</span>';
      }
    } catch (e) { resultEl.innerHTML = '<span class="err">网络错误</span>'; }
  };

  /** 加载用户列表 */
  window.loadUserList = async function () {
    var el = $('user-list');
    if (!el) return;
    el.innerHTML = '加载中...';
    try {
      var users = await window.Auth.listUsers();
      if (!Array.isArray(users)) { el.innerHTML = '<span class="err">加载失败</span>'; return; }
      var html = '<table class="user-table"><tr><th>用户名</th><th>昵称</th><th>角色</th><th>登录次数</th><th>操作</th></tr>';
      users.forEach(function (u) {
        var isAdminRow = u.role === 'admin';
        html += '<tr>' +
          '<td>' + u.username + '</td>' +
          '<td>' + (u.nickname || '-') + '</td>' +
          '<td><span class="role-tag ' + u.role + '">' + (u.role === 'admin' ? '管理员' : '学生') + '</span></td>' +
          '<td>' + (u.login_count || 0) + '</td>' +
          '<td>' + (isAdminRow ? '<span class="muted">-</span>' :
            '<button class="admin-btn-tiny" onclick="handleResetPwd(\'' + u.username + '\')">重置密码</button> ' +
            '<button class="admin-btn-tiny danger" onclick="handleDeleteUser(\'' + u.username + '\')">删除</button>') +
          '</td>' +
          '</tr>';
      });
      html += '</table>';
      el.innerHTML = html;
    } catch (e) { el.innerHTML = '<span class="err">网络错误</span>'; }
  };

  /** 重置密码 */
  window.handleResetPwd = async function (username) {
    var newPwd = prompt('为 ' + username + ' 设置新密码：', '123456');
    if (!newPwd) return;
    try {
      var r = await window.Auth.resetPassword(username, newPwd);
      alert(r.ok ? '✓ 密码已重置为：' + newPwd : '重置失败');
    } catch (e) { alert('网络错误'); }
  };

  /** 删除用户 */
  window.handleDeleteUser = async function (username) {
    if (!confirm('确定删除用户 ' + username + ' 吗？此操作不可恢复。')) return;
    try {
      var r = await window.Auth.deleteUser(username);
      if (r.ok) { alert('✓ 已删除'); loadUserList(); }
      else alert('删除失败');
    } catch (e) { alert('网络错误'); }
  };

  // 进入管理员页时加载用户列表
  var origShowPageAdmin = window.showPage;
  window.showPage = function (name) {
    origShowPageAdmin(name);
    if (name === 'admin') loadUserList();
  };

  // ============ 初始化 ============
  // 默认加载首页数据，供首次切到单词页时使用
  state.wmList = shuffle(getWordsByGrade('all'));

  // 启动时检查登录状态
  window.Auth.init();
  if (window.Auth.isLoggedIn()) {
    // 已登录：直接进入应用（用本地缓存的登录次数）
    $('login-page').classList.remove('active');
    $('home-page').classList.add('active');
    renderUserBar(window.Auth.current.loginCount || 1);
    if (window.Auth.isAdmin()) {
      var adminEntries0 = document.querySelectorAll('.admin-only');
      for (var k = 0; k < adminEntries0.length; k++) adminEntries0[k].classList.remove('hidden');
    }
    state.currentPage = 'home';
  }

  // 暴露调试入口
  window.__APP__ = { state: state, ALL_WORDS: ALL_WORDS, Auth: window.Auth, saveUserData: saveUserData };
})();