import styled from "@emotion/styled";
import { Color, Gap, Radius, Text, Theme } from "../../../Theme/theme";

export const Container = styled.div`
  padding: ${Gap.Gap_6} ${Gap.Gap_24};
`;

export const Box = styled.div<{ selected?: boolean; isFolded: Boolean }>`
  display: flex;
  padding: ${Gap.Gap_16} ${Gap.Gap_20};
  gap: ${Gap.Gap_12};
  border-radius: ${Radius.radius_16};
  cursor: pointer;

  ${Text.Body.M}
  color: ${Theme.Text.Text_30};

  background-color: ${(props) =>
    props.selected ? Color.GrayScale.GrayScale_70 : "transparent"};
  outline: 1px solid
    ${(props) => (props.selected ? Theme.Stroke.Stroke_Main : "transparent")};
  outline-offset: -1px;

  &:hover {
    background-color: ${(props) =>
      props.selected
        ? Color.GrayScale.GrayScale_70
        : Color.GrayScale.GrayScale_80};
  }
  transition: ease-in-out all 0.2s;
`;

export const ChildrenWrapper = styled.div<{ isFolded: Boolean }>`
  opacity: ${(props) => (props.isFolded ? 0 : 1)};
  max-width: ${(props) => (props.isFolded ? "0" : "100%")};
  overflow: hidden;
  transition: opacity 0.2s ease-in-out, max-width 0.2s ease-in-out;
`;
