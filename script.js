/* ---------- KRUHOVÝ KURZOR ---------- */
const cursor = document.getElementById('cursor');
let cx = window.innerWidth / 2, cy = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
  cx = e.clientX; cy = e.clientY;
  cursor.style.left = cx + 'px';
  cursor.style.top  = cy + 'px';
});

// zvětšení kurzoru nad jakýmkoliv buttonem
document.querySelectorAll('.hotspot').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
});

/* ---------- NAVIGACE MEZI STRÁNKAMI ---------- */
const pages = document.querySelectorAll('.page');
const fade  = document.getElementById('fade');

function getActive() {
  return document.querySelector('.page.is-active');
}

// přepnutí s prolnutím (klik na čtverec / plus)
function goTo(id) {
  const current = getActive();
  const next = document.getElementById(id);
  if (!next || next === current) return;

  fade.classList.add('show');
  setTimeout(() => {
    current.classList.remove('is-active');
    next.classList.add('is-active');
    if (id === 'page-player') stopAudioReset();
    fade.classList.remove('show');
  }, 280);
}

// přepnutí se "swipe" animací (pomlčky – jako fotky na instagramu)
function swipeTo(id) {
  const current = getActive();
  const next = document.getElementById(id);
  if (!next || next === current) return;

  current.classList.add('swipe-out-left');
  setTimeout(() => {
    current.classList.remove('is-active', 'swipe-out-left');
    next.classList.add('is-active', 'swipe-in-right');
    setTimeout(() => next.classList.remove('swipe-in-right'), 460);
  }, 230);
}

document.querySelectorAll('.hotspot').forEach(el => {
  const go = el.getAttribute('data-go');
  const sw = el.getAttribute('data-swipe');
  if (go)  el.addEventListener('click', () => goTo(go));
  if (sw)  el.addEventListener('click', () => swipeTo(sw));
});

/* ---------- PŘEHRÁVAČ ---------- */
const audio    = document.getElementById('audio');
const playBtn  = document.getElementById('playToggle');
const seekBar  = document.getElementById('seekBar');
const fill     = document.getElementById('progressFill');
const timeLbl  = document.getElementById('timeLabel');

function fmt(t) {
  if (isNaN(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

if (playBtn) {
  playBtn.addEventListener('click', () => {
    if (audio.paused) audio.play();
    else audio.pause();
  });

  audio.addEventListener('timeupdate', () => {
    const p = (audio.currentTime / audio.duration) * 100 || 0;
    fill.style.width = p + '%';
    timeLbl.textContent = fmt(audio.currentTime);
  });

  audio.addEventListener('ended', () => {
    fill.style.width = '0%';
    timeLbl.textContent = '0:00';
  });

  seekBar.addEventListener('click', (e) => {
    const r = seekBar.getBoundingClientRect();
    const ratio = (e.clientX - r.left) / r.width;
    if (audio.duration) audio.currentTime = ratio * audio.duration;
  });
}

function stopAudioReset() {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  if (fill) fill.style.width = '0%';
  if (timeLbl) timeLbl.textContent = '0:00';
}

/* ---------- PŘEDNAČTENÍ POZADÍ ---------- */
pages.forEach(p => {
  const bg = p.getAttribute('data-bg');
  if (bg) {
    p.style.backgroundImage = `url('${bg}')`;
    const img = new Image();
    img.src = bg;
  }
});
