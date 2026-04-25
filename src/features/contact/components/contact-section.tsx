"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/core/constants/site";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function onChange(field: "name" | "email" | "message", value: string) {
    setFormData((previous) => ({ ...previous, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Unable to send your message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unexpected error occurred while sending.",
      );
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Let&apos;s Connect</h2>
          <p className="mt-4 text-neutral-400">Have a project in mind? Let&apos;s collaborate.</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-8 inline-block rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-sm text-neutral-200"
          >
            {SITE.email}
          </a>
        </div>

        <Card>
          <CardBody className="pt-6">
            <form className="space-y-4" onSubmit={onSubmit}>
              <Input
                placeholder="Enter Your Name"
                aria-label="Name"
                value={formData.name}
                onChange={(event) => onChange("name", event.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Enter Your Email"
                aria-label="Email"
                value={formData.email}
                onChange={(event) => onChange("email", event.target.value)}
                required
              />
              <Textarea
                placeholder="Enter Your Message"
                rows={4}
                aria-label="Message"
                value={formData.message}
                onChange={(event) => onChange("message", event.target.value)}
                required
              />
              <Button type="submit" className="w-full justify-center" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" ? (
                <p className="text-sm text-emerald-400">Message sent successfully. I will reply soon.</p>
              ) : null}
              {status === "error" ? <p className="text-sm text-red-400">{errorMessage}</p> : null}
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
