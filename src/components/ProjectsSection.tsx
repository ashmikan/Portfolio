import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

const projects = [
  {
    title: "SkyLumin - Weather App",
    desc: "A clean and responsive weather application built with React and Vite that lets users quickly check real-time weather conditions for any city. It provides essential details like temperature, humidity, wind speed, and dynamic weather visuals/icons.",
    tags: ["React", "Vite", "JavaScript", "Weather API"],
    image: project1,
  },
  {
    title: "Planova - Event management Web Platform",
    desc: "A web platform for planning and managing events like weddings, engagements, and birthday parties.",
    tags: ["React", "Express.js", "Node.js", "MongoDB", "Figma"],
    image: project2,
  },
  {
    title: "ScanMe:  AI-Based Body Posture Analysis",
    desc: "An AI-powered web application designed to analyze full-body images and detect posture abnormalities in real time.",
    tags: ["Laravel", "Python", "PHP", "OpenCV", "MediaPipe Pose", "MySQL"],
    image: project3,
  },
  {
    title: "Lumiera - Modern Social Media Platform",
    desc: "A modern social media platform with authentication, posts, likes, comments, follows, notifications, and real-time chat.",
    tags: ["React", "Node.js", "Express.js", "MySQL2", "Socket.io", "JWT", "Multer"],
    image: project4,
  },
  {
    title: "CashFlow - Personal Finance Tracker",
    desc: "A full-stack personal finance app that helps users track income and expenses, manage transactions securely, and view clear dashboard insights such as summaries, recent activity, monthly reports, and charts for better money decisions.",
    tags: ["React", "Node.js", "Express.js", "MySQL"],
    image: project5,
  },
  {
    title: "2048 Pygame",
    desc: "A classic 2048 puzzle game built with Pygame where you slide and merge numbered tiles, track your score, and try to fill the board strategically before you lose.",
    tags: ["Python", "Pygame"],
    image: project6,
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
