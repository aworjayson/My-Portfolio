/**
 * Navigation: Fixed top bar with scroll-aware styling
 * Kinetic Minimalism design — transparent on hero, opaque on scroll
 * Includes "Available for hire" status chip and CV download link
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useMobile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-4">
        {/* Logo / Brand Mark */}
        <a
          href="#top"
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <img
            src="/manus-storage/jayson-logo_06124b83.png"
            alt="JA"
            className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-serif text-lg tracking-tight hidden sm:block">
            Jayson Awori
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground/85 hover:text-foreground transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Status Chip */}
          <span className="inline-flex items-center gap-2 font-mono text-xs text-[#3B7A57] bg-[#E7EFE9] border border-[#CFE3D6] px-3 py-1.5 rounded-full whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B7A57] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B7A57]" />
            </span>
            Available for hire
          </span>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-sm hover:bg-foreground/90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {/* Status chip mobile */}
              <span className="inline-flex items-center gap-2 font-mono text-xs text-[#3B7A57] bg-[#E7EFE9] border border-[#CFE3D6] px-3 py-1.5 rounded-full w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B7A57] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B7A57]" />
                </span>
                Available for hire
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground/85 hover:text-foreground py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-sm text-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
