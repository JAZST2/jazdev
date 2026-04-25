import Image from "next/image";
import { SITE } from "@/core/constants/site";
import { Button } from "@/components/ui/button";
import justineImage from "../../../../public/justine.jpeg";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[100dvh] items-center px-6 pb-16 pt-28">
      <div className="pointer-events-none absolute right-[-20%] top-[15%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-md">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-neutral-900">
            <Image
              src={justineImage}
              alt="Developer portrait"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            {SITE.availability}
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Building
            <span className="block text-neutral-400">Seamless</span>
            Digital Experiences.
          </h1>
          <p className="mt-6 max-w-xl text-base text-neutral-300 sm:text-lg">
            Multi-platform developer specializing in Web, iOS, React Native, watchOS, and Apple CarPlay.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#works">
              View Work
            </Button>
            <Button as="a" href="https://github.com/JAZST2" target="_blank" variant="ghost">
              GitHub
            </Button>
            <Button as="a" href="https://www.linkedin.com/in/mark-justine-evasco/" target="_blank" variant="ghost">
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
