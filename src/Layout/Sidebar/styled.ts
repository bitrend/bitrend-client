import styled from "@emotion/styled";
import { Color, Gap, Radius, Theme, Text } from "../../Theme/theme";

export const Container = styled.div<{ isFolded: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: ${({ isFolded }) => (isFolded ? "7.125rem" : "20.5rem")};

  border-right: 1px solid ${Theme.Stroke.Stroke_Main};

  transition: ease-in-out all 0.3s;
`;

export const Head = styled.div<{ isFolded: boolean }>`
  display: flex;
  justify-content: ${({ isFolded }) => (isFolded ? "center" : "space-between")};

  align-items: center;
  box-sizing: border-box;

  padding: ${Gap.Gap_24} ${Gap.Gap_32};

  box-shadow: inset 0 -1px 0 0 ${Theme.Stroke.Stroke_Main};
`;

export const SidebarLogo = styled.img<{ isFolded: boolean }>`
  cursor: ${({ isFolded }) => (isFolded ? "pointer" : "")};
`;

export const IconBox = styled.div`
  display: flex;
  padding: ${Gap.Gap_8};
  border-radius: ${Radius.radius_12};

  &:hover {
    cursor: pointer;
    background-color: ${Color.GrayScale.Translucence.Translucence_10};
  }

  transition: ease-in-out all 0.2s;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Gap.Gap_24} 0;
`;

export const BoxP = styled.div`
  padding: ${Gap.Gap_24} ${Gap.Gap_20};
`;

export const BoxFill = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: ${Gap.Gap_24} 0;
  position: relative;
`;

export const GitHub = styled.div`
  display: flex;
  padding: 1.375rem 2.75rem;
  gap: ${Gap.Gap_12};
`;
export const GitHubIcon = styled.img``;

export const GitHubLink = styled.a<{ isFolded: Boolean }>`
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};

  opacity: ${(props) => (props.isFolded ? 0 : 1)};
  max-width: ${(props) => (props.isFolded ? "0" : "100%")};
  overflow: hidden;
  transition: opacity 0.2s ease-in-out, max-width 0.2s ease-in-out;
`;

export const Indicator = styled.div<{ selected: string }>`
  background-color: ${Theme.Functional.Primary};
  width: 3px;
  height: 24px;
  position: absolute;
  border-radius: ${Radius.radius_Max};

  top: ${({ selected }) => {
    const idx = ["dashboard", "project", "analytics", "user"].indexOf(selected);
    return `${47 + idx * 70}px`;
  }};

  transition: ease-in-out 0.3s all;
`;
