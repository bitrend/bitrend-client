import type { ReactNode } from "react";
import * as _ from "./styled";
import { Theme } from "../../../Theme/theme";
import { Icon } from "../../../components/Icons/Icon";

interface props {
  children: ReactNode;
  icon?: string;
}

export function NavMenu({ children, icon }: props) {
  return (
    <_.Container>
      <_.Box>
        {icon && (
          <Icon size="S" color={Theme.Text.Text_30}>
            {icon}
          </Icon>
        )}
        {children}
      </_.Box>
    </_.Container>
  );
}
