import type { InputHTMLAttributes } from "react";
import { cn } from "@/core/utils/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange-500",
        className,
      )}
      {...props}
    />
  );
}
