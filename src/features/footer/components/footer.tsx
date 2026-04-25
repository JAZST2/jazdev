import { SITE } from "@/core/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-sm text-neutral-400 md:flex-row">
        <p>{SITE.copyright}</p>
        <p>I always do it professionally :D</p>
      </div>
    </footer>
  );
}
