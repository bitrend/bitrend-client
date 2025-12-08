import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme, Gap } from "../../../Theme/theme";
import styled from "@emotion/styled";
import { Text } from "../../../Theme/theme";
import type { DashboardUser } from "../../../types/analytics";

interface UserProfileCardProps {
  user?: DashboardUser;
  loading?: boolean;
  error?: string | null;
}

const UserProfileCard = ({ user, loading, error }: UserProfileCardProps) => {
  // Fallback 데이터
  const displayUser = user || {
    id: 0,
    username: "user",
    name: "Guest User",
    avatarUrl: "",
    skillLevel: "Beginner",
    totalScore: { bit: 0, byte: 0 },
    overallGrade: "N/A"
  };

  // totalScore가 제대로 된 객체인지 확인
  const scoreText = displayUser.totalScore && typeof displayUser.totalScore === 'object' && 'byte' in displayUser.totalScore && 'bit' in displayUser.totalScore
    ? `${displayUser.totalScore.byte}Byte ${displayUser.totalScore.bit}Bit`
    : "0Byte 0Bit";

  return (
    <UserProfileWrapper>
      <MainCard>
        <ProfileImageWrapper>
          {displayUser.avatarUrl ? (
            <ProfileImage src={displayUser.avatarUrl} alt={displayUser.name} />
          ) : (
            <Icon size="XL" color={Theme.Text.Text_10} fill>person</Icon>
          )}
        </ProfileImageWrapper>

        <UserInfo>
          <UserName>{loading ? "로딩중..." : displayUser.name}</UserName>
          <UserEmail>@{loading ? "..." : displayUser.username}</UserEmail>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </UserInfo>

        <StatsWrapper>
          <StatItem>
            <StatValue>
              {loading ? "..." : scoreText}
            </StatValue>
            <StatLabel>score</StatLabel>
          </StatItem>
          <Divider />
          <StatItem>
            <StatValue>{loading ? "..." : displayUser.skillLevel}</StatValue>
            <StatLabel>rank</StatLabel>
          </StatItem>
        </StatsWrapper>
      </MainCard>
    </UserProfileWrapper>
  );
};

const UserProfileWrapper = styled.div`
  width: 21rem;
  height: 18.625rem;
  flex-shrink: 0;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  width: 6.625rem;
  height: 6.625rem;
  align-items: center;
  justify-content: center;
  border-radius: 999rem;
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Text.Text_30};
  align-self: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Gap.Gap_4};
  align-self: stretch;
`;

const UserName = styled.div`
  ${Text.Main.S}
  color: ${Theme.Text.Text_10};
`;

const UserEmail = styled.div`
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};
`;

const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const StatItem = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${Gap.Gap_4};
`;

const StatValue = styled.div`
  ${Text.Title.L}
  color: ${Theme.Text.Text_10};
`;

const StatLabel = styled.div`
  ${Text.Label.S}
  color: ${Theme.Text.Text_Translucence};
`;

const Divider = styled.div`
  width: 0.125rem;
  height: 2.5rem;
  border-radius: 999rem;
  background: ${Theme.Functional.Primary_Translucence};
`;

const ErrorMessage = styled.div`
  ${Text.Label.S}
  color: ${Theme.Functional.Error};
  text-align: center;
  margin-top: ${Gap.Gap_4};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 999rem;
  object-fit: cover;
`;

export default UserProfileCard;

