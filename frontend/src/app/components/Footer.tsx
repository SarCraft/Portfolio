import { motion } from "motion/react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="px-6 md:px-10 py-6 flex items-center justify-between"
      data-dark
      style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(221,219,214,0.08)" }}
    >
      <span
        style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A4845" }}
      >
        © {new Date().getFullYear()} NathanHenaux— Design & Dev
      </span>

      <span
        style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A4845" }}
      >
        Portfolio v2.0
      </span>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 group"
        style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6963" }}
      >
        <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          Back to top ↑
        </motion.span>
      </button>
    </footer>
  );
}
