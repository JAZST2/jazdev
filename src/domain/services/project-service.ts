import type { Project } from "@/domain/entities/project";
import type { ProjectRepository } from "@/domain/interfaces/project-repository";

export class ProjectService {
  constructor(private readonly repository: ProjectRepository) {}

  async getProjects(): Promise<Project[]> {
    return this.repository.getAll();
  }
}
