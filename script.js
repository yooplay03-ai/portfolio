// Project modals
const modalData = {
  moodfit: `
    <div class="modal-title">MoodFit</div>
    <div class="modal-subtitle">내 옷장에 있는 옷으로 오늘 코디를 짜 주는 AI 서비스 — 개인 프로젝트</div>
    <div class="modal-tags">
      <span class="tag">Python</span><span class="tag">FastAPI</span><span class="tag">FashionCLIP</span><span class="tag">rembg</span>
      <span class="tag">SQLAlchemy</span><span class="tag">JWT</span><span class="tag">Groq API</span><span class="tag">pytest</span>
    </div>
    <div class="modal-section">
      <h4>왜 만들었나</h4>
      <p>쇼핑몰과 코디 커뮤니티는 남의 코디를 보여 주지만, "오늘 내 옷장에 있는 옷으로 뭘 입을지"는 정해 주지 않습니다. 날씨·일정·기분을 고르면(앱을 열면 바로) 내 옷 중에서 코디 3개를 고르고, 왜 그 조합인지 항목별 점수와 함께 보여 줍니다.</p>
    </div>
    <div class="modal-section">
      <h4>실제 옷장 사진에 AI 붙이기</h4>
      <ul>
        <li>FashionCLIP으로 종류·계절·색·스타일을 자동으로 채움. 상품 사진 데이터에서는 괜찮던 분류가 직접 찍은 옷 사진(개발용 15벌·시험용 9벌)에서는 무너지는 것을 확인</li>
        <li>하의 계절은 8벌 중 4벌만 맞아(사진으로 원단 두께가 안 보임) 사용자 확인을 받도록 하고, 사용자가 고친 값은 "다시 분석"이 덮어쓰지 않게 설계</li>
        <li>배경 제거(rembg)로 집에서 찍은 사진을 상품 사진처럼 정리</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>추천: 코디 조합 단위 점수 + LLM은 설명만</h4>
      <div class="modal-pipeline">
        <span>날씨·일정·기분</span><i>→</i>
        <span>가능한 조합 전부</span><i>→</i>
        <span>날씨·상황·색·새로움 점수</span><i>→</i>
        <span>겹치지 않는 상위 3개</span><i>→</i>
        <span>LLM이 설명</span>
      </div>
      <ul>
        <li>처음엔 LLM이 조합을 골라 이유를 설명할 수 없었음 → 점수로 고르고 LLM은 설명만. LLM이 실패해도 추천은 동작</li>
        <li>정확도 측정: 점수 구간을 섞어 뽑은 코디 36개를 직접 평가 → 전체 AUC 0.58(동전 던지기보다 조금 나은 수준), 색 조합 규칙만 0.71. 같은 평가로 가중치를 바꿔 숫자를 부풀리지 않음</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>옷 등록 부담 줄이기</h4>
      <ul>
        <li>기본 옷 44종 카탈로그: 쇼핑몰 크롤링(약관·저작권) 대신 사용이 허용된 Pixabay API로 수집</li>
        <li>처음엔 "AI 판정 42/44 통과"였지만 직접 보니 쓸 만한 건 5~6장 → 상품 사진·사람 없음·종류·색·배경 제거 기준을 세워 통과한 사진만 사용, 나머지는 그림으로</li>
        <li>상품 링크 하나로 내 옷 사진 가져오기 — 서버가 내부망에 접속하지 못하게 SSRF 차단</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>한계 & 다음 단계</h4>
      <p>옷이 적으면 추천도 한정되고, 옷끼리의 격(포멀·캐주얼)을 맞추는 점수가 아직 없어 색만 맞는 어색한 조합이 나올 수 있습니다. 다음 단계는 옷마다 격식 정도를 매겨 차이에 감점하고, 새로 모은 평가로 따로 검증하는 것입니다.</p>
    </div>
    <div class="modal-btn-row">
      <a href="https://github.com/yooplay03-ai/MoodFit" target="_blank" class="btn" style="font-size:0.82rem;padding:0.6rem 1.2rem;">GitHub 보기</a>
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
    <div class="modal-subtitle">만성질환자를 위한 여행지 외식 안전 가이드 — 개인 프로젝트</div>
    <div class="modal-tags">
      <span class="tag">Python</span><span class="tag">Streamlit</span><span class="tag">공공데이터 API</span>
      <span class="tag">카카오 로컬 API</span><span class="tag">folium</span><span class="tag">Supabase</span><span class="tag">pytest</span>
    </div>
    <div class="modal-section">
      <h4>프로젝트 개요</h4>
      <p>고혈압·당뇨병·신장질환처럼 임상 기준이 명확한 만성질환자가 여행지에서 메뉴를 고를 때, 메뉴별 안전도를 바로 판정해 주는 웹앱입니다. 날씨, 근처 식당·화장실, 관광 코스까지 함께 안내해 크론병 환자처럼 화장실 접근성이 중요한 사용자도 고려했습니다.</p>
    </div>
    <div class="modal-section">
      <h4>판정 방식</h4>
      <ul>
        <li>대한고혈압학회·대한당뇨병학회·대한신장학회·KDIGO 가이드라인의 하루 기준을 1식으로 환산 (주의 1/3, 경고 1/2). 여러 질환이면 가장 엄격한 기준</li>
        <li>식약처 표준 영양성분 DB(19,495개 메뉴)의 100g 기준값을 1인분 중량으로 환산해 비교</li>
        <li>DB에 없는 메뉴명은 수식어 제거 → 음식 종류 접미사 순으로 재검색 (즉석떡볶이 → 떡볶이, 진미평양냉면 → 냉면). 그래도 없으면 AI 추정치를 실측치와 구분해 표시</li>
        <li>연동: 기상청 단기예보(격자 변환 직접 구현), 관광공사 TourAPI·무장애 정보, 카카오 로컬, Google Places, Supabase 로그인</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>정리하며 고친 점</h4>
      <ul>
        <li>3,058줄 한 파일에 화면·판정 규칙·API 호출이 섞여 있던 것을 모듈 6개로 분리 (판정 규칙은 화면과 무관한 순수 함수로)</li>
        <li>나눈 뒤 동작이 바뀌지 않았는지 원본과 새 버전을 똑같이 조작해 화면 출력 전체를 자동 비교 → 동일 확인</li>
        <li>공개 저장소에 올라가 있던 계정 DB 파일 제거, 비밀번호 해시를 sha256 한 번 → PBKDF2 31만 번 (기존 계정은 로그인 시 자동 전환)</li>
        <li>기상청 발표 직후 아직 없는 자료를 요청해 실패하던 문제 수정, pytest 18개 (기준치·경계값·재검색·격자 변환·키 없이 앱 전체 실행)</li>
      </ul>
    </div>
    <div class="modal-section">
      <h4>한계</h4>
      <p>판정은 표준 레시피 기준 추정치라 실제 조리법에 따라 다를 수 있고, 식당 등급은 업종 단위 추정입니다. 실제 사용자 테스트는 아직 하지 않았습니다.</p>
    </div>
    <div class="modal-btn-row">
      <a href="https://safe-food-i3veeqsaiznhsmb3ji7drp.streamlit.app" target="_blank" class="btn" style="font-size:0.82rem;padding:0.6rem 1.2rem;">바로 써 보기</a>
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
