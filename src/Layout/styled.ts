import styled from "@emotion/styled";
import { Radius, Theme } from "../Theme/theme";

export const Main = styled.main`
  display: flex;

  width: 100%;
  height: 100%;
  border-radius: ${Radius.radius_36};

  outline: 1px solid ${Theme.Stroke.Stroke_Main};
  outline-offset: -1px;
`;
