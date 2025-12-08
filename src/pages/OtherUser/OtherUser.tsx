import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Icon } from "../../components/Icons/Icon";
import { Theme, Gap, Color } from "../../Theme/theme";
import ActionableCard from "../../components/ActionableCard/ActionableCard";
import { auth } from "../../utils/auth";
import {
  getUserProfileByUsername,
  getUserStats,
  getUserActivities,
  checkFollowStatus,
  followUser,
  unfollowUser,
} from "../../api/userApi";
import type { UserProfile, UserStats, UserActivity } from "../../types/user";
import Junior from "../../assets/tier.junior.svg";
import * as _ from "../User/styled";

const ACTIVITY_ICON_MAP: Record<string, string> = {
  update: "edit",
  complete: "check_circle",
  create: "add_circle",
  join: "group_add",
  edit: "edit",
  delete: "delete",
};

export function OtherUser() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!username) {
        setError("사용자를 찾을 수 없습니다.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const token = auth.getToken();
        if (!token) {
          setError("로그인이 필요합니다.");
          return;
        }

        const currentUser = auth.getUser();

        // username으로 프로필 조회
        const profileData = await getUserProfileByUsername(username, token);

        // 본인 프로필인 경우 User 페이지로 리다이렉트
        if (currentUser && profileData.username === currentUser.username) {
          navigate("/user");
          return;
        }

        // userId를 사용하여 나머지 데이터 조회
        const [statsData, activitiesData, followStatus] = await Promise.all([
          getUserStats(profileData.id, token),
          getUserActivities(profileData.id, token, 10),
          checkFollowStatus(profileData.id, token),
        ]);

        setProfile(profileData);
        setStats(statsData);
        setActivities(activitiesData.activities);
        setIsFollowing(followStatus.isFollowing);
      } catch (err: any) {
        console.error("Failed to fetch user data:", err);
        setError(err?.error?.message || "데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username, navigate]);

  const handleFollowToggle = async () => {
    if (!profile || followLoading) return;

    try {
      setFollowLoading(true);
      const token = auth.getToken();
      if (!token) {
        setError("로그인이 필요합니다.");
        return;
      }

      if (isFollowing) {
        await unfollowUser(profile.id, token);
        setIsFollowing(false);
        // 팔로워 수 감소
        setProfile({
          ...profile,
          followerCount: profile.followerCount - 1,
        });
      } else {
        await followUser(profile.id, token);
        setIsFollowing(true);
        // 팔로워 수 증가
        setProfile({
          ...profile,
          followerCount: profile.followerCount + 1,
        });
      }
    } catch (err: any) {
      console.error("Failed to toggle follow:", err);
      setError(err?.error?.message || "팔로우 처리에 실패했습니다.");
    } finally {
      setFollowLoading(false);
    }
  };

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
    {
      label: "Total Projects",
      value: stats.totalProjects.toString(),
      icon: "folder",
    },
    {
      label: "Completed",
      value: stats.completedProjects.toString(),
      icon: "check_circle",
    },
    {
      label: "In Progress",
      value: stats.inProgressProjects.toString(),
      icon: "pending",
    },
    {
      label: "Contributions",
      value: stats.totalContributions.toString(),
      icon: "code",
    },
  ];

  const avatarInitial = profile.name.charAt(0).toUpperCase();

  console.log(profile);
  return (
    <_.Container>
      <_.Header>
        <_.HeaderLeft>
          <_.Title>User Profile</_.Title>
          <_.Subtitle>{profile.name}님의 프로필 정보입니다!</_.Subtitle>
        </_.HeaderLeft>
        <_.HeaderRight>
          <ActionableCard
            hv={
              followLoading
                ? isFollowing
                  ? Theme.Functional.Primary
                  : Theme.Surface.Surface_30
                : isFollowing
                ? Theme.Surface.Surface_30
                : Theme.Functional.Primary_Translucence
            }
            bg={
              isFollowing ? Theme.Functional.Primary : Theme.Surface.Surface_30
            }
            offset="-1px"
            borderColor={Theme.Stroke.Stroke_10}
            paddingX={Gap.Gap_12}
            paddingY={Gap.Gap_16}
            gap={Gap.Gap_6}
            onClick={followLoading ? undefined : handleFollowToggle}
          >
            <Icon size="XS" color={Theme.Text.Text_20}>
              {followLoading
                ? "hourglass_empty"
                : isFollowing
                ? "person_remove"
                : "person_add"}
            </Icon>
            <span>
              {followLoading
                ? "처리 중..."
                : isFollowing
                ? "Unfollow"
                : "Follow"}
            </span>
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
              <_.UserName>
                {profile.name}
                <_.UserId>{profile.username}</_.UserId>
              </_.UserName>
              <_.UserEmail>{profile.email}</_.UserEmail>
              <_.UserMeta>
                {profile.role && (
                  <_.MetaItem>
                    <Icon size="XS" color={Theme.Text.Text_Translucence}>
                      work
                    </Icon>
                    <span>{profile.role}</span>
                  </_.MetaItem>
                )}
                <_.MetaItem>
                  <Icon size="XS" color={Theme.Text.Text_Translucence}>
                    calendar_today
                  </Icon>
                  <span>Joined {profile.joinDate}</span>
                </_.MetaItem>
                <_.MetaItem>
                  <Icon
                    size="XS"
                    color={Theme.Text.Text_Translucence}
                    fill={true}
                  >
                    person
                  </Icon>
                  <span>{profile.followerCount}</span>
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
