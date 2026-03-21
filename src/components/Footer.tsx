import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ashmikan" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ashmika-nathali/" },
];

const Footer = () => (
  <footer className="py-10 border-t border-border relative">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-body text-sm text-muted-foreground"
      >
        © 2026 Ashmika Nathali. All rights reserved.
      </motion.p>
      <div className="flex gap-5">
        {socials.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -3, scale: 1.15 }}
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label={item.label}
          >
            <item.icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
