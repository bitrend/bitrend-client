import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme } from "../../../Theme/theme";
import * as _ from "./styled";

const RankCard = () => {
  return (
    <_.RankCardWrapper>
      <MainCard>
        <_.CardHeader>
          <_.CardTitle>Rank</_.CardTitle>
          <Icon size="XS" color={Theme.Text.Text_Translucence}>info</Icon>
        </_.CardHeader>

        <_.StatsSection>
          <_.MainStats>
            <_.StatNumber primary>Junior</_.StatNumber>
            <_.StatNumber secondary>Developer</_.StatNumber>
          </_.MainStats>

          <_.StatsBadge>
            <_.PercentageBadge>
              <Icon size="XXS" color={Theme.Functional.Primary}>stat_1</Icon>
              <span>5%</span>
            </_.PercentageBadge>
            <_.StatsDetail>
              <span>+14Byte 2Bit</span>
              <span>in this check</span>
            </_.StatsDetail>
          </_.StatsBadge>
        </_.StatsSection>
      </MainCard>
    </_.RankCardWrapper>
  );
};

export default RankCard;