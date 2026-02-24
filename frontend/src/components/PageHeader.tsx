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
        className="page-nav"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/" className="page-nav__back">
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>
      </motion.div>

      <motion.span
        className="page-label"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {label}
      </motion.span>

      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.1, 0, 1] as const }}
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          className="page-subtitle"
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
