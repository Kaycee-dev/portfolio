"use client";

import { useState, useEffect, useCallback } from "react";
import { personal } from "@/src/data/portfolio";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on ESC
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-bg-secondary/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl font-bold text-accent"
            aria-label="Kelechi Uba — Home"
          >
            KU
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "font-body text-sm transition-colors duration-200",
                    activeSection === link.href.slice(1)
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={personal.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 font-body text-sm font-medium text-bg-primary transition-colors hover:bg-accent-dim lg:flex"
          >
            <Download size={14} />
            Download CV
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="relative z-[70] lg:hidden text-text-primary"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer — outside header to avoid containing-block trap from backdrop-blur / transition */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-bg-primary px-6 transition-opacity duration-300 lg:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <button
          type="button"
          onClick={closeMobile}
          aria-label="Close menu"
          className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-secondary/90 text-text-primary backdrop-blur-sm transition-colors hover:text-accent"
        >
          <X size={22} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className={cn(
              "font-display text-2xl font-semibold transition-colors",
              activeSection === link.href.slice(1)
                ? "text-accent"
                : "text-text-primary hover:text-accent"
            )}
          >
            {link.label}
          </a>
        ))}
        <a
          href={personal.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobile}
          className="flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-body text-base font-medium text-bg-primary transition-colors hover:bg-accent-dim"
        >
          <Download size={16} />
          Download CV
        </a>
      </div>
    </>
  );
}
