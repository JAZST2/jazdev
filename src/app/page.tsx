import { InMemoryProjectRepository } from "@/data/project-repository-impl";
import { skillsData } from "@/data/skills";
import { ProjectService } from "@/domain/services/project-service";
import { AboutSection } from "@/features/about/components/about-section";
import { ContactSection } from "@/features/contact/components/contact-section";
import { Footer } from "@/features/footer/components/footer";
import { HeroSection } from "@/features/hero/components/hero-section";
import { Navbar } from "@/features/navigation/components/navbar";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { SkillsSection } from "@/features/skills/components/skills-section";

export default async function HomePage() {
  const projectService = new ProjectService(new InMemoryProjectRepository());
  const projects = await projectService.getProjects();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skillsData} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
