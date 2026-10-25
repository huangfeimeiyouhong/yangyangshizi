/* ===== 阳阳识字 · 应用逻辑 ===== */
'use strict';

/* ---------- 基础工具 ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const view = $('#view');
const modalRoot = $('#modal');
const tabbar = $('#tabbar');
const toastEl = $('#toast');
const bgm = $('#bgm');

const ICON = {
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9z" fill="currentColor"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
  next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
  right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M12 5l7 7-7 7"/></svg>',
  sound: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 9.2v5.6h3.6L13 19V5L7.6 9.2z"/><path d="M16.2 8.6a4.8 4.8 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.9 6a8.3 8.3 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  write: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17z"/><path d="M13.5 6.5l4 4"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3h1.5A1.5 1.5 0 0 1 20 11.5v8A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5v-8A1.5 1.5 0 0 1 5.5 10zm2 0h6V7a3 3 0 0 0-6 0z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.6 2.6-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-3.7v-.2a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-2.6-2.6.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.6-1H2.8v-3.7H3a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.6-2.6.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 9.8 3V2.8H13.5V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.6 2.6-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v3.7h-.2a1.7 1.7 0 0 0-1.6 1z"/></svg>'
};

function mascot(cls = '') {
  return `<svg class="mascot ${cls}" viewBox="0 0 120 120" aria-hidden="true">
    <ellipse cx="60" cy="113" rx="30" ry="5" fill="rgba(70,40,10,.10)"/>
    <path d="M31 110c0-16 13-28 29-28s29 12 29 28z" fill="#2F8C82"/>
    <path d="M53 84h14v10H53z" fill="#FFE3C9"/>
    <circle cx="25" cy="63" r="9" fill="#FFD9BC"/>
    <circle cx="95" cy="63" r="9" fill="#FFD9BC"/>
    <circle cx="60" cy="64" r="32" fill="#FFE3C9"/>
    <path d="M27 53c0-18 15-30 33-30s33 12 33 30c-10-6-21-9-33-9s-23 3-33 9z" fill="#E63946"/>
    <ellipse cx="60" cy="52" rx="37" ry="6.5" fill="#D42F3D"/>
    <ellipse cx="41" cy="76" rx="7" ry="4.4" fill="#FFB9B9" opacity=".75"/>
    <ellipse cx="79" cy="76" rx="7" ry="4.4" fill="#FFB9B9" opacity=".75"/>
    <circle cx="48" cy="66" r="4" fill="#3B2B2B"/>
    <circle cx="72" cy="66" r="4" fill="#3B2B2B"/>
    <circle cx="49.3" cy="64.6" r="1.3" fill="#fff"/>
    <circle cx="73.3" cy="64.6" r="1.3" fill="#fff"/>
    <path d="M51 78q9 10 18 0q-9 3-18 0z" fill="#6E3230"/>
    <path d="M54 78.6q6 3 12 0l-1.6 3.2q-4.6 2.2-8.8 0z" fill="#FF8E8E"/>
    <path d="M42 30c9-5 27-5 36 0" stroke="#fff" stroke-opacity=".0" fill="none"/>
  </svg>`;
}

function starRow(n, max = 3) {
  let s = '<div class="stars">';
  for (let i = 0; i < max; i++) s += `<span class="${i < n ? 'on' : ''}">★</span>`;
  return s + '</div>';
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const hex = s => [...s].map(c => c.codePointAt(0).toString(16)).join('');

/* ---------- 状态 ---------- */
const STORE_KEY = 'yyshizi.v1';
const DEFAULT_PET = { name: '团团', exp: 0, full: 60, mood: 65, meals: 0, plays: 0, owned: [], wearing: [], lastAt: 0, lastPat: 0 };
const DEFAULT_STATE = { stars: {}, mastered: [], traces: 0, wrong: {}, reviewCleared: 0, games: {}, unit: 'nature', coins: 0, pet: DEFAULT_PET, settings: { sfx: true, bgm: false } };
const sumStars = obj => {
  let n = 0;
  for (const k in (obj || {})) n += obj[k] || 0;
  return n;
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const s = JSON.parse(raw);
    const pet = Object.assign(structuredClone(DEFAULT_PET), s.pet || {});
    pet.owned = (s.pet && s.pet.owned) || [];
    pet.wearing = (s.pet && s.pet.wearing) || [];
    return {
      stars: s.stars || {},
      mastered: s.mastered || [],
      traces: s.traces || 0,
      wrong: s.wrong || {},
      reviewCleared: s.reviewCleared || 0,
      games: s.games || {},
      unit: unitById(s.unit || 'nature').id,
      /* 老用户：把已收集的星星一次性转成可用星星，不用重新攒 */
      coins: typeof s.coins === 'number' ? s.coins : sumStars(s.stars),
      pet: pet,
      settings: Object.assign({ sfx: true, bgm: false }, s.settings || {})
    };
  } catch (e) { return structuredClone(DEFAULT_STATE); }
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
}

const allUnitChars = [...new Set(LESSONS.flatMap(l => l.chars))];
const totalStars = () => Object.values(state.stars).reduce((a, b) => a + b, 0);
const coinCount = () => Math.max(0, state.coins || 0);
function earnStars(n) {
  if (!n) return;
  state.coins = coinCount() + n;
  saveState();
}
const lessonById = id => LESSONS.find(l => l.id === id);
const lessonsOfUnit = unitId => LESSONS.filter(l => l.unitId === unitId);
const nextLessonOf = id => {
  const l = lessonById(id);
  const same = lessonsOfUnit(l.unitId);
  const n = same[same.findIndex(x => x.id === id) + 1];
  if (n) return n;
  const ni = UNITS.findIndex(u => u.id === l.unitId) + 1;
  return UNITS[ni] ? lessonById(UNITS[ni].lessons[0].id) : null;
};
const prevLessonOf = id => {
  const l = lessonById(id);
  const same = lessonsOfUnit(l.unitId);
  return same[same.findIndex(x => x.id === id) - 1] || null;
};
const isUnlocked = id => {
  const l = lessonById(id);
  const same = lessonsOfUnit(l.unitId);
  const i = same.findIndex(x => x.id === id);
  return i === 0 || (state.stars[same[i - 1].id] || 0) > 0;
};
const firstUnfinished = unitId => {
  const pool = unitId ? lessonsOfUnit(unitId) : LESSONS;
  const isNew = l => isUnlocked(l.id) && !(state.stars[l.id] > 0);
  return pool.find(isNew) ||
         UNITS.map(u => lessonsOfUnit(u.id).find(isNew)).find(Boolean) ||
         pool.find(l => isUnlocked(l.id)) || pool[0];
};
const doneInUnit = unitId => lessonsOfUnit(unitId).filter(l => (state.stars[l.id] || 0) > 0).length;
const totalDone = () => LESSONS.filter(l => (state.stars[l.id] || 0) > 0).length;
const TOTAL_CHARS = Object.keys(CHARS).length;
const TOTAL_LESSONS = LESSONS.length;
const MAX_STARS = TOTAL_LESSONS * 3;

/* ---------- 游戏角 ---------- */
const STORIES = [
  { id: 'rain', title: '下雨', art: 'assets/img/stage/rain.jpg', audio: 'assets/audio/story/rain.mp3', weather: 'rain', sticker: '🌧️', words: ['下雨', '雨水', '池塘', '云朵'] },
  { id: 'living', title: '客厅', art: 'assets/img/stage/living.jpg', audio: 'assets/audio/story/living.mp3', sticker: '🐠', words: ['客厅', '沙发', '鱼', '花'] },
  { id: 'spring', title: '春夏秋冬', art: 'assets/img/stage/spring.jpg', audio: 'assets/audio/story/seasons.mp3', sticker: '🌸', words: ['春天', '秋天', '冬天', '雪花'] },
  { id: 'winter', title: '冬', art: 'assets/img/stage/night.jpg', audio: 'assets/audio/story/winter.mp3', weather: 'snow', sticker: '⛄', words: ['冬天', '雪人', '雪花', '树'] },
  { id: 'rabbit', title: '守株待兔', art: 'assets/img/stage/forest.jpg', audio: 'assets/audio/story/rabbit.mp3', sticker: '🐰', words: ['森林', '大树', '兔子', '树'] },
  { id: 'balloon', title: '热气球', art: 'assets/img/stage/space.jpg', audio: 'assets/audio/story/balloon.mp3', sticker: '🎈', words: ['热气球', '天空', '星星', '云朵'] },
  { id: 'newyear', title: '过年', art: 'assets/img/stage/family.jpg', audio: 'assets/audio/story/newyear.mp3', sticker: '🏮', words: ['家人', '红色', '灯笼', '年糕'] }
];

const MINI_GAMES = [
  { id: 'guess', name: '手电筒猜字', ico: '🔦', desc: '照一照猜字', rounds: 4 },
  { id: 'theater', name: '场景小剧场', ico: '🎭', desc: '听故事找声音', rounds: STORIES.length },
  { id: 'findSame', name: '找相同', ico: '🔍', desc: '两个一样的字', rounds: 4 },
  { id: 'findDiff', name: '找不同', ico: '👀', desc: '找出不一样', rounds: 4 },
  { id: 'findObject', name: '找一找', ico: '🎈', desc: '听音找图', rounds: 4 },
  { id: 'memory', name: '记忆翻牌', ico: '🃏', desc: '字图配对', rounds: 1 },
  { id: 'order', name: '图片排序', ico: '🧩', desc: '拼好四块图', rounds: 3 },
  { id: 'rotate', name: '旋转拼图', ico: '🔄', desc: '转正每一块', rounds: 3 },
  { id: 'grid', name: '九宫格', ico: '🟦', desc: '交换方块', rounds: 2 }
];
const miniGame = id => MINI_GAMES.find(g => g.id === id) || MINI_GAMES[0];

/* ---------- 错题 ---------- */
const wrongList = () => Object.keys(state.wrong).filter(c => CHARS[c] && state.wrong[c] > 0);
const wrongQueue = () => wrongList().sort((a, b) => state.wrong[b] - state.wrong[a]).slice(0, 10);
function markWrong(c) {
  if (!CHARS[c]) return;
  state.wrong[c] = (state.wrong[c] || 0) + 1;
  saveState();
}

/* ---------- 音频 ---------- */
let currentAudio = null;
let audioCtxUnlocked = false;

function stopAudio() {
  if (currentAudio) {
    try { currentAudio.pause(); currentAudio.currentTime = 0; } catch (e) {}
    currentAudio = null;
  }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

function speak(text, rate = 0.78) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'zh-CN';
  u.rate = rate;
  u.pitch = 1.12;
  const voices = speechSynthesis.getVoices();
  const v = voices.find(x => /zh[-_]CN|Chinese|中文|普通话/i.test(x.lang + x.name));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

function playFile(src, fallbackText) {
  stopAudio();
  const a = new Audio(encodeURI(src));
  a.volume = 1;
  currentAudio = a;
  return a.play().catch(() => { if (fallbackText) speak(fallbackText); });
}

const slugOf = c => AUDIO_SLUG[c] || `u${hex(c)}`;
const charAudio = c => `assets/audio/char/${slugOf(c)}.mp3`;
const meaningAudio = c => `assets/audio/meaning/${slugOf(c)}.mp3`;
const wordAudio = w => `assets/audio/word/${hex(w)}.mp3`;
const sentenceAudio = s => `assets/audio/sentence/${hex(s)}.mp3`;

const playChar = c => playFile(charAudio(c), c);
const playWord = w => BUNDLED_WORDS.includes(w) ? playFile(wordAudio(w), w) : speak(w, 0.7);
const playSentence = s => BUNDLED_SENTENCES.includes(s) ? playFile(sentenceAudio(s), s) : BUNDLED_WORDS.includes(s) ? playWord(s) : speak(s, 0.72);

// 先读汉字，再读一句解释
function playCharAndMeaning(c) {
  stopAudio();
  const a = new Audio(encodeURI(charAudio(c)));
  currentAudio = a;
  a.onended = () => {
    const b = new Audio(encodeURI(meaningAudio(c)));
    currentAudio = b;
    b.onerror = () => speak(`${c}，${CHARS[c].meaning}`, 0.8);
    b.play().catch(() => speak(`${c}，${CHARS[c].meaning}`, 0.8));
  };
  a.play().catch(() => speak(`${c}，${CHARS[c].meaning}`, 0.8));
}

function fx(name) {
  if (!state.settings.sfx) return;
  const a = new Audio(encodeURI(`assets/fx/${name}.mp3`));
  a.volume = 0.5;
  a.play().catch(() => {});
}

function applyBgm() {
  if (state.settings.bgm) {
    bgm.volume = 0.22;
    bgm.play().catch(() => {});
  } else {
    bgm.pause();
  }
}

/* ---------- 通用 UI ---------- */
let toastTimer = null;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1800);
}

function openModal(html, cls = '') {
  modalRoot.hidden = false;
  modalRoot.innerHTML = `<div class="sheet ${cls}" role="dialog" aria-modal="true"><div class="sheet-grip"></div>${html}</div>`;
  modalRoot.firstElementChild.addEventListener('click', e => e.stopPropagation());
  modalRoot.onclick = closeModal;
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  if (activeWriter) { try { activeWriter.cancelQuiz(); } catch (e) {} activeWriter = null; }
  modalRoot.hidden = true;
  modalRoot.innerHTML = '';
  document.body.style.overflow = '';
}

/* ---------- 汉字笔画 ---------- */
let activeWriter = null;
const charDataLoader = (char, onComplete, onError) => {
  // 打包的笔顺数据优先，保证 file:// 直接打开也能用
  if (window.HANZI_DATA && window.HANZI_DATA[char]) { onComplete(window.HANZI_DATA[char]); return; }
  fetch(`assets/hanzi/${encodeURIComponent(char)}.json`)
    .then(r => { if (!r.ok) throw new Error('no data'); return r.json(); })
    .then(onComplete)
    .catch(onError);
};
function createWriter(el, char, opts = {}) {
  const w = el.clientWidth || 280;
  return HanziWriter.create(el, char, Object.assign({
    width: w,
    height: w,
    padding: 8,
    showOutline: true,
    showCharacter: false,
    strokeColor: '#33302E',
    outlineColor: '#E4D6C0',
    highlightColor: '#FFB03B',
    drawingColor: '#FF8A00',
    strokeAnimationSpeed: 0.9,
    delayBetweenStrokes: 160,
    charDataLoader
  }, opts));
}

/* ---------- 首页 ---------- */
function renderHome() {
  const unit = unitById(state.unit);
  const done = totalDone();
  const learned = state.mastered.length;
  const unitDone = doneInUnit(unit.id);
  const allDone = done >= TOTAL_LESSONS;
  const next = firstUnfinished(unit.id);
  const cta = learned === 0 ? '开始学习' : allDone ? '再学一遍' : '继续学习';
  const wrongs = wrongList().length;
  tabbar.hidden = false;
  setTab('home');

  view.innerHTML = `
  <div class="screen home-screen">
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">阳</div>
        <div class="brand-text"><b>阳阳识字</b><span>KIDS CHINESE</span></div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <div class="star-pill"><span class="star-ico">★</span>${coinCount()}<small>可用</small></div>
        <button class="icon-btn" data-act="profile" aria-label="我的">${ICON.gear}</button>
      </div>
    </header>

    <div class="home-cols">
    <div class="home-col-main">
    <section class="hero">
      <div class="hero-main">
        <div class="hero-copy">
          <span class="hero-kicker">🌱 ${unit.name} · ${unit.label}</span>
          <h1>和阳阳一起<br>认识身边的汉字</h1>
          <p>看图画、听声音、动手写，<br>每天认识四个字。</p>
          <div class="hero-actions">
            <button class="btn-hero" data-act="continue">${cta} ${ICON.next}</button>
          </div>
        </div>
        <div class="hero-mascot">${mascot()}</div>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><b>${learned}<small style="font-size:11px;opacity:.8"> / ${TOTAL_CHARS}</small></b><span>认识汉字</span></div>
        <div class="hero-stat"><b>${totalStars()}<small style="font-size:11px;opacity:.8"> / ${MAX_STARS}</small></b><span>收集星星</span></div>
        <div class="hero-stat"><b>${done}<small style="font-size:11px;opacity:.8"> / ${TOTAL_LESSONS}</small></b><span>完成课程</span></div>
      </div>
    </section>

    <div class="unit-tabs">
      ${UNITS.map(u => `<button class="unit-tab ${u.id === unit.id ? 'active' : ''}" data-unit="${u.id}">
        ${u.name}<small>${doneInUnit(u.id)}/${u.lessons.length}</small>
      </button>`).join('')}
    </div>

    <div class="unit-band">
      <div class="unit-band-left">
        <img src="${unit.covers[0]}" alt="${unit.name}单元">
        <div><b>${unit.name} · ${unit.label}</b><small>${unit.intro}</small></div>
      </div>
      <div class="unit-progress">
        <div class="bar"><i style="width:${(unitDone / unit.lessons.length) * 100}%"></i></div>
        ${unitDone}/${unit.lessons.length}
      </div>
    </div>

    </div>
    <div class="home-col-map">
    <div class="section-title"><h2>学习地图</h2><span>完成一课，解锁下一课</span></div>

    <div class="path">
      ${lessonsOfUnit(unit.id).map(l => {
        const unlocked = isUnlocked(l.id);
        const stars = state.stars[l.id] || 0;
        return `
        <div class="path-row">
          <button class="lesson-card ${unlocked ? '' : 'locked'}" data-lesson="${l.id}" data-locked="${unlocked ? 0 : 1}">
            <div class="lesson-cover-wrap">
              <img class="lesson-cover" src="${l.cover}" alt="">
              <span class="lesson-number">${l.index}</span>
              ${unlocked ? '' : `<span class="lock-badge">${ICON.lock}</span>`}
            </div>
            <div class="lesson-info">
              <b>${l.title}</b>
              <div class="lesson-chars">${l.chars.join(' ')}</div>
              ${starRow(stars)}
            </div>
            <span class="lesson-go">${unlocked ? ICON.next : ICON.lock}</span>
          </button>
        </div>`;
      }).join('')}
    </div>
    </div>
    </div>

    <div class="home-reviews">
    <button class="review-card" data-act="reviewWrong" style="width:100%;text-align:left">
      <span class="r-ico">📝</span>
      <span style="flex:1"><b>错题复习</b><span>${wrongs ? `还有 ${wrongs} 个字没记牢，来复习一下` : '还没有错题，去闯关试试吧'}</span></span>
      ${wrongs ? `<span class="review-badge">${wrongs}</span>` : ICON.next}
    </button>

    <button class="review-card" data-act="review" style="width:100%;text-align:left">
      <span class="r-ico">📚</span>
      <span style="flex:1"><b>去字库复习</b><span>${TOTAL_CHARS} 个汉字，随时点开听一听</span></span>
      ${ICON.next}
    </button>
    </div>

    <div class="section-title"><h2>游戏角</h2><span>玩一玩，记得更牢</span></div>
    <div class="game-strip">
      ${MINI_GAMES.map(g => `
        <button class="game-tile" data-game="${g.id}">
          <span class="g-ico">${g.ico}</span>
          <b>${g.name}</b>
          <small>${g.desc}</small>
          ${state.games[g.id] ? `<span class="g-stars">${'★'.repeat(state.games[g.id])}</span>` : ''}
        </button>`).join('')}
    </div>
  </div>`;

  $$('.unit-tab').forEach(el => el.addEventListener('click', () => {
    state.unit = el.dataset.unit;
    saveState();
    renderHome();
    window.scrollTo(0, 0);
  }));
  $$('[data-lesson]').forEach(el => el.addEventListener('click', () => {
    const id = el.dataset.lesson;
    if (el.dataset.locked === '1') {
      const prev = prevLessonOf(id);
      toast(prev ? `先完成第 ${prev.index} 课，就能解锁啦` : '先完成前面的课程吧');
      return;
    }
    goLesson(id);
  }));
  $('[data-act="continue"]').onclick = () => goLesson(next.id);
  $('[data-act="profile"]').onclick = () => location.hash = '#/profile';
  $('[data-act="reviewWrong"]').onclick = startReview;
  $('[data-act="review"]').onclick = () => location.hash = '#/library';
  $$('[data-game]').forEach(el => el.addEventListener('click', () => startMiniGame(el.dataset.game)));
}

/* ---------- 学习页 ---------- */
let cur = { lessonId: null, learnIndex: 0, game: null, result: null };

function goLesson(id) {
  const l = lessonById(id);
  if (l) { state.unit = l.unitId; saveState(); }
  cur = { lessonId: id, learnIndex: 0, game: null, result: null };
  closeModal();
  if (location.hash === `#/lesson/${id}`) renderRoute(); else location.hash = `#/lesson/${id}`;
  window.scrollTo(0, 0);
}

function renderLesson(id) {
  const lesson = lessonById(id);
  if (!lesson) { location.hash = '#/home'; return; }
  if (!isUnlocked(id) && cur.lessonId !== id) {
    toast('先完成前面的课程，再来这里哦');
    location.hash = '#/home';
    return;
  }
  if (cur.lessonId !== id) cur = { lessonId: id, learnIndex: 0, game: null, result: null };
  tabbar.hidden = true;

  if (cur.result) return renderResult(lesson, cur.result);
  if (cur.game) return renderGame(lesson, cur.game);
  return renderLearn(lesson);
}

function lessonHeader(lesson, extra = '') {
  return `
  <div class="subbar">
    <button class="icon-btn" data-act="back" aria-label="返回">${ICON.back}</button>
    <div class="titles">
      <h1>第 ${lesson.index} 课 · ${lesson.title}</h1>
      <p>${lesson.unitName} · ${lesson.subtitle}</p>
    </div>
    ${extra}
  </div>`;
}

function renderLearn(lesson) {
  const i = cur.learnIndex;
  const char = lesson.chars[i];
  const info = CHARS[char];
  const isLast = i === lesson.chars.length - 1;

  view.innerHTML = `
  <div class="screen">
    ${lessonHeader(lesson, `<div class="star-pill"><span class="star-ico">★</span>${state.stars[lesson.id] || 0}</div>`)}
    <div class="learn-head">
      ${lesson.chars.map((_, k) => `<span class="learn-dot ${k === i ? 'active' : ''}"></span>`).join('')}
    </div>

    <div class="card-stage">
      ${i > 0 ? `<button class="card-nav prev" data-act="prev" aria-label="上一个">${ICON.back}</button>` : ''}
      <div class="char-card tone-${lesson.tone}">
        <div class="char-visual">
          <div class="pinyin-pill">${PINYIN[char]}</div>
          <div class="glyph">${char}</div>
          <div class="char-illus">${info.emoji}</div>
        </div>
        <div class="char-detail">
          <p class="char-meaning">${info.meaning}</p>
          <div class="word-chips">
            ${info.words.map(w => `<button class="word-chip" data-word="${w}">${ICON.sound}${w}</button>`).join('')}
          </div>
          ${info.sentence ? `<button class="sentence-line" data-sentence="${info.sentence}">${ICON.sound}<span>${info.sentence}</span><small>读一读</small></button>` : ''}
          <div class="char-actions">
            <button class="btn btn-ghost" data-act="hear">${ICON.sound} 听一听</button>
            <button class="btn btn-ghost" data-act="write">${ICON.write} 写一写</button>
          </div>
        </div>
      </div>
      ${!isLast ? `<button class="card-nav next" data-act="next" aria-label="下一个">${ICON.next}</button>` : ''}
    </div>

    <div class="learn-footer">
      ${isLast
        ? `<button class="btn btn-primary btn-block" data-act="startGame">开始闯关 ${ICON.right}</button>`
        : `<button class="btn btn-primary btn-block" data-act="next">下一个字 ${ICON.next}</button>`}
      <p class="learn-hint">先听一听，再看看它的样子，最后用手指写一写</p>
    </div>
  </div>`;

  // 进入卡片时自动读一遍
  clearTimeout(renderLearn._t);
  renderLearn._t = setTimeout(() => playChar(char), 380);

  $('[data-act="back"]').onclick = () => location.hash = '#/home';
  $('[data-act="hear"]').onclick = () => playCharAndMeaning(char);
  $('[data-act="write"]').onclick = () => openWriteSheet(char, { onDone: () => toast('写得真好！') });
  $$('[data-word]').forEach(el => el.addEventListener('click', () => {
    playWord(el.dataset.word);
    popStar(el);
  }));
  $$('[data-sentence]').forEach(el => el.addEventListener('click', () => {
    playSentence(el.dataset.sentence);
    popStar(el);
  }));
  $$('[data-act="next"]').forEach(el => el.onclick = () => {
    cur.learnIndex = Math.min(i + 1, lesson.chars.length - 1);
    renderLearn(lesson);
  });
  const prevBtn = $('[data-act="prev"]');
  if (prevBtn) prevBtn.onclick = () => { cur.learnIndex = Math.max(i - 1, 0); renderLearn(lesson); };
  const start = $('[data-act="startGame"]');
  if (start) start.onclick = () => {
    cur.game = createGame(lesson);
    renderLesson(lesson.id);
  };

  bindSwipe(lesson);
}

function bindSwipe(lesson) {
  const stage = $('.card-stage');
  if (!stage) return;
  let sx = 0, sy = 0;
  stage.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) < 55 || Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0 && cur.learnIndex < lesson.chars.length - 1) { cur.learnIndex++; renderLearn(lesson); }
    if (dx > 0 && cur.learnIndex > 0) { cur.learnIndex--; renderLearn(lesson); }
  }, { passive: true });
}

function popStar(el) {
  const r = el.getBoundingClientRect();
  const s = document.createElement('span');
  s.className = 'fly-star';
  s.textContent = '★';
  s.style.left = r.left + r.width / 2 + 'px';
  s.style.top = r.top + 'px';
  s.style.color = '#FFC24B';
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 800);
}

/* ---------- 闯关逻辑 ---------- */
function wordWithChar(c, pool) {
  const words = CHARS[c].words;
  return pick(words);
}

function createGame(lesson) {
  const chars = [...new Set(lesson.chars)];
  const g1 = shuffle(chars).slice(0, 3);
  const g2 = shuffle(chars).slice(0, 3).map(c => ({ char: c, word: wordWithChar(c) }));
  const g3 = shuffle(lesson.spell).slice(0, 3);
  const g4 = shuffle(chars).slice(0, 2);
  return { stage: 0, q: 0, mistakes: 0, chars, g1, g2, g3, g4, spell: { tiles: [], slots: [] }, locked: false };
}

function unitOptions(target, n = 4) {
  const pool = allUnitChars.filter(c => c !== target);
  return shuffle([target, ...shuffle(pool).slice(0, n - 1)]);
}

function renderGame(lesson, game) {
  view.innerHTML = `
  <div class="screen">
    ${lessonHeader(lesson, `<button class="icon-btn" data-act="quit" aria-label="退出">${ICON.x}</button>`)}
    <div class="game-progress">
      ${GAME_NAMES.map((_, k) => `<i class="${k < game.stage ? 'done' : k === game.stage ? 'now' : ''}"></i>`).join('')}
    </div>
    <div id="game-body"></div>
  </div>`;

  $('[data-act="back"]').onclick = () => { cur.game = null; renderLesson(lesson.id); };
  $('[data-act="quit"]').onclick = () => askQuit(lesson);

  const body = $('#game-body');
  if (game.stage === 0) renderHearChar(body, lesson, game);
  else if (game.stage === 1) renderHearWord(body, lesson, game);
  else if (game.stage === 2) renderSpell(body, lesson, game);
  else if (game.stage === 3) renderTraceGame(body, lesson, game);
  else finishGame(lesson, game);
}

function askQuit(lesson) {
  openModal(`
    <div class="sheet-head"><h2>要离开闯关吗？</h2></div>
    <p style="font-size:14px;color:var(--ink-soft);margin:0 0 18px">刚才的星星还没有收下哦，闯完这一关再走吧！</p>
    <div style="display:flex;gap:10px">
      <button class="btn btn-ghost" style="flex:1" data-act="stay">继续闯关</button>
      <button class="btn btn-primary" style="flex:1" data-act="leave">离开</button>
    </div>
  `);
  $('[data-act="stay"]').onclick = closeModal;
  $('[data-act="leave"]').onclick = () => { closeModal(); cur.game = null; renderLesson(lesson.id); };
}

function gamePrompt(text, extra = '') {
  return `<div class="prompt">
    <div class="prompt-mascot">${mascot()}</div>
    <div class="bubble">${text}</div>
  </div>${extra}`;
}

function nextQuestion(lesson, game) {
  game.q++;
  game.locked = false;
  const counts = [game.g1.length, game.g2.length, game.g3.length, game.g4.length];
  if (game.q >= counts[game.stage]) {
    game.stage++;
    game.q = 0;
  }
  setTimeout(() => renderLesson(lesson.id), 300);
}

/* 第一关：听音找字 */
function renderHearChar(body, lesson, game) {
  const target = game.g1[game.q];
  const options = unitOptions(target);
  body.innerHTML = `
    ${gamePrompt('听一听，阳阳读的是哪个字？')}
    <button class="speaker" data-act="speaker" aria-label="再听一次">${ICON.sound}</button>
    <div class="options">
      ${options.map(c => `<button class="option" data-char="${c}">${c}</button>`).join('')}
    </div>
    <p class="learn-hint">点一点大喇叭，可以再听一次</p>`;

  setTimeout(() => playChar(target), 420);
  $('[data-act="speaker"]').onclick = () => playChar(target);

  $$('.option').forEach(el => el.addEventListener('click', () => {
    if (game.locked) return;
    const c = el.dataset.char;
    if (c === target) {
      game.locked = true;
      el.classList.add('correct');
      el.insertAdjacentHTML('beforeend', `<span class="tick">${ICON.check}</span>`);
      fx('correct');
      playChar(target);
      nextQuestion(lesson, game);
    } else {
      el.classList.add('wrong');
      game.mistakes++;
      markWrong(target);
      fx('incorrect');
      setTimeout(() => el.classList.remove('wrong'), 480);
      speak('再听一听', 0.9);
    }
  }));
}

/* 第二关：听词找字 */
function renderHearWord(body, lesson, game) {
  const item = game.g2[game.q];
  const options = unitOptions(item.char);
  body.innerHTML = `
    ${gamePrompt('听一听词语，找出藏在里面的字')}
    <button class="speaker" data-act="speaker" aria-label="再听一次">${ICON.sound}</button>
    <div class="options">
      ${options.map(c => `<button class="option" data-char="${c}">${c}</button>`).join('')}
    </div>
    <p class="learn-hint">词语里有一个字，就在下面四个字中</p>`;

  setTimeout(() => playWord(item.word), 420);
  $('[data-act="speaker"]').onclick = () => playWord(item.word);

  $$('.option').forEach(el => el.addEventListener('click', () => {
    if (game.locked) return;
    const c = el.dataset.char;
    if (c === item.char) {
      game.locked = true;
      el.classList.add('correct');
      el.insertAdjacentHTML('beforeend', `<span class="tick">${ICON.check}</span>`);
      fx('correct');
      const bubble = $('.bubble');
      bubble.innerHTML = `找到啦！<b>${item.word}</b> 里的「${item.char}」`;
      playWord(item.word);
      nextQuestion(lesson, game);
    } else {
      el.classList.add('wrong');
      game.mistakes++;
      markWrong(item.char);
      fx('incorrect');
      setTimeout(() => el.classList.remove('wrong'), 480);
    }
  }));
}

/* 第三关：拼词 */
const WORD_EMOJI = {
  下雨: '🌧️', 大雨: '🌧️', 小雨: '🌦️', 天上: '🌤️', 天空: '🌤️', 上下: '↕️',
  白云: '☁️', 云朵: '☁️', 月亮: '🌙', 月光: '🌙', 火山: '🌋', 大水: '🌊',
  山上: '⛰️', 火苗: '🔥', 大火: '🔥', 木头: '🪵', 木马: '🐴', 木星: '🪐',
  星星: '⭐', 明星: '🌟', 星光: '✨', 日月: '🌞', 白雪: '❄️', 雪花: '❄️',
  雪人: '⛄', 石头: '🪨', 太阳: '🌞', 阳光: '🌅', 雷雨: '⛈️', 田地: '🌾',
  田里: '🌾', 种田: '🌾', 森林: '🌲', 树林: '🌳', 小树林: '🌳', 山水: '🏞️',
  雨水: '💧', 生日: '🎂', 日子: '📅', 明天: '🌅', 光明: '💡', 泥土: '🌱',
  土豆: '🥔', 石子: '🪨', 雷声: '⚡', 小鸟: '🐦', 小树: '🌱', 大山: '⛰️'
};
const wordEmoji = w => WORD_EMOJI[w] || (CHARS[w[0]] ? CHARS[w[0]].emoji : '📖');

function resetSpell(game) {
  const word = game.g3[game.q];
  game.spell = { tiles: shuffle([...word]).map(c => ({ char: c, used: false })), slots: [] };
}

function renderSpell(body, lesson, game) {
  if (!game.spell.tiles.length || game.spell.word !== game.g3[game.q]) {
    resetSpell(game);
    game.spell.word = game.g3[game.q];
  }
  const word = game.g3[game.q];
  body.innerHTML = `
    ${gamePrompt('把字排一排，拼出这个词')}
    <div class="spell-card">
      <div class="spell-emoji">${wordEmoji(word)}</div>
      <button class="btn btn-ghost" data-act="speaker" style="height:40px;padding:0 18px;font-size:14px;margin:0 auto 14px">${ICON.sound} 再听一次</button>
      <div class="slots">
        ${word.split('').map((_, k) => `<div class="slot ${game.spell.slots[k] ? 'filled' : ''}" data-slot="${k}">${game.spell.slots[k] || ''}</div>`).join('')}
      </div>
      <div class="tiles">
        ${game.spell.tiles.map((t, k) => `<button class="tile ${t.used ? 'used' : ''}" data-tile="${k}">${t.char}</button>`).join('')}
      </div>
      <div class="spell-actions">
        <button class="btn btn-ghost" data-act="reset">${ICON.refresh} 重排</button>
      </div>
    </div>`;

  $('[data-act="speaker"]').onclick = () => playWord(word);
  setTimeout(() => playWord(word), 450);

  $$('[data-tile]').forEach(el => el.addEventListener('click', () => {
    const k = +el.dataset.tile;
    const t = game.spell.tiles[k];
    if (t.used || game.spell.slots.length >= word.length) return;
    t.used = true;
    game.spell.slots.push(t.char);
    el.classList.add('used');
    const slot = $(`[data-slot="${game.spell.slots.length - 1}"]`);
    if (slot) { slot.textContent = t.char; slot.classList.add('filled'); }
    fx('click_1');

    if (game.spell.slots.length === word.length) {
      if (game.spell.slots.join('') === word) {
        $$('.slot').forEach(s => s.classList.add('ok'));
        fx('correct');
        playWord(word);
        nextQuestion(lesson, game);
      } else {
        game.mistakes++;
        word.split('').forEach(markWrong);
        $$('.slot').forEach(s => s.classList.add('bad'));
        fx('incorrect');
        setTimeout(() => {
          game.spell = { tiles: game.spell.tiles.map(t => Object.assign({}, t, { used: false })), slots: [], word };
          renderSpell(body, lesson, game);
        }, 750);
      }
    }
  }));

  $('[data-act="reset"]').onclick = () => {
    game.spell.slots = [];
    game.spell.tiles = shuffle(game.spell.tiles.map(t => ({ char: t.char, used: false })));
    game.spell.word = word;
    renderSpell(body, lesson, game);
  };
}

/* 第四关：描红 */
function renderTraceGame(body, lesson, game) {
  const char = game.g4[game.q];
  body.innerHTML = `
    ${gamePrompt(`跟着笔画，写一写「${char}」`)}
    <div class="trace-card">
      <div class="trace-char-label">${PINYIN[char]} · ${char}</div>
      <div class="trace-box"><div class="writer" id="trace-writer"></div></div>
      <div class="trace-actions">
        <button class="btn btn-ghost" data-act="demo">${ICON.sound} 看笔顺</button>
        <button class="btn btn-ghost" data-act="again">${ICON.refresh} 重新写</button>
      </div>
      <div id="trace-done" style="display:none;margin-top:12px">
        <button class="btn btn-teal btn-block" data-act="nextChar">写好啦，继续 ${ICON.right}</button>
      </div>
    </div>`;

  const host = $('#trace-writer');
  requestAnimationFrame(() => {
    const el = $('#trace-writer');
    if (!el) return;
    activeWriter = createWriter(el, char);
    activeWriter.quiz({
      showHintAfterMisses: 2,
      highlightOnComplete: true,
      onMistake: () => { game.mistakes++; markWrong(char); fx('incorrect'); },
      onComplete: () => {
        state.traces++;
        saveState();
        fx('score_1');
        speak('写对啦', 0.95);
        $('#trace-done').style.display = 'block';
        $('.trace-actions').style.display = 'none';
      }
    });
  });

  setTimeout(() => speak(`写一写，${char}`, 0.8), 400);
  $('[data-act="demo"]').onclick = () => {
    activeWriter.cancelQuiz();
    activeWriter.animateCharacter({ onComplete: () => startQuiz() });
  };
  $('[data-act="again"]').onclick = () => startQuiz();
  function startQuiz() {
    $('#trace-done').style.display = 'none';
    $('.trace-actions').style.display = 'flex';
    activeWriter.quiz({
      showHintAfterMisses: 2,
      highlightOnComplete: true,
      onMistake: () => { game.mistakes++; markWrong(char); fx('incorrect'); },
      onComplete: () => {
        state.traces++;
        saveState();
        fx('score_1');
        speak('写对啦', 0.95);
        $('#trace-done').style.display = 'block';
        $('.trace-actions').style.display = 'none';
      }
    });
  }
  $('[data-act="nextChar"]').onclick = () => {
    activeWriter = null;
    nextQuestion(lesson, game);
  };
}

/* 结算 */
function finishGame(lesson, game) {
  const mistakes = game.mistakes;
  const stars = mistakes <= 2 ? 3 : mistakes <= 5 ? 2 : 1;
  const prev = state.stars[lesson.id] || 0;
  state.stars[lesson.id] = Math.max(prev, stars);
  lesson.chars.forEach(c => { if (!state.mastered.includes(c)) state.mastered.push(c); });
  earnStars(stars);
  saveState();
  cur.result = { stars, mistakes };
  cur.game = null;
  renderLesson(lesson.id);
}

function renderResult(lesson, result) {
  const next = nextLessonOf(lesson.id);
  const stars = result.stars;
  fx('score_1');
  burstConfetti(1400);
  tabbar.hidden = true;

  view.innerHTML = `
  <div class="screen result">
    <div class="result-mascot">${mascot()}</div>
    <h1>${stars === 3 ? '太棒啦！' : stars === 2 ? '真不错！' : '完成啦！'}</h1>
    <p>第 ${lesson.index} 课 · ${lesson.title} 闯关成功</p>
    <div class="big-stars">
      ${[0, 1, 2].map(i => `<span class="big-star ${i < stars ? 'on' : ''}">${ICON.star}</span>`).join('')}
    </div>
    <div class="result-stats">
      <div class="result-stat"><b>${lesson.chars.length}</b><span>认识汉字</span></div>
      <div class="result-stat"><b>${result.mistakes}</b><span>小失误</span></div>
      <div class="result-stat"><b>+${stars}</b><span>可用星星</span></div>
    </div>
    <button class="pet-invite" data-act="pet">
      <span class="pi-cat">🐱</span>
      <span class="pi-copy"><b>团团还在小窝里等你</b><small>用星星给它买小鱼干吃</small></span>
      <span class="pi-go">${ICON.next}</span>
    </button>
    <div class="result-actions">
      ${next ? `<button class="btn btn-primary" data-act="nextLesson">${next.unitId === lesson.unitId ? `进入第 ${next.index} 课` : `${next.unitName}单元 · ${next.title}`} ${ICON.right}</button>` : ''}
      <button class="btn btn-teal" data-act="backHome">回到首页</button>
      <button class="btn btn-ghost" data-act="replay">${ICON.refresh} 再玩一次</button>
    </div>
  </div>`;

  const nextBtn = $('[data-act="nextLesson"]');
  if (nextBtn) nextBtn.onclick = () => goLesson(next.id);
  $('[data-act="pet"]').onclick = () => { cur = { lessonId: null, learnIndex: 0, game: null, result: null }; location.hash = '#/pet'; };
  $('[data-act="backHome"]').onclick = () => { cur = { lessonId: null, learnIndex: 0, game: null, result: null }; location.hash = '#/home'; };
  $('[data-act="replay"]').onclick = () => {
    cur.result = null;
    cur.learnIndex = 0;
    cur.game = null;
    renderLesson(lesson.id);
  };
}

/* ---------- 错题复习 ---------- */
let review = null;

function startReview() {
  review = { queue: wrongQueue(), index: 0, cleared: 0, mistakes: 0, locked: false };
  cur = { lessonId: null, learnIndex: 0, game: null, result: null };
  closeModal();
  if (location.hash === '#/review') renderReview(); else location.hash = '#/review';
  window.scrollTo(0, 0);
}

function clearWrong(c) {
  if (!state.wrong[c]) return;
  delete state.wrong[c];
  saveState();
}

function renderReview() {
  tabbar.hidden = true;
  if (!review) review = { queue: wrongQueue(), index: 0, cleared: 0, mistakes: 0, locked: false };
  if (!review.queue.length) return renderReviewEmpty();
  if (review.index >= review.queue.length) return renderReviewResult();

  const target = review.queue[review.index];
  const options = unitOptions(target);
  const pct = (review.index / review.queue.length) * 100;

  view.innerHTML = `
  <div class="screen">
    <div class="subbar">
      <button class="icon-btn" data-act="back" aria-label="返回">${ICON.back}</button>
      <div class="titles"><h1>错题复习</h1><p>听一听，找出阳阳读的字</p></div>
      <span class="review-count">${review.cleared} 个已记牢</span>
    </div>
    <div class="review-progress">
      <div class="bar"><i style="width:${pct}%"></i></div>
      <span>${review.index + 1} / ${review.queue.length}</span>
    </div>
    ${gamePrompt('听一听，阳阳读的是哪个字？')}
    <button class="speaker" data-act="speaker" aria-label="再听一次">${ICON.sound}</button>
    <div class="options">
      ${options.map(c => `<button class="option" data-char="${c}">${c}</button>`).join('')}
    </div>
    <p class="learn-hint">点一点大喇叭，可以再听一次</p>
  </div>`;

  setTimeout(() => playChar(target), 420);
  $('[data-act="back"]').onclick = () => { review = null; location.hash = '#/home'; };
  $('[data-act="speaker"]').onclick = () => playChar(target);

  $$('.option').forEach(el => el.addEventListener('click', () => {
    if (review.locked) return;
    const c = el.dataset.char;
    const bubble = $('.bubble');
    if (c === target) {
      review.locked = true;
      review.cleared++;
      state.reviewCleared = (state.reviewCleared || 0) + 1;
      earnStars(1);
      saveState();
      clearWrong(target);
      el.classList.add('correct');
      el.insertAdjacentHTML('beforeend', `<span class="tick">${ICON.check}</span>`);
      fx('correct');
      bubble.innerHTML = `答对啦！这个字是「<b>${target}</b>」，读作 ${PINYIN[target]}`;
      playCharAndMeaning(target);
      setTimeout(() => { review.index++; review.locked = false; renderReview(); }, 1650);
    } else {
      el.classList.add('wrong');
      review.mistakes++;
      markWrong(target);
      fx('incorrect');
      $$('.option').forEach(x => {
        if (x.dataset.char === target) x.classList.add('correct');
      });
      bubble.innerHTML = `再听一听，阳阳读的是「<b>${target}</b>」`;
      setTimeout(() => el.classList.remove('wrong'), 480);
      setTimeout(() => { review.index++; review.locked = false; renderReview(); }, 1900);
    }
  }));
}

function renderReviewEmpty() {
  tabbar.hidden = true;
  view.innerHTML = `
  <div class="screen">
    <div class="subbar">
      <button class="icon-btn" data-act="back" aria-label="返回">${ICON.back}</button>
      <div class="titles"><h1>错题复习</h1><p>把没记住的字再认一遍</p></div>
    </div>
    <div class="review-empty">
      <div class="empty-ico">🎉</div>
      <h2>还没有错题</h2>
      <p>去闯关吧，答错和写错的字会自动收进这里，<br>下次就能专门复习啦。</p>
      <button class="btn btn-primary btn-block" data-act="goLearn">去学习 ${ICON.right}</button>
    </div>
  </div>`;
  $('[data-act="back"]').onclick = () => { review = null; location.hash = '#/home'; };
  $('[data-act="goLearn"]').onclick = () => { review = null; location.hash = '#/home'; };
}

function renderReviewResult() {
  tabbar.hidden = true;
  const left = wrongList().length;
  fx('score_1');
  burstConfetti(1200);
  view.innerHTML = `
  <div class="screen result">
    <div class="result-mascot">${mascot()}</div>
    <h1>${left ? '复习完成！' : '全部记牢啦！'}</h1>
    <p>${left ? `还有 ${left} 个字需要再看看` : '错题都消灭了，真棒！'}</p>
    <div class="result-stats">
      <div class="result-stat"><b>${review.cleared}</b><span>答对记牢</span></div>
      <div class="result-stat"><b>${review.queue.length - review.cleared}</b><span>需再巩固</span></div>
      <div class="result-stat"><b>${left}</b><span>剩余错题</span></div>
    </div>
    <div class="result-actions">
      ${left ? `<button class="btn btn-primary" data-act="again">再复习一次 ${ICON.right}</button>` : ''}
      <button class="btn btn-teal" data-act="backHome">回到首页</button>
      <button class="btn btn-ghost" data-act="library">去字库看看</button>
    </div>
  </div>`;
  const again = $('[data-act="again"]');
  if (again) again.onclick = startReview;
  $('[data-act="backHome"]').onclick = () => { review = null; location.hash = '#/home'; };
  $('[data-act="library"]').onclick = () => { review = null; location.hash = '#/library'; };
}

/* ---------- 游戏角 ---------- */
let mini = null;
const miniHash = () => (location.hash.split('/')[2] || '').replace(/\?.*$/, '');

function startMiniGame(id) {
  const g = miniGame(id);
  mini = { id: g.id, round: 0, total: g.rounds, mistakes: 0, data: null };
  cur = { lessonId: null, learnIndex: 0, game: null, result: null };
  closeModal();
  if (location.hash === `#/game/${g.id}`) renderMini(); else location.hash = `#/game/${g.id}`;
  window.scrollTo(0, 0);
}

function renderMini() {
  tabbar.hidden = true;
  const id = miniHash();
  if (!mini || (id && mini.id !== id)) {
    const g = miniGame(id);
    mini = { id: g.id, round: 0, total: g.rounds, mistakes: 0, data: null };
  }
  const g = miniGame(mini.id);
  if (mini.round >= mini.total) return renderMiniResult(g);
  ({
    guess: renderGuess,
    theater: renderTheater,
    findSame: renderFindSame,
    findDiff: renderFindDiff,
    findObject: renderFindObject,
    memory: renderMemory,
    order: renderOrder,
    rotate: renderRotate,
    grid: renderGrid
  })[mini.id](g);
}

function miniShell(g, subtitle, body, label) {
  const pct = (mini.round / mini.total) * 100;
  view.innerHTML = `
  <div class="screen mini-screen">
    <div class="subbar">
      <button class="icon-btn" data-act="back" aria-label="返回">${ICON.back}</button>
      <div class="titles"><h1>${g.name}</h1><p>${subtitle}</p></div>
      <span class="review-count">${mini.round + 1} / ${mini.total}</span>
    </div>
    <div class="review-progress">
      <div class="bar"><i style="width:${pct}%"></i></div>
      <span>${label || (mini.total > 1 ? `第 ${mini.round + 1} 关` : '配对')}</span>
    </div>
    ${body}
    <button class="intro-link" data-act="intro">${ICON.sound} 听原声玩法</button>
  </div>`;
  $('[data-act="back"]').onclick = () => { stopAudio(); mini = null; location.hash = '#/home'; };
  $('[data-act="intro"]').onclick = () => playFile(`assets/audio/game/${g.id}.mp3`);
}

/* 手电筒猜字：移动光圈，照出图片，猜出汉字 */
const GUESS_CHARS = ['雨', '天', '雷', '田', '光', '林', '猫', '兔', '鸟', '马', '虾', '虎', '象'];

function renderGuess(g) {
  if (!mini.queue) mini.queue = shuffle([...GUESS_CHARS]).slice(0, mini.total * 3);
  if (!mini.data || mini.data.round !== mini.round) {
    const start = mini.round * 3;
    mini.data = { round: mini.round, items: mini.queue.slice(start, start + 3), idx: 0 };
  }
  const d = mini.data;
  const c = d.items[d.idx];
  const options = shuffle([c, ...shuffle(GUESS_CHARS.filter(x => x !== c)).slice(0, 2)]);

  miniShell(g, '移动光圈，照一照再猜', `
    <div class="flash-stage" id="flash-stage">
      <div class="flash-art" style="background-image:url('assets/img/flash/${hex(c)}.png')"></div>
      <div class="flash-dark"></div>
      <span class="flash-hint">移动手指，照一照画面</span>
      <span class="flash-count">${d.idx + 1} / ${d.items.length}</span>
    </div>
    <p class="learn-hint">它是什么字？</p>
    <div class="options guess-options">
      ${options.map(o => `<button class="option" data-char="${o}">${o}</button>`).join('')}
    </div>`);

  const stage = $('#flash-stage');
  const move = e => {
    const r = stage.getBoundingClientRect();
    const pt = e.touches ? e.touches[0] : e;
    stage.style.setProperty('--fx', `${Math.round(pt.clientX - r.left)}px`);
    stage.style.setProperty('--fy', `${Math.round(pt.clientY - r.top)}px`);
  };
  ['pointermove', 'pointerdown', 'touchmove', 'mousemove'].forEach(evt => stage.addEventListener(evt, move));

  $$('.guess-options .option').forEach(el => el.addEventListener('click', () => {
    if (d.solved) return;
    if (el.dataset.char === c) {
      d.solved = true;
      el.classList.add('correct');
      stage.classList.add('solved');
      fx('correct');
      playChar(c);
      setTimeout(() => {
        if (mini.id !== 'guess' || mini.data !== d) return;
        d.solved = false;
        if (d.idx + 1 < d.items.length) { d.idx++; renderGuess(g); }
        else { mini.round++; mini.data = null; renderMini(); }
      }, 950);
    } else {
      mini.mistakes++;
      fx('incorrect');
      el.classList.add('wrong');
      setTimeout(() => el.classList.remove('wrong'), 450);
    }
  }));
}

/* 场景小剧场：原应用旁白 + 场景插画 + 真人词语点读 */
function renderTheater(g) {
  const s = STORIES[mini.round];
  if (!mini.data || mini.data.round !== mini.round) mini.data = { round: mini.round, found: [] };
  const d = mini.data;
  const allFound = d.found.length >= s.words.length;

  miniShell(g, '听故事，点一点画面里的东西', `
    <div class="stage-wrap">
      <div class="stage-art ${s.weather || ''}" style="background-image:url('${s.art}')">
        <span class="stage-weather"></span>
        <span class="stage-sticker">${s.sticker || ''}</span>
        <span class="stage-title">${s.title}</span>
      </div>
    </div>
    <div class="story-bar">
      <button class="mini-speaker" data-act="story" aria-label="听故事">${ICON.sound}</button>
      <div class="story-meta">
        <b>听故事 · ${s.title}</b>
        <span class="story-line"><i id="story-progress"></i></span>
      </div>
    </div>
    <div class="story-words">
      ${s.words.map(w => `<button class="story-word ${d.found.includes(w) ? 'found' : ''}" data-w="${w}">${w}</button>`).join('')}
    </div>
    <p class="learn-hint" id="story-hint">${allFound ? '故事听完了，去下一个故事吧' : '点一点词语，听听它怎么读'}</p>
    <button class="btn ${allFound ? 'btn-primary' : 'btn-ghost'} btn-block" data-act="nextStory">${allFound ? (mini.round + 1 >= mini.total ? '看看成绩' : '下一个故事') : '再听一遍故事'} ${ICON.right}</button>`, `第 ${mini.round + 1} 个故事`);

  const playStory = () => {
    stopAudio();
    const a = new Audio(encodeURI(s.audio));
    currentAudio = a;
    a.ontimeupdate = () => {
      const bar = $('#story-progress');
      if (bar && a.duration) bar.style.width = `${(a.currentTime / a.duration) * 100}%`;
    };
    a.onended = () => { const bar = $('#story-progress'); if (bar) bar.style.width = '100%'; };
    a.play().catch(() => {});
  };
  $('[data-act="story"]').onclick = playStory;
  setTimeout(() => { if (mini && mini.id === 'theater' && mini.round === d.round) playStory(); }, 350);

  $$('.story-word').forEach(el => el.addEventListener('click', () => {
    const w = el.dataset.w;
    el.classList.add('found');
    if (!d.found.includes(w)) d.found.push(w);
    fx('pop_1');
    playWord(w);
    if (d.found.length >= s.words.length) {
      const hint = $('#story-hint');
      if (hint) hint.textContent = '故事听完了，去下一个故事吧';
      const btn = $('[data-act="nextStory"]');
      if (btn) {
        btn.className = 'btn btn-primary btn-block';
        btn.innerHTML = `${mini.round + 1 >= mini.total ? '看看成绩' : '下一个故事'} ${ICON.right}`;
      }
    }
  }));

  $('[data-act="nextStory"]').onclick = () => {
    if (d.found.length < s.words.length) { playStory(); return; }
    stopAudio();
    mini.round++;
    mini.data = null;
    renderMini();
  };
}

/* 找相同：12 个字里有两个一样的 */
function renderFindSame(g) {
  const pool = shuffle(Object.keys(CHARS));
  const target = pool[0];
  const rest = pool.slice(1, 11);
  const tiles = shuffle([target, target, ...rest]);
  mini.data = { target, picked: [] };

  miniShell(g, '找出两个一样的字', `
    <div class="mini-prompt">
      <button class="mini-speaker" data-act="speaker" aria-label="听读音">${ICON.sound}</button>
      <span>哪两个字是一样的？</span>
    </div>
    <div class="mini-grid find-grid">
      ${tiles.map(c => `<button class="mini-tile" data-char="${c}">${c}</button>`).join('')}
    </div>`);

  $('[data-act="speaker"]').onclick = () => playChar(target);
  setTimeout(() => playChar(target), 350);
  $$('.mini-tile').forEach(el => el.addEventListener('click', () => {
    if (el.classList.contains('picked')) return;
    if (el.dataset.char === target) {
      el.classList.add('picked');
      mini.data.picked.push(el);
      fx('click_1');
      playChar(target);
      if (mini.data.picked.length === 2) {
        mini.data.picked.forEach(x => x.classList.add('correct'));
        fx('correct');
        setTimeout(() => { mini.round++; mini.data = null; renderMini(); }, 900);
      }
    } else {
      mini.mistakes++;
      fx('incorrect');
      el.classList.add('wrong');
      setTimeout(() => el.classList.remove('wrong'), 450);
    }
  }));
}

/* 找不同：上下两行，只有一个字不同 */
function renderFindDiff(g) {
  const pool = shuffle(Object.keys(CHARS));
  const base = pool.slice(0, 6);
  const oddIndex = Math.floor(Math.random() * 6);
  const oddChar = pool.slice(6).find(c => !base.includes(c));
  const rowB = base.slice();
  rowB[oddIndex] = oddChar;
  mini.data = { oddIndex };

  miniShell(g, '找出不一样的那一个字', `
    <div class="mini-prompt"><span>上下两行，有一个字不一样</span></div>
    <div class="diff-panel">
      <div class="diff-row">${base.map(c => `<span class="mini-tile dim">${c}</span>`).join('')}</div>
      <div class="diff-row">
        ${rowB.map((c, i) => `<button class="mini-tile" data-i="${i}">${c}</button>`).join('')}
      </div>
    </div>`);

  $$('.diff-row [data-i]').forEach(el => el.addEventListener('click', () => {
    if (+el.dataset.i === oddIndex) {
      el.classList.add('correct');
      fx('correct');
      playChar(oddChar);
      setTimeout(() => { mini.round++; mini.data = null; renderMini(); }, 900);
    } else {
      mini.mistakes++;
      fx('incorrect');
      el.classList.add('wrong');
      setTimeout(() => el.classList.remove('wrong'), 450);
    }
  }));
}

/* 找一找：听读音，找出对应的图 */
const uniqueEmoji = () => {
  const seen = new Set();
  return Object.keys(CHARS).filter(c => {
    const e = CHARS[c].emoji;
    if (!e || seen.has(e)) return false;
    seen.add(e);
    return true;
  });
};

function renderFindObject(g) {
  const pool = uniqueEmoji();
  const target = pick(pool);
  const options = shuffle([target, ...shuffle(pool.filter(c => c !== target)).slice(0, 11)]);
  mini.data = { target };

  miniShell(g, '听读音，找出对应的图', `
    <div class="mini-prompt">
      <button class="mini-speaker" data-act="speaker" aria-label="再听一次">${ICON.sound}</button>
      <span>听一听，阳阳说的是哪个？</span>
    </div>
    <div class="mini-grid emoji-grid">
      ${options.map(c => `<button class="emoji-tile" data-char="${c}"><span>${CHARS[c].emoji}</span></button>`).join('')}
    </div>
    <div class="reveal-line" id="mini-reveal"></div>`);

  $('[data-act="speaker"]').onclick = () => playChar(target);
  setTimeout(() => playCharAndMeaning(target), 450);
  $$('.emoji-tile').forEach(el => el.addEventListener('click', () => {
    if (el.dataset.char === target) {
      el.classList.add('correct');
      fx('correct');
      $('#mini-reveal').innerHTML = `这是「<b>${target}</b>」${CHARS[target].emoji} · ${CHARS[target].meaning}`;
      setTimeout(() => { mini.round++; mini.data = null; renderMini(); }, 1500);
    } else {
      mini.mistakes++;
      fx('incorrect');
      el.classList.add('wrong');
      setTimeout(() => el.classList.remove('wrong'), 450);
    }
  }));
}

/* 记忆翻牌：字和表情配成 4 对 */
function renderMemory(g) {
  if (!mini.data || mini.data.round !== mini.round) {
    const pool = shuffle(uniqueEmoji()).slice(0, 4);
    const cards = shuffle(pool.flatMap(c => [{ c, kind: 'char' }, { c, kind: 'emoji' }]));
    mini.data = { round: mini.round, cards, flipped: [], matched: 0, busy: false };
  }
  const d = mini.data;

  miniShell(g, '翻开卡片，把字和图配成对', `
    <div class="memo-status">已配对 <b>${d.matched}</b> / 4</div>
    <div class="memo-grid">
      ${d.cards.map((card, i) => `
        <button class="memo-card" data-i="${i}">
          <span class="memo-inner">
            <span class="memo-face memo-back">?</span>
            <span class="memo-face memo-front ${card.kind}">${card.kind === 'char' ? card.c : CHARS[card.c].emoji}</span>
          </span>
        </button>`).join('')}
    </div>`);

  const els = $$('.memo-card');
  els.forEach(el => el.addEventListener('click', () => {
    const i = +el.dataset.i;
    if (d.busy || el.classList.contains('flipped') || el.classList.contains('matched')) return;
    el.classList.add('flipped');
    d.flipped.push(i);
    fx('flip_1');
    if (d.flipped.length < 2) return;

    const [a, b] = d.flipped;
    if (d.cards[a].c === d.cards[b].c) {
      d.matched++;
      d.flipped = [];
      els[a].classList.add('matched');
      els[b].classList.add('matched');
      els[a].classList.add('flipped');
      els[b].classList.add('flipped');
      playChar(d.cards[a].c);
      fx('correct');
      $('.memo-status b').textContent = d.matched;
      if (d.matched === 4) {
        setTimeout(() => { mini.round++; mini.data = null; renderMini(); }, 900);
      }
    } else {
      d.busy = true;
      mini.mistakes++;
      fx('incorrect');
      setTimeout(() => {
        els[a].classList.remove('flipped');
        els[b].classList.remove('flipped');
        d.flipped = [];
        d.busy = false;
      }, 850);
    }
  }));
}

/* 拼图通用 */
const COVER_POOL = UNITS.flatMap(u => u.covers);
function puzzleBg(cover, img, n) {
  const step = 100 / (n - 1);
  const col = img % n, row = Math.floor(img / n);
  return `background-image:url('${cover}');background-size:${n * 100}% ${n * 100}%;background-position:${col * step}% ${row * step}%`;
}
function newPuzzle(n, count) {
  const cover = pick(COVER_POOL);
  let pieces = [...Array(n * n).keys()];
  if (n === 2) {
    do { pieces = shuffle(pieces); } while (pieces.every((v, i) => v === i));
  } else {
    for (let k = 0; k < 2; k++) {
      let a = Math.floor(Math.random() * count), b = Math.floor(Math.random() * count);
      while (a === b) b = Math.floor(Math.random() * count);
      [pieces[a], pieces[b]] = [pieces[b], pieces[a]];
    }
    if (pieces.every((v, i) => v === i)) return newPuzzle(n, count);
  }
  return { cover, pieces, sel: null };
}

function renderOrder(g) {
  if (!mini.data || mini.data.round !== mini.round) mini.data = Object.assign({ round: mini.round }, newPuzzle(2, 4));
  const d = mini.data;

  miniShell(g, '点两块，把图片拼回原样', `
    <div class="puzzle-hint"><img src="${d.cover}" alt=""><span>拼成这张图</span></div>
    <div class="puzzle-grid p2">
      ${d.pieces.map((img, pos) => `<button class="puzzle-tile ${d.sel === pos ? 'selected' : ''}" data-pos="${pos}" style="${puzzleBg(d.cover, img, 2)}"></button>`).join('')}
    </div>
    <p class="learn-hint">先点一块，再点另一块交换位置</p>`);

  $$('.puzzle-tile').forEach(el => el.addEventListener('click', () => {
    const pos = +el.dataset.pos;
    if (d.sel === null) { d.sel = pos; renderOrder(g); return; }
    if (d.sel === pos) { d.sel = null; renderOrder(g); return; }
    [d.pieces[d.sel], d.pieces[pos]] = [d.pieces[pos], d.pieces[d.sel]];
    d.sel = null;
    fx('click_1');
    if (d.pieces.every((v, i) => v === i)) {
      fx('correct');
      setTimeout(() => { mini.round++; mini.data = null; renderMini(); }, 750);
    } else {
      renderOrder(g);
    }
  }));
}

function renderRotate(g) {
  if (!mini.data || mini.data.round !== mini.round) {
    const rot = [0, 0, 0, 0].map(() => Math.floor(Math.random() * 4));
    if (rot.every(r => r === 0)) rot[0] = 1;
    mini.data = { round: mini.round, cover: pick(COVER_POOL), rot };
  }
  const d = mini.data;

  miniShell(g, '点方块，把它转正', `
    <div class="puzzle-hint"><img src="${d.cover}" alt=""><span>拼成这张图</span></div>
    <div class="puzzle-grid p2">
      ${d.rot.map((r, i) => `
        <button class="puzzle-tile" data-pos="${i}">
          <span class="rot-face" style="${puzzleBg(d.cover, i, 2)};transform:rotate(${r * 90}deg)"></span>
        </button>`).join('')}
    </div>
    <p class="learn-hint">每点一下，方块转动 90°</p>`);

  $$('.puzzle-tile').forEach(el => el.addEventListener('click', () => {
    const i = +el.dataset.pos;
    d.rot[i] = (d.rot[i] + 1) % 4;
    fx('click_1');
    if (d.rot.every(r => r === 0)) {
      fx('correct');
      setTimeout(() => { mini.round++; mini.data = null; renderMini(); }, 650);
    } else {
      renderRotate(g);
    }
  }));
}

function renderGrid(g) {
  if (!mini.data || mini.data.round !== mini.round) mini.data = Object.assign({ round: mini.round }, newPuzzle(3, 9));
  const d = mini.data;

  miniShell(g, '点两块，交换它们的位置', `
    <div class="puzzle-hint"><img src="${d.cover}" alt=""><span>拼成这张图</span></div>
    <div class="puzzle-grid p3">
      ${d.pieces.map((img, pos) => `<button class="puzzle-tile ${d.sel === pos ? 'selected' : ''}" data-pos="${pos}" style="${puzzleBg(d.cover, img, 3)}"></button>`).join('')}
    </div>
    <p class="learn-hint">先点一块，再点另一块交换位置</p>`);

  $$('.puzzle-tile').forEach(el => el.addEventListener('click', () => {
    const pos = +el.dataset.pos;
    if (d.sel === null) { d.sel = pos; renderGrid(g); return; }
    if (d.sel === pos) { d.sel = null; renderGrid(g); return; }
    [d.pieces[d.sel], d.pieces[pos]] = [d.pieces[pos], d.pieces[d.sel]];
    d.sel = null;
    fx('click_1');
    if (d.pieces.every((v, i) => v === i)) {
      fx('correct');
      setTimeout(() => { mini.round++; mini.data = null; renderMini(); }, 750);
    } else {
      renderGrid(g);
    }
  }));
}

function renderMiniResult(g) {
  tabbar.hidden = true;
  stopAudio();
  if (!mini) return;
  const stars = mini.mistakes === 0 ? 3 : mini.mistakes <= 2 ? 2 : 1;
  const prev = state.games[g.id] || 0;
  const best = Math.max(prev, stars);
  if (stars > prev) { state.games[g.id] = stars; saveState(); }
  if (!mini.rewarded) { mini.rewarded = true; earnStars(stars); }
  fx('score_1');
  burstConfetti(1100);

  view.innerHTML = `
  <div class="screen result">
    <div class="result-mascot">${mascot()}</div>
    <h1>${stars === 3 ? '太厉害了！' : '游戏完成！'}</h1>
    <p>${g.name} · 共 ${mini.total} ${g.id === 'theater' ? '个故事' : '关'}</p>
    <div class="result-stats">
      <div class="result-stat"><b>+${stars}</b><span>可用星星</span></div>
      <div class="result-stat"><b>${mini.mistakes}</b><span>出错次数</span></div>
      <div class="result-stat"><b>${best}</b><span>最好成绩</span></div>
    </div>
    <button class="pet-invite" data-act="pet">
      <span class="pi-cat">🐱</span>
      <span class="pi-copy"><b>去小窝看看团团</b><small>星星可以换小鱼干和玩具</small></span>
      <span class="pi-go">${ICON.next}</span>
    </button>
    <div class="result-actions">
      <button class="btn btn-primary" data-act="again">再玩一次 ${ICON.right}</button>
      <button class="btn btn-teal" data-act="home">回到首页</button>
      <button class="btn btn-ghost" data-act="games">别的游戏</button>
    </div>
  </div>`;
  $('[data-act="again"]').onclick = () => startMiniGame(g.id);
  $('[data-act="pet"]').onclick = () => { mini = null; location.hash = '#/pet'; };
  $('[data-act="home"]').onclick = () => { mini = null; location.hash = '#/home'; };
  $('[data-act="games"]').onclick = () => {
    mini = null;
    location.hash = '#/home';
    setTimeout(() => {
      const strip = $('.game-strip');
      if (strip) strip.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 120);
  };
}

/* ---------- 字库 ---------- */
function renderLibrary() {
  tabbar.hidden = false;
  setTab('library');
  view.innerHTML = `
  <div class="screen">
    <div class="subbar">
      <div class="titles">
        <h1>汉字字库</h1>
        <p>${UNITS.length} 个单元 · 共 ${TOTAL_CHARS} 个汉字</p>
      </div>
      <div class="star-pill"><span class="star-ico">★</span>${coinCount()}<small>可用</small></div>
    </div>
    ${UNITS.map(u => {
      const chars = [...new Set(u.lessons.flatMap(l => l.chars))];
      const learned = chars.filter(c => state.mastered.includes(c)).length;
      return `
      <div class="lib-section">
        <div class="lib-head">
          <b>${u.name}</b>
          <small>${u.label} · 已学 ${learned}/${chars.length}</small>
        </div>
        <div class="char-grid">
          ${chars.map(c => `
            <button class="char-tile" data-char="${c}">
              <div class="py">${PINYIN[c]}</div>
              <div class="ch">${c}</div>
              ${state.mastered.includes(c) ? '<span class="mastered">✓</span>' : ''}
            </button>`).join('')}
        </div>
      </div>`;
    }).join('')}
    <div class="legend"><i></i> 绿色小勾表示已经学过这个字</div>
  </div>`;

  $$('.char-tile').forEach(el => el.addEventListener('click', () => openCharDetail(el.dataset.char)));
}

function openCharDetail(char) {
  const info = CHARS[char];
  openModal(`
    <div class="sheet-head"><h2>认识「${char}」</h2><button class="icon-btn" data-act="close" aria-label="关闭">${ICON.x}</button></div>
    <div class="detail-hero">
      <div class="py">${PINYIN[char]}</div>
      <div class="ch">${char}</div>
      <div class="em">${info.emoji}</div>
      <div class="dm">${info.meaning}</div>
      <div class="word-chips">
        ${info.words.map(w => `<button class="word-chip" data-word="${w}">${ICON.sound}${w}</button>`).join('')}
      </div>
      <div class="detail-actions">
        <button class="btn btn-ghost" data-act="hear">${ICON.sound} 听一听</button>
        <button class="btn btn-primary" data-act="write">${ICON.write} 写一写</button>
      </div>
    </div>
    <p style="text-align:center;font-size:12px;color:var(--ink-soft);margin:14px 0 4px">已经写了 ${state.traces} 次汉字</p>
  `);
  $('[data-act="close"]').onclick = closeModal;
  $('[data-act="hear"]').onclick = () => playCharAndMeaning(char);
  $('[data-act="write"]').onclick = () => { closeModal(); setTimeout(() => openWriteSheet(char), 120); };
  $$('[data-word]').forEach(el => el.addEventListener('click', () => playWord(el.dataset.word)));
  setTimeout(() => playChar(char), 250);
}

/* 写字弹层 */
function openWriteSheet(char, opts = {}) {
  openModal(`
    <div class="sheet-head"><h2>写一写「${char}」</h2><button class="icon-btn" data-act="close" aria-label="关闭">${ICON.x}</button></div>
    <div class="trace-card" style="box-shadow:none;background:transparent;padding:0">
      <div class="trace-char-label">${PINYIN[char]} · ${char}</div>
      <div class="trace-box"><div class="writer" id="write-writer"></div></div>
      <div class="trace-actions">
        <button class="btn btn-ghost" data-act="demo">${ICON.sound} 看笔顺</button>
        <button class="btn btn-ghost" data-act="again">${ICON.refresh} 重新写</button>
      </div>
      <div id="write-done" style="display:none;margin-top:12px">
        <button class="btn btn-teal btn-block" data-act="done">我写好啦 ${ICON.check}</button>
      </div>
    </div>
  `, 'write-modal');

  $('[data-act="close"]').onclick = closeModal;
  requestAnimationFrame(() => {
    const el = $('#write-writer');
    if (!el) return;
    activeWriter = createWriter(el, char);
    let quizStarted = false;
    const startQuiz = () => {
      if (!activeWriter) return;
      quizStarted = true;
      activeWriter.quiz({
        showHintAfterMisses: 2,
        highlightOnComplete: true,
        onMistake: () => fx('incorrect'),
        onComplete: () => {
          state.traces++;
          saveState();
          fx('score_1');
          $('#write-done').style.display = 'block';
          $('.trace-actions').style.display = 'none';
        }
      });
    };
    activeWriter.animateCharacter({ onComplete: startQuiz });
    setTimeout(() => { if (!quizStarted && activeWriter) startQuiz(); }, 3000);
    $('[data-act="demo"]').onclick = () => { activeWriter.cancelQuiz(); activeWriter.animateCharacter({ onComplete: startQuiz }); };
    $('[data-act="again"]').onclick = () => { $('#write-done').style.display = 'none'; $('.trace-actions').style.display = 'flex'; startQuiz(); };
    $('[data-act="done"]').onclick = () => { closeModal(); if (opts.onDone) opts.onDone(); };
  });
}

/* ---------- 我的 ---------- */
function renderProfile() {
  tabbar.hidden = false;
  setTab('profile');
  const done = totalDone();
  const finishedUnits = UNITS.filter(u => doneInUnit(u.id) >= u.lessons.length).length;
  const ach = [
    { ico: '🌱', name: '初次见面', desc: '完成第 1 课', on: done >= 1 },
    { ico: '⭐', name: '星星收藏家', desc: '收集 9 颗星', on: totalStars() >= 9 },
    { ico: '📖', name: '识字小达人', desc: '认识 30 个字', on: state.mastered.length >= 30 },
    { ico: '🏔️', name: '自然探索家', desc: '学完自然单元', on: doneInUnit('nature') >= UNITS[0].lessons.length },
    { ico: '🎒', name: '单元旅行家', desc: '学完 3 个单元', on: finishedUnits >= 3 },
    { ico: '🌟', name: '满分小能手', desc: '一课拿到 3 星', on: Object.values(state.stars).some(s => s >= 3) },
    { ico: '✍️', name: '小小书法家', desc: '描写 5 个字', on: state.traces >= 5 },
    { ico: '📝', name: '错题克星', desc: '复习消除 5 次错题', on: (state.reviewCleared || 0) >= 5 },
    { ico: '🐱', name: '小猫家长', desc: '喂团团吃 3 次', on: (state.pet.meals || 0) >= 3 },
    { ico: '👑', name: '猫大王铲屎官', desc: '团团长成猫大王', on: petStageIndex() >= 3 }
  ];

  view.innerHTML = `
  <div class="screen">
    <div class="subbar"><div class="titles"><h1>我的</h1><p>每一次认字，都算数</p></div></div>
    <div class="profile-head">
      <div class="avatar">${mascot()}</div>
      <div>
        <h1>阳阳</h1>
        <p>${done >= TOTAL_LESSONS ? '五个单元全部学完啦！' : done > 0 ? `已经学完 ${done} 课，继续加油！` : '今天也要认识新汉字哦'}</p>
      </div>
    </div>

    <div class="stat-row">
      <div class="stat-box"><b>${state.mastered.length}</b><span>认识汉字</span></div>
      <div class="stat-box"><b>${totalStars()}</b><span>收集星星</span></div>
      <div class="stat-box"><b>${done}</b><span>完成课程</span></div>
    </div>

    <div class="section-title"><h2>小成就</h2><span>${ach.filter(a => a.on).length} / ${ach.length}</span></div>
    <div class="badge-grid">
      ${ach.map(a => `<div class="ach ${a.on ? 'on' : ''}"><div class="ico">${a.ico}</div><b>${a.name}</b><span>${a.desc}</span></div>`).join('')}
    </div>

    <div class="section-title"><h2>设置</h2><span>家长可以来调整</span></div>
    <div class="setting-list">
      <div class="setting-row">
        <span class="s-ico">🔔</span>
        <div class="s-label">游戏音效<div class="s-sub">答对、答错的提示音</div></div>
        <button class="switch ${state.settings.sfx ? 'on' : ''}" data-toggle="sfx" aria-label="音效开关"></button>
      </div>
      <div class="setting-row">
        <span class="s-ico">🎵</span>
        <div class="s-label">背景音乐<div class="s-sub">轻柔的儿歌旋律</div></div>
        <button class="switch ${state.settings.bgm ? 'on' : ''}" data-toggle="bgm" aria-label="音乐开关"></button>
      </div>
      <div class="setting-row">
        <span class="s-ico">🧹</span>
        <div class="s-label danger">清除学习记录<div class="s-sub">星星和识字进度都会消失</div></div>
        <button class="btn btn-ghost" style="height:36px;padding:0 14px;font-size:13px;border-radius:12px" data-act="reset">清除</button>
      </div>
    </div>
    <p style="text-align:center;font-size:11px;color:var(--ink-soft);margin:20px 0 6px">阳阳识字 · 五个单元 ${TOTAL_LESSONS} 课 · 参考 Kids Chinese 课程结构</p>
  </div>`;

  $$('[data-toggle]').forEach(el => el.addEventListener('click', () => {
    const k = el.dataset.toggle;
    state.settings[k] = !state.settings[k];
    saveState();
    el.classList.toggle('on', state.settings[k]);
    if (k === 'bgm') applyBgm();
    if (k === 'sfx' && state.settings.sfx) fx('click_1');
  }));
  $('[data-act="reset"]').onclick = () => {
    openModal(`
      <div class="sheet-head"><h2>清除学习记录？</h2></div>
      <p style="font-size:14px;color:var(--ink-soft);line-height:1.7;margin:0 0 18px">星星、识字进度和小成就都会被清空，而且不能恢复。真的要和阳阳重新开始吗？</p>
      <div style="display:flex;gap:10px">
        <button class="btn btn-ghost" style="flex:1" data-act="cancel">先不清除</button>
        <button class="btn btn-primary" style="flex:1;background:linear-gradient(180deg,#F0607E,#D93A5E);box-shadow:0 8px 0 #B92E4C" data-act="yes">重新开始</button>
      </div>
    `);
    $('[data-act="cancel"]').onclick = closeModal;
    $('[data-act="yes"]').onclick = () => {
      state = structuredClone(DEFAULT_STATE);
      saveState();
      applyBgm();
      closeModal();
      toast('已经重新开始啦');
      renderProfile();
    };
  };
}

/* ---------- 宠物：小猫团团 ---------- */
const PET_STAGES = [
  { name: '奶猫', need: 0, cls: 's1', tip: '刚来到小窝，还怯生生的' },
  { name: '小橘猫', need: 60, cls: 's2', tip: '会自己舔毛啦' },
  { name: '神气猫', need: 160, cls: 's3', tip: '喜欢跳上跳下' },
  { name: '猫大王', need: 320, cls: 's4', tip: '小窝里最厉害的猫' }
];
const PET_FOODS = [
  { id: 'fish', name: '小鱼干', ico: '🐟', cost: 2, exp: 8, full: 18 },
  { id: 'milk', name: '牛奶', ico: '🥛', cost: 3, exp: 10, full: 24 },
  { id: 'can', name: '鱼罐头', ico: '🥫', cost: 5, exp: 16, full: 32 },
  { id: 'cake', name: '小鱼蛋糕', ico: '🍰', cost: 8, exp: 26, full: 22 }
];
const PET_TOYS = [
  { id: 'wand', name: '逗猫棒', ico: '🪄', cost: 3, exp: 6, mood: 20 },
  { id: 'yarn', name: '毛线球', ico: '🧶', cost: 4, exp: 8, mood: 26 },
  { id: 'box', name: '纸箱城堡', ico: '📦', cost: 6, exp: 12, mood: 32 }
];
const PET_DECOR = [
  { id: 'bow', name: '蝴蝶结', ico: '🎀', cost: 6 },
  { id: 'flower', name: '小花', ico: '🌸', cost: 7 },
  { id: 'scarf', name: '小围巾', ico: '🧣', cost: 9 },
  { id: 'crown', name: '小皇冠', ico: '👑', cost: 15 }
];

const petStageIndex = () => {
  let idx = 0;
  for (let i = 0; i < PET_STAGES.length; i++) if (state.pet.exp >= PET_STAGES[i].need) idx = i;
  return idx;
};
const petLevel = () => 1 + Math.floor(state.pet.exp / 20);

/* 离开一段时间后慢慢有点饿、有点想你 */
function petTick() {
  const p = state.pet;
  const now = Date.now();
  if (!p.lastAt) { p.lastAt = now; saveState(); return; }
  const hours = (now - p.lastAt) / 3600000;
  if (hours < 0.5) return;
  p.full = Math.max(10, Math.round(p.full - Math.min(30, hours * 2.5)));
  p.mood = Math.max(15, Math.round(p.mood - Math.min(20, hours * 1.5)));
  p.lastAt = now;
  saveState();
}

function petSVG() {
  const st = petStageIndex();
  const p = state.pet;
  const wearing = p.wearing || [];
  const sleepy = p.full < 30 || p.mood < 25;
  const happy = p.mood >= 40;
  const eyes = sleepy
    ? '<path d="M95 99q6 6 13 0M132 99q6 6 13 0" fill="none" stroke="#4A3428" stroke-width="3.4" stroke-linecap="round"/>'
    : '<ellipse cx="101" cy="100" rx="6.4" ry="7.6" fill="#3B2B2B"/><circle cx="103.2" cy="97" r="2.2" fill="#fff"/>' +
      '<ellipse cx="139" cy="100" rx="6.4" ry="7.6" fill="#3B2B2B"/><circle cx="141.2" cy="97" r="2.2" fill="#fff"/>';
  const mouth = happy
    ? '<path d="M120 117v3M109 121q6 8 11 0M120 121q5 8 11 0" fill="none" stroke="#6E3230" stroke-width="2.4" stroke-linecap="round"/>'
    : '<path d="M120 117v3M112 124h16" fill="none" stroke="#6E3230" stroke-width="2.4" stroke-linecap="round"/>';
  const deco = {
    bow: '<g><path d="M160 44l-15-9v18z" fill="#F0618C"/><path d="M160 44l15-9v18z" fill="#F0618C"/><circle cx="160" cy="44" r="5.2" fill="#FFC9DA"/></g>',
    flower: '<g transform="translate(82 40)"><circle cx="0" cy="-9" r="6" fill="#FF9F1C"/><circle cx="8.5" cy="-2.8" r="6" fill="#FF9F1C"/><circle cx="5.3" cy="7.3" r="6" fill="#FF9F1C"/><circle cx="-5.3" cy="7.3" r="6" fill="#FF9F1C"/><circle cx="-8.5" cy="-2.8" r="6" fill="#FF9F1C"/><circle cx="0" cy="0" r="5" fill="#FFE28A"/></g>',
    scarf: '<g><path d="M94 137q26 15 52 0v13q-26 15-52 0z" fill="#EF476F"/><path d="M140 148l8 26-11 4-5-23z" fill="#E63946"/></g>',
    crown: '<g><path d="M98 50l5-22 17 12 17-12 5 22z" fill="#FFD166" stroke="#E9A700" stroke-width="2" stroke-linejoin="round"/><circle cx="120" cy="29" r="3.4" fill="#EF476F"/><circle cx="103" cy="42" r="2.6" fill="#EF476F"/><circle cx="137" cy="42" r="2.6" fill="#EF476F"/></g>'
  };
  const worn = wearing.map(id => deco[id] || '').join('');
  const sparkle = st === 3
    ? '<g opacity=".95"><path d="M54 66l3-8 3 8 8 3-8 3-3 8-3-8-8-3z" fill="#FFD166"/><path d="M186 92l2.4-6 2.4 6 6 2.4-6 2.4-2.4 6-2.4-6-6-2.4z" fill="#FFD166"/></g>'
    : '';

  return `<svg class="pet-cat ${PET_STAGES[st].cls}" viewBox="0 0 240 210" aria-hidden="true">
    <ellipse cx="120" cy="199" rx="58" ry="8" fill="rgba(80,50,20,.13)"/>
    <path d="M168 172c27 3 41-11 36-29-3-13-15-18-25-13" fill="none" stroke="#F3A94F" stroke-width="15" stroke-linecap="round"/>
    <ellipse cx="120" cy="152" rx="55" ry="40" fill="#F7B267"/>
    <ellipse cx="120" cy="160" rx="33" ry="28" fill="#FFF2DC"/>
    <path d="M82 132q10 9 3 21M158 132q-10 9-3 21" fill="none" stroke="#E8943B" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="97" cy="184" rx="17" ry="10" fill="#FFF2DC"/>
    <ellipse cx="143" cy="184" rx="17" ry="10" fill="#FFF2DC"/>
    <path d="M90 183v5M97 182v6M104 183v5M136 183v5M143 182v6M150 183v5" stroke="#E7C79C" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M79 73L66 30Q65 23 73 27L107 47Z" fill="#F7B267"/>
    <path d="M161 73L174 30Q175 23 167 27L133 47Z" fill="#F7B267"/>
    <path d="M82 66L75 40L99 52Z" fill="#F7A3B0"/>
    <path d="M158 66L165 40L141 52Z" fill="#F7A3B0"/>
    <ellipse cx="120" cy="101" rx="49" ry="45" fill="#F7B267"/>
    <path d="M102 62q18-7 36 0M112 55v11M128 55v11" fill="none" stroke="#E8943B" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="91" cy="115" rx="9" ry="5" fill="#FFB3B3" opacity=".6"/>
    <ellipse cx="149" cy="115" rx="9" ry="5" fill="#FFB3B3" opacity=".6"/>
    ${eyes}
    <path d="M114 110h12l-6 7z" fill="#F07C8E"/>
    ${mouth}
    <path d="M74 103h17M74 112l15 3M166 103h-17M166 112l-15 3" stroke="#E3A25F" stroke-width="2" stroke-linecap="round"/>
    ${worn}
    ${sparkle}
  </svg>`;
}

function petMoodLine() {
  const p = state.pet;
  if (p.full < 30) return `${p.name}饿得喵喵叫…`;
  if (p.mood < 30) return `${p.name}想和你玩一会儿`;
  if (petStageIndex() === 3) return `${p.name}最喜欢你啦！`;
  return `${p.name}在小窝里等你`;
}

/* 商品图标用内联 SVG：Android 7 等旧系统字体缺少 🥛🥫🪄🧶 等新 Emoji */
const PET_ICONS = {
  fish: '<svg viewBox="0 0 32 32"><path d="M20 16c0-4.4-3.6-7-8-7s-8 3.1-8 7 3.6 7 8 7 8-2.6 8-7z" fill="#FFB03B"/><path d="M20 16l8-6v12z" fill="#FF8A00"/><circle cx="9.6" cy="13.6" r="1.3" fill="#5A3A1A"/><path d="M5 13c2-1.8 4-1.8 6 0" stroke="#FF8A00" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',
  milk: '<svg viewBox="0 0 32 32"><path d="M9 12l7-4 7 4v13a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z" fill="#FBF7EF" stroke="#E0D3BE" stroke-width="1.4"/><path d="M9 12l7 3.4 7-3.4-7-4z" fill="#D9F1FA"/><rect x="12.4" y="18" width="7.2" height="5" rx="1.2" fill="#48BFE3"/></svg>',
  can: '<svg viewBox="0 0 32 32"><rect x="8.5" y="8" width="15" height="17" rx="2.4" fill="#CBD5DD"/><ellipse cx="16" cy="8.4" rx="7.5" ry="2.4" fill="#E8EEF3" stroke="#B5C0C9" stroke-width="1.2"/><rect x="8.5" y="13" width="15" height="6.6" fill="#FF9F1C"/><path d="M12.4 16.4c1.3-1.8 2.7-1.8 4 0s2.7 1.8 4 0" stroke="#FFF" stroke-width="1.3" fill="none" stroke-linecap="round"/><ellipse cx="16" cy="25" rx="7.5" ry="2.4" fill="#AEB9C2"/></svg>',
  cake: '<svg viewBox="0 0 32 32"><path d="M6 24h20l-2-11H8z" fill="#FFC9DD"/><path d="M8 13h16l-1.2-3H9.2z" fill="#FFF3F8"/><path d="M5.4 24h21.2v3.2H5.4z" fill="#F3A7C6"/><circle cx="16" cy="7.6" r="2.3" fill="#EF476F"/><path d="M16 10.2v2.2" stroke="#8A5A38" stroke-width="1.4" stroke-linecap="round"/></svg>',
  wand: '<svg viewBox="0 0 32 32"><path d="M6.6 27.4L19 14.6" stroke="#C08B5C" stroke-width="2.6" stroke-linecap="round"/><path d="M22 4.6l1.7 3.9 3.9 1.7-3.9 1.7-1.7 3.9-1.7-3.9-3.9-1.7 3.9-1.7z" fill="#FFD166"/><path d="M20.4 13.2c1.8-3 4.6-4.4 8-3.6-1.8 3.2-4.8 4.8-8 3.6z" fill="#EF476F"/></svg>',
  yarn: '<svg viewBox="0 0 32 32"><circle cx="15" cy="18" r="9.6" fill="#9B5DE5"/><path d="M7.6 23.4c3.4-6.4 8-9.4 15.4-8.6M9.2 27.4c2.8-8 7.4-11.6 15.2-11.8M12.4 9.4c-1.6 5.8-.4 10.6 4.4 15.4" stroke="#BC96F2" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M23.4 9.6l6-3.4-1 3.4 3 1.4-5.8 1.8z" fill="#BC96F2"/></svg>',
  box: '<svg viewBox="0 0 32 32"><path d="M4.4 12L16 7l11.6 5v5.4H4.4z" fill="#DDA45F"/><path d="M4.4 17.4h23.2V27H4.4z" fill="#C98B45"/><path d="M16 7v20" stroke="#B2743A" stroke-width="1.4"/><path d="M4.4 17.4l5.2 4 6.4-4 6.4 4 5.2-4" fill="none" stroke="#F0C99A" stroke-width="1.5"/></svg>',
  bow: '<svg viewBox="0 0 32 32"><path d="M15.4 16.4C12 12 8.2 10 5.4 12.4s-1.8 8.6 2 8.6 5.6-2.2 8-4.6z" fill="#EF476F"/><path d="M16.6 16.4C20 12 23.8 10 26.6 12.4s1.8 8.6-2 8.6-5.6-2.2-8-4.6z" fill="#EF476F"/><circle cx="16" cy="16.4" r="3.1" fill="#D63A60"/></svg>',
  flower: '<svg viewBox="0 0 32 32"><g fill="#FF8FB1"><circle cx="16" cy="9.2" r="4.2"/><circle cx="23" cy="14.2" r="4.2"/><circle cx="20.4" cy="22.2" r="4.2"/><circle cx="11.6" cy="22.2" r="4.2"/><circle cx="9" cy="14.2" r="4.2"/></g><circle cx="16" cy="16.6" r="4.2" fill="#FFD166"/></svg>',
  scarf: '<svg viewBox="0 0 32 32"><path d="M6.4 8.4h19.2v5.4A9.6 9.6 0 0 1 16 23.4 9.6 9.6 0 0 1 6.4 13.8z" fill="#EF476F"/><path d="M6.4 8.4h19.2v3.2H6.4z" fill="#FF8FA8"/><path d="M19.4 19.6h6v8.8a2 2 0 0 1-4 0z" fill="#E03A5E"/><path d="M19.4 24.6h6" stroke="#FFB3C4" stroke-width="2"/></svg>',
  crown: '<svg viewBox="0 0 32 32"><path d="M5 23.4l1.8-12.4 6.2 6 3-9 3 9 6.2-6 1.8 12.4z" fill="#FFC24B" stroke="#E9A700" stroke-width="1.4" stroke-linejoin="round"/><circle cx="6.8" cy="9.6" r="1.9" fill="#FFD166"/><circle cx="16" cy="5.6" r="1.9" fill="#FFD166"/><circle cx="25.2" cy="9.6" r="1.9" fill="#FFD166"/><rect x="5" y="22.8" width="22" height="4.2" rx="1.6" fill="#FFB03B" stroke="#E9A700" stroke-width="1.2"/></svg>'
};
const petIcon = item => PET_ICONS[item.id] || item.ico;

function petShopCard(item, kind) {
  const p = state.pet;
  const isDecor = kind === 'decor';
  const owned = isDecor && (p.owned || []).indexOf(item.id) > -1;
  const wearing = isDecor && (p.wearing || []).indexOf(item.id) > -1;
  const meta = kind === 'food' ? `成长 +${item.exp} · 饱腹 +${item.full}`
    : kind === 'toy' ? `成长 +${item.exp} · 心情 +${item.mood}`
    : (wearing ? '正在戴着' : owned ? '点一下就能戴' : '买一次，永久拥有');
  return `<button class="pet-item ${wearing ? 'wearing' : ''} ${owned ? 'owned' : ''}" data-kind="${kind}" data-id="${item.id}">
    <span class="pi-ico">${petIcon(item)}</span>
    <b>${item.name}</b>
    <small>${meta}</small>
    ${owned ? `<span class="pi-price wear">${wearing ? '已戴上' : '戴上'}</span>` : `<span class="pi-price">★ ${item.cost}</span>`}
  </button>`;
}

function petCheer(text) {
  const box = $('#pet-fx');
  if (!box) return;
  const el = document.createElement('span');
  el.className = 'pet-cheer';
  el.textContent = text;
  box.appendChild(el);
  const cat = $('.pet-cat');
  if (cat) {
    cat.classList.add('pet-bounce');
    setTimeout(() => cat.classList.remove('pet-bounce'), 760);
  }
  setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 1500);
}

function bitPet() {
  const p = state.pet;
  const now = Date.now();
  if (p.lastPat && now - p.lastPat < 800) return;
  p.lastPat = now;
  p.mood = Math.min(100, p.mood + 3);
  saveState();
  renderPet();
  petCheer('咕噜咕噜～');
}

function buyPet(kind, id) {
  const pool = kind === 'food' ? PET_FOODS : kind === 'toy' ? PET_TOYS : PET_DECOR;
  const item = pool.filter(x => x.id === id)[0];
  if (!item) return;
  const p = state.pet;
  if (kind === 'decor') {
    if ((p.owned || []).indexOf(id) < 0) {
      if (coinCount() < item.cost) return petNoStar(item.cost);
      state.coins = coinCount() - item.cost;
      p.owned.push(id);
      p.wearing.push(id);
      saveState();
      renderPet();
      petCheer(`${item.name} 买好啦`);
      return;
    }
    const at = p.wearing.indexOf(id);
    if (at > -1) p.wearing.splice(at, 1); else p.wearing.push(id);
    saveState();
    fx('click_1');
    renderPet();
    return;
  }
  if (coinCount() < item.cost) return petNoStar(item.cost);
  const stageBefore = petStageIndex();
  const levelBefore = petLevel();
  state.coins = coinCount() - item.cost;
  p.exp += item.exp;
  if (kind === 'food') {
    p.full = Math.min(100, p.full + item.full);
    p.mood = Math.min(100, p.mood + 4);
    p.meals = (p.meals || 0) + 1;
  } else {
    p.mood = Math.min(100, p.mood + item.mood);
    p.plays = (p.plays || 0) + 1;
  }
  p.lastAt = Date.now();
  saveState();
  fx(kind === 'food' ? 'correct' : 'click_1');
  renderPet();
  petCheer(kind === 'food' ? `+${item.exp} 成长` : `心情 +${item.mood}`);
  if (petStageIndex() > stageBefore) {
    burstConfetti(1000);
    toast(`${p.name}长大啦，变成「${petStage().name}」！`);
  } else if (petLevel() > levelBefore) {
    toast(`${p.name}升到 Lv.${petLevel()} 啦`);
  }
}

function petNoStar(cost) {
  fx('incorrect');
  toast(`星星不够啦，还差 ${cost - coinCount()} 颗，去学习赚星星吧`);
}

function renderPet() {
  tabbar.hidden = false;
  setTab('pet');
  petTick();
  const p = state.pet;
  const st = petStageIndex();
  const stage = PET_STAGES[st];
  const nextStage = PET_STAGES[st + 1];
  const expPct = nextStage
    ? Math.min(100, Math.round(((p.exp - stage.need) / (nextStage.need - stage.need)) * 100))
    : 100;

  view.innerHTML = `
  <div class="screen pet-screen">
    <div class="subbar">
      <div class="titles"><h1>${p.name}的小窝</h1><p>喂它吃东西、陪它玩，一起长大</p></div>
      <div class="star-pill pet-wallet"><span class="star-ico">★</span>${coinCount()}<small>可用</small></div>
    </div>
    <div class="pet-cols">
      <div class="pet-stage-col">
        <div class="pet-card">
          <div class="pet-bubble">${petMoodLine()}</div>
          <div class="pet-art">${petSVG()}<div class="pet-fx" id="pet-fx"></div></div>
          <div class="pet-name"><b>${p.name}</b><small>Lv.${petLevel()} · ${stage.name}</small></div>
          <div class="pet-meters">
            <div class="pet-meter"><span>🍚 饱腹</span><div class="bar"><i style="width:${p.full}%"></i></div></div>
            <div class="pet-meter"><span>💗 心情</span><div class="bar"><i style="width:${p.mood}%"></i></div></div>
            <div class="pet-meter exp"><span>🌱 成长</span><div class="bar"><i style="width:${expPct}%"></i></div></div>
          </div>
          <p class="pet-stage-tip">${stage.tip}${nextStage ? ` · 再攒 ${nextStage.need - p.exp} 点成长，就能变成「${nextStage.name}」` : ' · 已经是猫大王啦'}</p>
          <button class="btn btn-ghost btn-block" data-act="pat">摸摸${p.name}</button>
        </div>
      </div>
      <div class="pet-panel">
        <div class="section-title"><h2>喂${p.name}吃点</h2><span>花星星买，吃得香长得快</span></div>
        <div class="pet-shop">${PET_FOODS.map(f => petShopCard(f, 'food')).join('')}</div>
        <div class="section-title"><h2>一起玩</h2><span>心情好，学得快</span></div>
        <div class="pet-shop">${PET_TOYS.map(t => petShopCard(t, 'toy')).join('')}</div>
        <div class="section-title"><h2>小装扮</h2><span>买一次，随时换</span></div>
        <div class="pet-shop">${PET_DECOR.map(d => petShopCard(d, 'decor')).join('')}</div>
        <p class="pet-hint">星星不够？完成一课、复习错题或玩一局游戏，都能赚到星星。</p>
      </div>
    </div>
  </div>`;

  $$('.pet-item').forEach(el => el.onclick = () => buyPet(el.dataset.kind, el.dataset.id));
  $('[data-act="pat"]').onclick = bitPet;
}

/* ---------- 导航 ---------- */
function setTab(name) {
  $$('.tab').forEach(el => el.classList.toggle('active', el.dataset.tab === name));
}
$$('.tab').forEach(el => el.addEventListener('click', () => {
  location.hash = '#/' + el.dataset.tab;
  window.scrollTo(0, 0);
}));

function renderRoute() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [page, id] = raw.split('/');
  closeModal();
  if (page !== 'game') stopAudio();
  if (page === 'lesson' && id) renderLesson(id);
  else if (page === 'review') renderReview();
  else if (page === 'game') renderMini();
  else if (page === 'library') renderLibrary();
  else if (page === 'pet') renderPet();
  else if (page === 'profile') renderProfile();
  else renderHome();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', renderRoute);

/* ---------- 彩带 ---------- */
const confetti = $('#confetti');
const ctx = confetti.getContext('2d');
let confettiParticles = [];
let confettiRun = false;

function sizeConfetti() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  confetti.width = innerWidth * dpr;
  confetti.height = innerHeight * dpr;
  confetti.style.width = innerWidth + 'px';
  confetti.style.height = innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', sizeConfetti);

function burstConfetti(ms = 1600) {
  sizeConfetti();
  confetti.classList.add('on');
  const colors = ['#FFB03B', '#FFD166', '#EF476F', '#17B8A6', '#48BFE3', '#9B5DE5', '#43AA8B'];
  confettiParticles = Array.from({ length: 110 }, () => ({
    x: innerWidth / 2 + (Math.random() - 0.5) * 160,
    y: innerHeight * 0.36,
    vx: (Math.random() - 0.5) * 13,
    vy: -Math.random() * 11 - 3,
    g: 0.32 + Math.random() * 0.16,
    w: 6 + Math.random() * 8,
    h: 8 + Math.random() * 10,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    color: pick(colors),
    life: 1
  }));
  if (!confettiRun) { confettiRun = true; requestAnimationFrame(stepConfetti); }
  setTimeout(() => { confetti.classList.remove('on'); }, ms);
}

function stepConfetti() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  let alive = 0;
  confettiParticles.forEach(p => {
    if (p.life <= 0) return;
    alive++;
    p.vy += p.g;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life -= 0.008;
    if (p.y > innerHeight + 40) p.life = 0;
    ctx.save();
    ctx.globalAlpha = Math.max(p.life, 0);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  });
  if (alive > 0) requestAnimationFrame(stepConfetti);
  else {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    confettiRun = false;
    confetti.classList.remove('on');
  }
}

/* ---------- 启动 ---------- */
function unlockAudio() {
  if (audioCtxUnlocked) return;
  audioCtxUnlocked = true;
  if (state.settings.bgm) applyBgm();
}
document.addEventListener('pointerdown', unlockAudio, { once: true });

if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => {};
  speechSynthesis.getVoices();
}
applyBgm();
renderRoute();
