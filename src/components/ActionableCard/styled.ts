import styled from "@emotion/styled";
import { Theme, Radius } from "../../Theme/theme";

type CardProps = {
    bg?: string;
    offset?: string;
    paddingX?: string;
    paddingY?: string;
    gap?: string;
};

export const Card = styled.div<CardProps>`
    display: flex;
    width: ${(props) => props.paddingX ? "fit-content" : "3.125rem"};
    height: ${(props) => props.paddingY ? "fit-content" : "3.125rem"};
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.gap || 0};

    padding: ${(props) => props.paddingY} ${(props) => props.paddingX};
    border-radius: ${Radius.radius_12};
    outline: 1px solid ${Theme.Stroke.Stroke_10};
    outline-offset: ${(props) => props.offset};
    background: ${(props) => props.bg};
`