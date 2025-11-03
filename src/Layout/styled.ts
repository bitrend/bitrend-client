import styled from "@emotion/styled";
import { Radius, Theme, Gap } from "../Theme/theme";

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: ${Radius.radius_36};
  outline: 1px solid ${Theme.Stroke.Stroke_Main};
  outline-offset: -1px;
  overflow: hidden;
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: ${Gap.Gap_32};
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_20};
  flex: 1 0 0;
  align-self: stretch;
  width: 100%;
  overflow-y: auto;
`;