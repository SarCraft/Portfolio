import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PresenceCard from './PresenceCard';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080';

type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline';

function getStatusColor(status: DiscordStatus): string {
  switch (status) {
    case 'online': return 'var(--color-accent-green, #23a55a)';
    case 'idle': return '#f0b232';
    case 'dnd': return '#f23f43';
    default: return '#80848e';
  }
}

function getStatusLabel(status: DiscordStatus): string {
  switch (status) {
    case 'online': return 'En ligne';
    case 'idle': return 'Inactif';
    case 'dnd': return 'Ne pas déranger';
    default: return 'Hors ligne';
  }
}

export default function StatusBadge() {
  const [hovered, setHovered] = useState(false);
  const [status, setStatus] = useState<DiscordStatus>('offline');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchStatus = async () => {
    try {
      const resp = await fetch(`${API_BASE}/api/presence`);
      if (resp.ok) {
        const data = await resp.json();
        setStatus(data.discord?.status || 'offline');
      }
    } catch {
      // silently ignore
    }
  };

  useEffect(() => {
    fetchStatus();
    intervalRef.current = setInterval(fetchStatus, 30000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 300);
  };

  const color = getStatusColor(status);
  const label = getStatusLabel(status);

  return (
    <motion.div
      className="fixed top-6 right-6 z-100 flex items-center gap-2 px-4 py-2 bg-[rgba(20,20,22,0.8)] backdrop-blur-[12px] border border-border rounded-full cursor-pointer"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span
        className="w-2 h-2 rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]"
        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
      />
      <span className="text-[0.75rem] text-text-secondary font-medium">{label}</span>
      <PresenceCard visible={hovered} />
    </motion.div>
  );
}
