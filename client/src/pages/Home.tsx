/**
 * Design: Kinetic Minimalism
 * - Swiss typographic style with oversized headings
 * - Asymmetric layouts with intentional negative space
 * - Amber accent (#F59E0B) for CTAs and highlights
 * - Scroll-triggered reveals with staggered timing
 * - Polished content from second portfolio iteration
 */

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
