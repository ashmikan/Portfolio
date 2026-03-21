import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    desc: "A real-time analytics platform built with React, Node.js, and MongoDB. Features live charts, user management, and role-based access.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: project1,
  },
  {
    title: "ShopEase Mobile App",
    desc: "An e-commerce mobile application with cart management, payment integration, and push notifications.",
    tags: ["React Native", "Express", "Stripe", "Firebase"],
    image: project2,
  },
  {
    title: "Brand Identity System",
    desc: "Complete branding and identity design for a creative agency, including logo, stationery, and design guidelines.",
    tags: ["Figma", "Illustrator", "Branding"],
    image: project3,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-card relative">
    {/* Decorative accent */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Portfolio</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Selected Projects
        </h2>
      </motion.div>

      <div className="grid gap-20">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`grid md:grid-cols-2 gap-10 items-center`}
          >
            <div className={i % 2 !== 0 ? "md:order-2" : ""}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-xl relative group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-body font-medium text-accent-foreground bg-accent/90 px-4 py-2 rounded-lg hover:bg-accent transition-colors">
                      <ExternalLink size={14} /> Demo
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground bg-secondary/90 px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className={i % 2 !== 0 ? "md:order-1" : ""}>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block h-0.5 bg-accent mb-4"
              />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, ti) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + ti * 0.08 }}
                    className="text-xs font-body font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
