export type ProjectType = "web" | "mobile";
export type FilterType = "all" | "web" | "mobile";
export type ProjectStatus = "live" | "openSource" | "inDev" | "done";

export interface Project {
  id: string;
  type: ProjectType;
  nameKey: string;
  descriptionKey: string;
  image: string;
  imageDark?: string;
  tech: string[];
  url?: string;
  link?: string;
  github?: string;
  status?: ProjectStatus;
  featured?: boolean;
}
