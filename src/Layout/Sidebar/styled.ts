import styled from "@emotion/styled";
import { Gap, Theme } from "../../Theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 20.5rem;
  border-right: 1px solid ${Theme.Stroke.Stroke_Main};
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  box-sizing: border-box;
  padding: ${Gap.Gap_24} ${Gap.Gap_32};
  border-bottom: 1px solid ${Theme.Stroke.Stroke_Main};
`;

export const SidebarLogo = styled.img``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${Gap.Gap_24} 0;
  align-self: stretch;
  border-top: 1px solid ${Theme.Stroke.Stroke_Main};
`;

export const BoxP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${Gap.Gap_24} ${Gap.Gap_16};
  align-self: stretch;
  border-top: 1px solid ${Theme.Stroke.Stroke_Main};
`;

export const BoxFill = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: ${Gap.Gap_24} 0;
`;

export const GitHub = styled.img``;
