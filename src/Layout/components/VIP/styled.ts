import styled from "@emotion/styled";
import { Color, Gap, Radius, Text, Theme } from "../../../Theme/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: ${Gap.Gap_16};
  padding: ${Gap.Gap_24} ${Gap.Gap_24};
  border-radius: ${Radius.radius_20};

  background-color: ${Color.GrayScale.GrayScale_80};
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${Gap.Gap_8};
`;

export const Upgarde = styled.p`
  color: ${Theme.Text.Text_20};
  ${Text.Body.M};
`;

export const Sub = styled.p`
  color: ${Theme.Text.Text_Translucence};
  ${Text.Label.S}
`;
