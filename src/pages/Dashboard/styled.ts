import styled from "@emotion/styled";
import { Theme, Gap, Text } from "../../Theme/theme";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_20};
  flex: 1 0 0;
  align-self: stretch;
  padding: ${Gap.Gap_32};
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const TitleLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_8};
`;

export const Title = styled.h1`
  ${Text.Title.L}
  color: ${Theme.Text.Text_10};
  margin: 0;
`;

export const Subtitle = styled.p`
  ${Text.Body.S}
  color: ${Theme.Text.Text_Translucence};
  margin: 0;
`;

export const TitleRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_16};

  span {
    ${Text.Label.M}
    color: ${Theme.Text.Text_20};
  }
`;

export const PrimaryButtonText = styled.span`
  ${Text.Body.S}
  color: ${Theme.Text.Text_20};
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: ${Gap.Gap_16};
  flex: 1 0 0;
  align-self: stretch;
`;