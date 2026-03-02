import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Applications web performantes avec React, Angular et TypeScript. De la SPA au SSR en passant par les PWA.",
    tags: ["React", "Angular", "Node.js"],
  },
  {
    num: "02",
    title: "Backend & Software",
    description:
      "Services backend robustes et performants avec Rust et Java. APIs scalables, microservices et systèmes distribués.",
    tags: ["Rust", "Java", "Php"],
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Conception d'interfaces centrées utilisateur, prototypage Figma et système de design cohérent.",
    tags: ["Figma", "Design System", "Prototyping"],
  },
];

function ServiceCard({ service, index, inView }: { service: typeof services[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      className="p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
      style={{
        backgroundColor: "#DDDBD6",
        borderRight: index < 2 ? "1px solid rgba(13,13,13,0.12)" : "none",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
    >
      {/* Hover fill background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ y: "100%" }}
        animate={{ y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ backgroundColor: "#0D0D0D", zIndex: 0 }}
      />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Number */}
        <span
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.72rem",
            color: hovered ? "rgba(221,219,214,0.4)" : "#9E9B97",
            letterSpacing: "0.1em",
            transition: "color 0.3s ease",
          }}
        >
          {service.num}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: hovered ? "#FF1A00" : "#0D0D0D",
            lineHeight: 1.1,
            transition: "color 0.3s ease",
          }}
        >
          {service.title}
        </h3>

        {/* Divider */}
        <div
          style={{
            height: 1,
            backgroundColor: hovered ? "rgba(221,219,214,0.25)" : "rgba(13,13,13,0.15)",
            transition: "background-color 0.3s ease",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 300,
            fontSize: "0.9rem",
            lineHeight: 1.7,
            color: hovered ? "rgba(221,219,214,0.7)" : "#6B6963",
            transition: "color 0.3s ease",
          }}
        >
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.25rem 0.625rem",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: hovered ? "rgba(221,219,214,0.7)" : "#0D0D0D",
                border: `1px solid ${hovered ? "rgba(221,219,214,0.2)" : "rgba(13,13,13,0.25)"}`,
                borderRadius: 0,
                transition: "color 0.3s ease, border-color 0.3s ease",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="px-6 md:px-10 py-20 md:py-28 border-t"
      style={{ backgroundColor: "#DDDBD6", borderColor: "rgba(13,13,13,0.12)" }}
      ref={ref}
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-14 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9E9B97",
              display: "block",
              marginBottom: "0.4rem",
            }}
          >
            (03) Services
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
            What I Do
          </h2>
        </motion.div>
      </div>

      {/* Cards grid */}
      <div
        className="grid md:grid-cols-3 overflow-hidden border"
        style={{ borderColor: "rgba(13,13,13,0.12)" }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.num} service={service} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
