import { useEffect, useState } from "react";
import { Icon } from "../../components/Icons/Icon";
import { Theme, Gap, Color } from "../../Theme/theme";
import ActionableCard from "../../components/ActionableCard/ActionableCard";
import { auth } from "../../utils/auth";
import { getUserProfile, getUserStats, getUserActivities } from "../../api/userApi";
import type { UserProfile, UserStats, UserActivity } from "../../types/user";
import Junior from "../../assets/tier.junior.svg";
import * as _ from "./styled";

const ACTIVITY_ICON_MAP: Record<string, string> = {
  update: "edit",
  complete: "check_circle",
  create: "add_circle",
  join: "group_add",
  edit: "edit",
  delete: "delete",
};

export function User() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = auth.getToken();
        const user = auth.getUser();

        if (!token || !user) {
          setError("로그인이 필요합니다.");
          return;
        }

        const [profileData, statsData, activitiesData] = await Promise.all([
          getUserProfile(user.id, token),
          getUserStats(user.id, token),
          getUserActivities(user.id, token, 10),
        ]);

        setProfile(profileData);
        setStats(statsData);
        setActivities(activitiesData.activities);
      } catch (err: unknown) {
        console.error("Failed to fetch user data:", err);
        setError((err as { error?: { message?: string } })?.error?.message || "데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <_.Container>
        <_.Header>
          <_.HeaderLeft>
            <_.Title>User Profile</_.Title>
            <_.Subtitle>로딩 중...</_.Subtitle>
          </_.HeaderLeft>
        </_.Header>
      </_.Container>
    );
  }

  if (error || !profile || !stats) {
    return (
      <_.Container>
        <_.Header>
          <_.HeaderLeft>
            <_.Title>User Profile</_.Title>
            <_.Subtitle>{error || "데이터를 불러올 수 없습니다."}</_.Subtitle>
          </_.HeaderLeft>
        </_.Header>
      </_.Container>
    );
  }

  const statsData = [
    { label: "Total Projects", value: stats.totalProjects.toString(), icon: "folder" },
    { label: "Completed", value: stats.completedProjects.toString(), icon: "check_circle" },
    { label: "In Progress", value: stats.inProgressProjects.toString(), icon: "pending" },
    { label: "Contributions", value: stats.totalContributions.toString(), icon: "code" },
  ];

  const avatarInitial = profile.name.charAt(0).toUpperCase();

  return (
    <_.Container>
      <_.Header>
        <_.HeaderLeft>
          <_.Title>User Profile</_.Title>
          <_.Subtitle>{profile.name}님의 프로필 정보입니다!</_.Subtitle>
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
              {profile.avatarUrl ? (
                <_.AvatarImage src={profile.avatarUrl} alt={profile.name} />
              ) : (
                <_.Avatar>{avatarInitial}</_.Avatar>
              )}
            </_.AvatarWrapper>

            <_.ProfileInfo>
              <_.UserName>{profile.name}</_.UserName>
              <_.UserEmail>{profile.email}</_.UserEmail>
              <_.UserMeta>
                <_.MetaItem>
                  <Icon size="XS" color={Theme.Text.Text_Translucence}>
                    work
                  </Icon>
                  <span>{profile.role}</span>
                </_.MetaItem>
                <_.MetaItem>
                  <Icon size="XS" color={Theme.Text.Text_Translucence}>
                    calendar_today
                  </Icon>
                  <span>Joined {profile.joinDate}</span>
                </_.MetaItem>
              </_.UserMeta>
            </_.ProfileInfo>
            <_.TierInfo>
              <_.UserTier src={Junior} />
              <_.Tier>Junior</_.Tier>
            </_.TierInfo>
          </_.ProfileCard>

          <_.StatsGrid>
            {statsData.map((stat, index) => (
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
            {activities.length > 0 ? (
              activities.map((activity) => (
                <_.ActivityItem key={activity.id}>
                  <_.ActivityIcon>
                    <Icon size="S" color={Theme.Text.Text_30}>
                      {ACTIVITY_ICON_MAP[activity.type] || "info"}
                    </Icon>
                  </_.ActivityIcon>
                  <_.ActivityInfo>
                    <_.ActivityAction>{activity.action}</_.ActivityAction>
                    <_.ActivityTime>{activity.relativeTime}</_.ActivityTime>
                  </_.ActivityInfo>
                </_.ActivityItem>
              ))
            ) : (
              <_.ActivityItem>
                <_.ActivityInfo>
                  <_.ActivityAction>최근 활동이 없습니다.</_.ActivityAction>
                </_.ActivityInfo>
              </_.ActivityItem>
            )}
          </_.ActivityList>
        </_.ActivitySection>
      </_.Content>
    </_.Container>
  );
}
