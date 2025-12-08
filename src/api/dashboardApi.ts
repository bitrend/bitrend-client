/**
 * Dashboard API functions
 */

import { apiRequest } from '../utils/api';
import type { DashboardResponse } from '../types/analytics';

/**
 * GitHub OAuth URL 가져오기
 */
export interface GitHubAuthUrlResponse {
  authUrl: string;
}

export async function getGitHubAuthUrl(): Promise<GitHubAuthUrlResponse> {
  return apiRequest<GitHubAuthUrlResponse>('/api/auth/github/url', {
    method: 'GET',
  });
}

/**
 * 대시보드 데이터 조회
 */
export async function getDashboardData(
  token: string
): Promise<DashboardResponse> {
  return apiRequest<DashboardResponse>('/api/dashboard', {
    method: 'GET',
    token,
  });
}

/**
 * 평가 분석 시작
 */
export interface StartAnalysisResponse {
  success: boolean;
  data?: {
    analyses: Array<{
      analysisId: number;
      evaluationProjectId: number;
      githubRepoName: string;
      status: string;
    }>;
    status: string;
    projectsToAnalyze: number;
    estimatedDuration: string;
    startedAt: string;
  };
  message: string;
}

export async function startEvaluationAnalysis(
  token: string
): Promise<StartAnalysisResponse> {
  return apiRequest<StartAnalysisResponse>('/api/analysis/evaluation', {
    method: 'POST',
    token,
  });
}

/**
 * 분석 상태 조회
 */
export interface AnalysisStatusResponse {
  success: boolean;
  data?: {
    analysis: {
      id: number;
      status: 'pending' | 'processing' | 'completed' | 'failed';
      progress: number;
    };
  };
}

export async function getAnalysisStatus(
  token: string,
  analysisId: number
): Promise<AnalysisStatusResponse> {
  return apiRequest<AnalysisStatusResponse>(`/api/analysis/evaluation/${analysisId}/status`, {
    method: 'GET',
    token,
  });
}