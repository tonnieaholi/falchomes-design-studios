import { motion } from "framer-motion";
import { Paintbrush, Home, Sofa, Ruler } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Bespoke design concepts tailored to your lifestyle, from mood boards to final styling.",
  },
  {
    icon: Home,
    title: "Renovation",
    description: "Complete home renovations with expert project management and premium finishes.",
  },
  {
    icon: Sofa,
    title: "Furniture Curation",
    description: "Hand-picked furnishings and custom pieces that elevate every room.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Optimized layouts that maximize flow, functionality, and aesthetic harmony.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 border border-border hover:border-accent/40 transition-colors duration-300 group"
            >
              <service.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
