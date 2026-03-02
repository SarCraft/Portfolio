import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: "3+", label: "Années d'exp." },
  { value: "5+", label: "Projets livrés" },
  { value: "5+", label: "Clients satisfaits" },
];

const skills = [
  "React", "Angular", "TypeScript", "Node.js",
  "Rust", "Java", "Docker", "Figma",
  "PostgreSQL", "PHP", "Kubernetes", "CI/CD",
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="px-6 md:px-10 py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#DDDBD6" }}>
      {/* Big background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block whitespace-nowrap"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "18vw",
          textTransform: "uppercase",
          WebkitTextStroke: "1px rgba(13,13,13,0.06)",
          color: "transparent",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        ABOUT
      </div>

      <div className="relative z-10" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9E9B97" }}
          >
            (04) À propos
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#0D0D0D",
                textTransform: "uppercase",
              }}
            >
              Je crée des<br />
              expériences<br />
              <span style={{ color: "transparent", WebkitTextStroke: "2px #FF1A00" }}>digitales</span><br />
              mémorables.
            </motion.h2>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex gap-10 mt-12 pt-10 border-t"
              style={{ borderColor: "rgba(13,13,13,0.15)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "2.5rem", color: "#FF1A00", lineHeight: 1, letterSpacing: "-0.03em" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "#6B6963", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.3rem" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.75, color: "#3D3B37" }}
            >
              Développeur full-stack passionné par l'intersection entre
              technologie et design. Je crois que le code peut être aussi
              expressif qu'un tableau — chaque projet est une opportunité de
              pousser les limites du medium.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.75, color: "#6B6963" }}
            >
              Spécialisé dans les architectures backend performantes, les APIs
              scalables et les applications full-stack. Je travaille avec des startups,
              des agences et des marques qui souhaitent se démarquer.
            </motion.p>

            {/* Skills tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.04 }}
                  className="px-3 py-1.5 border"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0D0D0D",
                    borderColor: "rgba(13,13,13,0.3)",
                    borderRadius: 0,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-2"
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 group"
                style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0D0D0D" }}
              >
                <span
                  className="w-8 h-8 flex items-center justify-center border border-[#0D0D0D] group-hover:bg-[#FF1A00] group-hover:border-[#FF1A00] transition-all duration-300"
                  style={{ borderRadius: 0 }}
                >
                  ↓
                </span>
                <span className="link-underline">Télécharger CV</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}