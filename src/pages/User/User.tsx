import { Icon } from "../../components/Icons/Icon";
import { Theme, Gap, Color } from "../../Theme/theme";
import ActionableCard from "../../components/ActionableCard/ActionableCard";
import Junior from "../../assets/tier.junior.svg";
import * as _ from "./styled";

export function User() {
  const userData = {
    name: "Stephan",
    tier: Junior,
    email: "stephan@bitrend.com",
    joinDate: "2024.01.15",
    role: "Developer",
    avatar: "S",
  };

  const stats = [
    { label: "Total Projects", value: "12", icon: "folder" },
    { label: "Completed", value: "8", icon: "check_circle" },
    { label: "In Progress", value: "4", icon: "pending" },
    { label: "Contributions", value: "156", icon: "code" },
  ];

  const recentActivity = [
    { action: "Updated bitrend-client", time: "2 hours ago", icon: "edit" },
    {
      action: "Completed Statio project",
      time: "1 day ago",
      icon: "check_circle",
    },
    {
      action: "Created new project LAYERED",
      time: "3 days ago",
      icon: "add_circle",
    },
    { action: "Joined Bitrend team", time: "1 week ago", icon: "group_add" },
  ];

  return (
    <_.Container>
      <_.Header>
        <_.HeaderLeft>
          <_.Title>User Profile</_.Title>
          <_.Subtitle>{userData.name}님의 프로필 정보입니다!</_.Subtitle>
        </_.HeaderLeft>
        <_.HeaderRight>
          <ActionableCard
            bg={Theme.Surface.Surface_30}
            offset="-1px"
            borderColor={Theme.Stroke.Stroke_10}
            paddingX={Gap.Gap_12}
            paddingY={Gap.Gap_16}
            gap={Gap.Gap_6}
          >
            <Icon size="XS" color={Theme.Text.Text_20}>
              edit
            </Icon>
            <span>Edit Profile</span>
          </ActionableCard>
        </_.HeaderRight>
      </_.Header>

      <_.Content>
        <_.ProfileSection>
          <_.ProfileCard>
            <_.AvatarWrapper>
              <_.Avatar>{userData.avatar}</_.Avatar>
            </_.AvatarWrapper>

            <_.ProfileInfo>
              <_.UserName>{userData.name}</_.UserName>
              <_.UserEmail>{userData.email}</_.UserEmail>
              <_.UserMeta>
                <_.MetaItem>
                  <Icon size="XS" color={Theme.Text.Text_Translucence}>
                    work
                  </Icon>
                  <span>{userData.role}</span>
                </_.MetaItem>
                <_.MetaItem>
                  <Icon size="XS" color={Theme.Text.Text_Translucence}>
                    calendar_today
                  </Icon>
                  <span>Joined {userData.joinDate}</span>
                </_.MetaItem>
              </_.UserMeta>
            </_.ProfileInfo>
            <_.TierInfo>
              <_.UserTier src={userData.tier} />
              <_.Tier>Junior</_.Tier>
            </_.TierInfo>
          </_.ProfileCard>

          <_.StatsGrid>
            {stats.map((stat, index) => (
              <_.StatCard key={index}>
                <_.StatIcon>
                  <Icon
                    size="M"
                    color={Color.GrayScale.Translucence.Translucence_40}
                  >
                    {stat.icon}
                  </Icon>
                </_.StatIcon>
                <_.StatInfo>
                  <_.StatValue>{stat.value}</_.StatValue>
                  <_.StatLabel>{stat.label}</_.StatLabel>
                </_.StatInfo>
              </_.StatCard>
            ))}
          </_.StatsGrid>
        </_.ProfileSection>

        <_.ActivitySection>
          <_.SectionTitle>Recent Activity</_.SectionTitle>
          <_.ActivityList>
            {recentActivity.map((activity, index) => (
              <_.ActivityItem key={index}>
                <_.ActivityIcon>
                  <Icon size="S" color={Theme.Text.Text_30}>
                    {activity.icon}
                  </Icon>
                </_.ActivityIcon>
                <_.ActivityInfo>
                  <_.ActivityAction>{activity.action}</_.ActivityAction>
                  <_.ActivityTime>{activity.time}</_.ActivityTime>
                </_.ActivityInfo>
              </_.ActivityItem>
            ))}
          </_.ActivityList>
        </_.ActivitySection>
      </_.Content>
    </_.Container>
  );
}
