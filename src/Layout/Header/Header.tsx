import ActionableCard from '../../components/ActionableCard/ActionableCard';
import { Gap, Theme } from '../../Theme/theme';
import * as _ from './styled'
import Logo from '../../assets/bitrendLogo.svg' 

export function Header() {
  return (
    <_.HeaderContainer>
      <_.Section>
        <_.HeaderText>Binaries</_.HeaderText>
        <ActionableCard gap={Gap.Gap_8} borderColor={Theme.Stroke.Stroke_Main} paddingX={Gap.Gap_12} paddingY={Gap.Gap_16} bg={Theme.Surface.Surface_20} offset='-1px'>
          <_.BinariesPoint src={Logo} />
        </ActionableCard>
      </_.Section>
    </_.HeaderContainer>
  );
}
