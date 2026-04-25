 "use client";

import { useState } from "react";
import { SITE } from "@/core/constants/site";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[min(95%,56rem)] -translate-x-1/2 border border-white/10 bg-neutral-900/85 p-2 backdrop-blur md:rounded-full">
      <div className="flex items-center justify-between gap-3 rounded-full">
        <a
          href="#hero"
          onClick={closeMenu}
          className="grid h-10 w-10 place-items-center rounded-full bg-orange-500 font-bold text-white"
        >
          {SITE.initials}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-full px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button
            as="a"
            href="/Mark-Justine-Evasco_Resume_.pdf"
            variant="secondary"
            className="px-4 py-2"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </Button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen ? (
        <div className="mt-2 space-y-1 rounded-2xl border border-white/10 bg-neutral-900 p-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-sm text-neutral-200 transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <Button
            as="a"
            href="/Mark-Justine-Evasco_Resume_.pdf"
            variant="secondary"
            className="mt-1 w-full justify-center"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Download Resume
          </Button>
        </div>
      ) : null}
    </nav>
  );
}
