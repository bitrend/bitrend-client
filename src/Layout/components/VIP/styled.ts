import styled from "@emotion/styled";
import { Color, Gap, Radius, Text, Theme } from "../../../Theme/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: ${Gap.Gap_16};
  padding: ${Gap.Gap_24} ${Gap.Gap_24};
  border-radius: ${Radius.radius_20};

  background-color: ${Color.GrayScale.GrayScale_80};

  background: radial-gradient(
      ellipse 122.83% 552.06% at 50% 0%,
      rgba(255, 59, 121, 0) 10%,
      rgba(255, 59, 121, 0.5),
      rgba(255, 59, 121, 0.77)
    )
    100%;

  height: calc(5.75rem - 3rem);

  outline: 1px solid ${Theme.Stroke.Stroke_10};
  outline-offset: -1px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    outline: 1px solid ${Theme.Functional.Primary};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const TextBox = styled.div<{ isFolded: Boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_8};

  opacity: ${(props) => (props.isFolded ? 0 : 1)};
  max-width: ${(props) => (props.isFolded ? "0" : "100%")};
  overflow: hidden;
  transition: opacity 0.2s ease-in-out, max-width 0.2s ease-in-out;
`;

export const Upgarde = styled.span`
  color: ${Theme.Text.Text_20};
  ${Text.Body.M};
`;

export const Sub = styled.p`
  color: ${Theme.Text.Text_Translucence};
  ${Text.Label.S}
`;
