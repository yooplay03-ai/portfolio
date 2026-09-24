// Project modals
const modalData = {
  moodfit: `
    <div class="modal-title">MoodFit</div>
    <div class="modal-subtitle">AI 기반 날씨·감정 코디 추천 서비스</div>
    <div class="modal-tags">
      <span class="tag">HTML/CSS/JS</span><span class="tag">Groq API</span><span class="tag">기상청 API</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>사용자의 기분, 날씨, 만날 대상, 일정 정보를 바탕으로 AI가 옷장 속 옷으로 코디를 추천하는 서비스. 전체 아키텍처(웹+모바일+NestJS/Spring Boot API+PostgreSQL)를 기획했고, 핵심 플로우부터 검증하기 위해 단일 HTML 프로토타입(코드명 "Yummu")으로 먼저 구현.</p>
    </div>
    <div class="modal-section">
      <h4>내가 맡은 역할</h4>
      <ul>
        <li>로그인/회원가입, 옷장 등록·관리, AI 코디 추천까지 핵심 플로우를 단일 HTML 프로토타입으로 직접 구현</li>
        <li>기상청 실시간 날씨 API 연동</li>
        <li>Groq LLM 기반 AI 코디 추천 로직 설계·연동</li>
        <li>FastAPI/PostgreSQL/NestJS·Spring Boot 모노레포 구조의 풀 아키텍처 기획 및 문서화 (프로토타입 검증 이후 확장 예정)</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>추천 점수 알고리즘</h4>
      <p>날씨 적합도(30%) + 상황 적합도(25%) + 기분 매칭(20%) + 색상 조화(15%) + 최근 착용 빈도 역가중치(10%)</p>
    </div>
    <div class="modal-section">
      <h4>기획한 전체 아키텍처 (확장 계획)</h4>
      <div class="modal-pipeline">
        <span>Next.js Web</span><i>+</i><span>React Native</span><i>→</i>
        <span>NestJS API</span><i>/</i><span>Spring Boot</span><i>→</i>
        <span>PostgreSQL</span><i>+</i><span>Claude API</span>
      </div>
    </div>
    <div class="modal-section">
      <h4>현재 구현 현황 & 알려진 한계</h4>
      <ul>
        <li>✅ 동작: 로그인/회원가입(브라우저 저장), 기상청 실시간 날씨, 옷장 등록/관리, Groq LLM 기반 AI 코디 추천</li>
        <li>⏳ 미구현: 커뮤니티, 캘린더, 소셜 로그인 실연동, 모바일 앱, NestJS/Spring Boot 백엔드, DB</li>
        <li>사진으로 옷을 자동 분류하는 기능은 비전 AI 모델의 비용·제약으로 이번 범위에서 제외, 현재는 사용자가 직접 태그를 선택</li>
        <li>쇼핑몰 크롤링으로 옷장 데이터를 채우려던 초기 시도는 차단·저작권 문제로 중단하고, 사용자가 직접 옷 사진을 올리는 방식으로 전환</li>
      </ul>
    </div>
    <div class="modal-btn-row">
      <a href="https://github.com/yooplay03-ai/Clothes-ai" target="_blank" class="btn" style="font-size:0.82rem;padding:0.6rem 1.2rem;">GitHub 보기</a>
    </div>
  `,
  rag: `
    <div class="modal-title">RAG Chatbot</div>
    <div class="modal-subtitle">문서 기반 검색 증강 생성 챗봇</div>
    <div class="modal-tags">
      <span class="tag">Python</span><span class="tag">ChromaDB</span><span class="tag">Groq API</span>
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
        <span>ChromaDB 검색 (후보 10개)</span><i>→</i>
        <span>Reranking (상위 3개)</span><i>→</i>
        <span>Groq LLaMA 호출</span><i>→</i>
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
        <li>리랭킹: BAAI/bge-reranker-v2-m3</li>
        <li>LLM: Groq (LLaMA 3.3 70B)</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>성과 & 회고</h4>
      <p>개발 초기 Gemini API를 썼지만 한국 지역 무료 티어 제한(429 오류)으로 막혀 원인을 파악하고 Groq(LLaMA 3.3 70B)로 교체했습니다. 한국어 검색 품질이 제한적인 임베딩 모델(all-MiniLM-L6-v2)을 다국어 모델(bge-m3)로 교체하는 안, 문장 경계를 존중하는 청킹 방식, 멀티턴 대화 히스토리 유지 등 개선점을 README에 정리해두었습니다.</p>
    </div>
    <div class="modal-btn-row">
      <a href="https://github.com/yooplay03-ai/rag-chatbot" target="_blank" class="btn" style="font-size:0.82rem;padding:0.6rem 1.2rem;">GitHub 보기</a>
    </div>
  `,
  newsbias: `
    <div class="modal-title">뉴스 기사 편향성 분석</div>
    <div class="modal-subtitle">언론사별 뉴스 기사 감성·편향 분석 파이프라인</div>
    <div class="modal-tags">
      <span class="tag">Java</span><span class="tag">Spring Boot</span><span class="tag">MySQL</span>
      <span class="tag">ERD 설계</span><span class="tag">감성 분석</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>혐오 표현, 성차별, 인종차별, 정치적 편향 등 사회적으로 민감한 주제에 대해 언론사별 뉴스 기사가 얼마나 긍정적 혹은 부정적인 어조로 기울어져 있는지 분석하는 프로젝트. mbc아카데미 빅데이터 분석반에서 팀 프로젝트로 진행 (2025.11 – 2026.03).</p>
    </div>
    <div class="modal-section">
      <h4>내가 맡은 역할</h4>
      <ul>
        <li>Spring Boot 기반 REST API 서버 설계 및 구현</li>
        <li>우리말샘 API로 단어 수집, KNU 한국어 감성사전으로 긍정·부정 판별 로직 구현</li>
        <li>MySQL과 ERD 설계로 기사·키워드·감성 점수·댓글 데이터 구조화</li>
        <li>기사 크롤링 → 감성 분석 → 시각화로 이어지는 파이프라인 설계</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>파이프라인</h4>
      <div class="modal-pipeline">
        <span>기사 크롤링</span><i>→</i>
        <span>우리말샘 API</span><i>→</i>
        <span>KNU 감성사전 분석</span><i>→</i>
        <span>MySQL 저장</span><i>→</i>
        <span>긍정/부정 비율 시각화</span>
      </div>
    </div>
    <div class="modal-section">
      <h4>기술 스택</h4>
      <ul>
        <li>백엔드: Java, Spring Boot (REST API)</li>
        <li>DB: MySQL, ERD 설계</li>
        <li>분석: 우리말샘 API, KNU 한국어 감성사전</li>
      </ul>
    </div>
  `,
  safefood: `
    <div class="modal-title">Safe-food</div>
    <div class="modal-subtitle">만성질환자를 위한 여행 식당 정보 서비스</div>
    <div class="modal-tags">
      <span class="tag">Python</span><span class="tag">공공데이터 API</span><span class="tag">API 연동</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>고혈압·당뇨병·신장질환처럼 임상 기준이 명확한 만성질환자를 위해, 외식 메뉴의 안전도를 자동 판정해주는 Streamlit 웹앱. 단순히 식당을 추천하는 것을 넘어, 실제 만성질환자가 확인해야 하는 지표와 편의시설까지 고려해 타깃을 구체화하는 데 집중했다.</p>
    </div>
    <div class="modal-section">
      <h4>내가 맡은 역할</h4>
      <ul>
        <li>식약처·기상청·카카오·Anthropic 4개 외부 API 연동</li>
        <li>고혈압·당뇨병·신장질환 등 질환별 임상 가이드라인 기반 1식 기준치 자동 계산 로직 설계</li>
        <li>식약처 DB에 없는 메뉴를 재검색하는 폴백 로직, 지도 기반 코스 추천 기능 설계·구현</li>
        <li>API 인증 에러, 공공데이터 연동 문제를 직접 원인 분석해 해결</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>성과 & 회고</h4>
      <p>4개 외부 API를 안정적으로 연동한 동작하는 MVP를 완성했습니다(23차례 커밋). 다만 아직 사용자 테스트나 정확도 같은 정량적 지표는 없어 "진행 중" 프로젝트로 정직하게 밝힙니다. AI가 추정한 값과 식약처 실측치를 화면에서 구분 표시해, 근거 없는 확신을 주지 않는 방향으로 UI를 설계했습니다.</p>
    </div>
    <div class="modal-btn-row">
      <a href="https://github.com/yooplay03-ai/safe-food" target="_blank" class="btn" style="font-size:0.82rem;padding:0.6rem 1.2rem;">GitHub 보기</a>
    </div>
  `,
  safetydevice: `
    <div class="modal-title">후방 안전 알림 디바이스</div>
    <div class="modal-subtitle">아두이노 기반 임베디드 안전 디바이스 (4인 팀 프로젝트)</div>
    <div class="modal-tags">
      <span class="tag">Arduino(C/C++)</span><span class="tag">임베디드 시스템</span><span class="tag">센서</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>아두이노 기반 임베디드 시스템과 센서로 후방 접근 위험을 감지해 헬멧에 진동·LED로 알림을 전달하는 안전 디바이스. 위험 판단 알고리즘, 설계, 센서 데이터 처리, 하드웨어·소프트웨어 테스트를 팀원들과 분담해 진행.</p>
    </div>
    <div class="modal-section">
      <h4>내가 맡은 역할</h4>
      <ul>
        <li>센서 데이터 처리 및 임계값 로직 구현</li>
        <li>실제 충돌·낙상 상황 재현의 한계를 인지하고, 실주행 시나리오 테스트로 오탐지율 개선</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>기술 스택</h4>
      <ul>
        <li>Arduino(C/C++), 초음파·진동 센서, 임베디드 시스템 설계</li>
      </ul>
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
