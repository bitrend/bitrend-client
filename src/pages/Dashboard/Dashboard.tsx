import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ActionableCard from "../../components/ActionableCard/ActionableCard";
import { Icon } from "../../components/Icons/Icon";
import { Theme, Gap } from "../../Theme/theme";
import UserProfileCard from "./components/UserProfileCard";
import ProjectListCard from "./components/ProjectListCard";
import RankCard from "./components/RankCard";
import TotalBinariesCard from "./components/TotalBinariesCard";
import BinariesVariationCard from "./components/BinariesVariationCard";
import { getDashboardData, startEvaluationAnalysis, getAnalysisStatus } from "../../api/dashboardApi";
import { auth } from "../../utils/auth";
import type { DashboardResponse } from "../../types/analytics";
import * as _ from "./styled";

export function Dashboard() {
  const queryClient = useQueryClient();
  const [dashboardData, setDashboardData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // localStorage에서 현재 진행 중인 분석 ID를 가져오거나 저장
  const [currentAnalysisId, setCurrentAnalysisId] = useState<number | null>(() => {
    const stored = localStorage.getItem('currentAnalysisId');
    return stored ? parseInt(stored, 10) : null;
  });

  // currentAnalysisId가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    if (currentAnalysisId) {
      localStorage.setItem('currentAnalysisId', currentAnalysisId.toString());
    } else {
      localStorage.removeItem('currentAnalysisId');
    }
  }, [currentAnalysisId]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = auth.getToken();
        if (!token) {
          setError("로그인이 필요합니다.");
          return;
        }

        const data = await getDashboardData(token);
        console.log('Dashboard data:', data);
        console.log('User totalScore:', data.user?.totalScore);
        console.log('Ranking topUsers:', data.ranking?.topUsers);
        setDashboardData(data);
      } catch (err: unknown) {
        console.error("Failed to fetch dashboard data:", err);
        setError((err as { error?: { message?: string } })?.error?.message || "데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // 분석 상태 폴링 (10초마다)
  const { data: analysisStatus } = useQuery({
    queryKey: ['analysisStatus', currentAnalysisId],
    queryFn: async () => {
      const token = auth.getToken();
      if (!token || !currentAnalysisId) return null;
      return getAnalysisStatus(token, currentAnalysisId);
    },
    enabled: !!currentAnalysisId,
    refetchInterval: (query) => {
      const status = query.state.data?.data?.analysis.status;
      // 완료되거나 실패하면 폴링 중지
      return status === 'completed' || status === 'failed' ? false : 10000;
    },
  });

  // 분석이 완료되면 currentAnalysisId 초기화
  useEffect(() => {
    const status = analysisStatus?.data?.analysis.status;
    if (status === 'completed' || status === 'failed') {
      if (status === 'completed') {
        alert('분석이 완료되었습니다!');
      } else {
        alert('분석이 실패했습니다.');
      }
      setCurrentAnalysisId(null);
    }
  }, [analysisStatus]);

  const handleStartAnalysis = async () => {
    try {
      const token = auth.getToken();
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const result = await startEvaluationAnalysis(token);
      
      if (result.success && result.data) {
        // 첫 번째 분석 ID를 현재 분석 ID로 설정
        const firstAnalysis = result.data.analyses[0];
        if (firstAnalysis) {
          setCurrentAnalysisId(firstAnalysis.analysisId);
        }
        alert(`분석이 시작되었습니다!\n프로젝트 수: ${result.data.projectsToAnalyze}\n예상 소요 시간: ${result.data.estimatedDuration}`);
      } else {
        alert(result.message);
      }
    } catch (err: unknown) {
      console.error("Failed to start analysis:", err);
      const errorMessage = (err as { error?: { message?: string } })?.error?.message || "분석 시작에 실패했습니다.";
      alert(errorMessage);
    }
  };

  const userName = dashboardData?.user.name || "사용자";

  return (
    <_.DashboardContainer>
      {/* Title Section */}
      <_.TitleSection>
        <_.TitleLeft>
          <_.Title>Dashboard</_.Title>
          <_.Subtitle>만나서 반가워요. {userName}님의 상황을 조회 해보세요!</_.Subtitle>
        </_.TitleLeft>

        <_.TitleRight>
          <ActionableCard
            bg={Theme.Surface.Surface_30}
            offset="-1px"
            borderColor={Theme.Stroke.Stroke_10}
            paddingX={Gap.Gap_12}
            paddingY={Gap.Gap_16}
            gap={Gap.Gap_6}
          >
            <Icon size="XS" color={Theme.Text.Text_20}>add</Icon>
            <span>Add Widget</span>
          </ActionableCard>

          <ActionableCard
            bg={Theme.Surface.Surface_30}
            offset="-1px"
            borderColor={Theme.Stroke.Stroke_10}
            paddingX={Gap.Gap_12}
            paddingY={Gap.Gap_16}
            gap={Gap.Gap_6}
          >
            <Icon size="XS" color={Theme.Text.Text_20}>calendar_today</Icon>
            <span>All Time</span>
            <Icon size="XS" color={Theme.Text.Text_20}>keyboard_arrow_down</Icon>
          </ActionableCard>

          <ActionableCard
            bg={Theme.Functional.Primary}
            offset="-1px"
            borderColor={Theme.Stroke.Stroke_10}
            paddingX={Gap.Gap_16}
            paddingY={Gap.Gap_12}
            onClick={handleStartAnalysis}
            disabled={!!currentAnalysisId}
          >
            <_.PrimaryButtonText>
              {currentAnalysisId 
                ? `분석 진행 중... (${analysisStatus?.data?.analysis.progress || 0}%)` 
                : "May be Something Button"}
            </_.PrimaryButtonText>
          </ActionableCard>
        </_.TitleRight>
      </_.TitleSection>

      {/* Cards Grid */}
      <_.CardsGrid>
        <UserProfileCard user={dashboardData?.user} loading={loading} error={error} />
        <ProjectListCard projects={dashboardData?.evaluationProjects} loading={loading} />
        <RankCard ranking={dashboardData?.ranking} loading={loading} />
        <TotalBinariesCard skillAnalysis={dashboardData?.skillAnalysis} loading={loading} />
        <BinariesVariationCard skillAnalysis={dashboardData?.skillAnalysis} loading={loading} />
      </_.CardsGrid>
    </_.DashboardContainer>
  );
};

export default Dashboard;