import styled from "@emotion/styled";
import { Color, Gap, Radius, Text, Theme } from "../../Theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${Theme.Surface.Surface_10};
  padding: ${Gap.Gap_32};
  padding-bottom: ${Gap.Gap_20};
  margin: 0 1px;
  z-index: 100;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_8};
`;

export const Title = styled.h1`
  ${Text.Title.L}
  color: ${Theme.Text.Text_10};
  margin: 0;
`;

export const Subtitle = styled.p`
  ${Text.Body.S}
  color: ${Theme.Text.Text_Translucence};
  margin: 0;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_16};

  span {
    ${Text.Label.M}
    color: ${Theme.Text.Text_20};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_24};
  padding: 0 ${Gap.Gap_32} ${Gap.Gap_32};
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: ${Gap.Gap_16};
  flex-wrap: wrap;
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_24};
  padding: ${Gap.Gap_32};
  background-color: ${Theme.Surface.Surface_20};
  border: 1px solid ${Theme.Stroke.Stroke_Main};
  border-radius: ${Radius.radius_20};
  flex: 1;
  min-width: 400px;
  position: relative;
`;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
`;

export const Avatar = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: ${Radius.radius_Max};
  background: linear-gradient(
    135deg,
    ${Theme.Functional.Primary} 0%,
    ${Theme.Functional.Primary_2nd} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  ${Text.Main.L}
  color: ${Theme.Text.Text_10};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_12};
  flex: 1;
`;

export const UserName = styled.h2`
  ${Text.Main.M}
  color: ${Theme.Text.Text_10};
  margin: 0;
`;

export const UserEmail = styled.p`
  ${Text.Body.M}
  color: ${Theme.Text.Text_30};
  margin: 0;
`;

export const UserMeta = styled.div`
  display: flex;
  gap: ${Gap.Gap_16};
  flex-wrap: wrap;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_6};
  ${Text.Label.M}
  color: ${Theme.Text.Text_Translucence};
`;

export const TierInfo = styled.div`
  position: absolute;
  right: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Gap.Gap_8};
  padding: ${Gap.Gap_20};
  background-color: ${Theme.Surface.Surface_20};
  border: 1px solid ${Theme.Functional.Primary_Translucence};
  border-radius: ${Radius.radius_16};
  flex-shrink: 0;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 59, 121, 0.2);
    scale: 1.1;
    transform: translateY(-6px);
  }
`;

export const UserTier = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
  filter: drop-shadow(0 0 16px ${Theme.Functional.Primary_Translucence});
`;

export const Tier = styled.h4`
  ${Text.Label.M}
  color: ${Theme.Functional.Primary};
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${Gap.Gap_16};
  flex: 1;
  min-width: 300px;
`;

export const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_16};
  padding: ${Gap.Gap_24};
  background-color: ${Theme.Surface.Surface_20};
  border: 1px solid ${Theme.Stroke.Stroke_Main};
  border-radius: ${Radius.radius_20};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: ${Theme.Functional.Primary_Translucence};
  border-radius: ${Radius.radius_12};
  flex-shrink: 0;
`;

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_4};
`;

export const StatValue = styled.div`
  ${Text.Main.S}
  color: ${Theme.Text.Text_10};
`;

export const StatLabel = styled.div`
  ${Text.Label.M}
  color: ${Theme.Text.Text_Translucence};
`;

export const ActivitySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_16};
`;

export const SectionTitle = styled.h3`
  ${Text.Title.S}
  color: ${Theme.Text.Text_10};
  margin: 0;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_12};
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_16};
  padding: ${Gap.Gap_16} ${Gap.Gap_24};
  background-color: ${Theme.Surface.Surface_20};
  border: 1px solid ${Theme.Stroke.Stroke_Main};
  border-radius: ${Radius.radius_12};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${Color.GrayScale.Translucence.Translucence_10};
  }
`;

export const ActivityIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${Theme.Surface.Surface_30};
  border-radius: ${Radius.radius_8};
  flex-shrink: 0;
`;

export const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_4};
  flex: 1;
`;

export const ActivityAction = styled.div`
  ${Text.Body.M}
  color: ${Theme.Text.Text_20};
`;

export const ActivityTime = styled.div`
  ${Text.Label.M}
  color: ${Theme.Text.Text_Translucence};
`;
