import { personal } from "@/src/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-body text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Kelechi Michael Uba
        </p>

        <div className="flex items-center gap-5">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-[10px] text-text-muted/50">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
