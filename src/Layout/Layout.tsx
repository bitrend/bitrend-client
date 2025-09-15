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
      <>
        <Header />
        {children}
      </>
    </_.Main>
  );
}