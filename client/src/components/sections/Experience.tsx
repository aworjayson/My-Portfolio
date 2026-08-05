/**
 * Experience Section: Structured editorial layout
 * Large section number as compositional anchor
 * Roles presented with strong hierarchy and amber accent marks
 * Polished copy from v2 with richer descriptions
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    period: "2025 — Present",
    title: "ICT Intern",
    org: "Ministry of Education, Nairobi",
    highlights: [
      "Operate and maintain computer labs and e-learning devices across ministry offices.",
      "Install software, configure systems, and troubleshoot for teaching staff and students.",
      "Maintain computerised education records; run data entry and generate reports for senior personnel.",
      "Deploy and maintain e-learning and education management systems.",
      "First-level helpdesk — logging faults and escalating to minimise ministry downtime.",
    ],
  },
  {
    period: "July 2023",
    title: "IT Assistant",
    org: "Makhandia & Makhandia Advocates",
    highlights: [
      "Ensured smooth network connectivity; installed and configured Kaspersky antivirus, strengthening the office's cybersecurity posture.",
      "Upgraded workstations to Windows 10 and ran routine maintenance for peak equipment performance.",
      "Managed network connectivity and workstation infrastructure across all departments.",
    ],
  },
  {
    period: "May 2022 — May 2023",
    title: "Technical Field Assistant",
    org: "Nairobi City Water & Sewerage Co.",
    highlights: [
      "Supported infrastructure projects and processed client water connection applications via the Nairobi City Water portal.",
      "Detected and terminated unauthorised network and utility connections — hands-on exposure to access control and security gaps.",
    ],
  },
  {
    period: "Jan 2022 — May 2022",
    title: "IT Attaché",
    org: "Nairobi City Water & Sewerage Co.",
    highlights: [
      "Installed, configured and maintained IT hardware across departments; ran scheduled upgrades and troubleshooting to cut downtime.",
      "Helped administer user accounts and system software to keep daily operations running.",
    ],
  },
  {
    period: "2021 — 2022",
    title: "Marketing Surveyor",
    org: "Eco Safi Company",
    highlights: [
      "Gathered and analysed household survey data in Excel; prepared and presented detailed reports on schedule.",
    ],
  },
];

export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 md:py-40 px-6 md:px-10 bg-foreground/[0.02]"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section number as compositional anchor */}
        <span className="absolute top-0 right-[2vw] text-[clamp(120px,20vw,260px)] font-serif font-bold text-foreground/[0.04] select-none leading-none z-[1]">
          03
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
              Experience
            </span>
          </motion.div>

          {/* Section title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="font-serif text-4xl md:text-5xl leading-[1.1] mb-4"
          >
            Every stop along the way<span className="text-accent">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-muted-foreground mb-8 max-w-lg"
          >
            Five roles, each one a real environment with real systems on the line.
          </motion.p>

          {/* Decorative workspace image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mb-12 relative overflow-hidden rounded-sm"
          >
            <img
              src="/manus-storage/experience-tech_7e1bd648.png"
              alt="IT workspace"
              className="w-full h-40 md:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-amber-400/80">where the work happens</span>
            </div>
          </motion.div>

          {/* Experience List */}
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ExperienceItem
                key={i}
                experience={exp}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
  index,
  inView,
}: {
  experience: (typeof experiences)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.15 + index * 0.06,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group border-t border-border/30 py-8 md:py-10 hover:bg-foreground/[0.01] transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8">
        {/* Period - compact */}
        <div className="md:col-span-2">
          <span className="font-mono text-[11px] text-muted-foreground tracking-wide">
            {experience.period}
          </span>
        </div>

        {/* Amber vertical rule */}
        <div className="hidden md:flex md:col-span-1 items-start">
          <span className="w-[1.5px] h-6 bg-accent/60 group-hover:bg-accent transition-colors duration-300" />
        </div>

        {/* Title & Org */}
        <div className="md:col-span-9">
          <h3 className="font-serif text-xl md:text-2xl mb-1">
            {experience.title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground mb-5 tracking-wide">
            {experience.org}
          </p>
          <ul className="space-y-1.5">
            {experience.highlights.map((h, j) => (
              <li
                key={j}
                className="text-sm text-foreground/80 leading-relaxed flex items-start gap-3"
              >
                <span className="w-[6px] h-[6px] rounded-full bg-accent/40 mt-[7px] flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
