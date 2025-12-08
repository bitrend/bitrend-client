/**
 * API 유틸리티 함수
 */

import { auth } from "./auth";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export interface ApiRequestOptions extends RequestInit {
  token?: string;
}

/**
 * API 요청 헬퍼 함수
 */
export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(fetchOptions.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // 401 에러 시 로그아웃하고 로그인 페이지로 리다이렉트
      auth.logout();
      window.location.href = "/login";
      throw new Error("인증이 만료되었습니다. 다시 로그인해주세요.");
    }

    const error = await response.json().catch(() => ({
      error: {
        code: "UNKNOWN_ERROR",
        message: "An unknown error occurred",
      },
    }));
    throw error;
  }

  return response.json();
}
