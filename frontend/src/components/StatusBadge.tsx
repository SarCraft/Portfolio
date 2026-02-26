import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PresenceCard from './PresenceCard';

export default function StatusBadge() {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 300);
  };

  return (
    <motion.div
      className="fixed top-6 right-6 z-100 flex items-center gap-2 px-4 py-2 bg-[rgba(20,20,22,0.8)] backdrop-blur-[12px] border border-border rounded-full cursor-pointer"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="w-2 h-2 rounded-full bg-accent-green shadow-[0_0_8px_var(--color-accent-green)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
      <span className="text-[0.75rem] text-text-secondary font-medium">En ligne</span>
      <PresenceCard visible={hovered} />
    </motion.div>
  );
}
