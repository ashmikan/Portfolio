import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & Design",
    skills: ["Git", "Figma", "VS Code", "Postman"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Expertise</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-card rounded-xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--accent)/0.12)]"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              {cat.title}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--accent) / 0.14)",
                    borderColor: "hsl(var(--accent) / 0.45)",
                    transition: { duration: 0.2 },
                  }}
                  className="font-body text-sm px-4 py-2 rounded-lg bg-secondary text-secondary-foreground border border-border cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
