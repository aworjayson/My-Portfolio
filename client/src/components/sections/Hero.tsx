/**
 * Hero Section: Full viewport with oversized typography
 * Kinetic Minimalism design — section number anchor, serif display, amber accent
 * Polished copy from v2: confident, technical, personal
 */

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(/manus-storage/hero-bg_c0cfac3a.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/85 z-[1]" />

      {/* Large compositional number - left anchored, overlapping content */}
      <span className="absolute top-[8vh] left-[5vw] text-[clamp(140px,22vw,300px)] font-serif font-bold text-foreground/[0.04] select-none z-[2] leading-none">
        01
      </span>

      {/* Brand mark - top right */}
      <div className="absolute top-8 right-10 md:right-16 z-[3]">
        <img
          src="/manus-storage/jayson-logo_06124b83.png"
          alt="JA"
          className="w-10 h-10 md:w-12 md:h-12 opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="w-8 h-[1.5px] bg-accent" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
              IT Professional · Network Engineer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.9] tracking-tight mb-8"
          >
            Jayson
            <br />
            <span className="text-foreground/70">Awori</span>
            <span className="text-accent">.</span>
          </motion.h1>

          {/* Horizontal rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="w-32 h-[1.5px] bg-foreground/20 mb-8 origin-left"
          />

          {/* Tagline — polished from v2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg md:text-xl text-foreground/55 max-w-2xl mb-10 leading-relaxed"
          >
            I keep networks running, endpoints secure, and end users unblocked.
            CCNA-certified, comfortable across Windows, Linux and macOS, with
            hands-on time inside a law firm, a public utility, and a government
            ministry.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium text-sm rounded-sm hover:bg-accent/90 transition-all duration-200 active:scale-[0.97]"
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium text-sm rounded-sm hover:bg-foreground/5 transition-all duration-200 active:scale-[0.97]"
            >
              View Experience
            </a>
          </motion.div>
        </div>

        {/* Status block — from v2 polished */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-24 right-10 md:right-16 hidden md:grid grid-cols-[72px_1fr] gap-x-4 gap-y-2 text-sm border border-border/40 bg-card rounded-sm p-5 max-w-[380px]"
        >
          <dt className="font-mono text-[11px] text-muted-foreground">role</dt>
          <dd className="text-foreground/70 text-[13px]">IT Support / Networking / Cybersecurity</dd>
          <dt className="font-mono text-[11px] text-muted-foreground">based</dt>
          <dd className="text-foreground/70 text-[13px]">Nairobi, Kenya</dd>
          <dt className="font-mono text-[11px] text-muted-foreground">cert</dt>
          <dd className="text-foreground/70 text-[13px]">CCNA · CIPIT Data Protection</dd>
          <dt className="font-mono text-[11px] text-muted-foreground">uptime</dt>
          <dd className="text-foreground/70 text-[13px]">4+ years hands-on field experience</dd>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-foreground/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
