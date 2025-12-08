import { useState, useCallback, useRef } from "react";
import { searchUsers } from "../api/search";

interface SearchUser {
  id: number;
  username: string;
  name: string;
  avatarUrl: string;
  followerCount: number;
}

interface SearchUsersResponse {
  users: SearchUser[];
  suggestions: string[];
  total: number;
}

interface UseSearchReturn {
  searchResults: SearchUsersResponse | null;
  isLoading: boolean;
  error: string | null;
  performSearch: (query: string, limit?: number) => Promise<void>;
  clearResults: () => void;
}

export function useSearch(): UseSearchReturn {
  const [searchResults, setSearchResults] =
    useState<SearchUsersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const performSearch = useCallback(async (query: string, limit = 10) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }

    // 이전 요청 취소
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // 새 AbortController 생성
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setError(null);

    try {
      const results = await searchUsers({ q: query, limit });
      setSearchResults(results);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setError(err.error?.message || "검색 중 오류가 발생했습니다.");
        setSearchResults(null);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setSearchResults(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    searchResults,
    isLoading,
    error,
    performSearch,
    clearResults,
  };
}
