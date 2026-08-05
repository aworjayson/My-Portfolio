/**
 * Skills Section: Editorial technical dossier
 * Structured inventory with rules, mono labels, columns
 * NOT generic cards — technical dossier feel with hairline borders
 * Kinetic Minimalism: amber used only for category markers and bullet dots
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    category: "Networking & Infrastructure",
    icon: "LAN",
    skills: [
      "LAN / WAN administration",
      "Network configuration & install",
      "CCNA certified",
      "Domain, email & DNS setup",
      "Windows · Linux · macOS",
    ],
  },
  {
    category: "Cybersecurity",
    icon: "SEC",
    skills: [
      "Endpoint security (Kaspersky)",
      "Threat identification",
      "Access control & network security",
      "Data protection compliance",
    ],
  },
  {
    category: "Software & Tools",
    icon: "DEV",
    skills: [
      "Microsoft Office Suite",
      "WordPress & web development",
      "Graphics & logo design",
      "Patch management & upgrades",
      "Helpdesk & technical documentation",
    ],
  },
];

export function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section number as compositional anchor */}
        <span className="absolute top-0 left-[5vw] text-[clamp(120px,20vw,260px)] font-serif font-bold text-foreground/[0.04] select-none leading-none z-[1]">
          04
        </span>

        <div className="relative z-[2]">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="w-8 h-[1.5px] bg-accent" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Skills
            </span>
          </motion.div>

          {/* Section title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="font-serif text-4xl md:text-5xl leading-[1.1] mb-16"
          >
            What I Work With<span className="text-accent">.</span>
          </motion.h2>

          {/* Decorative tech image strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="mb-12 relative overflow-hidden rounded-sm"
          >
            <img
              src="/manus-storage/skills-dev_c055a267.png"
              alt="Network infrastructure detail"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-amber-400/80">tools of the trade</span>
            </div>
          </motion.div>

          {/* Skills Grid — editorial dossier table */}
          <div className="border-t border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={`${i < 2 ? "lg:border-r" : ""} border-b lg:border-b-0 border-border/30 p-8 lg:p-10`}
                >
                  {/* Category Header — mono tag + serif title */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent border border-accent/25 px-2 py-0.5 rounded-sm">
                      {cat.icon}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill List — clean rows with amber bullet dots */}
                  <ul className="space-y-0">
                    {cat.skills.map((skill, j) => (
                      <li
                        key={skill}
                        className={`flex items-start gap-3 py-3 ${j > 0 ? "border-t border-border/20" : ""}`}
                      >
                        <span className="w-[6px] h-[6px] rounded-full bg-accent/50 mt-[5px] flex-shrink-0" />
                        <span className="text-[13px] text-foreground/85 font-medium leading-snug">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
