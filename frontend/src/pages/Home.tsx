import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';
import Dither from '../components/Dither';

const navItems = [
  { label: 'DEVELOPER & UI/UX', title: 'Work', desc: 'Professional projects and client work', path: '/work' },
  { label: 'PERSONAL INTERESTS', title: 'Hobby', desc: 'Creative explorations and passions', path: '/hobby' },
  { label: 'PERSONAL WORK', title: 'Projects', desc: 'Side projects and experiments', path: '/projects' },
  { label: 'WHO I AM', title: 'About', desc: 'Background, skills, and contact', path: '/about' },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as const } },
};
const cardUp = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as const } },
};

export default function Home() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden px-6 py-10">
      {/* Dither background */}
      <div className="dither-vignette fixed inset-0 z-0 pointer-events-auto">
        <Dither
          waveColor={[0.32, 0.15, 1.0]}
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={2}
          enableMouseInteraction
          mouseRadius={1}
        />
      </div>

      <GlowEffect />
      <StatusBadge />

      <motion.div className="relative z-2 w-full max-w-[800px]" variants={stagger} initial="hidden" animate="visible">
        {/* Hero */}
        <motion.div className="mb-8" variants={fadeUp}>
          <motion.h1
            className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-none tracking-[-0.04em] mb-6 [text-shadow:0_2px_20px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] as const }}
          >
            <span className="font-light text-text-primary">Nathan</span>
            <br />
            <span className="font-extrabold text-text-primary">Henaux</span>
          </motion.h1>

          <motion.p
            className="text-[0.95rem] text-text-secondary mb-1.5 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Creative Developer & UI/UX Designer
          </motion.p>

          <motion.p
            className="text-[0.85rem] text-text-muted [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Créateur d'expériences digitales entre code et design
          </motion.p>
        </motion.div>

        {/* Nav grid */}
        <motion.div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1" variants={stagger}>
          {navItems.map((item, i) => (
            <motion.div key={item.path} variants={cardUp} custom={i}>
              <Link
                to={item.path}
                className="group relative flex flex-col gap-2 rounded-2xl border border-white/5 bg-[rgba(16,16,18,0.8)] px-[22px] py-6 backdrop-blur-[20px] overflow-hidden transition-all duration-400 ease-[var(--ease-smooth)] hover:-translate-y-1 hover:border-white/10 hover:bg-[rgba(22,22,26,0.9)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="card-shine" />
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors duration-300 group-hover:text-text-secondary">
                  {item.label}
                </span>
                <h2 className="text-[1.4rem] font-bold tracking-[-0.02em] text-text-primary transition-transform duration-400 ease-[var(--ease-smooth)] group-hover:translate-x-1">
                  {item.title}
                </h2>
                <p className="text-[0.8rem] leading-relaxed text-text-secondary">{item.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[0.75rem] text-text-muted transition-colors duration-400 group-hover:text-text-primary">
                  Explore <ArrowRight size={14} className="transition-transform duration-400 ease-[var(--ease-smooth)] group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
