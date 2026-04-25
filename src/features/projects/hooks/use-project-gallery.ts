"use client";

import { useState } from "react";

export function useProjectGallery() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  return {
    openProjectId,
    open: setOpenProjectId,
    close: () => setOpenProjectId(null),
  };
}
