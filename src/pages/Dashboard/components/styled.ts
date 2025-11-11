import styled from "@emotion/styled";
import { Theme, Gap, Radius, Text } from "../../../Theme/theme";

// Common Card Elements
export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${Gap.Gap_6};
  align-self: stretch;
`;

export const CardTitle = styled.div`
  ${Text.Body.S}
  color: ${Theme.Text.Text_10};
`;

export const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_12};
  align-self: stretch;
`;

export const MainStats = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_12};
`;

export const StatNumber = styled.div<{ primary?: boolean; secondary?: boolean; medium?: boolean }>`
  ${Text.Main.L}
  color: ${(props) =>
    props.primary
      ? Theme.Text.Text_20
      : props.secondary
        ? Theme.Text.Text_Translucence
        : Theme.Text.Text_Translucence
  };

  ${(props) => props.secondary && `
    ${Text.Main.S}
  `}

  ${(props) => props.medium && `
    ${Text.Main.M}
    color: ${props.primary ? Theme.Text.Text_20 : Theme.Text.Text_Translucence};
  `}
`;

export const StatsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_8};
`;

export const PercentageBadge = styled.div`
  display: flex;
  padding: ${Gap.Gap_4};
  align-items: center;
  justify-content: center;
  gap: ${Gap.Gap_4};
  border-radius: ${Radius.radius_6};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Functional.Primary_Translucence};

  span {
    ${Text.Label.S}
    color: ${Theme.Functional.Primary};
  }
`;

export const StatsDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_4};

  span:first-of-type {
    ${Text.Label.M}
    color: ${Theme.Text.Text_30};
  }

  span:last-of-type {
    ${Text.Label.S}
    color: ${Theme.Text.Text_Translucence};
  }
`;

// Legend Section
export const LegendSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Gap.Gap_16} 0;
  align-self: stretch;
`;

export const LegendLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_12};
`;

export const LegendDot = styled.div<{ color: string }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: ${Radius.radius_Max};
  border: 1px solid ${Theme.Text.Text_Translucence};
  background: ${(props) => props.color};
`;

export const LegendInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_6};
`;

export const LegendLabel = styled.div`
  ${Text.Label.S}
  color: ${Theme.Text.Text_10};
`;

export const LegendValue = styled.div`
  ${Text.Label.S}
  color: ${Theme.Text.Text_30};
`;

export const LegendAmount = styled.div`
  ${Text.Label.M}
  color: ${Theme.Text.Text_Translucence};
`;

// Binaries Variation Card
export const BinariesVariationWrapper = styled.div`
  flex: 1 0 0;
  min-width: 50rem;
  height: 31.25rem;
`;

export const ChartHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
`;

export const ChartHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_24};
`;

export const ChartControls = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${Gap.Gap_20};
`;

export const ViewToggle = styled.div`
  display: flex;
  align-items: center;
  padding: 0.125rem;
  border-radius: ${Radius.radius_12};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Surface.Surface_10};
`;

export const ChartTypeToggle = styled.div`
  display: flex;
  align-items: center;
  padding: 0.125rem;
  border-radius: ${Radius.radius_12};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Surface.Surface_10};
`;

export const ToggleButton = styled.button<{ active?: boolean }>`
  display: flex;
  width: 2.875rem;
  height: 2.875rem;
  align-items: center;
  justify-content: center;
  border-radius: ${Radius.radius_12};
  border: 1px solid ${(props) => props.active ? Theme.Stroke.Stroke_10 : 'transparent'};
  background: ${(props) => props.active ? Theme.Surface.Surface_30 : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ToggleText = styled.div<{ active?: boolean }>`
  ${Text.Label.S}
  color: ${Theme.Text.Text_20};
`;

export const FullscreenButton = styled.button`
  display: flex;
  width: 3.125rem;
  height: 3.125rem;
  padding: ${Gap.Gap_12};
  align-items: center;
  justify-content: center;
  gap: ${Gap.Gap_8};
  border-radius: ${Radius.radius_12};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Surface.Surface_30};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ChartArea = styled.div`
  display: flex;
  height: 18rem;
  align-items: flex-start;
  align-self: stretch;
`;

export const ChartYAxis = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  span {
    ${Text.Label.S}
    color: ${Theme.Text.Text_Translucence};
  }
`;

export const ChartContent = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  margin-left: ${Gap.Gap_16};
`;

export const ChartSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const ChartTooltip = styled.div`
  position: absolute;
  top: 3.1875rem;
  left: 33.3125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_4};
  padding: ${Gap.Gap_6} ${Gap.Gap_12};
  border-radius: ${Radius.radius_8};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Surface.Surface_20};
`;

export const TooltipDate = styled.div`
  ${Text.Label.S}
  color: ${Theme.Text.Text_Translucence};
`;

export const TooltipValue = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_4};

  span {
    ${Text.Label.S}
    color: ${Theme.Text.Text_20};
  }
`;

export const ChartXAxis = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 ${Gap.Gap_16};
  align-self: stretch;

  span {
    ${Text.Body.S}
    color: ${Theme.Text.Text_Translucence};
  }
`;

// Rank Card
export const RankCardWrapper = styled.div`
  width: fit-content;
  height: 18.625rem;
`;