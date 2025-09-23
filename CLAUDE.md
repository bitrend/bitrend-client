# BitTrend Client Project

## 프로젝트 구조

### 기술 스택
- **React 19.1.1** with TypeScript
- **Emotion** for CSS-in-JS styling (@emotion/react, @emotion/styled)
- **Vite** for development and build
- **Material Symbols Rounded** for icons

### 디렉토리 구조
```
src/
├── App.tsx                 # 메인 앱 컴포넌트
├── main.tsx               # 앱 진입점
├── index.css              # 글로벌 스타일
├── Layout/                # 레이아웃 컴포넌트
│   ├── Layout.tsx
│   ├── styled.ts
│   ├── Header/
│   ├── Sidebar/
│   └── components/
├── components/            # 재사용 가능한 컴포넌트
│   ├── BarChart/          # 바 차트 컴포넌트
│   ├── Button/
│   ├── ActionableCard/
│   ├── ToggleButton/
│   ├── Icons/
│   └── common/
│       └── MainCard/      # 공통 카드 컴포넌트
├── pages/                 # 페이지 컴포넌트
│   └── Dashboard/         # 대시보드 페이지
├── Theme/                 # 테마 설정
│   └── theme.ts
└── assets/               # 정적 자원
```

### 스타일링 시스템

#### Theme 구조 (src/Theme/theme.ts)
- **Color**: Primary (HotPink 계열), GrayScale 색상 팔레트
- **Theme**: Functional, Text, Surface, Stroke 색상 정의
- **Gap**: 0.25rem~2.625rem까지 간격 설정
- **Radius**: 0.25rem~999rem까지 border-radius 설정
- **Text**: Main, Title, Body, Label 타이포그래피 정의

#### 스타일링 컨벤션
- Emotion의 `css` 및 styled-components 패턴 사용
- `styled.ts` 파일로 스타일 분리
- rem 단위 기본 사용
- Theme 객체에서 색상 및 크기 값 참조

### 컴포넌트 구조
- 각 컴포넌트는 자체 디렉토리 구조 (Component.tsx + styled.ts)
- Props 타입 정의는 TypeScript interface 사용
- Theme 시스템 활용한 일관된 디자인

### 개발 명령어
- `npm run dev`: 개발 서버 시작
- `npm run build`: 프로덕션 빌드
- `npm run lint`: ESLint 실행

### 대시보드 페이지 요구사항
Figma 디자인 노드 ID: 605:36

**주요 구성요소:**
1. **헤더**: BInaries 로고, 검색바, 알림 버튼
2. **타이틀 섹션**: "Dashboard" 제목 + 사용자 인사말 + 액션 버튼들
3. **메인 컨텐츠 (3개 카드)**:
   - **Total Binaries 카드**: 통계 + 분포 바 차트 + 상세 리스트
   - **Binaries Variation 카드**: 시간별 변화 차트
   - **Rank 카드**: 개발자 등급 정보

**스타일 요구사항:**
- 기본 단위: rem
- 다크 테마 (#060610, #141420, #26273c 기반)
- HotPink 계열 프라이머리 컬러 (#ff3b79, #ff709d, #ff99b9)
- Material Symbols Rounded 아이콘 사용(Icon 컴포넌트 사용하면 됨)