import { MainCard } from "../../../components/common/MainCard/MainCard";
import { Icon } from "../../../components/Icons/Icon";
import { Theme, Gap } from "../../../Theme/theme";
import styled from "@emotion/styled";
import { Text, Radius } from "../../../Theme/theme";

const ProjectListCard = () => {
  const projects = [
    { name: "bitrend/bitrend-client", description: "Description for here", isPublic: true, isLink: false },
    { name: "Statio", description: "Description for here", isPublic: true, isLink: true },
    { name: "Statio-docs", description: "Description for here", isPublic: false, isLink: false },
  ];

  return (
    <ProjectListWrapper>
      <MainCard>
        <CardHeader>
          <CardTitle>Project</CardTitle>
          <ExpandButton>
            <Icon size="XS" color={Theme.Text.Text_Translucence}>north_east</Icon>
          </ExpandButton>
        </CardHeader>

        <ProjectList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectContent>
                <ProjectNameSection>
                  <Icon size="XS" color={Theme.Text.Text_30}>workspaces</Icon>
                  <ProjectName isLink={project.isLink}>{project.name}</ProjectName>
                  <Badge isPublic={project.isPublic}>
                    <Icon size="XXS" color={Theme.Functional.Primary}>
                      {project.isPublic ? "public" : "security"}
                    </Icon>
                    <BadgeText>{project.isPublic ? "Public" : "Praivate"}</BadgeText>
                  </Badge>
                </ProjectNameSection>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
              <Icon size="XS" color={Theme.Text.Text_Translucence}>drag_indicator</Icon>
            </ProjectItem>
          ))}
        </ProjectList>
      </MainCard>
    </ProjectListWrapper>
  );
};

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
`;

const CardTitle = styled.div`
  ${Text.Body.S}
  color: ${Theme.Text.Text_10};
`;

const ExpandButton = styled.div`
  display: flex;
  padding: ${Gap.Gap_4};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  border-radius: ${Radius.radius_6};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Surface.Surface_30};
  cursor: pointer;
`;

const ProjectList = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
`;

const ProjectItem = styled.div`
  display: flex;
  padding: ${Gap.Gap_8} ${Gap.Gap_16};
  align-items: center;
  gap: ${Gap.Gap_36};
  align-self: stretch;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const ProjectNameSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${Gap.Gap_6};
  flex-wrap: wrap;
`;

const ProjectName = styled.div<{ isLink: boolean }>`
  ${Text.Title.L}
  color: ${props => props.isLink ? Theme.Functional.Primary : Theme.Text.Text_20};
  text-decoration: ${props => props.isLink ? 'underline' : 'none'};
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
  cursor: ${props => props.isLink ? 'pointer' : 'default'};
`;

const Badge = styled.div<{ isPublic: boolean }>`
  display: flex;
  padding: ${Gap.Gap_4};
  align-items: center;
  justify-content: center;
  gap: ${Gap.Gap_4};
  border-radius: ${Radius.radius_6};
  border: 1px solid ${Theme.Stroke.Stroke_10};
  background: ${Theme.Functional.Primary_Translucence};
`;

const BadgeText = styled.div`
  ${Text.Label.S}
  color: ${Theme.Functional.Primary};
`;

const ProjectDescription = styled.div`
  ${Text.Label.S}
  color: ${Theme.Text.Text_Translucence};
`;

const ProjectListWrapper = styled.div`
  flex: 1 1 38%;
  min-width: 28rem;
  height: 18.625rem;
`;

export default ProjectListCard;

