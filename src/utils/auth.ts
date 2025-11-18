import { globalStore } from "statio-lib";
import type { User } from "../types/auth";

/**
 * 인증 관련 유틸리티 함수
 */
export const auth = {
  /**
   * 토큰 가져오기
   */
  getToken: (): string => {
    return globalStore.get<string>('authToken') || '';
  },

  /**
   * 토큰 설정
   */
  setToken: (token: string) => {
    globalStore.set('authToken', token);
  },

  /**
   * 사용자 정보 가져오기
   */
  getUser: (): User | null => {
    return globalStore.get<User>('authUser') || null;
  },

  /**
   * 사용자 정보 설정
   */
  setUser: (user: User) => {
    globalStore.set('authUser', user);
  },

  /**
   * 로그인 여부 확인
   */
  isAuthenticated: (): boolean => {
    const token = auth.getToken();
    const user = auth.getUser();
    return !!token && !!user;
  },

  /**
   * 로그아웃 (인증 정보 삭제)
   */
  logout: () => {
    globalStore.set('authToken', '');
    globalStore.set('authUser', null);
  }
};
