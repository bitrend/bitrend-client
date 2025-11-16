import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Layout } from "./Layout/Layout";
import { Project } from "./pages/Project/Project";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Analytics/Analytics";
import { User } from "./pages/User/User";
import { Login } from "./pages/Login/Login";
import { Mypage } from "./pages/Mypage/Mypage";
import type { AuthState, TokenResponse } from "./types/auth";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // 3.1: 인증 상태 관리
  const [authState, setAuthState] = useState<AuthState>({
    isLogin: false,
    accessToken: "",
  });

  // 6.1: 토큰 교환 에러 상태 관리
  const [tokenError, setTokenError] = useState<string>("");

  // 3.3: 토큰 교환 API 호출 함수
  const getAccessToken = async (authorizationCode: string) => {
    try {
      const response = await axios.post<TokenResponse>(
        "http://localhost:3000/callback",
        { authorizationCode }
      );
      
      // 응답으로 받은 accessToken을 상태에 저장하고 isLogin을 true로 업데이트
      setAuthState({
        isLogin: true,
        accessToken: response.data.accessToken,
      });
      // 성공 시 에러 메시지 초기화
      setTokenError("");
    } catch (error) {
      // 6.1: 토큰 교환 실패 시 에러 처리
      // catch 블록에서 에러 로깅
      console.error("Token exchange failed:", error);
      
      // 로그인 상태를 false로 유지
      setAuthState({
        isLogin: false,
        accessToken: "",
      });
      
      // 사용자에게 에러 메시지 표시
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setTokenError(`로그인 실패: ${error.response.status} - 서버 오류가 발생했습니다.`);
        } else if (error.request) {
          setTokenError("로그인 실패: 서버에 연결할 수 없습니다. 네트워크를 확인해주세요.");
        } else {
          setTokenError("로그인 실패: 요청 처리 중 오류가 발생했습니다.");
        }
      } else {
        setTokenError("로그인 실패: 알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  // 3.2: URL에서 authorization code 추출 로직
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    
    // authorization code가 있을 경우 토큰 교환 함수 호출
    if (code) {
      getAccessToken(code);
    }
  }, []);

  // 5.2: 인증 상태에 따른 리디렉션 로직
  useEffect(() => {
    // isLogin이 false이고 현재 경로가 /login이 아닌 경우 Login 페이지로 리디렉션
    if (!authState.isLogin && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [authState.isLogin, location.pathname, navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login errorMessage={tokenError} />} />
        {/* 5.3: Mypage 라우트 추가 및 accessToken 전달 */}
        <Route path="/mypage" element={<Mypage accessToken={authState.accessToken} />} />
      </Routes>
    </Layout>
  );
}

export default App;
