# 요구사항 문서

## 소개

이 문서는 Bitrend 애플리케이션에 GitHub OAuth 2.0 인증 기능을 추가하기 위한 요구사항을 정의합니다. 사용자는 GitHub 계정을 통해 로그인하고, 애플리케이션은 GitHub API를 통해 사용자 정보에 접근할 수 있습니다.

## 용어 정의

- **OAuth App**: GitHub에 등록된 OAuth 애플리케이션
- **Authorization Code**: GitHub 인증 후 발급되는 일시적 코드
- **Access Token**: Resource Server(GitHub API)에 접근하기 위한 토큰
- **Client**: Bitrend 프론트엔드 애플리케이션
- **Authorization Server**: GitHub OAuth 인증 서버
- **Resource Server**: GitHub API 서버
- **Backend Server**: Bitrend 백엔드 서버 (http://localhost:3000)
- **Login Component**: 로그인 페이지를 렌더링하는 React 컴포넌트
- **Mypage Component**: 사용자 정보를 표시하는 React 컴포넌트

## 요구사항

### 요구사항 1

**사용자 스토리:** 사용자로서, GitHub 계정으로 로그인하여 애플리케이션에 접근하고 싶습니다.

#### 인수 기준

1. THE Login Component SHALL 버튼에 "Github으로 로그인" 텍스트를 표시한다
2. WHEN 사용자가 GitHub 로그인 버튼을 클릭하면, THE Client SHALL 사용자를 "https://github.com/login/oauth/authorize?client_id=ee33270fac53d2e7b61c"로 리디렉션한다
3. WHEN GitHub 인증이 성공적으로 완료되면, THE Authorization Server SHALL authorization code를 URL 쿼리 파라미터에 포함하여 사용자를 Client로 리디렉션한다
4. THE Client SHALL URL 쿼리 파라미터 "code"에서 authorization code를 추출한다

### 요구사항 2

**사용자 스토리:** 사용자로서, 로그인 후 내 GitHub 프로필 정보를 확인하고 싶습니다.

#### 인수 기준

1. WHEN Client가 authorization code를 받으면, THE Client SHALL "http://localhost:3000/callback"으로 authorization code를 요청 본문에 포함하여 POST 요청을 전송한다
2. WHEN Backend Server가 access token으로 응답하면, THE Client SHALL access token을 애플리케이션 상태에 저장한다
3. WHEN access token이 성공적으로 저장되면, THE Client SHALL 로그인 상태를 인증됨으로 업데이트한다
4. WHEN 사용자가 인증되면, THE Client SHALL Login Component 대신 Mypage Component를 표시한다

### 요구사항 3

**사용자 스토리:** 사용자로서, 로그인 후 내 GitHub 사용자 정보를 볼 수 있어야 합니다.

#### 인수 기준

1. WHEN Mypage Component가 마운트되면, THE Client SHALL Authorization 헤더에 access token을 포함하여 "https://api.github.com/user"로 GET 요청을 전송한다
2. THE Client SHALL Authorization 헤더를 "token {accessToken}" 형식으로 포맷한다
3. WHEN Resource Server가 사용자 데이터로 응답하면, THE Mypage Component SHALL 사용자의 name, login, html_url, public_repos 개수를 표시한다
4. IF API 요청이 실패하면, THE Client SHALL 애플리케이션을 중단시키지 않고 오류를 적절히 처리한다

### 요구사항 4

**사용자 스토리:** 개발자로서, 애플리케이션의 인증 상태를 관리하고 싶습니다.

#### 인수 기준

1. THE Client SHALL isLogin(boolean)과 accessToken(string)을 포함하는 인증 상태를 유지한다
2. WHEN 애플리케이션이 로드되면, THE Client SHALL URL에서 authorization code를 확인한다
3. IF URL에 authorization code가 존재하면, THE Client SHALL 토큰 교환 프로세스를 시작한다
4. THE Client SHALL 인증이 필요한 자식 컴포넌트에 access token을 전달하는 메커니즘을 제공한다
