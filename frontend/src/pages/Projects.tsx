import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';
import PageHeader from '../components/PageHeader';

const featuredProjects = [
  {
    id: 1, year: '2024', name: 'Generative Art Studio',
    desc: 'An interactive web app for creating and exploring generative art patterns using JavaScript and the Canvas API. Multiple modes, real-time parameter control, and export.',
    tags: ['React', 'Canvas API', 'JavaScript', 'Vite'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&h=300&fit=crop',
    codeUrl: '#', liveUrl: '#',
  },
  {
    id: 2, year: '2024', name: 'Minimal Task Manager',
    desc: 'A beautifully designed task management app focused on simplicity and user experience. Real-time sync, keyboard-first, and a distraction-free interface.',
    tags: ['React', 'Vert.CSS', 'Supabase', 'Vite'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=700&h=300&fit=crop',
    codeUrl: '#', liveUrl: '#',
  },
];

const otherProjects = [
  { id: 3, name: 'Portfolio Template System', desc: 'Open-source portfolio template with customizable themes and MDX-powered content for developers and designers.', tags: ['React', 'Tailwind', 'MDX'], codeUrl: '#', liveUrl: '#' },
  { id: 4, name: 'Audio Visualizer', desc: 'Real-time audio visualizer with multiple visual modes, WebGL shaders, and customizable parameters.', tags: ['Web Audio API', 'Three.js', 'GLSL'], codeUrl: '#', liveUrl: '#' },
  { id: 5, name: 'CLI Dev Toolkit', desc: 'A personal collection of shell scripts and Node.js tools for automating repetitive development workflows.', tags: ['Node.js', 'Shell', 'TypeScript'], codeUrl: '#', liveUrl: null },
  { id: 6, name: 'Color Palette Generator', desc: 'Generate harmonious color palettes from images or seeds using perceptual color science.', tags: ['Rust', 'Extras', 'Utilities'], codeUrl: '#', liveUrl: '#' },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const cardUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as const } },
};

export default function Projects() {
  return (
    <div className="flex h-screen flex-col overflow-hidden px-6 py-10 mx-auto max-w-[1000px] relative z-1">
      <GlowEffect />
      <StatusBadge />

      <PageHeader
        label="PERSONAL WORK"
        title="Projects"
        subtitle="Side projects, experiments, and open-source tools built for learning and for fun."
      />

      {/* Featured label */}
      <motion.div
        className="text-[0.65rem] uppercase tracking-[0.15em] text-text-muted font-medium mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        FEATURED
      </motion.div>

      {/* Featured cards */}
      <motion.div className="flex flex-col gap-3.5 mb-4" variants={stagger} initial="hidden" animate="visible">
        {featuredProjects.map((p) => (
          <motion.div
            key={p.id}
            className="grid grid-cols-[1fr_auto] bg-bg-card border border-border rounded-xl overflow-hidden transition-[border-color,transform] duration-300 hover:border-border-hover hover:-translate-y-1"
            variants={cardUp}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-[110px] object-cover opacity-60 transition-opacity duration-300 hover:opacity-80"
              loading="lazy"
            />
            <div className="p-3.5 flex flex-col gap-1">
              <span className="text-[0.6rem] text-text-muted font-medium">{p.year}</span>
              <h3 className="text-[0.95rem] font-semibold text-text-primary tracking-tight">{p.name}</h3>
              <p className="text-[0.72rem] text-text-secondary leading-snug line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center px-2.5 py-1 bg-white/4 border border-border rounded-md text-[0.7rem] text-text-secondary transition-[border-color,color] duration-300 hover:border-border-hover hover:text-text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-between p-3.5 border-l border-border">
              <div className="flex flex-col gap-2">
                <a href={p.codeUrl} className="inline-flex items-center gap-1.5 text-[0.72rem] text-text-muted transition-colors duration-200 hover:text-text-primary">
                  <Github size={14} /> Code
                </a>
                <a href={p.liveUrl} className="inline-flex items-center gap-1.5 text-[0.72rem] text-text-muted transition-colors duration-200 hover:text-text-primary">
                  <ExternalLink size={14} /> Live
                </a>
              </div>
              <button className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-text-muted transition-all duration-250 hover:border-border-hover hover:text-text-primary hover:bg-white/5">
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Other work label */}
      <motion.div
        className="text-[0.65rem] uppercase tracking-[0.15em] text-text-muted font-medium mb-5 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        OTHER WORK
      </motion.div>

      {/* Table */}
      <motion.div
        className="border border-border rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        {/* Header */}
        <div className="grid grid-cols-[40px_180px_1fr_auto_auto] max-md:grid-cols-[30px_1fr_auto_auto] gap-4 px-4 py-2.5 border-b border-border text-[0.65rem] uppercase tracking-[0.1em] text-text-muted font-medium">
          <span>#</span>
          <span>Name</span>
          <span className="max-md:hidden">Description</span>
          <span>Stack</span>
          <span>Links</span>
        </div>
        {otherProjects.map((p, i) => (
          <motion.div
            key={p.id}
            className="grid grid-cols-[40px_180px_1fr_auto_auto] max-md:grid-cols-[30px_1fr_auto_auto] gap-4 px-4 py-3 border-b border-border last:border-b-0 items-center transition-colors duration-200 hover:bg-white/2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
          >
            <span className="text-[0.7rem] text-text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[0.82rem] font-semibold text-text-primary">{p.name}</span>
            <span className="text-[0.72rem] text-text-secondary leading-snug line-clamp-1 max-md:hidden">{p.desc}</span>
            <span className="flex flex-wrap gap-1">
              {p.tags.map((t) => (
                <span key={t} className="inline-flex items-center px-2 py-0.5 bg-white/4 border border-border rounded text-[0.65rem] text-text-secondary">{t}</span>
              ))}
            </span>
            <span className="flex items-center gap-2">
              <a href={p.codeUrl} className="text-text-muted transition-colors duration-200 hover:text-text-primary"><Github size={14} /></a>
              {p.liveUrl && <a href={p.liveUrl} className="text-text-muted transition-colors duration-200 hover:text-text-primary"><ExternalLink size={14} /></a>}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
