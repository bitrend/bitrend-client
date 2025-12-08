/**
 * Analytics & Dashboard 관련 TypeScript 인터페이스
 * API 문서: docs/analytics.md
 */

// Score 타입
export interface Score {
  bit: number;
  byte: number;
}

// 대시보드 응답
export interface DashboardResponse {
  user: DashboardUser;
  evaluationProjects: DashboardEvaluationProjects;
  skillAnalysis: DashboardSkillAnalysis;
  ranking: DashboardRanking;
  recentActivity: RecentActivity;
}

// 대시보드 사용자 정보
export interface DashboardUser {
  id: number;
  username: string;
  name: string;
  avatarUrl: string;
  skillLevel: string;
  totalScore: Score;
  overallGrade: string;
}

// 대시보드 평가 프로젝트 정보
export interface DashboardEvaluationProjects {
  selected: DashboardEvaluationProject[];
  summary: EvaluationProjectsSummary;
}

export interface DashboardEvaluationProject {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  evaluationStatus: 'pending' | 'running' | 'completed' | 'failed';
  evaluationScore?: Score;
  evaluationGrade?: string;
  lastEvaluatedAt?: string;
  priority: number;
}

export interface EvaluationProjectsSummary {
  totalSelected: number;
  maxAllowed: number;
  completedEvaluations: number;
  pendingEvaluations: number;
  overallScore?: Score;
  availableSlots: number;
}

// 스킬 분석 데이터 (기존 "Binaries" 개념을 "Skill Analysis"로 대체)
export interface DashboardSkillAnalysis {
  total: SkillAnalysisTotal;
  distribution: SkillDistribution;
  variation: SkillVariation;
}

export interface SkillAnalysisTotal {
  score: Score;
  grade: string;
  skillLevel: string;
  growth: GrowthStats;
}

export interface SkillDistribution {
  codeQuality: SkillCategory;
  projectStructure: SkillCategory;
  contributionPattern: SkillCategory;
  skillAssessment: SkillCategory;
}

export interface SkillCategory {
  percentage: number;
  score: Score;
  label: string;
  improvement?: string;
}

// 프론트엔드 호환용 - 기존 Binary 관련 인터페이스들
export interface BinariesData {
  total: BinariesTotalStats;
  distribution: BinariesDistribution;
  variation: BinariesVariation;
}

export interface BinariesTotalStats {
  size: string;
  count: string;
  growth: GrowthStats;
}

export interface BinariesDistribution {
  codeQuality: DistributionCategory;
  projectStructure: DistributionCategory;
  others: DistributionCategory;
}

export interface DistributionCategory {
  percentage: number;
  size: string;
  label: string;
  color?: string;
}

export interface BinariesVariation {
  chartData: ChartDataPoint[];
  growth: GrowthStats;
}

// Skill Analysis를 Binary 형태로 변환하는 유틸 함수용 타입
export function skillAnalysisToBinaries(skillAnalysis: DashboardSkillAnalysis): BinariesData {
  const { bit, byte } = skillAnalysis.total.score;
  return {
    total: {
      size: `${byte}Byte`,
      count: `${bit}Bit`,
      growth: skillAnalysis.total.growth,
    },
    distribution: {
      codeQuality: {
        percentage: skillAnalysis.distribution.codeQuality.percentage,
        size: `${skillAnalysis.distribution.codeQuality.score.byte}Byte`,
        label: skillAnalysis.distribution.codeQuality.label,
        color: "#ff3b79"
      },
      projectStructure: {
        percentage: skillAnalysis.distribution.projectStructure.percentage,
        size: `${skillAnalysis.distribution.projectStructure.score.byte}Byte`,
        label: skillAnalysis.distribution.projectStructure.label,
        color: "#ff709d"
      },
      others: {
        percentage: skillAnalysis.distribution.skillAssessment.percentage,
        size: `${skillAnalysis.distribution.skillAssessment.score.byte}Byte`,
        label: "Others",
        color: "#ff99b9"
      }
    },
    variation: skillAnalysis.variation
  };
}

// 공통 타입
export interface GrowthStats {
  percentage: number;
  absolute: string | Score;  // API에서 Score 객체로 올 수도 있음
  period: string;
}

export interface SkillVariation {
  chartData: ChartDataPoint[];
  growth: GrowthStats;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  formatted: string;
}

// 랭킹 데이터
export interface DashboardRanking {
  userPosition: number;
  totalUsers: number;
  percentile?: number;
  topUsers: RankingUser[];
}

export interface RankingUser {
  rank: number;
  userId: number;
  username: string;
  name?: string;
  avatarUrl: string;
  score: Score;
  skillLevel?: string;
  change: number;
  evaluatedProjects?: number;
  topSkills?: string[];
  isCurrentUser?: boolean;
}

// 스킬 분석 응답
export interface SkillAnalysisResponse {
  summary: SkillAnalysisSummary;
  skillBreakdown: SkillBreakdown;
  categoryAnalysis: CategoryAnalysis;
  timeSeriesData: SkillTimeSeriesData[];
  recommendations: SkillRecommendation[];
}

export interface SkillAnalysisSummary {
  totalScore: number;
  grade: string;
  skillLevel: string;
  evaluatedProjects: number;
  growth: GrowthStats;
}

export interface SkillBreakdown {
  frontend: SkillDomain;
  backend: SkillDomain;
  devOps: SkillDomain;
  testing: SkillDomain;
  documentation: SkillDomain;
}

export interface SkillDomain {
  score: number;
  level: string;
  strengths: string[];
  improvements: string[];
}

export interface CategoryAnalysis {
  codeQuality: CategoryMetrics;
  projectStructure: CategoryMetrics;
  contributionPattern: CategoryMetrics;
  skillAssessment: CategoryMetrics;
}

export interface CategoryMetrics {
  score: number;
  percentage: number;
  metrics: Record<string, number>;
  projectContributions?: ProjectContribution[];
}

export interface ProjectContribution {
  evaluationProjectId: string;
  projectName: string;
  score: number;
  weight: number;
}

export interface SkillTimeSeriesData extends ChartDataPoint {
  totalScore: number;
  codeQuality: number;
  projectStructure: number;
  contributionPattern: number;
  skillAssessment: number;
}

export interface SkillRecommendation {
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  title: string;
  description: string;
  estimatedImpact: string;
  effort: 'low' | 'medium' | 'high';
}

export interface RecentActivity {
  lastEvaluationAt?: string;
  evaluationsThisMonth: number;
  scoreImprovement: string;
  nextRecommendedAction: string;
}