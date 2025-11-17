import type { UserProps } from "../../types/auth";
import * as _ from "./styled";

export function User({ user }: UserProps) {
  if (!user) {
    return (
      <_.Container>
        <_.ErrorText>사용자 정보를 불러올 수 없습니다.</_.ErrorText>
      </_.Container>
    );
  }

  return (
    <_.Container>
      <_.UserCard>
        <_.Header>
          <_.Avatar src={user.avatarUrl} alt={user.name} />
          <_.HeaderInfo>
            <_.Name>{user.name}</_.Name>
            <_.Username>@{user.username}</_.Username>
          </_.HeaderInfo>
        </_.Header>
        
        <_.Divider />
        
        <_.InfoSection>
          <_.InfoRow>
            <_.Label>이메일</_.Label>
            <_.Value>{user.email}</_.Value>
          </_.InfoRow>
          <_.InfoRow>
            <_.Label>GitHub ID</_.Label>
            <_.Value>{user.githubId}</_.Value>
          </_.InfoRow>
          <_.InfoRow>
            <_.Label>사용자 ID</_.Label>
            <_.Value>{user.id}</_.Value>
          </_.InfoRow>
        </_.InfoSection>
      </_.UserCard>
    </_.Container>
  );
}
