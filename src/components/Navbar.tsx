import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme !== "light";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "border-border shadow-lg shadow-background/50" : "border-transparent"
      }`}
      style={{ backgroundColor: `hsl(var(--navbar-bg) / var(--nav-opacity))` } as any}
    >
      <motion.div style={{ "--nav-opacity": bgOpacity } as any}>
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="#home" className="font-display text-xl font-bold tracking-tight text-foreground group">
            Ashmika<span className="text-accent group-hover:animate-pulse">.</span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <a
                  href={link.href}
                  className="relative font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/70 text-foreground hover:text-accent hover:border-accent/40 transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/70 text-foreground"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-foreground"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <ul className="flex flex-col gap-1 p-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-body text-base text-foreground py-2 hover:text-accent transition-colors hover:pl-2 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
