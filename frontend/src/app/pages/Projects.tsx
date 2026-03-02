import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Cursor } from "../components/Cursor";

const allProjects = [
  {
    id: "01",
    title: "FLORA STUDIO",
    subtitle: "E-Commerce",
    img: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "02",
    title: "PULSE APP",
    subtitle: "React Native",
    img: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "03",
    title: "ÉCLAT BRAND",
    subtitle: "Creative Direction",
    img: "https://images.unsplash.com/photo-1772056382772-a74ad694d433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "04",
    title: "NEXUS PLATFORM",
    subtitle: "Full-Stack SaaS",
    img: "https://images.unsplash.com/photo-1695634365014-7debec896789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "05",
    title: "VERTEX API",
    subtitle: "Rust Backend",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "06",
    title: "ONYX DASHBOARD",
    subtitle: "Analytics",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "07",
    title: "PRISM CMS",
    subtitle: "Java · Spring",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "08",
    title: "AURA FINTECH",
    subtitle: "Banking App",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "09",
    title: "DRIFT SOCIAL",
    subtitle: "Real-time Chat",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "10",
    title: "FORGE CLI",
    subtitle: "Developer Tools",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "11",
    title: "HELIX HEALTH",
    subtitle: "Telemedecine",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: "12",
    title: "COBALT STORE",
    subtitle: "Marketplace",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

function ProjectCard({ project, index }: { project: typeof allProjects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col gap-2 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
      style={{ cursor: "default" }}
    >
      {/* Label */}
      <div className="flex items-baseline gap-3">
        <span
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.65rem",
            color: "rgba(13,13,13,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          [{project.id}]
        </span>
        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: hovered ? "#0D0D0D" : "#FF1A00",
              transition: "color 0.3s ease",
            }}
          >
            {project.title}
          </span>
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.65rem",
              color: "#6B6963",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {project.subtitle}
          </span>
        </div>
      </div>

      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16 / 10" }}
      >
        <motion.img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: hovered ? 1.05 : 1,
            filter: hovered ? "brightness(1)" : "brightness(0.75)",
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            backgroundColor: hovered ? "rgba(255,26,0,0.06)" : "rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [time, setTime] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/Paris",
        }) + " (CET)"
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#DDDBD6" }}
    >
      <Cursor />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between"
        style={{
          backgroundColor: "rgba(221,219,214,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(13,13,13,0.08)",
        }}
      >
        {/* Logo → back home */}
        <Link
          to="/"
          className="flex items-center gap-1 group"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            fontSize: "1rem",
            color: "#0D0D0D",
          }}
        >
          PORTFOLIO
          <span style={{ color: "#FF1A00", fontSize: "1.4rem", lineHeight: 1 }}>.</span>
        </Link>

        {/* Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="link-underline"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0D0D0D",
            }}
          >
            Home
          </Link>
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF1A00",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Index
          </span>
        </div>

        {/* Time */}
        <span
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            color: "#9E9B97",
          }}
        >
          {time}
        </span>
      </motion.header>

      {/* Content */}
      <div className="pt-28 pb-20 px-6 md:px-10">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9E9B97",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Tous les projets — {allProjects.length} réalisations
          </span>
        </motion.div>

        {/* Grid */}
        <div
          className="grid gap-x-5 gap-y-10"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
          }}
        >
          {allProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="px-6 md:px-10 py-6 flex items-center justify-between"
        style={{
          backgroundColor: "#DDDBD6",
          borderTop: "1px solid rgba(13,13,13,0.08)",
        }}
      >
        <span
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#4A4845",
          }}
        >
          © {new Date().getFullYear()} NathanHenaux — Design & Dev
        </span>
        <Link
          to="/"
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6B6963",
          }}
        >
          ← Retour
        </Link>
      </footer>
    </div>
  );
}
