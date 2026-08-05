/**
 * Certifications Section: Editorial technical dossier layout
 * Two-column editorial table with rules, mono labels
 * Kinetic Minimalism: amber used only for markers and key accents
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const education = [
  {
    name: "ICT Diploma — Distinction",
    org: "Zetech University, Nairobi",
  },
  {
    name: "Kenya Certificate of Secondary Education",
    org: "Khasoko High School",
  },
];

const certifications = [
  {
    name: "Cisco Certified Network Associate",
    status: "completed" as const,
  },
  {
    name: "Data Protection Certificate",
    org: "CIPIT, Strathmore University",
    status: "completed" as const,
  },
  {
    name: "Basics of Cybersecurity",
    org: "Cisco / CompTIA",
    status: "in-progress" as const,
  },
];

export function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="credentials"
      ref={ref}
      className="relative py-28 md:py-40 px-6 md:px-10 bg-foreground/[0.02]"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section number as compositional anchor */}
        <span className="absolute top-0 right-[5vw] text-[clamp(120px,20vw,260px)] font-serif font-bold text-foreground/[0.04] select-none leading-none z-[1]">
          05
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
              Credentials
            </span>
          </motion.div>

          {/* Section title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="font-serif text-4xl md:text-5xl leading-[1.1] mb-16"
          >
            Education &amp; Certifications<span className="text-accent">.</span>
          </motion.h2>

          {/* Two-column editorial dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-border/50 mb-16">
            {/* Education Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="border-b lg:border-b-0 lg:border-r border-border/30"
            >
              {/* Column header */}
              <div className="px-8 lg:px-10 py-6 border-b border-border/30">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent border border-accent/25 px-2 py-0.5 rounded-sm">
                  EDU
                </span>
                <span className="font-display text-sm font-semibold ml-3 text-foreground">
                  Education
                </span>
              </div>

              {/* Education entries */}
              {education.map((edu, i) => (
                <div
                  key={edu.name}
                  className={`px-8 lg:px-10 py-5 ${i > 0 ? "border-t border-border/20" : ""}`}
                >
                  <p className="text-[14px] text-foreground font-medium mb-1">
                    {edu.name}
                  </p>
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {edu.org}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Certifications Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Column header */}
              <div className="px-8 lg:px-10 py-6 border-b border-border/30">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent border border-accent/25 px-2 py-0.5 rounded-sm">
                  CERT
                </span>
                <span className="font-display text-sm font-semibold ml-3 text-foreground">
                  Certifications
                </span>
              </div>

              {/* Certification entries */}
              {certifications.map((cert, i) => (
                <div
                  key={cert.name}
                  className={`px-8 lg:px-10 py-5 ${i > 0 ? "border-t border-border/20" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[14px] text-foreground font-medium">
                      {cert.name}
                    </span>
                    {cert.status === "in-progress" && (
                      <span className="font-mono text-[10px] text-accent bg-accent/8 px-2 py-0.5 rounded-sm border border-accent/15">
                        in progress
                      </span>
                    )}
                  </div>
                  {cert.org && (
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {cert.org}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Volunteer + References strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="border-t border-border/40 pt-8"
          >
            <div className="flex items-start gap-8 flex-wrap">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-0.5">
                Also
              </span>
              <p className="text-sm text-foreground/80 font-medium max-w-xl leading-relaxed">
                <strong className="text-foreground">Environmental Volunteer</strong> — Mazingira Movement, ongoing.
                Community waste collection, responsible disposal and flood-disaster
                management initiatives across Nairobi.
              </p>
            </div>
            <p className="font-mono text-[11px] text-muted-foreground mt-6">
              Professional references available on request.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
