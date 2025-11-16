import { useState, useEffect } from "react";
import axios from "axios";
import type { MypageProps, GitHubUserInfo } from "../../types/auth";
import { Container, UserCard, UserInfo, InfoRow, Label, Value, LinkValue, LoadingText, ErrorText, RetryButton } from "./styled";

export function Mypage({ accessToken }: MypageProps) {
  const [userInfo, setUserInfo] = useState<GitHubUserInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // 4.2: GitHub 사용자 정보 조회 API 호출
  const getGitHubUserInfo = async () => {
    try {
      const response = await axios.get<GitHubUserInfo>(
        "https://api.github.com/user",
        {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        }
      );

      // 응답 데이터에서 name, login, html_url, public_repos 추출
      setUserInfo({
        name: response.data.name,
        login: response.data.login,
        html_url: response.data.html_url,
        public_repos: response.data.public_repos,
      });
      setLoading(false);
      setError(""); // 성공 시 에러 메시지 초기화
    } catch (err) {
      // 6.2: GitHub API 호출 실패 시 에러 처리
      // catch 블록에서 에러 처리
      console.error("Failed to fetch GitHub user info:", err);
      
      // 애플리케이션 크래시 방지 및 기본값 또는 에러 메시지 표시
      if (axios.isAxiosError(err)) {
        if (err.response) {
          // 서버가 응답했지만 에러 상태 코드를 반환
          if (err.response.status === 401) {
            setError("인증이 만료되었습니다. 다시 로그인해주세요.");
          } else if (err.response.status === 403) {
            setError("GitHub API 접근 권한이 없습니다.");
          } else if (err.response.status === 404) {
            setError("사용자 정보를 찾을 수 없습니다.");
          } else {
            setError(`사용자 정보를 불러오는데 실패했습니다. (오류 코드: ${err.response.status})`);
          }
        } else if (err.request) {
          // 요청은 보냈지만 응답을 받지 못함
          setError("GitHub 서버에 연결할 수 없습니다. 네트워크를 확인해주세요.");
        } else {
          // 요청 설정 중 오류 발생
          setError("요청 처리 중 오류가 발생했습니다.");
        }
      } else {
        // Axios 에러가 아닌 경우
        setError("알 수 없는 오류가 발생했습니다.");
      }
      
      setLoading(false);
    }
  };

  // useEffect 훅 사용 (컴포넌트 마운트 시 실행)
  useEffect(() => {
    if (accessToken) {
      getGitHubUserInfo();
    }
  }, [accessToken]);

  // 4.3: 사용자 정보 UI 렌더링
  if (loading) {
    return (
      <Container>
        <LoadingText>로딩 중...</LoadingText>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <UserCard>
          <ErrorText>{error}</ErrorText>
          <RetryButton onClick={() => {
            setError("");
            setLoading(true);
            getGitHubUserInfo();
          }}>
            다시 시도
          </RetryButton>
        </UserCard>
      </Container>
    );
  }

  if (!userInfo) {
    return (
      <Container>
        <ErrorText>사용자 정보를 찾을 수 없습니다.</ErrorText>
      </Container>
    );
  }

  return (
    <Container>
      <UserCard>
        <UserInfo>
          <InfoRow>
            <Label>이름</Label>
            <Value>{userInfo.name}</Value>
          </InfoRow>
          <InfoRow>
            <Label>사용자명</Label>
            <Value>{userInfo.login}</Value>
          </InfoRow>
          <InfoRow>
            <Label>프로필 URL</Label>
            <LinkValue href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
              {userInfo.html_url}
            </LinkValue>
          </InfoRow>
          <InfoRow>
            <Label>공개 저장소</Label>
            <Value>{userInfo.public_repos}개</Value>
          </InfoRow>
        </UserInfo>
      </UserCard>
    </Container>
  );
}
