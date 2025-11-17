/**
 * Authentication-related TypeScript interfaces
 */

/**
 * User information from Backend Server
 */
export interface User {
  id: number;
  githubId: number;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
}

/**
 * Authentication state managed by the App component
 */
export interface AuthState {
  isLogin: boolean;
  token: string;
  user: User | null;
}

/**
 * Request body for token exchange with Backend Server
 */
export interface TokenRequest {
  authorizationCode: string;
}

/**
 * Response from Backend Server containing JWT token and user info
 */
export interface TokenResponse {
  token: string;
  user: User;
}

/**
 * GitHub user information from GitHub API
 */
export interface GitHubUserInfo {
  name: string;
  login: string;
  html_url: string;
  public_repos: number;
}

/**
 * Props for Login component
 */
export interface LoginProps {
  errorMessage?: string;
}

/**
 * Props for Mypage component
 */
export interface MypageProps {
  accessToken: string;
}

/**
 * Props for User component
 */
export interface UserProps {
  user: User | null;
}
