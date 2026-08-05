/**
 * About Section: Strong asymmetric layout
 * Section number anchors composition — left margin, overlapping
 * Polished copy from v2 with stronger narrative voice
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function About() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section number as compositional anchor — large, left-aligned, overlapping */}
        <span className="absolute top-0 left-[-2vw] text-[clamp(120px,20vw,260px)] font-serif font-bold text-foreground/[0.04] select-none leading-none z-[1]">
          02
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
              About
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Title + Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5"
            >
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-6">
                Grounded in real
                <br />
                environments<span className="text-accent">.</span>
              </h2>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-sm relative mt-8">
                <img
                  src="/manus-storage/about-real_5beb7af6.jpg"
                  alt="Network Infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                {/* Amber corner accent */}
                <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-accent" />
                <div className="absolute bottom-0 left-0 w-[2px] h-12 bg-accent" />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <div className="space-y-5">
                <p className="text-base md:text-lg leading-[1.7] text-foreground/85">
                  I'm an IT support professional who's spent the last few years inside
                  real organisations — a law firm, a public water utility, a government
                  ministry — managing networks, fixing hardware, setting up software,
                  and keeping endpoints safe.
                </p>
                <p className="text-base md:text-lg leading-[1.7] text-foreground/85">
                  I follow the rules for protecting data because I've seen what happens
                  when systems don't. Whether it's a LAN that's gone down, a fleet of
                  laptops that needs imaging, or a WordPress site that needs building,
                  I bring the same habit: diagnose properly, fix it cleanly, write it
                  down so the next person doesn't have to guess.
                </p>
                <p className="text-base md:text-lg leading-[1.7] text-foreground/85">
                  I believe in building infrastructure that just works — reliable,
                  secure, and invisible when it needs to be.
                </p>
              </div>

              {/* Stats row with amber accents */}
              <div className="flex gap-10 mt-12 pt-8 border-t border-border/40">
                {[
                  { number: "5", label: "Organisations supported" },
                  { number: "3", label: "OS platforms daily" },
                  { number: "4+", label: "Years experience" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.08,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <span className="font-serif text-3xl md:text-4xl text-accent block leading-none">
                      {stat.number}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-2 block">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
