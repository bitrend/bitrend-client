import styled from "@emotion/styled";
import { Gap, Theme, Text, Color, Radius } from "../../Theme/theme";

export const HeaderContainer = styled.header`
  display: flex;
  height: 5.875rem;
  padding: 0 ${Gap.Gap_32};
  justify-content: space-between;
  align-items: center;
  width: 100%;

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
  letter-spacing: -0.025rem;
`;

export const BinariesPoint = styled.img`
`;

export const Divider = styled.div`
  width: 0.0625rem;
  height: 1rem;
  background-color: ${Color.GrayScale.Translucence.Translucence_10};
  border-radius: ${Radius.radius_Max};
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_6};
`;

export const ScoreText = styled.span`
  color: ${Theme.Text.Text_20};
  ${Text.Body.S};
  line-height: 1.25rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 17.5rem;
  padding: ${Gap.Gap_12};
  justify-content: space-between;
  align-items: center;

  border-radius: ${Radius.radius_12};
  outline: 1px solid ${Theme.Stroke.Stroke_Main};
  outline-offset: -1px;
  background: ${Theme.Surface.Surface_20};
`;

export const IconAndInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_8};
  width: 100%;
`;

export const SearchInput = styled.input`
  ${Text.Label.S};
  color: ${Theme.Text.Text_Translucence};
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  
  &::placeholder {
    color: ${Theme.Text.Text_Translucence};
  }
`;

export const KeyboardShortcutsContainer = styled.div`
  display: flex;
  padding: ${Gap.Gap_4} ${Gap.Gap_8} ${Gap.Gap_4} ${Gap.Gap_6};
  justify-content: center;
  align-items: center;
  gap: 0.125rem;

  background-color: ${Theme.Surface.Surface_30};
  border-radius: ${Radius.radius_6};
`;

export const ShortcutText = styled.span`
  color: ${Theme.Text.Text_20};
  ${Text.Label.S};
  line-height: 0.875rem;
`;