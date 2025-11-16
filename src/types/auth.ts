/**
 * Authentication-related TypeScript interfaces
 */

/**
 * Authentication state managed by the App component
 */
export interface AuthState {
  isLogin: boolean;
  accessToken: string;
}

/**
 * Request body for token exchange with Backend Server
 */
export interface TokenRequest {
  authorizationCode: string;
}

/**
 * Response from Backend Server containing access token
 */
export interface TokenResponse {
  accessToken: string;
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
  // No props needed - component operates independently
}

/**
 * Props for Mypage component
 */
export interface MypageProps {
  accessToken: string;
}
