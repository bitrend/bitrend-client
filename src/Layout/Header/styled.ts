import styled from "@emotion/styled";
import { Gap, Theme, Text } from "../../Theme/theme";

export const HeaderContainer = styled.header`
  display: flex;
  height: 5.875rem;
  padding: 0 ${Gap.Gap_32};
  justify-content: space-between;
  align-items: center;

  box-shadow: inset 0 -1px 0 0 ${Theme.Stroke.Stroke_Main};
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_20};
`;

export const HeaderText = styled.span`
  color: ${Theme.Text.Text_10};

  font-family: "Wanted Sans Variable";
  ${Text.Title.S};
  font-style: normal;
  letter-spacing: -0.025rem;
`;