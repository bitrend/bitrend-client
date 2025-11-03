import styled from "@emotion/styled";
import { Gap, Radius, Text, Theme } from "../../Theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_20};
  padding: ${Gap.Gap_32};
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
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

export const Counter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${Gap.Gap_8};
  ${Text.Body.M}
`;

export const CounterPrimary = styled.span`
  color: ${Theme.Functional.Primary};
`;

export const CounterSecondary = styled.span`
  color: ${Theme.Text.Text_20};
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_16};
`;

export const ProjectCard = styled.div<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Gap.Gap_24} ${Gap.Gap_42};
  gap: ${Gap.Gap_16};
  background-color: ${(props) =>
    props.isCompleted ? Theme.Surface.Surface_20 : Theme.Surface.Surface_10};
  border: 1px solid ${Theme.Stroke.Stroke_Main};
  border-radius: ${Radius.radius_20};
`;

export const ProjectCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_42};
  flex: 1;
  min-width: 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_16};
  flex: 1;
  min-width: 0;
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_8};
`;

export const ProjectNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_16};
`;

export const ProjectName = styled.h2`
  ${Text.Main.L}
  color: ${Theme.Text.Text_20};
  margin: 0;
  letter-spacing: -0.44px;
`;

export const Badge = styled.div<{ isPublic: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${Gap.Gap_4};
  padding: ${Gap.Gap_4};
  background-color: ${Theme.Functional.Primary_Translucence};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  border-radius: ${Radius.radius_6};
  flex-shrink: 0;
`;

export const BadgeText = styled.span`
  ${Text.Label.S}
  color: ${Theme.Functional.Primary};
`;

export const ProjectDescription = styled.p`
  ${Text.Body.M}
  color: ${Theme.Text.Text_Translucence};
  margin: 0;
`;

export const Tags = styled.div`
  display: flex;
  gap: ${Gap.Gap_8};
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Gap.Gap_4} ${Gap.Gap_8};
  background-color: ${Theme.Functional.Primary_Translucence};
  border-radius: ${Radius.radius_4};
  ${Text.Label.M}
  color: ${Theme.Text.Text_Translucence};
`;

export const DragHandle = styled.div`
  display: flex;
  flex-shrink: 0;
`;

