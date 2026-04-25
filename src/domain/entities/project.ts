export interface Project {
  id: string;
  title: string;
  category: string;
  projectType: "Personal Project" | "Work Project";
  platform: "mobile" | "web";
  summary: string;
  challenge: string;
  solution: string;
  techStack: string[];
  coverImage: string;
  gallery: string[];
}
