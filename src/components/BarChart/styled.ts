import styled from "@emotion/styled";
import { Color, Gap, Radius, Text, Theme } from "../../Theme/theme";

type BarProps = {
  bg: string;
};

type BarContainerProps = {
  percent: number;
  pcs: number;
};

export const Bar = styled.div<BarProps>`
  border-radius: ${Radius.radius_6};
  outline: 1px solid ${Color.GrayScale.Translucence.Translucence_10};
  outline-offset: -1px;
  height: 2rem;
  background-color: ${(props) => props.bg};
  width: 100%;
`;

export const BarLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_4};
`

export const LabelText = styled.span`
  ${Text.Label.S};
  color: ${Color.GrayScale.Translucence.Translucence_40};
`

export const BarContainer = styled.div<BarContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_8};
  width: calc((100% - ${Gap.Gap_4}*${(props) => props.pcs-1}) * 0.${(props) => props.percent});
`

export const BarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${Gap.Gap_4};
  width: 100%;
`

export const BarMainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_8};
  align-self: stretch;
`

export const BarDistribution = styled.div`
  ${Text.Label.M};
  color : ${Theme.Text.Text_10};
`