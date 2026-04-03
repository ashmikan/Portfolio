import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-portrait5.jpeg";

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const textReveal = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: easeOut },
  }),
};

const floatingVariant = {
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const chipReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: 0.9 + i * 0.12, ease: easeOut },
  }),
};

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.22),transparent_44%),radial-gradient(circle_at_82%_68%,hsl(var(--accent)/0.16),transparent_38%),linear-gradient(to_bottom,hsl(var(--hero-gradient-top)),hsl(var(--background)))]" />
    <div className="absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black_34%,transparent_76%)] bg-[linear-gradient(to_right,hsl(var(--foreground)/0.07)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <div className="overflow-hidden">
        <motion.p
          custom={0}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Full-Stack Developer & Designer
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-foreground mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60">
              Ashmika
            </span>
            <br />
            <span className="text-accent">Nathali</span>
          </motion.h1>
        </div>
        <motion.p
          custom={2}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="font-body text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
        >
          Creating efficient and elegant web solutions through clean code and intuitive design. Let's build something amazing together.
        </motion.p>
        <motion.div
          custom={3}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-body font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(12_76%_61%/0.3)] border border-transparent hover:border-foreground/30"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-body font-medium text-sm hover:bg-secondary hover:border-accent/30 transition-all duration-300 hover:border-blue-500 border-width-10"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex justify-center"
      >
        <motion.div
          variants={floatingVariant}
          animate="animate"
          className="relative w-72 h-72 md:w-96 md:h-96"
        >
          <div className="absolute -inset-5 rounded-[40%] bg-gradient-to-tr from-accent/35 via-accent/10 to-foreground/10 blur-2xl animate-pulse pointer-events-none" />
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute inset-0 rounded-full border border-foreground/15" />
          <img
            src={heroImg}
            alt="Ashmika Nathali"
            className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-[0_30px_70px_hsl(230_35%_6%/0.7)]"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_12px_hsl(12_76%_61%/0.6)]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors"
    >
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <ArrowDown size={24} />
      </motion.div>
    </motion.a>
  </section>
);

export default HeroSection;
