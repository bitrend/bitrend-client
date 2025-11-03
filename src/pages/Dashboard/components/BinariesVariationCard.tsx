import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import ActionableCard from "../../../components/ActionableCard/ActionableCard";
import { Theme, Gap, Text } from "../../../Theme/theme";
import styled from "@emotion/styled";
import * as _ from "./styled";

const BinariesVariationCard = () => {
  return (
    <_.BinariesVariationWrapper>
      <MainCard>
        <_.ChartHeader>
          <_.ChartHeaderLeft>
            <_.CardHeader>
              <_.CardTitle>Binaries Variation</_.CardTitle>
              <Icon size="XS" color={Theme.Text.Text_Translucence}>info</Icon>
            </_.CardHeader>

            <_.StatsSection>
              <_.MainStats>
                <_.StatNumber secondary>increase</_.StatNumber>
                <_.StatNumber medium primary>19Byte</_.StatNumber>
                <_.StatNumber medium>5Bit</_.StatNumber>
              </_.MainStats>

              <_.StatsBadge>
                <_.PercentageBadge>
                  <Icon size="XXS" color={Theme.Functional.Primary}>stat_1</Icon>
                  <span>12%</span>
                </_.PercentageBadge>
                <StatsDetailSingle>This week</StatsDetailSingle>
              </_.StatsBadge>
            </_.StatsSection>
          </_.ChartHeaderLeft>

          <_.ChartControls>
            <_.ViewToggle>
              <ActionableCard
                bg={Theme.Surface.Surface_30}
                offset="-1px"
                borderColor={Theme.Stroke.Stroke_10}
                paddingX={Gap.Gap_6}
                paddingY={Gap.Gap_6}
              >
                <_.ToggleText active>W</_.ToggleText>
              </ActionableCard>
              <ActionableCard
                bg="transparent"
                offset="-1px"
                borderColor="transparent"
                paddingX={Gap.Gap_6}
                paddingY={Gap.Gap_6}
              >
                <_.ToggleText>M</_.ToggleText>
              </ActionableCard>
            </_.ViewToggle>

            <_.ChartTypeToggle>
              <ActionableCard
                bg={Theme.Surface.Surface_30}
                offset="-1px"
                borderColor={Theme.Stroke.Stroke_10}
                paddingX={Gap.Gap_12}
                paddingY={Gap.Gap_12}
              >
                <Icon size="XS" color={Theme.Text.Text_20} fill>show_chart</Icon>
              </ActionableCard>
              <ActionableCard
                bg="transparent"
                offset="-1px"
                borderColor="transparent"
                paddingX={Gap.Gap_12}
                paddingY={Gap.Gap_12}
              >
                <Icon size="XS" color={Theme.Text.Text_20} fill>candlestick_chart</Icon>
              </ActionableCard>
            </_.ChartTypeToggle>

            <ActionableCard
              bg={Theme.Surface.Surface_30}
              offset="-1px"
              borderColor={Theme.Stroke.Stroke_10}
              paddingX={Gap.Gap_12}
              paddingY={Gap.Gap_12}
            >
              <Icon size="XS" color={Theme.Text.Text_20} fill>fullscreen</Icon>
            </ActionableCard>
          </_.ChartControls>
        </_.ChartHeader>

        <_.ChartArea>
          <_.ChartYAxis>
            <span>20B</span>
            <span>15B</span>
            <span>10B</span>
            <span>5B</span>
            <span>0B</span>
          </_.ChartYAxis>

          <_.ChartContent>
            <_.ChartSvg viewBox="0 0 800 260">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={Theme.Functional.Primary} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={Theme.Functional.Primary} stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[0, 69, 138, 207, 260].map((y, index) => (
                <line
                  key={index}
                  x1="0"
                  y1={y}
                  x2="800"
                  y2={y}
                  stroke={Theme.Stroke.Stroke_10}
                  strokeWidth="1"
                />
              ))}

              {/* Chart path */}
              <path
                d="M50 200 L150 180 L250 160 L350 140 L450 120 L550 100 L650 130 L750 110"
                fill="none"
                stroke={Theme.Functional.Primary}
                strokeWidth="2"
              />

              {/* Fill area */}
              <path
                d="M50 200 L150 180 L250 160 L350 140 L450 120 L550 100 L650 130 L750 110 L750 260 L50 260 Z"
                fill="url(#chartGradient)"
              />

              {/* Data point */}
              <circle cx="550" cy="100" r="5" fill={Theme.Functional.Primary_3rd} stroke={Theme.Functional.Primary} strokeWidth="2" />
            </_.ChartSvg>

            <_.ChartTooltip>
              <_.TooltipDate>2025-09-18</_.TooltipDate>
              <_.TooltipValue>
                <span>13Byte</span>
                <span>4Bit</span>
              </_.TooltipValue>
            </_.ChartTooltip>
          </_.ChartContent>
        </_.ChartArea>

        <_.ChartXAxis>
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fir</span>
          <span>Sat</span>
        </_.ChartXAxis>
      </MainCard>
    </_.BinariesVariationWrapper>
  );
};

const StatsDetailSingle = styled.span`
  ${Text.Label.S}
  color: ${Theme.Text.Text_Translucence};
`;

export default BinariesVariationCard;