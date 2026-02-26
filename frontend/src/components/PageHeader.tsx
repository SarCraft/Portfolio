import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-[0.8rem] text-text-muted py-1 transition-colors duration-300 hover:text-text-primary">
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>
      </motion.div>

      <motion.span
        className="block text-[0.65rem] uppercase tracking-[0.15em] text-text-muted font-medium mb-1.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {label}
      </motion.span>

      <motion.h1
        className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.04em] leading-none mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.1, 0, 1] as const }}
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          className="text-[0.82rem] text-text-secondary leading-relaxed max-w-[460px] mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </>
  );
}
