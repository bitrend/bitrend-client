import { Icon } from "../../../components/Icons/Icon";
import { Theme } from "../../../Theme/theme";
import * as _ from "./styled";
import { useStatioSelector } from "statio-lib";
import { useState } from "react";
import { PricingModal } from "../../../components/PricingModal/PricingModal";

export function VIP() {
  const isFolded = useStatioSelector("isFolded", Boolean) || false;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <_.Container onClick={() => setIsModalOpen(true)}>
        <Icon size="S" color={Theme.Text.Text_20}>
          fertile
        </Icon>
        <_.TextBox isFolded={isFolded}>
          <_.Upgarde>{isFolded ? "" : "Upgradde"}</_.Upgarde>
          <_.Sub>{isFolded ? "" : "Unlock\u00A0all\u00A0VIP\u00A0plan"}</_.Sub>
        </_.TextBox>
      </_.Container>

      <PricingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
