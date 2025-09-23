import { Theme } from '../../Theme/theme'
import * as _ from './styled'
import { Icon } from '../Icons/Icon'

type BarChartProps = {
  distribution: string;
  percent1: number;
  percent2: number;
  percent3: number;
  
}

const BarChart = (props: BarChartProps) => {
  return (
    <div>
      <_.BarMainWrapper>
        <_.BarDistribution>{props.distribution}</_.BarDistribution>
        <_.BarWrapper>
          <_.BarContainer percent={props.percent1} pcs={3}>
            <_.BarLabel>
              <Icon size='XXS' color={Theme.Functional.Primary}>incomplete_circle</Icon>
              <_.LabelText>{props.percent1}%</_.LabelText>
            </_.BarLabel>
            <_.Bar bg={Theme.Functional.Primary} />
          </_.BarContainer>
          <_.BarContainer percent={props.percent2} pcs={3}>
            <_.BarLabel>
              <Icon size='XXS' color={Theme.Functional.Primary_2nd}>incomplete_circle</Icon>
              <_.LabelText>{props.percent2}%</_.LabelText>
            </_.BarLabel>
            <_.Bar bg={Theme.Functional.Primary_2nd} />
          </_.BarContainer>
          <_.BarContainer percent={props.percent3} pcs={3}>
            <_.BarLabel>
              <Icon size='XXS' color={Theme.Functional.Primary_3rd}>incomplete_circle</Icon>
              <_.LabelText>{props.percent3}%</_.LabelText>
            </_.BarLabel>
            <_.Bar bg={Theme.Functional.Primary_3rd} />
          </_.BarContainer>
        </_.BarWrapper>
      </_.BarMainWrapper>
    </div>
  )
}

export default BarChart