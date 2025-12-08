# SearchResults Component

사용자 검색 결과를 표시하는 컴포넌트입니다.

## Features

- 사용자 검색 결과 표시 (아바타, 이름, 사용자명, 팔로워 수)
- 추천 검색어 표시
- 로딩 상태 표시
- 에러 상태 표시
- 빈 결과 상태 표시

## Usage

```tsx
<SearchResults
  users={searchResults?.users || []}
  suggestions={searchResults?.suggestions || []}
  isLoading={isLoading}
  error={error}
  onUserClick={handleUserClick}
  onSuggestionClick={handleSuggestionClick}
/>
```

## Props

- `users`: 검색된 사용자 목록
- `suggestions`: 추천 검색어 목록
- `isLoading`: 로딩 상태
- `error`: 에러 메시지
- `onUserClick`: 사용자 클릭 핸들러
- `onSuggestionClick`: 추천 검색어 클릭 핸들러
