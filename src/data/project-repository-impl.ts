import { projectsData } from "@/data/projects";
import type { Project } from "@/domain/entities/project";
import type { ProjectRepository } from "@/domain/interfaces/project-repository";

export class InMemoryProjectRepository implements ProjectRepository {
  async getAll(): Promise<Project[]> {
    return projectsData;
  }

  async getById(id: string): Promise<Project | undefined> {
    return projectsData.find((project) => project.id === id);
  }
}
