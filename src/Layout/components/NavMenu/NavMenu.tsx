import type { ReactNode } from "react";
import * as _ from "./styled";
import { Theme } from "../../../Theme/theme";
import { Icon } from "../../../components/Icons/Icon";
import { useStatio } from "statio-lib";

interface props {
  children: ReactNode;
  icon?: string;
  onClick?: () => void;
  selected?: boolean;
}

export function NavMenu({ children, icon, onClick, selected }: props) {
  const [isFolded] = useStatio("isFolded", false);

  return (
    <_.Container onClick={onClick}>
      <_.Box selected={selected} isFolded={isFolded}>
        {icon && (
          <Icon size="S" color={Theme.Text.Text_30}>
            {icon}
          </Icon>
        )}
        <_.ChildrenWrapper isFolded={isFolded}>{children}</_.ChildrenWrapper>
      </_.Box>
    </_.Container>
  );
}
