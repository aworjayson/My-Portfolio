/**
 * Footer: Minimal, brand-consistent
 * Monogram + name + essential links
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function Footer() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <footer
      ref={ref}
      className="py-12 px-6 md:px-10 border-t border-border/40"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-3"
        >
          <img
            src="/manus-storage/monogram-logo_636ae388.png"
            alt="JA"
            className="w-5 h-5 opacity-50"
          />
          <div>
            <p className="font-mono text-[11px] text-muted-foreground tracking-wide">
              Jayson Awori &copy; {new Date().getFullYear()}
            </p>
            <p className="font-mono text-[10px] text-muted-foreground/50 mt-0.5">
              Nairobi, Kenya
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="flex gap-8 items-center"
        >
          <a
            href="mailto:aworijayson@gmail.com"
            className="font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
          >
            Email
          </a>
          <a
            href="tel:+254728643095"
            className="font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
          >
            Call
          </a>
          <a
            href="#top"
            className="font-mono text-[11px] text-muted-foreground hover:text-accent transition-colors duration-200 tracking-wide"
          >
            Back to top &uarr;
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
