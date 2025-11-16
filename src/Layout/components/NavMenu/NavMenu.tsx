import type { ReactNode } from "react";
import * as _ from "./styled";
import { Theme } from "../../../Theme/theme";
import { Icon } from "../../../components/Icons/Icon";

interface props {
  children: ReactNode;
  icon?: string;
  onClick?: () => void;
}

export function NavMenu({ children, icon, onClick }: props) {
  return (
    <_.Container onClick={onClick}>
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
