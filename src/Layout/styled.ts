import styled from "@emotion/styled";
import { Radius, Theme, Gap } from "../Theme/theme";

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: ${Radius.radius_36};
  border: 1px solid ${Theme.Stroke.Stroke_Main};
  overflow: hidden;
  background: ${Theme.Surface.Surface_10};
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  min-width: 0;
  overflow: hidden;
`;
