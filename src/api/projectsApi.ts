/**
 * Projects API functions
 */

import { apiRequest } from '../utils/api';
import type {
  EvaluationProjectsResponse,
  GitHubRepositoriesResponse,
  AddEvaluationProjectRequest,
  ReorderProjectsRequest,
  StartEvaluationRequest,
  EvaluationStatusResponse,
  EvaluationResultsResponse,
} from '../types/projects';

/**
 * 평가 프로젝트 목록 조회
 */
export async function getEvaluationProjects(
  token: string
): Promise<EvaluationProjectsResponse> {
  return apiRequest<EvaluationProjectsResponse>('/api/projects/evaluations', {
    method: 'GET',
    token,
  });
}

/**
 * GitHub 리포지토리 목록 조회
 */
export async function getGitHubRepositories(
  token: string,
  page: number = 1,
  perPage: number = 20,
  sort?: string
): Promise<GitHubRepositoriesResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
    ...(sort && { sort }),
  });

  return apiRequest<GitHubRepositoriesResponse>(
    `/api/github/repositories?${params}`,
    {
      method: 'GET',
      token,
    }
  );
}

/**
 * 평가 프로젝트 추가
 */
export async function addEvaluationProject(
  token: string,
  data: AddEvaluationProjectRequest
): Promise<void> {
  return apiRequest<void>('/api/projects/evaluations', {
    method: 'POST',
    token,
    body: JSON.stringify(data),
  });
}

/**
 * 평가 프로젝트 삭제
 */
export async function removeEvaluationProject(
  projectId: string,
  token: string
): Promise<void> {
  return apiRequest<void>(`/api/projects/${projectId}`, {
    method: 'DELETE',
    token,
  });
}

/**
 * 평가 프로젝트 순서 변경
 */
export async function reorderProjects(
  token: string,
  data: ReorderProjectsRequest
): Promise<void> {
  return apiRequest<void>('/api/projects/evaluations/reorder', {
    method: 'PATCH',
    token,
    body: JSON.stringify(data),
  });
}

/**
 * 평가 시작
 */
export async function startEvaluation(
  token: string,
  data: StartEvaluationRequest
): Promise<EvaluationStatusResponse> {
  return apiRequest<EvaluationStatusResponse>('/api/evaluations/start', {
    method: 'POST',
    token,
    body: JSON.stringify(data),
  });
}

/**
 * 평가 상태 조회
 */
export async function getEvaluationStatus(
  evaluationId: string,
  token: string
): Promise<EvaluationStatusResponse> {
  return apiRequest<EvaluationStatusResponse>(`/api/evaluations/${evaluationId}/status`, {
    method: 'GET',
    token,
  });
}

/**
 * 평가 결과 조회
 */
export async function getEvaluationResults(
  evaluationId: string,
  token: string
): Promise<EvaluationResultsResponse> {
  return apiRequest<EvaluationResultsResponse>(`/api/evaluations/${evaluationId}/results`, {
    method: 'GET',
    token,
  });
}