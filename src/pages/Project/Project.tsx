import { useState, useEffect } from "react";
import * as _ from "./styled";
import { Icon } from "../../components/Icons/Icon";
import { Theme } from "../../Theme/theme";
import { getEvaluationProjects, reorderProjects, addEvaluationProject, removeEvaluationProject } from "../../api/projectsApi";
import { auth } from "../../utils/auth";
import type { EvaluationProject, ReorderProjectsRequest } from "../../types/projects";
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
import { evaluationProjectToProject } from "../../types/projects";

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

interface SortableProjectCardProps {
  project: Project;
  onToggleComplete: (id: string) => void;
}

function SortableProjectCard({ project, onToggleComplete }: SortableProjectCardProps) {
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
                : Theme.Text.Text_30
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

      <_.DragHandle {...attributes} {...listeners}>
        <Icon
          size="L"
          color={Theme.Text.Text_Translucence}
          fill={false}
        >
          drag_indicator
        </Icon>
      </_.DragHandle>
    </_.ProjectCard>
  );
}

export function Project() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [evaluationProjects, setEvaluationProjects] = useState<EvaluationProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const completedCount = projects.filter((p) => p.isCompleted).length;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = auth.getToken();
        if (!token) {
          setError("로그인이 필요합니다.");
          return;
        }

        const data = await getEvaluationProjects(token);

        // API 응답 구조 확인 및 안전한 처리
        const evaluationProjects = data?.evaluationProjects || [];
        setEvaluationProjects(evaluationProjects);

        // Convert evaluation projects to the project format for UI compatibility
        const convertedProjects = evaluationProjects.map(evaluationProjectToProject);
        setProjects(convertedProjects);
      } catch (err: unknown) {
        console.error("Failed to fetch projects:", err);
        setError((err as { error?: { message?: string } })?.error?.message || "프로젝트를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });

      // Update the evaluation projects order as well
      const newEvalProjects = [...evaluationProjects];
      const evalOldIndex = evaluationProjects.findIndex((item) => item.id === active.id);
      const evalNewIndex = evaluationProjects.findIndex((item) => item.id === over.id);
      const reorderedEvalProjects = arrayMove(newEvalProjects, evalOldIndex, evalNewIndex);
      setEvaluationProjects(reorderedEvalProjects);

      // Send reorder request to API
      try {
        const token = auth.getToken();
        if (token) {
          const reorderData: ReorderProjectsRequest = {
            projectOrders: reorderedEvalProjects.map((project, index) => ({
              evaluationProjectId: project.id,
              priority: index + 1,
            })),
          };
          await reorderProjects(token, reorderData);
        }
      } catch (err) {
        console.error("Failed to reorder projects:", err);
        // Could add a toast notification here
      }
    }
  };

  const handleToggleComplete = async (id: string) => {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const token = auth.getToken();
    if (!token) return;

    // 3개 제한 체크: 현재 선택된 개수가 3개이고, 새로 선택하려는 경우
    const currentSelectedCount = projects.filter(p => p.isCompleted).length;
    if (!project.isCompleted && currentSelectedCount >= 3) {
      alert("최대 3개의 프로젝트까지만 선택할 수 있습니다.");
      return;
    }

    try {
      if (project.isCompleted) {
        // 선택 해제 - DELETE API 호출
        await removeEvaluationProject(id, token);
      } else {
        // 선택 - POST API 호출
        const evalProject = evaluationProjects.find(ep => ep.id === id);
        if (evalProject) {
          await addEvaluationProject(token, {
            githubRepoId: evalProject.githubRepo.id,
            githubUrl: evalProject.githubRepo.githubUrl,
            priority: currentSelectedCount + 1
          });
        }
      }

      // API 호출 성공 시 UI 업데이트
      setProjects((items) =>
        items.map((item) =>
          item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        )
      );
    } catch (err) {
      console.error("Failed to toggle project:", err);
      alert("프로젝트 선택/해제에 실패했습니다.");
    }
  };

  if (loading) {
    return (
      <_.Container>
        <_.Header>
          <_.HeaderLeft>
            <_.Title>Project</_.Title>
            <_.Subtitle>프로젝트를 불러오는 중...</_.Subtitle>
          </_.HeaderLeft>
        </_.Header>
      </_.Container>
    );
  }

  if (error) {
    return (
      <_.Container>
        <_.Header>
          <_.HeaderLeft>
            <_.Title>Project</_.Title>
            <_.Subtitle>{error}</_.Subtitle>
          </_.HeaderLeft>
        </_.Header>
      </_.Container>
    );
  }

  return (
    <_.Container>
      <_.Header>
        <_.HeaderLeft>
          <_.Title>Project</_.Title>
          <_.Subtitle>프로젝트 리스트 입니다!</_.Subtitle>
        </_.HeaderLeft>
        <_.Counter>
          <_.CounterPrimary isMaxReached={completedCount >= 3}>{completedCount}</_.CounterPrimary>
          <_.CounterSecondary> / {projects.length}</_.CounterSecondary>
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

