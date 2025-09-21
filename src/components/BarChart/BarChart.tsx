import { Theme } from '../../Theme/theme'
import * as _ from './styled'

const BarChart = () => {
  return (
      <_.Bar bg={Theme.Functional.Primary} percent={58} pcs={3} />
  )
}

export default BarChart
