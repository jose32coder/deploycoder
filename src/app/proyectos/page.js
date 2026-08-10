import AllProjectsClient from "@/components/projects/AllProjectPage";
import { projectsData } from "@/data/projectData";

export const metadata = {
  title: "Proyectos | Portafolio",
  description: "Explora todos los proyectos desarrollados.",
};

export default function AllProjectsPage() {
  return <AllProjectsClient projects={projectsData} />;
}
