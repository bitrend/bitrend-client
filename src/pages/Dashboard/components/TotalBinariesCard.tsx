import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme } from "../../../Theme/theme";
import BarChart from "../../../components/BarChart/BarChart";
import * as _ from "./styled";

const TotalBinariesCard = () => {
  return (
    <MainCard>
      <_.CardHeader>
        <_.CardTitle>Total Binaries</_.CardTitle>
        <Icon size="XS" color={Theme.Text.Text_Translucence}>info</Icon>
      </_.CardHeader>

      <_.StatsSection>
        <_.MainStats>
          <_.StatNumber primary>213Byte</_.StatNumber>
          <_.StatNumber>2Bit</_.StatNumber>
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

      <BarChart distribution="Distribution" percent1={58} percent2={25} percent3={17} />

      <_.LegendSection>
        <_.LegendItem>
          <_.LegendLeft>
            <_.LegendDot color={Theme.Functional.Primary} />
            <_.LegendInfo>
              <_.LegendLabel>Code Quality</_.LegendLabel>
              <_.LegendValue>58%</_.LegendValue>
            </_.LegendInfo>
          </_.LegendLeft>
          <_.LegendAmount>123 Byte</_.LegendAmount>
        </_.LegendItem>

        <_.LegendItem>
          <_.LegendLeft>
            <_.LegendDot color={Theme.Functional.Primary_2nd} />
            <_.LegendInfo>
              <_.LegendLabel>Project Structure</_.LegendLabel>
              <_.LegendValue>25%</_.LegendValue>
            </_.LegendInfo>
          </_.LegendLeft>
          <_.LegendAmount>53 Byte</_.LegendAmount>
        </_.LegendItem>

        <_.LegendItem>
          <_.LegendLeft>
            <_.LegendDot color={Theme.Functional.Primary_3rd} />
            <_.LegendInfo>
              <_.LegendLabel>Others</_.LegendLabel>
              <_.LegendValue>17%</_.LegendValue>
            </_.LegendInfo>
          </_.LegendLeft>
          <_.LegendAmount>36 Byte</_.LegendAmount>
        </_.LegendItem>
      </_.LegendSection>
    </MainCard>
  );
};

export default TotalBinariesCard;