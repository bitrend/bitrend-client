import styled from "@emotion/styled";
import { Gap, Radius, Text, Theme } from "../../../Theme/theme";

export const Container = styled.div`
  padding: ${Gap.Gap_6} ${Gap.Gap_24};
`;

export const Box = styled.div`
  display: flex;
  padding: ${Gap.Gap_16} ${Gap.Gap_20};
  gap: ${Gap.Gap_12};
  border-radius: ${Radius.radius_16};
  cursor: pointer;

  ${Text.Body.M}
  color: ${Theme.Text.Text_30}
`;
