import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code with modern best practices." },
  { icon: Palette, title: "Design Thinking", desc: "Bridging the gap between aesthetics and functionality." },
  { icon: Zap, title: "Performance", desc: "Optimizing every layer for speed and seamless UX." },
];

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: easeOut },
  }),
};

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    {/* Decorative line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">About Me</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Passionate about building things that matter.
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          I'm a full-stack developer with a strong eye for design. With experience across the MERN stack, I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll find me exploring new technologies or sketching UI concepts.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group bg-card rounded-xl p-8 border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-[0_8px_30px_hsl(12_76%_61%/0.1)] cursor-default"
          >
            <div className="relative inline-block mb-4">
              <item.icon className="text-accent relative z-10" size={28} />
              <div className="absolute inset-0 w-10 h-10 -top-1 -left-1 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
