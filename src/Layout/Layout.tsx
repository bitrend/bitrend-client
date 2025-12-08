import type { ReactNode } from "react";
import { useState, createContext, useContext } from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import * as _ from "./styled";

interface Props {
  children?: ReactNode;
}

interface SearchContextType {
  isSearchExpanded: boolean;
  setIsSearchExpanded: (expanded: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }
  return context;
};

export function Layout({ children }: Props) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <SearchContext.Provider value={{ isSearchExpanded, setIsSearchExpanded }}>
      <_.Main>
        <_.SidebarWrapper isDimmed={isSearchExpanded}>
          <Sidebar />
        </_.SidebarWrapper>
        <_.Content>
          <Header />
          <_.ContentWrapper isDimmed={isSearchExpanded}>
            {children}
          </_.ContentWrapper>
        </_.Content>
      </_.Main>
    </SearchContext.Provider>
  );
}
