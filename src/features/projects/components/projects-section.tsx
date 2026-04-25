"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/domain/entities/project";
import { Card, CardBody } from "@/components/ui/card";
import { useProjectGallery } from "@/features/projects/hooks/use-project-gallery";
import { ProjectGalleryModal } from "@/features/projects/components/project-gallery-modal";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { openProjectId, open, close } = useProjectGallery();
  const selected = projects.find((project) => project.id === openProjectId);
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollCards(direction: "left" | "right") {
    const node = scrollerRef.current;
    if (!node) return;

    const amount = Math.round(node.clientWidth * 0.8);
    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section id="works" className="px-6 py-24">
      <div className="mx-auto mb-12 flex max-w-6xl items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Selected Work</h2>
          <p className="mt-3 text-neutral-400">Data-driven projects from one centralized source.</p>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => scrollCards("left")}
            aria-label="Scroll projects left"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-neutral-900 text-white transition hover:bg-neutral-800"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollCards("right")}
            aria-label="Scroll projects right"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-neutral-900 text-white transition hover:bg-neutral-800"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mx-auto flex w-full max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {projects.map((project) => (
          <Card key={project.id} className="w-[290px] shrink-0 snap-center overflow-hidden sm:w-[360px]">
            <div className="relative overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                width={1000}
                height={800}
                className={`h-60 w-full ${
                  project.platform === "mobile"
                    ? "bg-neutral-950 object-contain p-2"
                    : "object-cover"
                }`}
              />
              <button
                type="button"
                onClick={() => open(project.id)}
                className="absolute inset-0 grid place-items-center bg-black/45 text-sm font-semibold tracking-wide text-white opacity-100 transition hover:bg-black/60 sm:opacity-0 sm:hover:opacity-100"
              >
                See More
              </button>
            </div>
            <CardBody className="pt-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                  {project.category}
                </span>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    project.projectType === "Personal Project"
                      ? "bg-violet-500/15 text-violet-300"
                      : "bg-sky-500/15 text-sky-300"
                  }`}
                >
                  {project.projectType}
                </span>
                <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-200">
                  {project.platform === "mobile" ? "Mobile" : "Web"}
                </span>
              </div>
              <p className="text-sm text-neutral-400">{project.summary}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <ProjectGalleryModal project={selected} onClose={close} />
    </section>
  );
}
