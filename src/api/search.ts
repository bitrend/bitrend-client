/**
 * Search API functions
 */

import { apiRequest } from "../utils/api";

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

interface SearchParams {
  q: string;
  limit?: number;
}

/**
 * 사용자 검색
 */
export async function searchUsers(
  params: SearchParams
): Promise<SearchUsersResponse> {
  const queryParams = new URLSearchParams({
    q: params.q,
    ...(params.limit && { limit: params.limit.toString() }),
  });

  return apiRequest<SearchUsersResponse>(`/api/search/users?${queryParams}`);
}

/**
 * 특정 사용자 조회
 */
export async function getUserByUsername(
  username: string
): Promise<UserDetailResponse> {
  return apiRequest<UserDetailResponse>(`/api/search/users/${username}`);
}
