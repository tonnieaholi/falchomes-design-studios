import { motion } from "framer-motion";
import { Paintbrush, Home, Ruler, Eye, HardHat, PaintBucket, LayoutGrid, DoorOpen, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Bespoke design concepts tailored to your lifestyle, from mood boards to final styling.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Optimized layouts that maximize flow, functionality, and aesthetic harmony.",
  },
  {
    icon: Eye,
    title: "3D Visualization",
    description: "Photorealistic 3D renders so you can see your space before construction begins.",
  },
  {
    icon: HardHat,
    title: "Site Supervision",
    description: "Expert on-site oversight ensuring quality standards and timely project delivery.",
  },
  {
    icon: PaintBucket,
    title: "Painting & Finishes",
    description: "Premium painting and finishing services that add character and elegance to every surface.",
  },
  {
    icon: LayoutGrid,
    title: "Gypsum & Ceilings",
    description: "Custom gypsum ceiling designs that transform ordinary rooms into stunning spaces.",
  },
  {
    icon: DoorOpen,
    title: "Wardrobes & Cabinets",
    description: "Tailor-made storage solutions combining beauty with practical functionality.",
  },
  {
    icon: ClipboardCheck,
    title: "Consultancy",
    description: "Professional design consultancy and site supervision for residential and commercial projects.",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
