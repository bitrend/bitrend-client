import { useState } from "react";
import * as _ from "./styled";
import { Icon } from "../../components/Icons/Icon";
import { Theme } from "../../Theme/theme";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

interface SortableProjectCardProps {
  project: Project;
  onToggleComplete: (id: string) => void;
}

function SortableProjectCard({
  project,
  onToggleComplete,
}: SortableProjectCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <_.ProjectCard
      ref={setNodeRef}
      style={style}
      isCompleted={project.isCompleted}
    >
      <_.ProjectCardContent>
        <_.CheckboxWrapper onClick={() => onToggleComplete(project.id)}>
          <Icon
            size="L"
            color={
              project.isCompleted
                ? Theme.Functional.Primary
                : Theme.Text.Text_Translucence
            }
            fill={false}
          >
            {project.isCompleted ? "check_box" : "check_box_outline_blank"}
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
            <_.ProjectDescription>{project.description}</_.ProjectDescription>
          </_.ProjectHeader>

          <_.Tags>
            <_.Tag>{project.language}</_.Tag>
            {project.license && <_.Tag>{project.license}</_.Tag>}
            <_.Tag>{project.updatedAt}</_.Tag>
          </_.Tags>
        </_.ProjectInfo>
      </_.ProjectCardContent>

      <_.DragHandle {...attributes} {...listeners}>
        <Icon size="L" color={Theme.Text.Text_Translucence} fill={false}>
          drag_indicator
        </Icon>
      </_.DragHandle>
    </_.ProjectCard>
  );
}

export function Project() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const completedCount = projects.filter((p) => p.isCompleted).length;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleToggleComplete = (id: string) => {
    setProjects((items) => {
      const currentItem = items.find((item) => item.id === id);
      if (!currentItem) return items;

      // If trying to check and already at limit, prevent it
      if (!currentItem.isCompleted && completedCount >= 3) {
        return items;
      }

      return items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
    });
  };

  return (
    <_.Container>
      <_.Header>
        <_.HeaderLeft>
          <_.Title>Project</_.Title>
          <_.Subtitle>{`{userName}님의 프로젝트 리스트 입니다!`}</_.Subtitle>
        </_.HeaderLeft>
        <_.Counter>
          <_.CounterPrimary>{completedCount}&nbsp;</_.CounterPrimary>
          <_.CounterSecondary> / 3</_.CounterSecondary>
        </_.Counter>
      </_.Header>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={projects.map((p) => p.id)}
          strategy={verticalListSortingStrategy}
        >
          <_.ProjectList>
            {projects.map((project) => (
              <SortableProjectCard
                key={project.id}
                project={project}
                onToggleComplete={handleToggleComplete}
              />
            ))}
          </_.ProjectList>
        </SortableContext>
      </DndContext>
    </_.Container>
  );
}
