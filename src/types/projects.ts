/**
 * Projects 관련 TypeScript 인터페이스
 * API 문서: docs/projects.md
 */

// 평가 프로젝트 상태
export type EvaluationStatus = 'pending' | 'running' | 'completed' | 'failed';

// GitHub 리포지토리 정보
export interface GitHubRepository {
  id: string;
  name: string;
  fullName: string;
  description: string;
  isPublic: boolean;
  language: string;
  license?: string;
  createdAt?: string;
  updatedAt: string;
  githubUrl: string;
  stats: GitHubStats;
  languages?: Record<string, number>;
  topics?: string[];
  isAlreadySelected?: boolean;
  canBeSelected?: boolean;
  selectionBlockReason?: string;
}

export interface GitHubStats {
  commits: number;
  contributors: number;
  stars: number;
  forks: number;
  size: number;
}

// 평가 프로젝트 (현재 프론트엔드와 호환)
export interface EvaluationProject {
  id: string;
  githubRepo: GitHubRepository;
  evaluationStatus: EvaluationStatus;
  evaluationScore?: number;
  evaluationGrade?: string;
  addedAt: string;
  lastEvaluatedAt?: string;
  priority: number;
  isSelected: boolean;
}

// 프론트엔드 호환용 Project 인터페이스 (기존 코드와 호환)
export interface Project {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  language: string;
  license?: string;
  updatedAt: string;
  isCompleted: boolean;
}

// EvaluationProject를 Project로 변환하는 유틸 타입
export function evaluationProjectToProject(evalProject: EvaluationProject): Project {
  return {
    id: evalProject.id,
    name: evalProject.githubRepo.name,
    description: evalProject.githubRepo.description,
    isPublic: evalProject.githubRepo.isPublic,
    language: evalProject.githubRepo.language,
    license: evalProject.githubRepo.license,
    updatedAt: evalProject.githubRepo.updatedAt,
    isCompleted: evalProject.isSelected,
  };
}

// 평가 프로젝트 목록 응답
export interface EvaluationProjectsResponse {
  evaluationProjects: EvaluationProject[];
  maxProjects: number;
  currentCount: number;
  availableSlots: number;
  overallScore?: number;
  lastEvaluatedAt?: string;
}

// GitHub 리포지토리 목록 응답
export interface GitHubRepositoriesResponse {
  repositories: GitHubRepository[];
  pagination: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// 평가 프로젝트 추가 요청
export interface AddEvaluationProjectRequest {
  githubRepoId: string;
  githubUrl: string;
  priority: number;
}

// 프로젝트 순서 변경 요청
export interface ReorderProjectsRequest {
  projectOrders: ProjectOrder[];
}

export interface ProjectOrder {
  evaluationProjectId: string;
  priority: number;
}

// 평가 시작 요청
export interface StartEvaluationRequest {
  evaluationProjectIds?: string[];
  evaluationType: 'quick' | 'standard' | 'comprehensive';
  options: EvaluationOptions;
}

export interface EvaluationOptions {
  includeCodeQuality: boolean;
  includeProjectStructure: boolean;
  includeContributionPattern: boolean;
  includeSkillAssessment: boolean;
}

// 평가 상태 응답
export interface EvaluationStatusResponse {
  evaluationId: string;
  status: 'started' | 'running' | 'completed' | 'failed';
  progress: EvaluationProgress;
  startedAt: string;
  estimatedCompletion?: string;
}

export interface EvaluationProgress {
  overall: number;
  projects: ProjectEvaluationStatus[];
}

export interface ProjectEvaluationStatus {
  evaluationProjectId: string;
  githubRepoName: string;
  status: 'queued' | 'running' | 'completed' | 'failed';
  progress: number;
  score?: number;
  grade?: string;
  currentStep?: string;
}

// 평가 결과 응답
export interface EvaluationResultsResponse {
  evaluationId: string;
  status: string;
  completedAt: string;
  duration: string;
  overallResults: OverallEvaluationResults;
  projectResults: ProjectEvaluationResults[];
}

export interface OverallEvaluationResults {
  totalScore: number;
  overallGrade: string;
  skillLevel: string;
  strongPoints: string[];
  improvementAreas: string[];
  skillAssessment: SkillAssessment;
}

export interface SkillAssessment {
  frontend: number;
  backend: number;
  devOps: number;
  testing: number;
  documentation: number;
}

export interface ProjectEvaluationResults {
  evaluationProjectId: string;
  githubRepo: {
    name: string;
    fullName: string;
  };
  score: number;
  grade: string;
  analysis: ProjectAnalysis;
  highlights: string[];
  recommendations: string[];
}

export interface ProjectAnalysis {
  codeQuality: AnalysisMetric;
  projectStructure: AnalysisMetric;
  contributionPattern: AnalysisMetric;
}

export interface AnalysisMetric {
  score: number;
  metrics: Record<string, number>;
}