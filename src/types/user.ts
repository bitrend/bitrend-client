/**
 * User-related TypeScript interfaces
 */

// 사용자 프로필
export interface UserProfile {
  id: number;
  githubId: number;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
  joinDate: string;
  followerCount: number;
}

// 사용자 통계
export interface UserStats {
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  totalContributions: number;
}

// 활동 타입
export type ActivityType =
  | "update"
  | "complete"
  | "create"
  | "join"
  | "edit"
  | "delete";

// 사용자 활동
export interface UserActivity {
  id: number;
  type: ActivityType;
  action: string;
  projectName: string | null;
  timestamp: string;
  relativeTime: string;
}

// 활동 목록 응답
export interface UserActivitiesResponse {
  activities: UserActivity[];
  total: number;
  hasMore: boolean;
}

// 프로필 수정 요청
export interface UpdateUserProfileRequest {
  name?: string;
  email?: string;
  role?: string;
}

// API 에러 응답
export interface ApiError {
  error: {
    code: string;
    message: string;
  };
}
