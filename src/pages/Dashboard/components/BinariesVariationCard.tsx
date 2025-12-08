import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme, Text } from "../../../Theme/theme";
import styled from "@emotion/styled";
import * as _ from "./styled";
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart, CartesianGrid, Tooltip } from 'recharts';
import type { DashboardSkillAnalysis } from "../../../types/analytics";
import { skillAnalysisToBinaries } from "../../../types/analytics";
import { formatGrowthAbsolute } from "../../../utils/scoreFormatter";

interface BinariesVariationCardProps {
  skillAnalysis?: DashboardSkillAnalysis;
  loading?: boolean;
}

const BinariesVariationCard = ({ skillAnalysis }: BinariesVariationCardProps) => {
  const binariesData = skillAnalysis ? skillAnalysisToBinaries(skillAnalysis) : null;

  // Use data from API if available, otherwise fallback to mock data
  const defaultChartData = [
    { name: 'Sun', value: Math.round((260 - 200) / 260 * 20) }, // 4.6 -> 5
    { name: 'Mon', value: Math.round((260 - 180) / 260 * 20) }, // 6.2 -> 6
    { name: 'Tue', value: Math.round((260 - 160) / 260 * 20) }, // 7.7 -> 8
    { name: 'Wed', value: Math.round((260 - 140) / 260 * 20) }, // 9.2 -> 9
    { name: 'Thu', value: Math.round((260 - 120) / 260 * 20) }, // 10.8 -> 11
    { name: 'Fir', value: Math.round((260 - 100) / 260 * 20) }, // 12.3 -> 12
    { name: 'Sat', value: Math.round((260 - 110) / 260 * 20) }, // 11.5 -> 12
  ];

  const chartData = binariesData?.variation.chartData.map(item => ({
    name: item.date,
    value: item.value
  })) || defaultChartData;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    // 5번째 데이터 포인트 (Fir)에만 특별한 스타일 적용
    if (payload.name === 'Fir') {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={5}
          fill={Theme.Functional.Primary_3rd}
          stroke={Theme.Functional.Primary}
          strokeWidth={2}
        />
      );
    }
    return null;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = ({ active, payload, label, coordinate }: any) => {
    if (active && payload && payload.length && coordinate) {
      // coordinate는 activeDot의 위치를 나타냅니다
      // 툴팁을 activeDot 위에 중앙 정렬하여 표시
      const tooltipWidth = 150;
      const tooltipHeight = 50;
      
      return (
        <g transform={`translate(${coordinate.x - tooltipWidth / 2},${coordinate.y - tooltipHeight - 10})`}>
          <foreignObject x="0" y="0" width={tooltipWidth} height={tooltipHeight}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.25rem',
              padding: '0.375rem 0.75rem',
              borderRadius: '0.5rem',
              border: `1px solid ${Theme.Stroke.Stroke_10}`,
              background: Theme.Surface.Surface_20,
            }}>
              <div style={{
                fontSize: '0.688rem',
                lineHeight: '0.875rem',
                fontWeight: 400,
                color: Theme.Text.Text_Translucence,
              }}>{label}</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}>
                <span style={{
                  fontSize: '0.688rem',
                  lineHeight: '0.875rem',
                  fontWeight: 400,
                  color: Theme.Text.Text_20,
                }}>{payload[0].value}Byte</span>
                <span style={{
                  fontSize: '0.688rem',
                  lineHeight: '0.875rem',
                  fontWeight: 400,
                  color: Theme.Text.Text_20,
                }}>4Bit</span>
              </div>
            </div>
          </foreignObject>
        </g>
      );
    }
    return null;
  };

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
                <_.StatNumber medium primary>
                  {formatGrowthAbsolute(binariesData?.variation.growth.absolute, '')}
                </_.StatNumber>
              </_.MainStats>

              <_.StatsBadge>
                <_.PercentageBadge>
                  <Icon size="XXS" color={Theme.Functional.Primary}>stat_1</Icon>
                  <span>{`${binariesData?.variation.growth.percentage || 12}%`}</span>
                </_.PercentageBadge>
                <StatsDetailSingle>{binariesData?.variation.growth.period || "This week"}</StatsDetailSingle>
              </_.StatsBadge>
            </_.StatsSection>
          </_.ChartHeaderLeft>

          <_.ChartControls>
            <_.ViewToggle>
              <_.ToggleButton active>
                <_.ToggleText>W</_.ToggleText>
              </_.ToggleButton>
              <_.ToggleButton>
                <_.ToggleText>M</_.ToggleText>
              </_.ToggleButton>
            </_.ViewToggle>

            <_.ChartTypeToggle>
              <_.ToggleButton active>
                <Icon size="XS" color={Theme.Text.Text_20} fill>show_chart</Icon>
              </_.ToggleButton>
              <_.ToggleButton>
                <Icon size="XS" color={Theme.Text.Text_20} fill>candlestick_chart</Icon>
              </_.ToggleButton>
            </_.ChartTypeToggle>

            <_.FullscreenButton>
              <Icon size="XS" color={Theme.Text.Text_20} fill>fullscreen</Icon>
            </_.FullscreenButton>
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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={Theme.Functional.Primary} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={Theme.Functional.Primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  stroke={Theme.Stroke.Stroke_10} 
                  strokeWidth={1}
                  horizontal={true}
                  vertical={false}
                />
                <XAxis 
                  dataKey="name" 
                  hide={true}
                />
                <YAxis 
                  hide={true}
                  domain={[0, 20]}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={false}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={Theme.Functional.Primary}
                  strokeWidth={2}
                  fill="url(#chartGradient)"
                  dot={<CustomDot />}
                  activeDot={{ r: 5, fill: Theme.Functional.Primary_3rd, stroke: Theme.Functional.Primary, strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
            <_.ChartXAxis>
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fir</span>
              <span>Sat</span>
            </_.ChartXAxis>
          </_.ChartContent>
        </_.ChartArea>
      </MainCard>
    </_.BinariesVariationWrapper>
  );
};

const StatsDetailSingle = styled.span`
  ${Text.Label.S}
  color: ${Theme.Text.Text_Translucence};
`;

export default BinariesVariationCard;