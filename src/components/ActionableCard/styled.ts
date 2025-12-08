import styled from "@emotion/styled";
import { Radius } from "../../Theme/theme";

type CardProps = {
  hv?: string;
  bg?: string;
  offset?: string;
  paddingX?: string;
  paddingY?: string;
  gap?: string;
  borderColor?: string;
};

export const Card = styled.div<CardProps>`
  display: flex;
  width: ${(props) => (props.paddingX ? "fit-content" : "3.125rem")};
  height: ${(props) => (props.paddingY ? "fit-content" : "3.125rem")};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap || 0};

  padding: ${(props) => props.paddingY} ${(props) => props.paddingX};
  border-radius: ${Radius.radius_12};
  outline: 1px solid ${(props) => props.borderColor};
  outline-offset: ${(props) => props.offset};
  background: ${(props) => props.bg};
  cursor: pointer;

  transition: scale ease-in-out 0.1s;
  transition: background-color ease-in-out 0.2s;

  &:hover {
    background: ${(props) => props.hv};
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }
`;
