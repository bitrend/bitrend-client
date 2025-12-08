import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme, Gap } from "../../../Theme/theme";
import styled from "@emotion/styled";
import { Text, Radius } from "../../../Theme/theme";
import type { DashboardRanking } from "../../../types/analytics";
import { formatScore } from "../../../utils/scoreFormatter";

interface RankCardProps {
  ranking?: DashboardRanking;
  loading?: boolean;
}

const RankCard = ({ ranking, loading }: RankCardProps) => {
  const topRanks = ranking?.topUsers && ranking.topUsers.length > 0
    ? ranking.topUsers.slice(0, 3).map(user => ({
        rank: user.rank,
        userName: user.name || user.username,
        score: formatScore(user.score),
        color: user.rank === 1 ? Theme.Functional.Primary : Theme.Functional.Primary_2nd
      }))
    : [];

  const hasRankingData = ranking && ranking.topUsers && ranking.topUsers.length > 0;

  return (
    <RankCardWrapper>
      <MainCard>
        <CardHeader>
          <CardTitle>Rank</CardTitle>
          <ExpandButton>
            <Icon size="XS" color={Theme.Text.Text_Translucence}>expand_content</Icon>
          </ExpandButton>
        </CardHeader>

        <RankContent>
          {loading ? (
            <LoadingState>로딩 중...</LoadingState>
          ) : hasRankingData ? (
            <>
              <TopRanksList>
                {topRanks.map((item) => (
                  <RankItem key={item.rank}>
                    <RankLeft>
                      <RankNumber color={item.color}>{item.rank}</RankNumber>
                      <UserName>{item.userName}</UserName>
                    </RankLeft>
                    <Score>{item.score}</Score>
                  </RankItem>
                ))}
              </TopRanksList>

              <DotsIndicator>
                <Dot />
                <Dot large />
                <Dot />
              </DotsIndicator>

              <CurrentRank>
                <RankLeft>
                  <RankNumber color={Theme.Text.Text_30}>
                    {ranking?.userPosition || "-"}
                  </RankNumber>
                  <CurrentUserName>
                    {ranking?.topUsers.find(u => u.isCurrentUser)?.name || "You"}
                  </CurrentUserName>
                </RankLeft>
                <CurrentScore>
                  {(() => {
                    const currentUser = ranking?.topUsers.find(u => u.isCurrentUser);
                    return currentUser?.score ? formatScore(currentUser.score) : "-";
                  })()}
                </CurrentScore>
              </CurrentRank>
            </>
          ) : (
            <EmptyState>
              <EmptyText>랭킹 데이터가 없습니다</EmptyText>
            </EmptyState>
          )}
        </RankContent>
      </MainCard>
    </RankCardWrapper>
  );
};

const RankCardWrapper = styled.div`
  width: 34.5rem;
  height: 18.625rem;
  flex-shrink: 0;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
`;

const CardTitle = styled.div`
  ${Text.Body.S}
  color: ${Theme.Text.Text_10};
`;

const ExpandButton = styled.div`
  display: flex;
  padding: ${Gap.Gap_4};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${Radius.radius_6};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Surface.Surface_30};
  cursor: pointer;
`;

const RankContent = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

const TopRanksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const RankItem = styled.div`
  display: flex;
  padding: ${Gap.Gap_8} ${Gap.Gap_12};
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

const RankLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_16};
`;

const RankNumber = styled.div<{ color: string }>`
  ${Text.Body.M}
  color: ${props => props.color};
  text-align: center;
  width: 1.9375rem;
`;

const UserName = styled.div`
  ${Text.Label.M}
  color: ${Theme.Text.Text_30};
`;

const Score = styled.div`
  ${Text.Label.S}
  color: ${Theme.Text.Text_Translucence};
`;

const DotsIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Gap.Gap_4};
`;

const Dot = styled.div<{ large?: boolean }>`
  width: ${props => props.large ? '1rem' : '0.625rem'};
  height: 0.125rem;
  border-radius: 999rem;
  background: ${Theme.Functional.Primary_Translucence};
`;

const CurrentRank = styled.div`
  display: flex;
  padding: ${Gap.Gap_12} ${Gap.Gap_16};
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  border-radius: ${Radius.radius_6};
  background: ${Theme.Functional.Primary};
  box-shadow: 0px 0px 1rem 0px ${Theme.Functional.Primary_Translucence};
`;

const CurrentUserName = styled.div`
  ${Text.Label.M}
  color: ${Theme.Text.Text_10};
`;

const CurrentScore = styled.div`
  ${Text.Label.S}
  color: ${Theme.Text.Text_30};
`;

const LoadingState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const EmptyText = styled.div`
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};
`;

export default RankCard;