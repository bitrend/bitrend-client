import styled from "@emotion/styled"
import { Gap, Radius, Theme,  } from "../../../Theme/theme";

export const MainCard = styled.div`
  display: flex;
  padding: ${Gap.Gap_24};
  flex-direction: column;
  align-items: flex-start;
  gap: ${Gap.Gap_24};
  border-radius: ${Radius.radius_20};
  border: 1px solid ${Theme.Stroke.Stroke_Main};
  background: ${Theme.Surface.Surface_20};
`;