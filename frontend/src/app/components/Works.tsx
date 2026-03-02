import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "01",
    title: "FLORA STUDIO",
    description: "Plateforme e-commerce sur-mesure avec architecture microservices",
    type: "Web Design & Dev",
    year: "2025",
    img: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    tags: ["React", "Rust", "Stripe"],
  },
  {
    id: "02",
    title: "PULSE APP",
    description: "Application mobile de suivi fitness et bien-être",
    type: "React Native · UI/UX",
    year: "2025",
    img: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    tags: ["React Native", "Figma", "Node.js"],
  },
  {
    id: "03",
    title: "ÉCLAT BRAND",
    description: "Direction créative et identité digitale complète",
    type: "Creative Direction",
    year: "2024",
    img: "https://images.unsplash.com/photo-1772056382772-a74ad694d433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    tags: ["Rust", "Java", "Figma"],
  },
  {
    id: "04",
    title: "NEXUS PLATFORM",
    description: "Dashboard SaaS analytics en temps réel",
    type: "Full-Stack · SaaS",
    year: "2024",
    img: "https://images.unsplash.com/photo-1695634365014-7debec896789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    tags: ["Angular", "TypeScript", "PHP"],
  },
];

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={rowRef}
      className="project-row relative border-b overflow-hidden"
      style={{ borderColor: "rgba(13,13,13,0.15)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      data-hover
    >
      {/* Hover image */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="absolute pointer-events-none z-20 hidden md:block"
            style={{
              left: mousePos.x + 24,
              top: mousePos.y - 80,
              width: 240,
              height: 160,
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.95)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="flex items-center justify-between py-6 md:py-8 px-0 gap-4 md:gap-8 group"
      >
        {/* Number */}
        <span
          className="hidden md:block flex-shrink-0 w-10"
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "#9E9B97", letterSpacing: "0.1em" }}
        >
          {project.id}
        </span>

        {/* Title */}
        <motion.h3
          animate={{ color: hovered ? "#FF1A00" : "#0D0D0D" }}
          transition={{ duration: 0.25 }}
          className="flex-1 min-w-0"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 3.5vw, 3rem)",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            lineHeight: 1.05,
          }}
        >
          {project.title}
        </motion.h3>

        {/* Description - hidden on small screens */}
        <p
          className="hidden lg:block flex-shrink-0 w-48 xl:w-64"
          style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "#6B6963", lineHeight: 1.5 }}
        >
          {project.description}
        </p>

        {/* Type + Year */}
        <div className="hidden md:flex flex-col items-end flex-shrink-0 gap-0.5">
          <span
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "#0D0D0D", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            {project.type}
          </span>
          <span
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", color: "#9E9B97" }}
          >
            {project.year}
          </span>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0, color: "#FF1A00" }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 hidden md:block"
          style={{ fontSize: "1.5rem", lineHeight: 1 }}
        >
          →
        </motion.span>
      </motion.div>
    </div>
  );
}

export function Works() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="px-6 md:px-10 py-20 md:py-32" style={{ backgroundColor: "#DDDBD6" }}>
      {/* Section header */}
      <div className="flex items-end justify-between mb-12 md:mb-16 border-b pb-6" style={{ borderColor: "rgba(13,13,13,0.15)" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9E9B97", display: "block", marginBottom: "0.4rem" }}
          >
            (02) Réalisations
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#0D0D0D",
              lineHeight: 1,
            }}
          >
            Selected Works
          </h2>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "transparent", WebkitTextStroke: "1.5px rgba(13,13,13,0.2)", letterSpacing: "-0.03em" }}
        >
          04
        </motion.span>
      </div>

      {/* Projects list */}
      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex justify-end"
      >
        <Link
          to="/projects"
          className="flex items-center gap-2 group"
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0D0D0D" }}
        >
          <span className="link-underline">Voir tous les projets</span>
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            style={{ color: "#FF1A00" }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
