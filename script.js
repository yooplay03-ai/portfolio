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
    <div class="modal-title">사내 규정 RAG 챗봇</div>
    <div class="modal-subtitle">회사 취업규칙(HWP)을 근거로 직원 질문에 답하는 RAG 챗봇 — 개인 프로젝트</div>
    <div class="modal-tags">
      <span class="tag">Python</span><span class="tag">RAG</span><span class="tag">ChromaDB</span>
      <span class="tag">bge-m3</span><span class="tag">Reranker</span><span class="tag">FastAPI</span><span class="tag">Groq API</span><span class="tag">HWP 파싱</span><span class="tag">pytest</span>
    </div>
    <div class="modal-section">
      <img src="https://raw.githubusercontent.com/yooplay03-ai/rag-chatbot/main/assets/demo.gif" alt="채팅 화면 데모: 질문하면 근거 조항, 리랭크 점수, 단계별 걸린 시간을 함께 보여 준다" loading="lazy" style="width:100%;max-width:560px;display:block;margin:0 auto;border-radius:10px;border:1px solid rgba(128,128,128,.25);">
      <p style="text-align:center;font-size:0.8rem;opacity:.7;margin-top:.4rem;">실제 속도 그대로 녹화 (내 PC, CPU)</p>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>범용 LLM은 공개된 일반 지식에는 강하지만 특정 회사의 내부 규정은 알지 못합니다. 기업 AX에서 가장 흔한 "사내 규정 비서"를 직접 구현해, 규정 문서를 검색해 그 조항을 근거로만 답하고 답변마다 근거 조항을 밝히도록 만들었습니다. 고용노동부 2026년 표준취업규칙을 바탕으로, 빈칸 15곳(근무 시간, 점심시간, 월급날, 여름휴가 등)을 가상 회사 "하늘테크"의 값으로 채워 외부에 공개되지 않은 사내 규정과 같은 상황을 만들었습니다.</p>
    </div>
    <div class="modal-section">
      <h4>같은 질문, 범용 LLM과 비교</h4>
      <ul>
        <li>"하늘테크 월급날이 언제야?" → Gemini: 정보를 찾을 수 없음 / 챗봇: 매월 25일, 휴일이면 전날 (근거: 제52조)</li>
        <li>"여름휴가는 며칠이야?" → Gemini: 정보를 찾을 수 없음 / 챗봇: 3일 (근거: 제37조)</li>
        <li>"창립기념일에도 쉬어?" → Gemini: 정보를 찾을 수 없음 / 챗봇: 4월 17일은 유급휴일 (근거: 제32조)</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>RAG 파이프라인</h4>
      <div class="modal-pipeline">
        <span>HWP 문서</span><i>→</i>
        <span>본문 추출</span><i>→</i>
        <span>조항 단위 분리 (99개)</span><i>→</i>
        <span>bge-m3 임베딩</span><i>→</i>
        <span>ChromaDB 검색 (후보 7개)</span><i>→</i>
        <span>Reranking (상위 3개)</span><i>→</i>
        <span>Groq LLM</span><i>→</i>
        <span>근거 조항과 답변</span>
      </div>
    </div>
    <div class="modal-section">
      <h4>주요 구현 내용</h4>
      <ul>
        <li>hwp_loader.py: 한글(HWP 5.0) 파일을 olefile·zlib로 직접 열어 본문 추출</li>
        <li>rules_parser.py: 규정을 "제○조(제목)" 단위로 나누고 담당자용 작성 해설은 제외, 회사 설정 파일로 빈칸 채우기</li>
        <li>청크마다 조항명·장 정보를 메타데이터로 저장하고, 답변에 근거 조항을 표시하도록 프롬프트 설계</li>
        <li>eval_retrieval.py: KorQuAD 기반 검색 평가 스크립트 (Hit@k, MRR)</li>
        <li>api.py: FastAPI 서버 (POST /ask, GET /health, 자동 API 문서), 입력 검증(1~500자)과 오류 코드 구분(키 없음 503, LLM 실패 502)</li>
        <li>tests/test_api.py: 모델과 LLM 호출을 가짜로 바꿔 API 동작만 확인하는 pytest 테스트 8개</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>검색 품질 평가</h4>
      <ul>
        <li>영어 임베딩 모델(all-MiniLM)의 한국어 검색 정확도(Hit@3)가 3.7%에 불과한 것을 발견 → 다국어 모델 bge-m3로 교체해 98.3%로 개선</li>
        <li>실패 사례 분석으로 고정 길이 청킹의 짧은 꼬리 청크 문제를 찾아 문장 단위 청킹 적용 (짧은 청크 155개 → 0개, 검색 점수 차이는 오차 범위)</li>
        <li>문단 960개로 어렵게 만든 평가에서 리랭킹이 Hit@1을 84.5% → 94.6%로 올리지만 응답 시간이 약 90배 늘어나는 트레이드오프 확인</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>응답 속도 개선</h4>
      <ul>
        <li>질문마다 임베딩 모델(약 2GB)을 다시 불러오던 구조를, 서버가 켜질 때 한 번만 불러 재사용하도록 변경</li>
        <li>단계별 시간을 나눠 재 보니 임베딩 검색 0.1초, 답변 생성 1~2초, 리랭킹 약 9초 → 병목은 리랭킹</li>
        <li>후보 수와 입력 길이를 바꿔 가며 직원 질문 12개로 측정: 후보 5개는 가장 빠르지만 괴롭힘 질문의 실제 근거(제80조)가 빠졌고, 길이를 자르면 1등이 바뀜</li>
        <li>후보 7개를 선택해 리랭킹 시간 30% 단축(8.1초 → 5.7초), 1등 조항은 12개 질문 모두 그대로 유지</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>성과 & 회고</h4>
      <p>외부 LLM API 변화에 두 번 대응했습니다. Gemini 무료 티어가 한국에서 막혀(429 오류) Groq로 옮겼고, 이후 Groq가 LLaMA 3.3 70B를 지원 종료하자 모델 이름을 한 곳에서만 관리해 둔 덕분에 설정 한 줄로 openai/gpt-oss-120b로 교체했습니다. "연차", "점심시간"처럼 직원이 쓰는 말과 "연차유급휴가", "휴게시간" 같은 규정 용어가 달라 검색 확신도가 낮아지는 문제를 발견해, 용어 사전이나 질문 재작성으로 개선할 계획입니다.</p>
    </div>
    <div class="modal-btn-row">
      <a href="https://github.com/yooplay03-ai/rag-chatbot" target="_blank" class="btn" style="font-size:0.82rem;padding:0.6rem 1.2rem;">GitHub 보기</a>
    </div>
  `,
  newsbias: `
    <div class="modal-title">편향 한 스푼</div>
    <div class="modal-subtitle">뉴스 기사 편향도 분석·공유 웹 서비스 — 3인 팀 프로젝트 (MBC아카데미 빅데이터 분석 과정, 2025.11 – 2026.03)</div>
    <div class="modal-tags">
      <span class="tag">Java</span><span class="tag">Spring Boot</span><span class="tag">JPA</span>
      <span class="tag">MySQL</span><span class="tag">ERD 설계</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>알고리즘 추천 때문에 한쪽 시각의 기사만 소비하게 되는 문제를 풀기 위해, 언론사별 뉴스 기사가 혐오 표현, 성차별, 정치 이슈 등 민감한 주제를 얼마나 긍정·부정적으로 다루는지 분석해 보여주고, 사용자끼리 분석 결과를 공유·토론할 수 있게 만든 웹 서비스입니다.</p>
    </div>
    <div class="modal-section">
      <h4>내가 맡은 역할 — 커뮤니티 DB 설계 및 REST API</h4>
      <ul>
        <li>Spring Boot와 JPA로 게시글·댓글·좋아요 등 커뮤니티 REST API(CRUD) 구현</li>
        <li>게시글·댓글·좋아요 테이블과 회원·분석 결과 테이블 간 연관관계를 설계하고, 첫 ERD에서 최종 ERD까지 구조 개선</li>
        <li>게시글 좋아요와 댓글 좋아요를 독립된 패키지로 분리해 유지보수성 향상</li>
        <li>팀원이 만든 분석 서버의 결과(JSON/UUID)를 게시글에 연결해 공유할 수 있도록 데이터 구조 설계</li>
        <li>서버 3개가 JSON으로 통신하는 구조에서 API 명세와 필드 이름을 팀원들과 맞추며 협업</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>팀 전체 구성</h4>
      <div class="modal-pipeline">
        <span>기사 크롤링</span><i>→</i>
        <span>감성·편향 분석</span><i>→</i>
        <span>MySQL 저장</span><i>→</i>
        <span>시각화 · 커뮤니티 공유</span>
      </div>
      <ul>
        <li>분석 서버 (팀원): FastAPI, BeautifulSoup 크롤링, 스마일게이트 AI 모델과 우리말샘 API·KNU 한국어 감성사전으로 기사 분석</li>
        <li>업무 서버: Spring Boot — 회원·보안(JWT) 및 커뮤니티 (커뮤니티 DB·API는 본인 담당)</li>
        <li>화면: React (Recharts로 시각화)</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>기술 스택 (본인 담당)</h4>
      <ul>
        <li>Java, Spring Boot, JPA, MySQL, ERD 설계</li>
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
  satellite: `
    <div class="modal-title">국립공원 위성 AI 챌린지</div>
    <div class="modal-subtitle">위성영상 기반 시설물 변화 탐지 (Change Detection) — 개인 프로젝트</div>
    <div class="modal-tags">
      <span class="tag">Python</span><span class="tag">PyTorch</span><span class="tag">Segmentation Models</span><span class="tag">rasterio</span><span class="tag">Change Detection</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>국립공원 시설물 변화를 위성영상으로 자동 탐지하는 AI 챌린지(Change Detection) 과제. 같은 지역의 서로 다른 두 시점 위성영상을 비교해 신축 시설물·벌목 같은 변화를 픽셀 단위로 분류한다.</p>
    </div>
    <div class="modal-section">
      <h4>내가 맡은 역할</h4>
      <ul>
        <li>PyTorch로 Siamese U-Net 구조의 변화 탐지 모델을 처음부터 직접 설계</li>
        <li>rasterio로 실제 위성 GeoTIFF 영상을 전처리·시각화하고 NDVI(식생지수) 계산</li>
        <li>사전학습된 세그멘테이션 모델(ResNet18 인코더 U-Net)을 파인튜닝하는 학습 스크립트 작성</li>
        <li>실제 위성영상이 부족한 문제에 대응해, Perlin 노이즈 기반 절차적 지형 텍스처와 광도 변화·그림자·시차 등 "가짜 변화" 하드 네거티브 데이터를 직접 합성하는 데이터 증강 전략 설계</li>
        <li>클래스 불균형 대응을 위해 Dice Loss + 가중 Cross Entropy 결합 적용</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>성과 & 회고</h4>
      <p>2026년 9월 대회 리더보드에 제출해 베이스라인 대비 Public 점수를 0.2745 → 0.2931로 개선했습니다. 합성 하드 네거티브 데이터 증강 파인튜닝으로 +0.0082, 추론 단계 신뢰도 임계값(CONF_THRESH)을 0.8→0.5로 낮춰 +0.0101을 개선했는데, 특히 후처리 파라미터 하나를 조정한 것이 재학습보다 더 큰 효과를 냈습니다. 조명·그림자·촬영 각도 차이만으로도 모델이 "변화"로 오인식하는 문제를 직접 겪으면서, 평가 산식을 이해하고 그에 맞춰 후처리를 조정하는 것이 무작정 모델을 정교화하는 것보다 효율적일 수 있다는 것을 배웠습니다.</p>
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
