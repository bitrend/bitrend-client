import styled from "@emotion/styled";
import { Radius } from "../../Theme/theme";

type CardProps = {
    bg?: string;
    offset?: string;
    paddingX?: string;
    paddingY?: string;
    gap?: string;
    borderColor?: string;
    disabled?: boolean;
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
    outline: 1px solid ${(props) => props.borderColor};
    outline-offset: ${(props) => props.offset};
    background: ${(props) => props.bg};
    
    ${(props) => props.disabled && `
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    `}
    
    ${(props) => !props.disabled && `
        cursor: pointer;
        
        &:hover {
            opacity: 0.9;
        }
        
        &:active {
            opacity: 0.8;
        }
    `}
`