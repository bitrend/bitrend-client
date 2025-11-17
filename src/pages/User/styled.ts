import styled from "@emotion/styled";
import { Theme, Gap, Text, Radius } from "../../Theme/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: ${Gap.Gap_42};
  min-height: 100vh;
  width: 100%;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Theme.Surface.Surface_20};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  border-radius: ${Radius.radius_16};
  padding: ${Gap.Gap_36};
  max-width: 600px;
  width: 100%;
  gap: ${Gap.Gap_24};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_20};
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${Radius.radius_Max};
  border: 2px solid ${Theme.Stroke.Stroke_10};
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_8};
`;

export const Name = styled.h1`
  ${Text.Title.L}
  color: ${Theme.Text.Text_10};
  margin: 0;
`;

export const Username = styled.p`
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};
  margin: 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${Theme.Stroke.Stroke_10};
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_16};
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Gap.Gap_12} 0;
`;

export const Label = styled.span`
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};
`;

export const Value = styled.span`
  ${Text.Body.M}
  color: ${Theme.Text.Text_10};
  font-weight: 500;
`;

export const ErrorText = styled.div`
  ${Text.Body.M}
  color: ${Theme.Functional.Primary};
  text-align: center;
`;
