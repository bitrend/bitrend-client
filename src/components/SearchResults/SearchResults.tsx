import React from "react";
import { Gap, Theme } from "../../Theme/theme";
import { Icon } from "../Icons/Icon";
import * as _ from "./styled";

interface SearchUser {
  id: number;
  username: string;
  name: string;
  avatarUrl: string;
  followerCount: number;
}

interface SearchResultsProps {
  users: SearchUser[];
  suggestions: string[];
  isLoading: boolean;
  error?: string | null;
  onUserClick: (username: string) => void;
  onSuggestionClick: (suggestion: string) => void;
}

export function SearchResults({
  users,
  suggestions,
  isLoading,
  error,
  onUserClick,
  onSuggestionClick,
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <_.Container>
        <_.LoadingContainer>
          <Icon size="S" color={Theme.Text.Text_Translucence}>
            hourglass_empty
          </Icon>
          <_.LoadingText>검색 중...</_.LoadingText>
        </_.LoadingContainer>
      </_.Container>
    );
  }

  if (error) {
    return (
      <_.Container>
        <_.EmptyContainer>
          <Icon size="M" color={Theme.Text.Text_Translucence}>
            error_outline
          </Icon>
          <_.EmptyText>{error}</_.EmptyText>
        </_.EmptyContainer>
      </_.Container>
    );
  }

  if (users.length === 0 && suggestions.length === 0) {
    return (
      <_.Container>
        <_.EmptyContainer>
          <Icon size="M" color={Theme.Text.Text_Translucence}>
            search_off
          </Icon>
          <_.EmptyText>검색 결과가 없습니다</_.EmptyText>
        </_.EmptyContainer>
      </_.Container>
    );
  }

  return (
    <_.Container>
      {users.length > 0 && (
        <_.Section>
          <_.SectionTitle>사용자</_.SectionTitle>
          <_.UserList>
            {users.map((user) => (
              <_.UserItem
                key={user.id}
                onClick={() => onUserClick(user.username)}
              >
                <_.UserAvatar src={user.avatarUrl} alt={user.name} />
                <_.UserInfo>
                  <_.UserName>{user.name}</_.UserName>
                  <_.Username>@{user.username}</_.Username>
                </_.UserInfo>
                <_.FollowerCount>
                  <Icon size="XXXS" color={Theme.Text.Text_Translucence}>
                    group
                  </Icon>
                  {user.followerCount.toLocaleString()}
                </_.FollowerCount>
              </_.UserItem>
            ))}
          </_.UserList>
        </_.Section>
      )}

      {suggestions.length > 0 && (
        <_.Section>
          <_.SectionTitle>추천 검색어</_.SectionTitle>
          <_.SuggestionList>
            {suggestions.map((suggestion, index) => (
              <_.SuggestionItem
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
              >
                <Icon size="XXXS" color={Theme.Text.Text_Translucence}>
                  search
                </Icon>
                {suggestion}
              </_.SuggestionItem>
            ))}
          </_.SuggestionList>
        </_.Section>
      )}
    </_.Container>
  );
}
