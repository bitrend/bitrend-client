import { Icon } from "../../../components/Icons/Icon";
import { Theme } from "../../../Theme/theme";
import * as _ from "./styled";
import { useStatio } from "statio-lib";

export function VIP() {
  const [isFolded] = useStatio("isFolded", false);

  return (
    <_.Container>
      <Icon size="S" color={Theme.Text.Text_20}>
        fertile
      </Icon>
      <_.TextBox isFolded={isFolded}>
        <_.Upgarde>{isFolded ? "" : "Upgradde"}</_.Upgarde>
        <_.Sub>{isFolded ? "" : "Unlock\u00A0all\u00A0VIP\u00A0plan"}</_.Sub>
      </_.TextBox>
    </_.Container>
  );
}
