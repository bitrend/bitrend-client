import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme, Gap } from "../../../Theme/theme";
import styled from "@emotion/styled";
import { Text } from "../../../Theme/theme";

const UserProfileCard = () => {
  return (
    <UserProfileWrapper>
      <MainCard>
        <ProfileImageWrapper>
          <Icon size="XL" color={Theme.Text.Text_10} fill>person</Icon>
        </ProfileImageWrapper>

        <UserInfo>
          <UserName>bbibbaroni</UserName>
          <UserEmail>i89155345@gmail.com</UserEmail>
        </UserInfo>

        <StatsWrapper>
          <StatItem>
            <StatValue>213Byte</StatValue>
            <StatLabel>score</StatLabel>
          </StatItem>
          <Divider />
          <StatItem>
            <StatValue>Junior</StatValue>
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

export default UserProfileCard;

