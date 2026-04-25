import type { Project } from "@/domain/entities/project";

export interface ProjectRepository {
  getAll(): Promise<Project[]>;
  getById(id: string): Promise<Project | undefined>;
}
