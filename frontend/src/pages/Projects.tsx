import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';
import PageHeader from '../components/PageHeader';
import '../styles/Projects.css';

const featuredProjects = [
  {
    id: 1,
    year: '2024',
    name: 'Generative Art Studio',
    desc: 'An interactive web app for creating and exploring generative art patterns using JavaScript and the Canvas API. Multiple modes, real-time parameter control, and export.',
    tags: ['React', 'Canvas API', 'JavaScript', 'Vite'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&h=300&fit=crop',
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    year: '2024',
    name: 'Minimal Task Manager',
    desc: 'A beautifully designed task management app focused on simplicity and user experience. Real-time sync, keyboard-first, and a distraction-free interface.',
    tags: ['React', 'Vert.CSS', 'Supabase', 'Vite'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=700&h=300&fit=crop',
    codeUrl: '#',
    liveUrl: '#',
  },
];

const otherProjects = [
  {
    id: 3,
    name: 'Portfolio Template System',
    desc: 'Open-source portfolio template with customizable themes and MDX-powered content for developers and designers.',
    tags: ['React', 'Tailwind', 'MDX'],
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    id: 4,
    name: 'Audio Visualizer',
    desc: 'Real-time audio visualizer with multiple visual modes, WebGL shaders, and customizable parameters.',
    tags: ['Web Audio API', 'Three.js', 'GLSL'],
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    id: 5,
    name: 'CLI Dev Toolkit',
    desc: 'A personal collection of shell scripts and Node.js tools for automating repetitive development workflows.',
    tags: ['Node.js', 'Shell', 'TypeScript'],
    codeUrl: '#',
    liveUrl: null,
  },
  {
    id: 6,
    name: 'Color Palette Generator',
    desc: 'Generate harmonious color palettes from images or seeds using perceptual color science.',
    tags: ['Rust', 'Extras', 'Utilities'],
    codeUrl: '#',
    liveUrl: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as const },
  },
};

export default function Projects() {
  return (
    <div className="page projects">
      <GlowEffect />
      <StatusBadge />
      <div className="gradient-bar" />

      <PageHeader
        label="PERSONAL WORK"
        title="Projects"
        subtitle="Side projects, experiments, and open-source tools built for learning and for fun."
      />

      {/* Featured */}
      <motion.div
        className="section-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        FEATURED
      </motion.div>

      <motion.div
        className="projects__featured"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {featuredProjects.map((p) => (
          <motion.div
            key={p.id}
            className="projects__featured-card"
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <img
              src={p.image}
              alt={p.name}
              className="projects__featured-img"
              loading="lazy"
            />
            <div className="projects__featured-body">
              <span className="projects__featured-year">{p.year}</span>
              <h3 className="projects__featured-name">{p.name}</h3>
              <p className="projects__featured-desc">{p.desc}</p>
              <div className="projects__featured-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="projects__featured-actions">
              <div className="projects__featured-links">
                <a href={p.codeUrl} className="projects__link">
                  <Github size={14} /> Code
                </a>
                <a href={p.liveUrl} className="projects__link">
                  <ExternalLink size={14} /> Live
                </a>
              </div>
              <button className="projects__featured-arrow">
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Other projects table */}
      <motion.div
        className="section-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ marginTop: 48 }}
      >
        OTHER WORK
      </motion.div>

      <motion.div
        className="projects__table"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        <div className="projects__table-header">
          <span>#</span>
          <span>Name</span>
          <span className="projects__table-hide-mobile">Description</span>
          <span>Stack</span>
          <span>Links</span>
        </div>
        {otherProjects.map((p, i) => (
          <motion.div
            key={p.id}
            className="projects__table-row"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
          >
            <span className="projects__table-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="projects__table-name">{p.name}</span>
            <span className="projects__table-desc projects__table-hide-mobile">
              {p.desc}
            </span>
            <span className="projects__table-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </span>
            <span className="projects__table-links">
              <a href={p.codeUrl}><Github size={14} /></a>
              {p.liveUrl && <a href={p.liveUrl}><ExternalLink size={14} /></a>}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
