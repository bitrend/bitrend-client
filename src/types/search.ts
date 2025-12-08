/**
 * Search-related TypeScript interfaces
 */

// 검색된 사용자 정보
export interface SearchUser {
  id: number;
  username: string;
  name: string;
  avatarUrl: string;
  followerCount: number;
}

// 사용자 검색 결과
export interface SearchUsersResponse {
  users: SearchUser[];
  suggestions: string[];
  total: number;
}

// 사용자 상세 정보
export interface UserDetail {
  id: number;
  githubId: string;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio: string | null;
  followerCount: number;
  followingCount: number;
  repositoryCount: number;
  createdAt: string;
}

// 사용자 상세 조회 응답
export interface UserDetailResponse {
  user: UserDetail;
}

// 검색 쿼리 파라미터
export interface SearchParams {
  q: string;
  limit?: number;
}
