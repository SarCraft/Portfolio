import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';

const skillCategories = [
  { title: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Motion/GSAP'] },
  { title: 'Backend', skills: ['Node.js', 'PostgreSQL', 'REST APIs', 'GraphQL'] },
  { title: 'Design', skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping'] },
  { title: 'Creative', skills: ['Three.js', 'WebGL', 'Canvas API', 'Generative Art'] },
];

const experience = [
  { year: '2025', role: 'Creative Developer Freelance', company: 'Projets créatifs & applications web' },
  { year: '2023-2024', role: 'Lead Developer', company: 'Agence digitale - Paris' },
  { year: '2021-2023', role: 'Full Stack Developer', company: 'Startup Tech - Remote' },
  { year: '2020', role: 'Diplôme Master', company: 'Computer Science & Design' },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0, 1] as const } },
};

export default function About() {
  return (
    <div className="flex h-screen flex-col overflow-hidden px-6 py-10 mx-auto max-w-[1000px] relative z-1">
      <GlowEffect />
      <StatusBadge />

      {/* Nav */}
      <motion.div className="mb-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Link to="/" className="inline-flex items-center gap-2 text-[0.8rem] text-text-muted py-1 transition-colors duration-300 hover:text-text-primary">
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>
      </motion.div>

      <motion.h1
        className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.04em] leading-none mb-1.5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0, 1] as const }}
      >
        About
      </motion.h1>

      <motion.p
        className="text-[0.82rem] text-text-secondary mb-5 italic"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Creative developer passionné par l'intersection entre code et créativité
      </motion.p>

      {/* Main layout */}
      <motion.div className="grid grid-cols-[200px_1fr] gap-8 items-start flex-1 min-h-0 overflow-hidden max-md:grid-cols-1" variants={stagger} initial="hidden" animate="visible">
        {/* Sidebar */}
        <motion.aside className="flex flex-col gap-4 sticky top-[60px] max-md:flex-row max-md:flex-wrap max-md:static" variants={fadeUp}>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=320&fit=crop"
            alt="Workspace"
            className="w-full aspect-4/3 object-cover rounded-xl border border-border max-h-[120px] max-md:w-[200px]"
          />

          <div>
            <h4 className="text-[0.6rem] uppercase tracking-[0.15em] text-text-muted font-medium mb-2.5">CONTACT</h4>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 text-[0.8rem] text-text-secondary py-1 transition-colors duration-300 hover:text-text-primary">
              <Mail size={14} />
              <span>hello@example.com</span>
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-[0.6rem] uppercase tracking-[0.15em] text-text-muted font-medium mb-2.5">SOCIAL</h4>
            <a href="#" className="flex items-center gap-2.5 text-[0.8rem] text-text-secondary py-1.5 transition-colors duration-300 hover:text-text-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
              LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2.5 text-[0.8rem] text-text-secondary py-1.5 transition-colors duration-300 hover:text-text-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="#" className="flex items-center gap-2.5 text-[0.8rem] text-text-secondary py-1.5 transition-colors duration-300 hover:text-text-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Twitter
            </a>
          </div>

          <a href="#" className="flex items-center justify-center gap-2 py-3 px-5 border border-border rounded-lg text-[0.8rem] font-medium text-text-primary w-full transition-[border-color,background] duration-300 hover:border-border-hover hover:bg-white/3">
            <Download size={16} />
            Télécharger CV
          </a>
        </motion.aside>

        {/* Content */}
        <div className="flex flex-col gap-6 overflow-y-auto min-h-0 pr-2">
          {/* Bio */}
          <motion.section variants={fadeUp}>
            <h3 className="text-base font-semibold text-text-primary mb-2.5 tracking-tight">Biographie</h3>
            <p className="text-[0.8rem] text-text-secondary leading-[1.7] mb-2.5">
              Creative developer basé en France, je crée des expériences digitales uniques en combinant développement technique et sensibilité artistique. Mon approche fusionne code propre et créativité visuelle pour donner vie à des projets innovants.
            </p>
            <p className="text-[0.8rem] text-text-secondary leading-[1.7] mb-2.5">
              Avec une expertise en React, TypeScript et Three.js, je transforme des concepts créatifs en applications web performantes et esthétiques. Mon travail explore l'intersection entre art génératif, interactions immersives et interfaces utilisateur soignées.
            </p>
            <p className="text-[0.8rem] text-text-secondary leading-[1.7]">
              Quand je ne code pas, je produis de la musique électronique, capture des photographies urbaines et explore de nouvelles techniques d'art digital.
            </p>
          </motion.section>

          {/* Skills */}
          <motion.section variants={fadeUp}>
            <h3 className="text-base font-semibold text-text-primary mb-2.5 tracking-tight">Compétences</h3>
            <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {skillCategories.map((cat) => (
                <motion.div
                  key={cat.title}
                  className="p-3.5 bg-bg-card border border-border rounded-xl transition-[border-color] duration-300 hover:border-border-hover"
                >
                  <h4 className="text-[0.8rem] font-semibold text-text-primary mb-2">{cat.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s} className="inline-flex items-center px-2.5 py-1 bg-white/4 border border-border rounded-md text-[0.7rem] text-text-secondary transition-[border-color,color] duration-300 hover:border-border-hover hover:text-text-primary">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section variants={fadeUp}>
            <h3 className="text-base font-semibold text-text-primary mb-2.5 tracking-tight">Parcours</h3>
            <div className="flex flex-col">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.year}
                  className={`grid grid-cols-[80px_16px_1fr] gap-2.5 items-start py-3 ${i > 0 ? 'border-t border-border' : ''}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                >
                  <span className="text-[0.75rem] text-text-muted font-medium">{exp.year}</span>
                  <div className="timeline-dot relative w-px h-full min-h-[30px] bg-border mx-auto" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[0.82rem] font-semibold text-text-primary">{exp.role}</span>
                    <span className="text-[0.75rem] text-text-muted">{exp.company}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
