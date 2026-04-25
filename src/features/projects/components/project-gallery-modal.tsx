"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "@/domain/entities/project";

interface ProjectGalleryModalProps {
  project: Project | undefined;
  onClose: () => void;
}

export function ProjectGalleryModal({ project, onClose }: ProjectGalleryModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/80 px-0 py-0 backdrop-blur-sm sm:px-4 sm:py-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="mx-auto flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden border border-white/10 bg-neutral-900 sm:h-full sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-neutral-900 p-4 sm:p-6">
          <div>
            <h3 className="text-lg font-semibold text-white sm:text-2xl">{project.title}</h3>
            <p className="text-sm text-neutral-400">{project.category}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Close
          </button>
        </div>
        <div className="overflow-y-auto p-4 pb-8 sm:p-6">
          <p className="mb-6 max-w-3xl text-sm text-neutral-300 sm:text-base">{project.solution}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div key={`${project.id}-${index}`} className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={1200}
                  height={800}
                  className={`h-52 w-full sm:h-72 ${
                    project.platform === "mobile"
                      ? "bg-neutral-950 object-contain p-2"
                      : "object-cover"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
