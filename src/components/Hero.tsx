import { motion } from "framer-motion";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious modern interior design by FlacHomes"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-gold mb-6">
            Interior Design & Construction
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-warm-cream mb-6">
            Crafting Spaces That Inspire
          </h1>
          <p className="text-lg text-warm-cream/80 font-light max-w-lg mb-10 leading-relaxed">
            We transform ordinary rooms into extraordinary living experiences. Premium interior design, meticulous craftsmanship, timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 text-sm font-semibold tracking-wider uppercase bg-accent text-accent-foreground hover:opacity-90 transition-opacity text-center"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-sm font-semibold tracking-wider uppercase border border-warm-cream/40 text-warm-cream hover:bg-warm-cream/10 transition-colors text-center"
            >
              Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
