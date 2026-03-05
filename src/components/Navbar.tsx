import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/falchomes-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground">
          <img src={logo} alt="FalcHomes logo" className="h-12 w-12 object-contain drop-shadow-md" />
          <span className="text-gold-gradient text-2xl sm:text-3xl">FalcHomes</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2.5 text-sm font-semibold tracking-wider uppercase bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
        >
          Get a Quote
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 text-sm font-semibold tracking-wider uppercase bg-accent text-accent-foreground"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
