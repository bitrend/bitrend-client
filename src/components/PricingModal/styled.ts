import styled from "@emotion/styled";
import { Gap, Radius, Text, Theme } from "../../Theme/theme";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
  background-color: ${Theme.Surface.Surface_10};
  border-radius: ${Radius.radius_20};
  padding: ${Gap.Gap_42};
  max-width: 75rem;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${Theme.Stroke.Stroke_Main};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Gap.Gap_42};
`;

export const Title = styled.h2`
  ${Text.Main.M}
  color: ${Theme.Text.Text_10};
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${Gap.Gap_8};
  border-radius: ${Radius.radius_12};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${Theme.Surface.Surface_20};
  }
`;

export const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Gap.Gap_24};

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const PlanCard = styled.div<{ isPopular: boolean }>`
  background-color: ${Theme.Surface.Surface_20};
  border-radius: ${Radius.radius_16};
  padding: ${Gap.Gap_32};
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid
    ${({ isPopular }) =>
      isPopular ? Theme.Functional.Primary : Theme.Stroke.Stroke_Main};
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: ${Theme.Functional.Primary};
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    ${Theme.Functional.Primary},
    ${Theme.Functional.Primary_2nd}
  );
  color: ${Theme.Text.Text_10};
  ${Text.Label.M}
  font-weight: 600;
  padding: ${Gap.Gap_6} ${Gap.Gap_16};
  border-radius: ${Radius.radius_Max};
`;

export const PlanHeader = styled.div`
  margin-bottom: ${Gap.Gap_32};
`;

export const PlanName = styled.h3`
  ${Text.Title.L}
  color: ${Theme.Text.Text_10};
  margin: 0 0 ${Gap.Gap_16} 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${Gap.Gap_8};
  margin-bottom: ${Gap.Gap_12};
`;

export const Price = styled.div`
  ${Text.Main.L}
  color: ${Theme.Functional.Primary};
`;

export const Period = styled.span`
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};
`;

export const Description = styled.p`
  ${Text.Body.S}
  color: ${Theme.Text.Text_Translucence};
  margin: 0;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${Gap.Gap_32} 0;
  flex: 1;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_12};
  margin-bottom: ${Gap.Gap_16};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FeatureText = styled.span`
  ${Text.Body.S}
  color: ${Theme.Text.Text_20};
`;

export const UpgradeButton = styled.button<{ isPopular: boolean }>`
  ${Text.Body.M}
  font-weight: 600;
  padding: ${Gap.Gap_16} ${Gap.Gap_24};
  border-radius: ${Radius.radius_12};
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  background-color: ${({ isPopular }) =>
    isPopular ? Theme.Functional.Primary : Theme.Surface.Surface_30};
  color: ${Theme.Text.Text_10};

  &:hover {
    background-color: ${({ isPopular }) =>
      isPopular ? Theme.Functional.Primary_2nd : Theme.Stroke.Stroke_Main};
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
