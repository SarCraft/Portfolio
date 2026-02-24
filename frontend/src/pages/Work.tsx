import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';
import PageHeader from '../components/PageHeader';
import '../styles/Work.css';

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

export default function Work() {
  const [filter, setFilter] = useState<WorkCategory>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = filter === 'all' ? works : works.filter((w) => w.category === filter);
  const hoveredWork = works.find((w) => w.id === hoveredId) || works[0];

  return (
    <div className="page work">
      <GlowEffect />
      <StatusBadge />
      <div className="gradient-bar" />

      <PageHeader
        label="SELECTED WORK"
        title="Work"
      />

      {/* Filters */}
      <motion.div
        className="work__filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {(['all', 'developer', 'uiux'] as WorkCategory[]).map((cat) => (
          <button
            key={cat}
            className={`work__filter ${filter === cat ? 'work__filter--active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'All' : cat === 'developer' ? 'Developer' : 'UI/UX'}
          </button>
        ))}
      </motion.div>

      <div className="work__layout">
        {/* List */}
        <motion.div
          className="work__list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((work, i) => (
              <motion.div
                key={work.id}
                className={`work__item ${hoveredId === work.id ? 'work__item--active' : ''}`}
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                layout
              >
                <span className="work__item-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="work__item-content">
                  <h3 className="work__item-name">{work.name}</h3>
                  <p className="work__item-desc">{work.desc}</p>
                </div>
                <span className="work__item-cat">{work.categoryLabel}</span>
                <span className="work__item-year">{work.year}</span>
                <button className="work__item-arrow">
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.p
            className="work__count"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {filtered.length} projects
          </motion.p>
        </motion.div>

        {/* Preview */}
        <motion.div
          className="work__preview"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredWork.id}
              className="work__preview-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={hoveredWork.image}
                alt={hoveredWork.name}
                className="work__preview-img"
              />
              <div className="work__preview-info">
                <span className="work__preview-cat">
                  {hoveredWork.categoryLabel}
                </span>
                <span className="work__preview-year">{hoveredWork.year}</span>
              </div>
              <p className="work__preview-desc">{hoveredWork.desc}</p>
              <div className="work__preview-tags">
                {hoveredWork.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a href="#" className="work__preview-link">
                <ExternalLink size={14} />
                View project
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
