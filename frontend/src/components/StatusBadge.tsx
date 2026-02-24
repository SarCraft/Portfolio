import { motion } from 'framer-motion';

export default function StatusBadge() {
  return (
    <motion.div
      className="status-badge"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <span className="status-badge__dot" />
      <span className="status-badge__text">En ligne</span>
    </motion.div>
  );
}
