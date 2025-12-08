/**
 * User API functions
 */

import { apiRequest } from "../utils/api";
import type {
  UserProfile,
  UserStats,
  UserActivitiesResponse,
  UpdateUserProfileRequest,
} from "../types/user";

/**
 * 사용자 프로필 조회
 */
export async function getUserProfile(
  userId: number,
  token: string
): Promise<UserProfile> {
  return apiRequest<UserProfile>(`/api/users/${userId}`, {
    method: "GET",
    token,
  });
}

/**
 * username으로 사용자 프로필 조회
 */
export async function getUserProfileByUsername(
  username: string,
  token: string
): Promise<UserProfile> {
  return apiRequest<UserProfile>(`/api/users/others/${username}`, {
    method: "GET",
    token,
  });
}

/**
 * 사용자 통계 조회
 */
export async function getUserStats(
  userId: number,
  token: string
): Promise<UserStats> {
  return apiRequest<UserStats>(`/api/users/${userId}/stats`, {
    method: "GET",
    token,
  });
}

/**
 * 사용자 최근 활동 조회
 */
export async function getUserActivities(
  userId: number,
  token: string,
  limit: number = 10,
  offset: number = 0
): Promise<UserActivitiesResponse> {
  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });

  return apiRequest<UserActivitiesResponse>(
    `/api/users/${userId}/activities?${params}`,
    {
      method: "GET",
      token,
    }
  );
}

/**
 * 사용자 프로필 수정
 */
export async function updateUserProfile(
  userId: number,
  token: string,
  data: UpdateUserProfileRequest
): Promise<UserProfile> {
  return apiRequest<UserProfile>(`/api/users/${userId}`, {
    method: "PATCH",
    token,
    body: JSON.stringify(data),
  });
}

/**
 * 사용자 팔로우
 */
export async function followUser(
  userId: number,
  token: string
): Promise<{ followerId: number; followingId: number; createdAt: string }> {
  return apiRequest(`/api/users/${userId}/follow`, {
    method: "POST",
    token,
  });
}

/**
 * 사용자 언팔로우
 */
export async function unfollowUser(
  userId: number,
  token: string
): Promise<{ message: string }> {
  return apiRequest(`/api/users/${userId}/follow`, {
    method: "DELETE",
    token,
  });
}

/**
 * 팔로우 상태 확인
 */
export async function checkFollowStatus(
  userId: number,
  token: string
): Promise<{ isFollowing: boolean }> {
  return apiRequest(`/api/users/${userId}/follow/status`, {
    method: "GET",
    token,
  });
}
