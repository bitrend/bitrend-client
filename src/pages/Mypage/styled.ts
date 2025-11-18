import styled from "@emotion/styled";
import { Theme, Gap, Radius, Text } from "../../Theme/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${Gap.Gap_24};
`;

export const UserCard = styled.div`
  background-color: ${Theme.Surface.Surface_20};
  border: 1px solid ${Theme.Stroke.Stroke_Main};
  border-radius: ${Radius.radius_16};
  padding: ${Gap.Gap_32};
  min-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_20};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_8};
  padding-bottom: ${Gap.Gap_16};
  border-bottom: 1px solid ${Theme.Stroke.Stroke_10};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const Label = styled.span`
  ${Text.Label.M}
  color: ${Theme.Text.Text_Translucence};
`;

export const Value = styled.span`
  ${Text.Body.M}
  color: ${Theme.Text.Text_10};
  word-break: break-all;
`;

export const LinkValue = styled.a`
  ${Text.Body.M}
  color: ${Theme.Functional.Primary};
  text-decoration: none;
  cursor: pointer;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoadingText = styled.div`
  ${Text.Title.M}
  color: ${Theme.Text.Text_20};
  text-align: center;
`;

export const ErrorText = styled.div`
  ${Text.Body.M}
  color: ${Theme.Functional.Primary};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Gap.Gap_12};
`;

export const RetryButton = styled.button`
  ${Text.Body.M}
  background: ${Theme.Functional.Primary};
  color: ${Theme.Text.Text_10};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  border-radius: ${Radius.radius_8};
  padding: ${Gap.Gap_12} ${Gap.Gap_24};
  cursor: pointer;
  margin-top: ${Gap.Gap_16};
  transition: all 0.2s ease;

  &:hover {
    background: ${Theme.Functional.Primary_2nd};
  }

  &:active {
    background: ${Theme.Functional.Primary_3rd};
  }
`;
