import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useStatio } from "statio-lib";
import { Layout } from "./Layout/Layout";
import { Project } from "./pages/Project/Project";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Analytics/Analytics";
import { User } from "./pages/User/User";
import { Login } from "./pages/Login/Login";
import { Mypage } from "./pages/Mypage/Mypage";
import type { TokenResponse, User as UserType } from "./types/auth";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Statio로 전역 상태 관리 (자동으로 localStorage에 저장됨)
  const [token, setToken] = useStatio<string>('authToken', '');
  const [, setUser] = useStatio<UserType | null>('authUser', null);

  const [tokenError, setTokenError] = useState<string>("");
  const [isProcessingCode, setIsProcessingCode] = useState<boolean>(false);

  const getAccessToken = async (authorizationCode: string) => {
    if (isProcessingCode) return; // 이미 처리 중이면 중복 실행 방지
    
    setIsProcessingCode(true);
    
    try {
      const response = await axios.post<TokenResponse>(
        "http://localhost:3000/api/auth/github/callback",
        { authorizationCode }
      );
      
      // Statio로 상태 업데이트 (자동으로 localStorage에 저장됨)
      setToken(response.data.token);
      setUser(response.data.user);
      setTokenError("");
      
      // URL에서 code 파라미터 제거
      window.history.replaceState({}, document.title, window.location.pathname);
      navigate("/dashboard");
    } catch (error) {
      console.error("Token exchange failed:", error);
      
      // 인증 실패 시 상태 초기화
      setToken('');
      setUser(null);
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Server error details:", error.response.data);
          const errorMsg = error.response.data?.error || "서버 오류가 발생했습니다.";
          const errorStack = error.response.data?.stack;
          if (errorStack) {
            console.error("Server stack trace:", errorStack);
          }
          setTokenError(`로그인 실패: ${errorMsg}`);
        } else if (error.request) {
          setTokenError("로그인 실패: 서버에 연결할 수 없습니다. 네트워크를 확인해주세요.");
        } else {
          setTokenError("로그인 실패: 요청 처리 중 오류가 발생했습니다.");
        }
      } else {
        setTokenError("로그인 실패: 알 수 없는 오류가 발생했습니다.");
      }
      
      // URL에서 code 파라미터 제거하고 로그인 페이지로
      window.history.replaceState({}, document.title, "/login");
      navigate("/login");
    } finally {
      setIsProcessingCode(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    
    if (code && !isProcessingCode) {
      getAccessToken(code);
    } else if (!token && location.pathname !== "/login" && !code) {
      // 토큰이 없으면 로그인 페이지로
      navigate("/login");
    }
  }, [location, token]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login errorMessage={tokenError} />} />
        <Route path="/mypage" element={<Mypage accessToken={token} />} />
      </Routes>
    </Layout>
  );
}

export default App;
