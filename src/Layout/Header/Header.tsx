import ActionableCard from '../../components/ActionableCard/ActionableCard';
import { Gap, Theme } from '../../Theme/theme';
import * as _ from './styled'
import Logo from '../../assets/bitrendLogo.svg' 
import { Icon } from '../../components/Icons/Icon';

export function Header() {
  return (
    <_.HeaderContainer>
      <_.Section>
        <_.HeaderText>Binaries</_.HeaderText>
        <ActionableCard gap={Gap.Gap_8} borderColor={Theme.Stroke.Stroke_Main} paddingX={Gap.Gap_12} paddingY={Gap.Gap_16} bg={Theme.Surface.Surface_20} offset='-1px'>
          <_.BinariesPoint src={Logo} />
          <_.Divider />
          <_.TextContainer>
            <_.ScoreText>213Byte</_.ScoreText>
            <_.ScoreText>2Bit</_.ScoreText>
          </_.TextContainer>
        </ActionableCard>
        <ActionableCard borderColor={Theme.Stroke.Stroke_10} bg={Theme.Functional.Primary} offset='-1px'>
          <Icon size='XS' color={Theme.Text.Text_20}>
            add
          </Icon>
        </ActionableCard>
      </_.Section>
      <_.Section>
        <_.SearchContainer>
          <_.IconAndInputContainer>
            <Icon size='S' color={Theme.Text.Text_Translucence}>
              search
            </Icon>
            <_.SearchInput placeholder='Search for here' />
          </_.IconAndInputContainer>
          <_.KeyboardShortcutsContainer>
            <Icon size='XXS' color={Theme.Text.Text_20}>
              keyboard_command_key
            </Icon>
            <_.ShortcutText>K</_.ShortcutText>
          </_.KeyboardShortcutsContainer>
        </_.SearchContainer>
        <ActionableCard borderColor={Theme.Stroke.Stroke_10} bg={Theme.Surface.Surface_30} offset='-1px'>
          <Icon size='XS' fill={true} color={Theme.Text.Text_20}>
            notifications
          </Icon>
        </ActionableCard>
      </_.Section>
    </_.HeaderContainer>
  );
}
