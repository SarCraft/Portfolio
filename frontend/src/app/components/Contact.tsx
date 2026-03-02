import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="contact"
      data-dark
      className="px-6 md:px-10 py-20 md:py-32 flex flex-col justify-between min-h-screen"
      style={{ backgroundColor: "#0D0D0D" }}
      ref={ref}
    >
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-12"
      >
        <span
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B6963" }}
        >
          (05) Contact
        </span>
        <span
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", color: "#6B6963" }}
        >
          Lille, France
        </span>
      </motion.div>

      {/* Main CTA */}
      <div className="flex-1 flex flex-col justify-center">
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 12vw, 14rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "#DDDBD6",
              textTransform: "uppercase",
            }}
          >
            LET'S
          </motion.div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 12vw, 14rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "#0D0D0D",
              WebkitTextStroke: "2px #DDDBD6",
              textTransform: "uppercase",
            }}
          >
            CREATE
          </motion.div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 12vw, 14rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "#FF1A00",
              textTransform: "uppercase",
            }}
          >
            TOGETHER
          </motion.div>
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <a
            href="mailto:team@foxin-studio.fr"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-flex items-center gap-4 group"
          >
            <motion.div
              animate={{
                backgroundColor: hovered ? "#FF1A00" : "rgba(0,0,0,0)",
                borderColor: hovered ? "#FF1A00" : "#DDDBD6",
                paddingLeft: hovered ? "2rem" : "1.5rem",
                paddingRight: hovered ? "2rem" : "1.5rem",
              }}
              transition={{ duration: 0.3 }}
              className="border flex items-center gap-3 py-4"
              style={{ borderRadius: 0 }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  letterSpacing: "-0.01em",
                  color: "#DDDBD6",
                  textTransform: "uppercase",
                }}
              >
                team@foxin-studio.fr
              </span>
              <motion.span
                animate={{ color: hovered ? "#DDDBD6" : "#FF1A00", x: hovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: "1.2rem", color: "#FF1A00" }}
              >
                →
              </motion.span>
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Bottom: socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-between items-end mt-16 pt-8 border-t"
        style={{ borderColor: "rgba(221,219,214,0.12)" }}
      >
        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="link-underline"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B6963",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span
            style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#FF1A00", display: "inline-block" }}
          />
          <span
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6963" }}
          >
            Disponible
          </span>
        </div>
      </motion.div>
    </section>
  );
}