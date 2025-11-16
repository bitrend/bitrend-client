import ActionableCard from "../../components/ActionableCard/ActionableCard";
import { Icon } from "../../components/Icons/Icon";
import { Theme, Gap } from "../../Theme/theme";
import UserProfileCard from "./components/UserProfileCard";
import ProjectListCard from "./components/ProjectListCard";
import RankCard from "./components/RankCard";
import TotalBinariesCard from "./components/TotalBinariesCard";
import BinariesVariationCard from "./components/BinariesVariationCard";
import * as _ from "./styled";

export function Dashboard() {
  const userName = "Stephan";

  return (
    <_.DashboardContainer>
      {/* Title Section */}
      <_.TitleSection>
        <_.TitleLeft>
          <_.Title>Dashboard</_.Title>
          <_.Subtitle>만나서 반가워요. {userName}님의 상황을 조회 해보세요!</_.Subtitle>
        </_.TitleLeft>

        <_.TitleRight>
          <ActionableCard
            bg={Theme.Surface.Surface_30}
            offset="-1px"
            borderColor={Theme.Stroke.Stroke_10}
            paddingX={Gap.Gap_12}
            paddingY={Gap.Gap_16}
            gap={Gap.Gap_6}
          >
            <Icon size="XS" color={Theme.Text.Text_20}>add</Icon>
            <span>Add Widget</span>
          </ActionableCard>

          <ActionableCard
            bg={Theme.Surface.Surface_30}
            offset="-1px"
            borderColor={Theme.Stroke.Stroke_10}
            paddingX={Gap.Gap_12}
            paddingY={Gap.Gap_16}
            gap={Gap.Gap_6}
          >
            <Icon size="XS" color={Theme.Text.Text_20}>calendar_today</Icon>
            <span>All Time</span>
            <Icon size="XS" color={Theme.Text.Text_20}>keyboard_arrow_down</Icon>
          </ActionableCard>

          <ActionableCard
            bg={Theme.Functional.Primary}
            offset="-1px"
            borderColor={Theme.Stroke.Stroke_10}
            paddingX={Gap.Gap_16}
            paddingY={Gap.Gap_12}
          >
            <_.PrimaryButtonText>May be Something Button</_.PrimaryButtonText>
          </ActionableCard>
        </_.TitleRight>
      </_.TitleSection>

      {/* Cards Grid */}
      <_.CardsGrid>
        <UserProfileCard />
        <ProjectListCard />
        <RankCard />
        <TotalBinariesCard />
        <BinariesVariationCard />
      </_.CardsGrid>
    </_.DashboardContainer>
  );
};

export default Dashboard;