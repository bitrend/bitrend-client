import styled from "@emotion/styled";
import { Gap, Theme, Text, Radius } from "../../Theme/theme";

export const Container = styled.div`
  position: absolute;
  top: calc(100% + ${Gap.Gap_8});
  left: 0;
  right: 0;
  background: ${Theme.Surface.Surface_20};
  border-radius: ${Radius.radius_12};
  outline: 1px solid ${Theme.Stroke.Stroke_Main};
  outline-offset: -1px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  max-height: 24rem;
  overflow-y: auto;
  z-index: 1003;
`;

export const Section = styled.div`
  padding: ${Gap.Gap_16};

  &:not(:last-child) {
    border-bottom: 1px solid ${Theme.Stroke.Stroke_Main};
  }
`;

export const SectionTitle = styled.h3`
  ${Text.Label.S};
  color: ${Theme.Text.Text_Translucence};
  margin: 0 0 ${Gap.Gap_12} 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_4};
`;

export const UserItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_12};
  padding: ${Gap.Gap_12};
  background: transparent;
  border: none;
  border-radius: ${Radius.radius_8};
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${Theme.Surface.Surface_30};
  }

  &:focus {
    outline: 2px solid ${Theme.Stroke.Stroke_10};
    outline-offset: -2px;
  }
`;

export const UserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: ${Radius.radius_8};
  object-fit: cover;
`;

export const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_2};
  min-width: 0;
`;

export const UserName = styled.span`
  ${Text.Body.S};
  color: ${Theme.Text.Text_10};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Username = styled.span`
  ${Text.Label.S};
  color: ${Theme.Text.Text_Translucence};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FollowerCount = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_4};
  ${Text.Label.S};
  color: ${Theme.Text.Text_Translucence};
  white-space: nowrap;
`;

export const SuggestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Gap.Gap_4};
`;

export const SuggestionItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_8};
  padding: ${Gap.Gap_8} ${Gap.Gap_12};
  background: transparent;
  border: none;
  border-radius: ${Radius.radius_6};
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.2s ease;
  ${Text.Body.S};
  color: ${Theme.Text.Text_20};

  &:hover {
    background: ${Theme.Surface.Surface_30};
  }

  &:focus {
    outline: 2px solid ${Theme.Stroke.Stroke_10};
    outline-offset: -2px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${Gap.Gap_32};
  gap: ${Gap.Gap_12};
`;

export const LoadingText = styled.span`
  ${Text.Body.S};
  color: ${Theme.Text.Text_Translucence};
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${Gap.Gap_32};
  gap: ${Gap.Gap_12};
`;

export const EmptyText = styled.span`
  ${Text.Body.S};
  color: ${Theme.Text.Text_Translucence};
`;
