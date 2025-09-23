import { Icon } from "../../../components/Icons/Icon";
import { Theme } from "../../../Theme/theme";
import * as _ from "./styled";

export function VIP() {
  return (
    <_.Container>
      <Icon size="S" color={Theme.Text.Text_20}>
        fertile
      </Icon>
      <_.TextBox>
        <_.Upgarde>Upgradde</_.Upgarde>
        <_.Sub>Unlock all VIP plan</_.Sub>
      </_.TextBox>
    </_.Container>
  );
}
