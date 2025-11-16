import styled from "@emotion/styled";
import { Theme, Gap, Text, Radius } from "../../Theme/theme";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: ${Theme.Surface.Surface_10};
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Gap.Gap_42};
  background: ${Theme.Surface.Surface_20};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  border-radius: ${Radius.radius_16};
  min-width: 400px;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Gap.Gap_32};
  width: 100%;
`;

export const Title = styled.h1`
  ${Text.Title.L}
  color: ${Theme.Text.Text_10};
  margin: 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};
  margin: 0;
  text-align: center;
`;

export const GitHubButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${Gap.Gap_12};
  padding: ${Gap.Gap_16} ${Gap.Gap_24};
  background: ${Theme.Functional.Primary};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  border-radius: ${Radius.radius_8};
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: ${Theme.Functional.Primary_2nd};
  }

  &:active {
    background: ${Theme.Functional.Primary_3rd};
  }
`;

export const GitHubIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Theme.Text.Text_20};
`;

export const ButtonText = styled.span`
  ${Text.Body.M}
  color: ${Theme.Text.Text_10};
  font-weight: 500;
`;

export const ErrorMessage = styled.div`
  ${Text.Body.M}
  color: ${Theme.Functional.Primary};
  background: ${Theme.Surface.Surface_10};
  border: 1px solid ${Theme.Functional.Primary};
  border-radius: ${Radius.radius_8};
  padding: ${Gap.Gap_12} ${Gap.Gap_16};
  text-align: center;
  width: 100%;
`;
