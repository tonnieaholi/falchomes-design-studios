import { motion } from "framer-motion";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import bathroomImg from "@/assets/portfolio-bathroom.jpg";
import livingImg from "@/assets/portfolio-living.jpg";

const projects = [
  { image: livingImg, title: "Modern Living Room", category: "Residential" },
  { image: kitchenImg, title: "Gourmet Kitchen", category: "Renovation" },
  { image: bedroomImg, title: "Serene Bedroom Suite", category: "Residential" },
  { image: bathroomImg, title: "Spa Bathroom", category: "Luxury" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-4">
            Our Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-warm-cream">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
