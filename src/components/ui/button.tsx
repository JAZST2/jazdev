import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/core/utils/cn";

type ButtonOwnProps<T extends ElementType> = {
  as?: T;
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

export function Button<T extends ElementType = "button">({
  as,
  className,
  variant = "primary",
  ...props
}: ButtonProps<T>) {
  const Component = as ?? "button";

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors",
        variant === "primary" && "bg-orange-500 text-white hover:bg-orange-600",
        variant === "secondary" && "bg-white text-neutral-950 hover:bg-neutral-100",
        variant === "ghost" && "bg-neutral-800 text-neutral-200 hover:bg-neutral-700",
        className,
      )}
      {...props}
    />
  );
}
