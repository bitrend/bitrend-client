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

  const [authState, setAuthState] = useState<AuthState>({
    isLogin: false,
    token: "",
    user: null,
  });

  const [tokenError, setTokenError] = useState<string>("");

  const getAccessToken = async (authorizationCode: string) => {
    try {
      const response = await axios.post<TokenResponse>(
        "http://localhost:3000/api/auth/github/callback",
        { authorizationCode }
      );
      
      setAuthState({
        isLogin: true,
        token: response.data.token,
        user: response.data.user,
      });
      setTokenError("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Token exchange failed:", error);
      
      setAuthState({
        isLogin: false,
        token: "",
        user: null,
      });
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errorMsg = error.response.data?.error || "서버 오류가 발생했습니다.";
          setTokenError(`로그인 실패: ${errorMsg}`);
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    
    if (code) {
      getAccessToken(code);
    }
  }, []);

  useEffect(() => {
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
        <Route path="/user" element={<User user={authState.user} />} />
        <Route path="/login" element={<Login errorMessage={tokenError} />} />
        <Route path="/mypage" element={<Mypage accessToken={authState.token} />} />
      </Routes>
    </Layout>
  );
}

export default App;
