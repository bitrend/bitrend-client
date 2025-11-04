import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme, Gap } from "../../../Theme/theme";
import styled from "@emotion/styled";
import { Text, Radius } from "../../../Theme/theme";

const RankCard = () => {
  const topRanks = [
    { rank: 1, userName: "{userName}", score: "346 Byte", color: Theme.Functional.Primary },
    { rank: 2, userName: "{userName}", score: "329 Byte", color: Theme.Functional.Primary_2nd },
    { rank: 3, userName: "{userName}", score: "311 Byte", color: Theme.Functional.Primary_2nd },
  ];

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
              <RankNumber color={Theme.Text.Text_30}>118</RankNumber>
              <CurrentUserName>bbibbaroni</CurrentUserName>
            </RankLeft>
            <CurrentScore>213 Byte</CurrentScore>
          </CurrentRank>
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

export default RankCard;