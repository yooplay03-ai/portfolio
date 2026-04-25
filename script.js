const skills = [
  { name: 'Python',     ico: '🐍', color: '#3572A5', size: 82 },
  { name: 'Java',       ico: '☕', color: '#b07219', size: 76 },
  { name: 'FastAPI',    ico: '⚡', color: '#009688', size: 72 },
  { name: 'SQL',        ico: '🗄️', color: '#e38c00', size: 68 },
  { name: 'PostgreSQL', ico: '🐘', color: '#336791', size: 66 },
  { name: 'MySQL',      ico: '🐬', color: '#4479A1', size: 64 },
  { name: 'ML/DL',      ico: '🧠', color: '#7c6af7', size: 74 },
  { name: 'Git',        ico: '🔀', color: '#f05032', size: 66 },
  { name: 'GitHub',     ico: '🐙', color: '#555',    size: 62 },
  { name: 'ChromaDB',   ico: '📦', color: '#1a8c6e', size: 64 },
  { name: 'Gemini',     ico: '✦',  color: '#4285F4', size: 66 },
  { name: 'Claude',     ico: '◆',  color: '#c76b4e', size: 64 },
];

const container = document.getElementById('skillsContainer');
const H = 320;
const getW = () => container.offsetWidth || 900;

const balls = skills.map((s) => {
  const el = document.createElement('div');
  el.className = 'skill-ball';
  el.style.cssText = `width:${s.size}px;height:${s.size}px;background:${s.color}20;border:1.5px solid ${s.color}60;`;
  el.innerHTML = `<div class="ico">${s.ico}</div><div class="lbl">${s.name}</div>`;
  container.appendChild(el);
  return {
    el, size: s.size,
    x: getW() * 0.05 + Math.random() * getW() * 0.9,
    y: s.size / 2 + Math.random() * (H - s.size),
    vx: (Math.random() - 0.5) * 1.8,
    vy: (Math.random() - 0.5) * 1.8,
    dragging: false, ox: 0, oy: 0
  };
});

function collide() {
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      const a = balls[i], b = balls[j];
      const min = (a.size + b.size) / 2;
      const dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < min && d > 0) {
        const nx = dx / d, ny = dy / d;
        const ov = (min - d) / 2;
        if (!a.dragging) { a.x -= nx * ov; a.y -= ny * ov; }
        if (!b.dragging) { b.x += nx * ov; b.y += ny * ov; }
        const rv = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
        if (rv > 0) {
          a.vx -= rv * nx; a.vy -= rv * ny;
          b.vx += rv * nx; b.vy += rv * ny;
        }
      }
    }
  }
}

function loop() {
  const cw = getW();
  balls.forEach(b => {
    if (b.dragging) return;
    b.x += b.vx; b.y += b.vy;
    const r = b.size / 2;
    if (b.x - r < 0)  { b.x = r;      b.vx *= -1; }
    if (b.x + r > cw) { b.x = cw - r; b.vx *= -1; }
    if (b.y - r < 0)  { b.y = r;      b.vy *= -1; }
    if (b.y + r > H)  { b.y = H - r;  b.vy *= -1; }
  });
  collide();
  balls.forEach(b => {
    b.el.style.left = (b.x - b.size / 2) + 'px';
    b.el.style.top  = (b.y - b.size / 2) + 'px';
  });
  requestAnimationFrame(loop);
}
loop();

balls.forEach(b => {
  const rect = () => container.getBoundingClientRect();
  const down = (ex, ey) => { b.dragging = true; b.ox = ex - b.x; b.oy = ey - b.y; b.vx = 0; b.vy = 0; };
  const move = (ex, ey) => { if (!b.dragging) return; b.x = ex - b.ox; b.y = ey - b.oy; };
  const up   = (ex, ey) => { if (!b.dragging) return; b.vx = (ex - b.ox - b.x) * 0.15 + (Math.random() - 0.5) * 2; b.vy = (ey - b.oy - b.y) * 0.15 + (Math.random() - 0.5) * 2; b.dragging = false; };

  b.el.addEventListener('mousedown',   e => down(e.clientX - rect().left, e.clientY - rect().top));
  window.addEventListener('mousemove', e => move(e.clientX - rect().left, e.clientY - rect().top));
  window.addEventListener('mouseup',   e => up(e.clientX - rect().left,   e.clientY - rect().top));
  b.el.addEventListener('touchstart',  e => { const t = e.touches[0]; down(t.clientX - rect().left, t.clientY - rect().top); }, { passive: true });
  window.addEventListener('touchmove', e => { const t = e.touches[0]; move(t.clientX - rect().left, t.clientY - rect().top); }, { passive: true });
  window.addEventListener('touchend',  e => { const t = e.changedTouches[0]; up(t.clientX - rect().left, t.clientY - rect().top); });
});

// Project modals
const modalData = {
  moodfit: `
    <div class="modal-title">MoodFit</div>
    <div class="modal-subtitle">AI 기반 날씨·감정 코디 추천 서비스</div>
    <div class="modal-tags">
      <span class="tag">Python</span><span class="tag">FastAPI</span><span class="tag">PostgreSQL</span>
      <span class="tag">Claude API</span><span class="tag">NestJS</span><span class="tag">Spring Boot</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>사용자의 기분, 날씨, 만날 대상, 일정 정보를 바탕으로 AI가 최적의 코디를 추천하는 서비스. 아침마다 옷 고르는 시간을 단축하고 실제 보유 의류 기반의 현실적인 스타일 제안을 목표로 설계.</p>
    </div>
    <div class="modal-section">
      <h4>내가 맡은 역할</h4>
      <ul>
        <li>Python + FastAPI 기반 RESTful 백엔드 설계 및 CRUD API 구현</li>
        <li>PostgreSQL 데이터 모델 설계 (User, ClothingItem, OutfitRecommendation 등)</li>
        <li>Claude API + 날씨 API 연동하여 AI 코디 추천 로직 개발</li>
        <li>NestJS / Spring Boot 병행 모노레포 아키텍처 구성</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>추천 점수 알고리즘</h4>
      <p>날씨 적합도(30%) + 상황 적합도(25%) + 기분 매칭(20%) + 색상 조화(15%) + 최근 착용 빈도 역가중치(10%)</p>
    </div>
    <div class="modal-section">
      <h4>아키텍처</h4>
      <div class="modal-pipeline">
        <span>Next.js Web</span><i>+</i><span>React Native</span><i>→</i>
        <span>NestJS API</span><i>/</i><span>Spring Boot</span><i>→</i>
        <span>PostgreSQL</span><i>+</i><span>Claude API</span>
      </div>
    </div>
    <div class="modal-btn-row">
      <a href="https://github.com/yooplay03-ai/Clothes-AI-new" target="_blank" class="btn" style="font-size:0.82rem;padding:0.6rem 1.2rem;">GitHub 보기</a>
    </div>
  `,
  rag: `
    <div class="modal-title">RAG Chatbot</div>
    <div class="modal-subtitle">문서 기반 검색 증강 생성 챗봇</div>
    <div class="modal-tags">
      <span class="tag">Python</span><span class="tag">ChromaDB</span><span class="tag">Gemini API</span>
      <span class="tag">RAG</span><span class="tag">SentenceTransformers</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>외부 문서를 벡터 DB에 저장하고 사용자 질문과 유사한 청크를 검색해 LLM에 컨텍스트로 전달하는 RAG 파이프라인을 처음부터 직접 설계·구현.</p>
    </div>
    <div class="modal-section">
      <h4>RAG 파이프라인</h4>
      <div class="modal-pipeline">
        <span>문서 입력</span><i>→</i>
        <span>청킹 (500자)</span><i>→</i>
        <span>임베딩 변환</span><i>→</i>
        <span>ChromaDB 저장</span><i>→</i>
        <span>유사도 검색 (top-k)</span><i>→</i>
        <span>Gemini API 호출</span><i>→</i>
        <span>답변 출력</span>
      </div>
    </div>
    <div class="modal-section">
      <h4>주요 구현 내용</h4>
      <ul>
        <li>ingest.py: 문서 추가·삭제·조회 모듈</li>
        <li>chatbot.py: RAG 파이프라인 + 대화형 CLI</li>
        <li>청크 크기·오버랩·검색 수(TOP_K) 파라미터 튜닝</li>
        <li>검색 품질 분석 및 임베딩 모델 비교 실험</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>기술 스택</h4>
      <ul>
        <li>벡터 DB: ChromaDB (로컬 영속 저장)</li>
        <li>임베딩: SentenceTransformers (all-MiniLM-L6-v2)</li>
        <li>LLM: Gemini 2.0 Flash Lite</li>
      </ul>
    </div>
    <div class="modal-btn-row">
      <a href="https://github.com/yooplay03-ai/rag-chatbot" target="_blank" class="btn" style="font-size:0.82rem;padding:0.6rem 1.2rem;">GitHub 보기</a>
    </div>
  `
};

function openModal(key) {
  document.getElementById('modalContent').innerHTML = modalData[key];
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') { document.body.classList.add('light'); toggleBtn.textContent = '☀️'; }
toggleBtn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('cf-submit');
    const status = document.getElementById('cf-status');
    btn.textContent = '전송 중...'; btn.disabled = true;
    const res = await fetch(contactForm.action, {
      method: 'POST', body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      status.textContent = '메시지가 전송되었습니다. 감사합니다!';
      contactForm.reset();
    } else {
      status.style.color = '#f87171';
      status.textContent = '전송에 실패했습니다. 이메일로 직접 연락 부탁드립니다.';
    }
    btn.textContent = '보내기'; btn.disabled = false;
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
