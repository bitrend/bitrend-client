import { Theme } from '../../Theme/theme'
import * as _ from './styled'
import { Icon } from '../Icons/Icon'


//props 뚫어야 함
const BarChart = () => {
  return (
    <div>
      <_.BarMainWrapper>
        <_.BarDistribution>Distribution</_.BarDistribution>
        <_.BarWrapper>
          <_.BarContainer percent={58} pcs={3}>
            <_.BarLabel>
              <Icon size='XXS' color={Theme.Functional.Primary}>incomplete_circle</Icon>
              <_.LabelText>58%</_.LabelText>
            </_.BarLabel>
            <_.Bar bg={Theme.Functional.Primary} />
          </_.BarContainer>
          <_.BarContainer percent={25} pcs={3}>
            <_.BarLabel>
              <Icon size='XXS' color={Theme.Functional.Primary_2nd}>incomplete_circle</Icon>
              <_.LabelText>25%</_.LabelText>
            </_.BarLabel>
            <_.Bar bg={Theme.Functional.Primary_2nd} />
          </_.BarContainer>
          <_.BarContainer percent={17} pcs={3}>
            <_.BarLabel>
              <Icon size='XXS' color={Theme.Functional.Primary_3rd}>incomplete_circle</Icon>
              <_.LabelText>17%</_.LabelText>
            </_.BarLabel>
            <_.Bar bg={Theme.Functional.Primary_3rd} />
          </_.BarContainer>
        </_.BarWrapper>
      </_.BarMainWrapper>
    </div>
  )
}

export default BarChart