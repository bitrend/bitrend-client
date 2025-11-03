import type { ReactNode } from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import * as _ from "./styled";

interface Props {
  children?: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <_.Main>
      <Sidebar />
      <_.Content>
        <Header />
        {children}
      </_.Content>
    </_.Main>
  );
}