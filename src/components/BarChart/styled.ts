import styled from "@emotion/styled";
import { Color, Gap, Radius } from "../../Theme/theme";

type BarProps = {
    bg: string;
    percent: number;
    pcs: number;
};

export const Bar = styled.div<BarProps>`
    border-radius: ${Radius.radius_6};
    outline: 1px solid ${Color.GrayScale.Translucence.Translucence_10};
    outline-offset: -1px;
    height: 2rem;
    background-color: ${(props) => props.bg};
    width: calc((100% - ${Gap.Gap_4}*${(props) => props.pcs-1}) * 0.${(props) => props.percent});
`

export const BarLabel = styled.div`
`

export const LabelText = styled.span`
`

export const LabelImg = styled.img`
`

export const BarContainer = styled.div`
`

export const BarWrapper = styled.div`
`

export const BarDistribution = styled.h1`
`