import styled from "@emotion/styled";
import { Gap, Theme } from "../../Theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 20.5rem;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  padding: ${Gap.Gap_24} ${Gap.Gap_32};

  box-shadow: inset 0 -1px 0 0 ${Theme.Stroke.Stroke_Main};
`;

export const SidebarLogo = styled.img``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Gap.Gap_24} 0;
`;

export const BoxP = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Gap.Gap_24} ${Gap.Gap_16};
`;

export const BoxFill = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: ${Gap.Gap_24} 0;
`;

export const GitHub = styled.img``;
