import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Work (1)", href: "#work" },
  { label: "About (2)", href: "#about" },
  { label: "Contact (3)", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const contact = document.getElementById("contact");
      if (contact) {
        const rect = contact.getBoundingClientRect();
        setOnDark(rect.top <= 70);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between"
        style={{
          backgroundColor: onDark
            ? scrolled ? "rgba(13,13,13,0.92)" : "rgba(13,13,13,0)"
            : scrolled ? "rgba(221,219,214,0.92)" : "rgba(221,219,214,0)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? onDark ? "1px solid rgba(221,219,214,0.1)" : "1px solid rgba(13,13,13,0.1)"
            : "none",
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease, color 0.4s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-1 group"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "-0.02em", fontSize: "1rem", color: onDark ? "#DDDBD6" : "#0D0D0D", transition: "color 0.4s ease" }}
        >
          PORTFOLIO
          <span style={{ color: "#FF1A00", fontSize: "1.4rem", lineHeight: 1 }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline"
              style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: onDark ? "#DDDBD6" : "#0D0D0D", transition: "color 0.4s ease" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2"
            style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: onDark ? "#DDDBD6" : "#0D0D0D", transition: "color 0.4s ease" }}
          >
            <span
              style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#FF1A00", display: "inline-block", animation: "pulse 2s infinite" }}
            />
            Available
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="block h-px origin-center"
            style={{ width: "100%", backgroundColor: onDark ? "#DDDBD6" : "#0D0D0D", transition: "background-color 0.4s ease" }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 8 : 0 }}
            className="block h-px"
            style={{ width: "70%", backgroundColor: onDark ? "#DDDBD6" : "#0D0D0D", transition: "background-color 0.4s ease" }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="block h-px origin-center"
            style={{ width: "100%", backgroundColor: onDark ? "#DDDBD6" : "#0D0D0D", transition: "background-color 0.4s ease" }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 md:hidden"
            style={{ backgroundColor: "#DDDBD6" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "3rem", color: "#0D0D0D", textTransform: "uppercase" }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}