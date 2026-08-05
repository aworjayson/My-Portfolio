/**
 * Contact Section: Bold CTA with direct contact links + mailto form
 * Section number as compositional anchor
 * Strong brand mark + amber accents
 * Polished from v2 with contact form and richer copy
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [formNote, setFormNote] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setFormNote("Please fill in every field before sending.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:aworijayson@gmail.com?subject=${subject}&body=${body}`;
    setFormNote("Opening your email client…");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section number as compositional anchor */}
        <span className="absolute top-0 left-[2vw] text-[clamp(120px,20vw,260px)] font-serif font-bold text-foreground/[0.04] select-none leading-none z-[1]">
          06
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
              Contact
            </span>
          </motion.div>

          {/* Section title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-4"
          >
            Let's fix something,
            <br />
            or build something new<span className="text-accent">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-muted-foreground mb-6 max-w-lg font-medium text-base"
          >
            Open to IT support roles, network/systems work, and freelance WordPress builds.
          </motion.p>

          {/* Decorative network globe image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mb-12 relative overflow-hidden rounded-sm"
          >
            <img
              src="/manus-storage/contact-human_6187dde7.png"
              alt="Global network connections from Kenya"
              className="w-full h-40 md:h-52 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-amber-400/80">connecting from Nairobi to the world</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="font-mono text-[12px] text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground text-sm focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="font-mono text-[12px] text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground text-sm focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="font-mono text-[12px] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground text-sm focus:border-accent focus:outline-none transition-colors duration-200 resize-y"
                    placeholder="What do you need help with?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium text-sm rounded-sm hover:bg-foreground/90 transition-all duration-200 active:scale-[0.97]"
                >
                  Send Message
                  <Send className="w-3.5 h-3.5" />
                </button>
                {formNote && (
                  <p className="text-xs text-muted-foreground text-center">{formNote}</p>
                )}
                <p className="text-[11px] text-muted-foreground/60 text-center">
                  Opens your email client with this message pre-filled.
                </p>
              </form>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5 lg:col-start-8"
            >
              <div className="border border-border/40 rounded-sm p-6 space-y-5 bg-card">
                {/* Email */}
                <a
                  href="mailto:aworijayson@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-border/40 rounded-sm group-hover:border-accent/40 transition-colors">
                    <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                      Email
                    </span>
                    <span className="text-sm font-medium border-b border-border/40 group-hover:border-accent/40 transition-colors duration-200">
                      aworijayson@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+254728643095"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-border/40 rounded-sm group-hover:border-accent/40 transition-colors">
                    <Phone className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                      Phone
                    </span>
                    <span className="text-sm font-medium border-b border-border/40 group-hover:border-accent/40 transition-colors duration-200">
                      0728 643 095
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-border/40 rounded-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                      Location
                    </span>
                    <span className="text-sm font-medium">
                      Nairobi, Kenya
                    </span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#CFE3D6] rounded-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B7A57] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B7A57]" />
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                      Status
                    </span>
                    <span className="text-sm font-medium text-[#3B7A57]">
                      Available for hire
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
