import { useState } from "react";
import * as _ from "./styled";
import { Icon } from "../../components/Icons/Icon";
import { Theme } from "../../Theme/theme";

interface Project {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  language: string;
  license?: string;
  updatedAt: string;
  isCompleted: boolean;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "bitrend/bitrend-client",
    description: "Description for here",
    isPublic: true,
    language: "TS",
    license: "MIT",
    updatedAt: "Update 4 days ago",
    isCompleted: true,
  },
  {
    id: "2",
    name: "Statio",
    description: "Description for here",
    isPublic: true,
    language: "TS",
    license: "MIT",
    updatedAt: "Update 4 days ago",
    isCompleted: true,
  },
  {
    id: "3",
    name: "Statio-docs",
    description: "Description for here",
    isPublic: false,
    language: "TS",
    license: "MIT",
    updatedAt: "Update 4 days ago",
    isCompleted: true,
  },
  {
    id: "4",
    name: "LAYERED",
    description: "Description for here",
    isPublic: true,
    language: "TS",
    updatedAt: "Update 4 days ago",
    isCompleted: false,
  },
  {
    id: "5",
    name: "React-Query",
    description: "Description for here",
    isPublic: true,
    language: "TS",
    license: "MIT",
    updatedAt: "Update 4 days ago",
    isCompleted: false,
  },
];

export function Project() {
  const [projects] = useState<Project[]>(mockProjects);
  const completedCount = projects.filter((p) => p.isCompleted).length;

  return (
    <_.Container>
      <_.Header>
        <_.HeaderLeft>
          <_.Title>Project</_.Title>
          <_.Subtitle>{`{userName}님의 프로젝트 리스트 입니다!`}</_.Subtitle>
        </_.HeaderLeft>
        <_.Counter>
          <_.CounterPrimary>{completedCount}</_.CounterPrimary>
          <_.CounterSecondary> / {projects.length}</_.CounterSecondary>
        </_.Counter>
      </_.Header>

      <_.ProjectList>
        {projects.map((project) => (
          <_.ProjectCard key={project.id} isCompleted={project.isCompleted}>
            <_.ProjectCardContent>
              <_.CheckboxWrapper>
                <Icon
                  size="L"
                  color={
                    project.isCompleted
                      ? Theme.Functional.Primary
                      : Theme.Text.Text_30
                  }
                  fill={false}
                >
                  {project.isCompleted
                    ? "check_box"
                    : "check_box_outline_blank"}
                </Icon>
              </_.CheckboxWrapper>

              <_.ProjectInfo>
                <_.ProjectHeader>
                  <_.ProjectNameRow>
                    <_.ProjectName>{project.name}</_.ProjectName>
                    <_.Badge isPublic={project.isPublic}>
                      <Icon size="XXS" color={Theme.Functional.Primary} fill={false}>
                        {project.isPublic ? "public" : "security"}
                      </Icon>
                      <_.BadgeText>
                        {project.isPublic ? "Public" : "Private"}
                      </_.BadgeText>
                    </_.Badge>
                  </_.ProjectNameRow>
                  <_.ProjectDescription>
                    {project.description}
                  </_.ProjectDescription>
                </_.ProjectHeader>

                <_.Tags>
                  <_.Tag>{project.language}</_.Tag>
                  {project.license && <_.Tag>{project.license}</_.Tag>}
                  <_.Tag>{project.updatedAt}</_.Tag>
                </_.Tags>
              </_.ProjectInfo>
            </_.ProjectCardContent>

            <_.DragHandle>
              <Icon
                size="L"
                color={Theme.Text.Text_Translucence}
                fill={false}
              >
                drag_indicator
              </Icon>
            </_.DragHandle>
          </_.ProjectCard>
        ))}
      </_.ProjectList>
    </_.Container>
  );
}

