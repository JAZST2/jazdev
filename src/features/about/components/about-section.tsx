import { Card, CardBody, CardHeader } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="border-y border-white/10 bg-neutral-900/40 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Card>
          <CardHeader className="border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">About</h2>
            <p className="mt-2 text-sm text-neutral-400">Currently crafting code.</p>
          </CardHeader>
          <CardBody className="space-y-5 pt-6 text-neutral-300">
            <p>
              <span className="font-semibold text-white">Hey, I&apos;m Jaz.</span> I build high-quality digital products across Web, iOS, React Native, watchOS, and CarPlay—connecting experiences across devices.
            </p>
            <p>
              My work is centered on performance, clarity, and scalability. From mobile apps to full-stack platforms, I prioritize clean code and intuitive user experiences that hold up in real-world use.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['#WebDevelopment', '#iOSDevelopment', '#WatchOS', '#AppleCarPlay'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-neutral-950 px-3 py-1 text-xs font-medium text-orange-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
