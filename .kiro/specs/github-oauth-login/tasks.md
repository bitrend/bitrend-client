# 구현 계획

- [x] 1. 프로젝트 설정 및 의존성 추가
  - axios 패키지 설치
  - TypeScript 타입 정의 파일 생성 (인증 관련 인터페이스)
  - _요구사항: 4.1_

- [x] 2. Login 컴포넌트 구현
  - [x] 2.1 Login 컴포넌트 파일 생성 및 기본 구조 작성
    - src/pages/Login/Login.tsx 파일 생성
    - GitHub 로그인 버튼 UI 구현
    - 기존 Theme 시스템을 활용한 스타일링
    - _요구사항: 1.1_

  - [x] 2.2 GitHub OAuth 리디렉션 로직 구현
    - socialLoginHandler 함수 작성
    - GITHUB_LOGIN_URL 상수 정의 (client_id 포함)
    - window.location.assign을 사용한 리디렉션
    - _요구사항: 1.2_

- [x] 3. 인증 상태 관리 구현
  - [x] 3.1 App 컴포넌트에 인증 상태 추가
    - useState를 사용하여 isLogin, accessToken 상태 관리
    - AuthState 타입 정의
    - _요구사항: 4.1_

  - [x] 3.2 URL에서 authorization code 추출 로직 구현
    - useEffect 훅 사용
    - URLSearchParams를 사용하여 'code' 파라미터 추출
    - authorization code가 있을 경우 토큰 교환 함수 호출
    - _요구사항: 1.3, 1.4, 4.2, 4.3_

  - [x] 3.3 토큰 교환 API 호출 구현
    - getAccessToken 함수 작성
    - Backend Server (http://localhost:3000/callback)로 POST 요청
    - 응답으로 받은 accessToken을 상태에 저장
    - isLogin을 true로 업데이트
    - 에러 처리 (catch 블록)
    - _요구사항: 2.1, 2.2, 2.3_

- [x] 4. Mypage 컴포넌트 구현
  - [x] 4.1 Mypage 컴포넌트 파일 생성 및 기본 구조 작성
    - src/pages/Mypage/Mypage.tsx 파일 생성
    - accessToken을 props로 받는 인터페이스 정의
    - GitHubUserInfo 상태 타입 정의
    - _요구사항: 2.4, 4.4_

  - [x] 4.2 GitHub 사용자 정보 조회 API 호출 구현
    - useEffect 훅 사용 (컴포넌트 마운트 시 실행)
    - getGitHubUserInfo 함수 작성
    - GitHub API (https://api.github.com/user)로 GET 요청
    - Authorization 헤더에 "token {accessToken}" 형식으로 토큰 포함
    - 응답 데이터에서 name, login, html_url, public_repos 추출
    - 에러 처리
    - _요구사항: 3.1, 3.2, 3.4_

  - [x] 4.3 사용자 정보 UI 렌더링
    - name, login, html_url, public_repos를 화면에 표시
    - 기존 Theme 시스템을 활용한 스타일링
    - 로딩 상태 표시 (선택적)
    - _요구사항: 3.3_

- [x] 5. 라우팅 및 조건부 렌더링 구성
  - [x] 5.1 App 컴포넌트에 Login 라우트 추가
    - React Router에 /login 경로 추가
    - Login 컴포넌트 연결
    - _요구사항: 1.1_

  - [x] 5.2 인증 상태에 따른 리디렉션 로직 구현
    - isLogin이 false일 때 Login 페이지로 리디렉션
    - isLogin이 true일 때 Mypage 또는 기존 페이지 접근 허용
    - useEffect와 useNavigate 활용
    - _요구사항: 2.4, 4.2_

  - [x] 5.3 Mypage 라우트 추가 및 accessToken 전달
    - /mypage 경로 추가
    - Mypage 컴포넌트에 accessToken props 전달
    - _요구사항: 4.4_

- [x] 6. 에러 처리 및 사용자 경험 개선
  - [x] 6.1 토큰 교환 실패 시 에러 처리
    - catch 블록에서 에러 로깅
    - 로그인 상태를 false로 유지
    - 사용자에게 에러 메시지 표시 (선택적)
    - _요구사항: 3.4_

  - [x] 6.2 GitHub API 호출 실패 시 에러 처리
    - catch 블록에서 에러 처리
    - 기본값 또는 에러 메시지 표시
    - 애플리케이션 크래시 방지
    - _요구사항: 3.4_

- [ ]* 7. 테스트 작성
  - [ ]* 7.1 Login 컴포넌트 단위 테스트
    - 버튼 렌더링 확인
    - 버튼 클릭 시 리디렉션 확인
    - _요구사항: 1.1, 1.2_

  - [ ]* 7.2 Mypage 컴포넌트 단위 테스트
    - props 전달 확인
    - API 호출 확인
    - 사용자 정보 렌더링 확인
    - _요구사항: 3.1, 3.2, 3.3_

  - [ ]* 7.3 App 컴포넌트 통합 테스트
    - authorization code 추출 로직 테스트
    - 토큰 교환 플로우 테스트
    - 조건부 렌더링 테스트
    - _요구사항: 4.2, 4.3_
