import { motion } from "framer-motion";
import teamImg from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={teamImg}
              alt="FlacHomes Design Studios team reviewing blueprints"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Designing Dreams Since 2010
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              FalcHomes Design Studio is a premier interior design and construction firm led by founder Francis Otieno. We are dedicated to transforming spaces into works of art — with a philosophy rooted in Design, Build, and Transform.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From concept to completion, we handle every detail — ensuring that your space reflects your personality while meeting the highest standards of quality and sustainability.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "200+", label: "Projects" },
                { value: "15+", label: "Years" },
                { value: "50+", label: "Awards" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
