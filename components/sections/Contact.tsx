"use client";

import { personal } from "@/src/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, MapPin, CheckCircle, Copy } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.enum([
    "Recruitment inquiry",
    "Project collaboration",
    "General",
  ] as const, { message: "Please select a subject" }),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email directly.");
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-border bg-bg-secondary/30 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader label="// Contact" title="Get in Touch" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Let&apos;s work together.
            </h3>
            <p className="font-body text-text-secondary leading-relaxed">
              Whether you&apos;re hiring for a data engineering or backend role,
              or have a project that could benefit from automation expertise —
              I&apos;d be glad to hear from you.
            </p>

            <div className="space-y-4 pt-4">
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 text-left group"
              >
                <Mail size={18} className="shrink-0 text-accent" />
                <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  {personal.email}
                </span>
                {copied ? (
                  <CheckCircle size={14} className="text-green-400" />
                ) : (
                  <Copy size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Linkedin size={18} className="shrink-0 text-accent" />
                <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  LinkedIn Profile
                </span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-accent" />
                <span className="font-body text-sm text-text-secondary">
                  {personal.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-bg-card p-12 text-center">
                <CheckCircle size={48} className="text-green-400" />
                <h4 className="font-display text-xl font-bold text-text-primary">
                  Message sent!
                </h4>
                <p className="font-body text-sm text-text-secondary">
                  Thank you for reaching out. I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-lg border border-border bg-bg-card p-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    className="w-full rounded-md border border-border bg-bg-primary px-4 py-2.5 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent placeholder:text-text-muted"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className="w-full rounded-md border border-border bg-bg-primary px-4 py-2.5 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent placeholder:text-text-muted"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-text-muted"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    {...register("subject")}
                    className="w-full rounded-md border border-border bg-bg-primary px-4 py-2.5 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="Recruitment inquiry">Recruitment inquiry</option>
                    <option value="Project collaboration">Project collaboration</option>
                    <option value="General">General</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="w-full resize-none rounded-md border border-border bg-bg-primary px-4 py-2.5 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent placeholder:text-text-muted"
                    placeholder="Tell me about the role or project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-sm text-red-400">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-accent px-6 py-3 font-body text-sm font-medium text-bg-primary transition-colors hover:bg-accent-dim disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
