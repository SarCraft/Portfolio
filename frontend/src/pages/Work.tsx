import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';
import PageHeader from '../components/PageHeader';

type WorkCategory = 'all' | 'developer' | 'uiux';

interface WorkItem {
  id: number;
  name: string;
  desc: string;
  category: WorkCategory;
  categoryLabel: string;
  year: string;
  tags: string[];
  image: string;
}

const works: WorkItem[] = [
  {
    id: 1,
    name: 'E-commerce Platform',
    desc: 'Full-stack development of a modern e-commerce solution with React, Node.js, and PostgreSQL. Includes inventory management, Stripe payments, and a custom CMS.',
    category: 'developer',
    categoryLabel: 'DEVELOPER',
    year: '2024',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Design System',
    desc: 'Comprehensive design system for a fintech startup, including component library, token system, and documentation built with Figma.',
    category: 'uiux',
    categoryLabel: 'UI/UX',
    year: '2024',
    tags: ['Figma', 'React', 'Storybook', 'Tokens'],
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'SaaS Dashboard',
    desc: 'Real-time analytics dashboard with complex data visualizations, WebSocket updates, and interactive D3.js charts for a B2B SaaS.',
    category: 'developer',
    categoryLabel: 'DEVELOPER',
    year: '2023',
    tags: ['Next.js', 'D3.js', 'TypeScript', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Mobile App Redesign',
    desc: 'Complete UX overhaul for a social media mobile app — user research, information architecture, wireframes, and high-fidelity Figma prototypes.',
    category: 'uiux',
    categoryLabel: 'UI/UX',
    year: '2023',
    tags: ['Figma', 'Prototyping', 'User Research'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
  },
];

const listContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
const listItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0, 1] as const } },
};

export default function Work() {
  const [filter, setFilter] = useState<WorkCategory>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = filter === 'all' ? works : works.filter((w) => w.category === filter);
  const hoveredWork = works.find((w) => w.id === hoveredId) || filtered[0] || works[0];

  return (
    <div className="flex h-screen flex-col overflow-hidden px-6 py-10 mx-auto max-w-[1000px] relative z-1">
      <GlowEffect />
      <StatusBadge />

      <PageHeader label="SELECTED WORK" title="Work" />

      {/* Filters */}
      <motion.div
        className="flex gap-1 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {(['all', 'developer', 'uiux'] as WorkCategory[]).map((cat) => (
          <button
            key={cat}
            className={`relative rounded-md px-4 py-1.5 text-[0.8rem] font-medium transition-colors duration-250 cursor-pointer
              ${filter === cat ? 'text-text-primary' : 'text-text-muted hover:text-text-secondary'}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'All' : cat === 'developer' ? 'Developer' : 'UI/UX'}
            {filter === cat && (
              <motion.span
                className="absolute inset-0 rounded-md bg-white/6 -z-1"
                layoutId="filter-indicator"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Main layout */}
      <div className="grid grid-cols-[1fr_340px] gap-8 items-start flex-1 min-h-0 overflow-hidden max-[900px]:grid-cols-1">
        {/* List */}
        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div key={filter} variants={listContainer} initial="hidden" animate="visible" exit="exit">
              {filtered.map((work, i) => (
                <motion.div
                  key={work.id}
                  className={`work-item-indicator relative flex items-center gap-4 py-3.5 px-4 border-l-2 border-border cursor-pointer transition-[background,border-color] duration-250 hover:bg-white/2 ${hoveredId === work.id ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredId(work.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  variants={listItem}
                >
                  <span className="text-[0.7rem] text-text-muted font-medium min-w-[24px] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[0.95rem] font-semibold text-text-primary mb-0.5">{work.name}</h3>
                    <p className="text-[0.72rem] text-text-secondary leading-snug line-clamp-1 max-md:hidden">{work.desc}</p>
                  </div>
                  <span className="text-[0.6rem] uppercase tracking-wide text-text-muted px-2 py-0.5 border border-border rounded max-md:hidden">{work.categoryLabel}</span>
                  <span className="text-[0.75rem] text-text-muted tabular-nums">{work.year}</span>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-text-muted shrink-0 transition-all duration-250 group-hover:border-border-hover group-hover:text-text-primary group-hover:bg-white/5 group-hover:translate-x-0.5">
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.p
            className="text-[0.7rem] text-text-muted mt-2.5 pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {filtered.length} projects
          </motion.p>
        </div>

        {/* Preview */}
        <motion.div
          className="sticky top-10 max-[900px]:hidden"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredWork.id}
              className="preview-card overflow-hidden rounded-2xl border border-border bg-[rgba(16,16,18,0.75)] backdrop-blur-[20px] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_8px_40px_rgba(0,0,0,0.4)] transition-[border-color,box-shadow] duration-300 hover:border-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_12px_48px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0, 1] }}
            >
              {/* Browser mockup */}
              <div className="m-2.5 rounded-lg overflow-hidden border border-white/6 bg-black/30">
                <div className="flex items-center gap-2.5 px-2.5 py-1.5 bg-white/3 border-b border-white/4">
                  <div className="flex gap-[5px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/8" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/8" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/8" />
                  </div>
                  <div className="flex-1 text-center text-[0.6rem] text-text-muted tracking-wide opacity-60">
                    {hoveredWork.name.toLowerCase().replace(/\s+/g, '-')}.dev
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={hoveredWork.image}
                    alt={hoveredWork.name}
                    className="preview-img w-full aspect-video object-cover block transition-transform duration-500 ease-[var(--ease-smooth)]"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="px-4 pt-3.5 pb-4">
                <div className="mb-1.5">
                  <h3 className="text-[0.95rem] font-semibold text-text-primary tracking-tight mb-1.5">{hoveredWork.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.6rem] uppercase tracking-wide text-text-muted font-medium">{hoveredWork.categoryLabel}</span>
                    <span className="text-white/15 text-[0.7rem]">·</span>
                    <span className="text-[0.65rem] text-text-muted tabular-nums">{hoveredWork.year}</span>
                  </div>
                </div>
                <p className="text-[0.72rem] text-text-secondary leading-relaxed mb-2.5 line-clamp-2">{hoveredWork.desc}</p>
                <div className="flex flex-wrap gap-[5px] mb-3">
                  {hoveredWork.tags.map((t) => (
                    <span key={t} className="text-[0.65rem] text-text-secondary px-2.5 py-0.5 bg-white/4 border border-white/6 rounded-full tracking-wide transition-[border-color,color] duration-200 hover:border-white/12 hover:text-text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-1.5 text-[0.72rem] text-text-muted font-medium border-t border-white/5 pt-2.5 w-full transition-[color,gap] duration-250 hover:text-text-primary hover:gap-2.5">
                  <span>View project</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
