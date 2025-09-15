import type { ReactNode } from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <main>
      <Sidebar />
      <>
        <Header />
        {children}
      </>
    </main>
  );
}
