import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme } from "../../../Theme/theme";
import BarChart from "../../../components/BarChart/BarChart";
import styled from "@emotion/styled";
import * as _ from "./styled";
import type { DashboardSkillAnalysis } from "../../../types/analytics";
import { skillAnalysisToBinaries } from "../../../types/analytics";

interface TotalBinariesCardProps {
  skillAnalysis?: DashboardSkillAnalysis;
  loading?: boolean;
}

const TotalBinariesCard = ({ skillAnalysis, loading }: TotalBinariesCardProps) => {
  const binariesData = skillAnalysis ? skillAnalysisToBinaries(skillAnalysis) : null;

  return (
    <TotalBinariesWrapper>
      <MainCard>
        <_.CardHeader>
          <_.CardTitle>Total Binaries</_.CardTitle>
          <Icon size="XS" color={Theme.Text.Text_Translucence}>info</Icon>
        </_.CardHeader>

        <_.StatsSection>
          <_.MainStats>
            <_.StatNumber primary>
              {loading ? "로딩..." : (binariesData?.total.size ? String(binariesData.total.size) : "213Byte")}
            </_.StatNumber>
            <_.StatNumber>
              {loading ? "..." : (binariesData?.total.count ? String(binariesData.total.count) : "2Bit")}
            </_.StatNumber>
          </_.MainStats>

          <_.StatsBadge>
            <_.PercentageBadge>
              <Icon size="XXS" color={Theme.Functional.Primary}>stat_1</Icon>
              <span>
                {loading ? "..." : `${binariesData?.total.growth.percentage || 5}%`}
              </span>
            </_.PercentageBadge>
            <_.StatsDetail>
              <span>
                {loading ? "로딩..." : (() => {
                  const absolute = binariesData?.total.growth.absolute;
                  if (!absolute) return "+14Byte 2Bit";
                  if (typeof absolute === 'string') return absolute;
                  if (typeof absolute === 'object' && 'byte' in absolute && 'bit' in absolute) {
                    return `+${absolute.byte}Byte ${absolute.bit}Bit`;
                  }
                  return String(absolute);
                })()}
              </span>
              <span>in this check</span>
            </_.StatsDetail>
          </_.StatsBadge>
        </_.StatsSection>

        <BarChart 
          distribution="Distribution" 
          percent1={binariesData?.distribution.codeQuality.percentage || 58} 
          percent2={binariesData?.distribution.projectStructure.percentage || 25} 
          percent3={binariesData?.distribution.others.percentage || 17} 
        />

        <_.LegendSection>
          <_.LegendItem>
            <_.LegendLeft>
              <_.LegendDot color={Theme.Functional.Primary} />
              <_.LegendInfo>
                <_.LegendLabel>{binariesData?.distribution.codeQuality.label || "Code Quality"}</_.LegendLabel>
                <_.LegendValue>{`${binariesData?.distribution.codeQuality.percentage || 58}%`}</_.LegendValue>
              </_.LegendInfo>
            </_.LegendLeft>
            <_.LegendAmount>{binariesData?.distribution.codeQuality.size || "123 Byte"}</_.LegendAmount>
          </_.LegendItem>

          <_.LegendItem>
            <_.LegendLeft>
              <_.LegendDot color={Theme.Functional.Primary_2nd} />
              <_.LegendInfo>
                <_.LegendLabel>{binariesData?.distribution.projectStructure.label || "Project Structure"}</_.LegendLabel>
                <_.LegendValue>{`${binariesData?.distribution.projectStructure.percentage || 25}%`}</_.LegendValue>
              </_.LegendInfo>
            </_.LegendLeft>
            <_.LegendAmount>{binariesData?.distribution.projectStructure.size || "53 Byte"}</_.LegendAmount>
          </_.LegendItem>

          <_.LegendItem>
            <_.LegendLeft>
              <_.LegendDot color={Theme.Functional.Primary_3rd} />
              <_.LegendInfo>
                <_.LegendLabel>{binariesData?.distribution.others.label || "Others"}</_.LegendLabel>
                <_.LegendValue>{`${binariesData?.distribution.others.percentage || 17}%`}</_.LegendValue>
              </_.LegendInfo>
            </_.LegendLeft>
            <_.LegendAmount>{binariesData?.distribution.others.size || "36 Byte"}</_.LegendAmount>
          </_.LegendItem>
        </_.LegendSection>
      </MainCard>
    </TotalBinariesWrapper>
  );
};

const TotalBinariesWrapper = styled.div`
  width: 35rem;
  height: 31.25rem;
  flex-shrink: 0;
`;

export default TotalBinariesCard;