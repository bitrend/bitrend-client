import { useRef, useEffect, useState } from "react";
import ActionableCard from "../../components/ActionableCard/ActionableCard";
import { Gap, Theme } from "../../Theme/theme";
import * as _ from "./styled";
import Logo from "../../assets/bitrendLogo.svg";
import { Icon } from "../../components/Icons/Icon";
import { useSearchContext } from "../Layout";
import { useDebounce } from "../../hooks/useDebounce";
import { useSearch } from "../../hooks/useSearch";
import { SearchResults } from "../../components/SearchResults/SearchResults";

export function Header() {
  const { isSearchExpanded, setIsSearchExpanded } = useSearchContext();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const { searchResults, isLoading, error, performSearch, clearResults } =
    useSearch();

  const handleSearchFocus = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchBlur = () => {
    // 검색 결과 클릭을 위해 약간의 지연을 둠
    setTimeout(() => {
      setIsSearchExpanded(false);
      clearResults();
    }, 200);
  };

  const handleUserClick = (username: string) => {
    // 사용자 프로필 페이지로 이동
    window.location.href = `/user/${username}`;
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    searchInputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0 && !isSearchExpanded) {
      setIsSearchExpanded(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      searchInputRef.current?.blur();
      setIsSearchExpanded(false);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isSearchExpanded) {
          searchInputRef.current?.blur();
          setIsSearchExpanded(false);
        } else {
          searchInputRef.current?.focus();
          setIsSearchExpanded(true);
        }
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [isSearchExpanded, setIsSearchExpanded]);

  // 디바운스된 검색어로 검색 실행
  useEffect(() => {
    if (debouncedSearchQuery.trim()) {
      console.log("검색어:", debouncedSearchQuery);
      performSearch(debouncedSearchQuery);
    } else {
      clearResults();
    }
  }, [debouncedSearchQuery, performSearch, clearResults]);

  return (
    <>
      {isSearchExpanded && <_.DimOverlay onClick={handleSearchBlur} />}
      <_.HeaderContainer isSearchExpanded={isSearchExpanded}>
        <_.Section isDimmed={isSearchExpanded}>
          <_.HeaderText>Binaries</_.HeaderText>
          <ActionableCard
            gap={Gap.Gap_8}
            borderColor={Theme.Stroke.Stroke_Main}
            paddingX={Gap.Gap_12}
            paddingY={Gap.Gap_16}
            bg={Theme.Surface.Surface_20}
            offset="-1px"
          >
            <_.BinariesPoint src={Logo} />
            <_.Divider />
            <_.TextContainer>
              <_.ScoreText>213Byte</_.ScoreText>
              <_.ScoreText>2Bit</_.ScoreText>
            </_.TextContainer>
          </ActionableCard>
          <ActionableCard
            borderColor={Theme.Stroke.Stroke_10}
            bg={Theme.Functional.Primary}
            offset="-1px"
          >
            <Icon size="XS" color={Theme.Text.Text_20}>
              add
            </Icon>
          </ActionableCard>
        </_.Section>
        <_.Section style={{ width: "100%" }}>
          <_.SearchContainer isExpanded={isSearchExpanded}>
            <_.IconAndInputContainer>
              <Icon size="S" color={Theme.Text.Text_Translucence}>
                search
              </Icon>
              <_.SearchInput
                ref={searchInputRef}
                placeholder="Search for users..."
                value={searchQuery}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </_.IconAndInputContainer>
            <_.KeyboardShortcutsContainer>
              <Icon size="XXXS" color={Theme.Text.Text_20} fill>
                keyboard_command_key
              </Icon>
              <_.ShortcutText>K</_.ShortcutText>
            </_.KeyboardShortcutsContainer>
            {isSearchExpanded && (searchResults || isLoading || error) && (
              <SearchResults
                users={searchResults?.users || []}
                suggestions={searchResults?.suggestions || []}
                isLoading={isLoading}
                error={error}
                onUserClick={handleUserClick}
                onSuggestionClick={handleSuggestionClick}
              />
            )}
          </_.SearchContainer>
          <_.NotificationSection isDimmed={isSearchExpanded}>
            <ActionableCard
              borderColor={Theme.Stroke.Stroke_10}
              bg={Theme.Surface.Surface_30}
              offset="-1px"
            >
              <Icon size="XS" fill={true} color={Theme.Text.Text_20}>
                notifications
              </Icon>
            </ActionableCard>
          </_.NotificationSection>
        </_.Section>
      </_.HeaderContainer>
    </>
  );
}
