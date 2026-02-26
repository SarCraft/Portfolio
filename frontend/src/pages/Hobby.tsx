import { motion } from 'framer-motion';
import { BookOpen, Coffee, Mountain } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';
import PageHeader from '../components/PageHeader';

const mainHobbies = [
  { id: 1, title: 'Photography', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=700&fit=crop' },
  { id: 2, title: 'Music Production', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=700&fit=crop' },
  { id: 3, title: 'Generative Art', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=700&fit=crop' },
];

const secondaryHobbies = [
  { id: 4, icon: BookOpen, title: 'Reading', desc: 'Philosophy, science-fiction, and design theory.' },
  { id: 5, icon: Coffee, title: 'Coffee', desc: 'From beans to cup — the ritual of a perfect pour-over.' },
  { id: 6, icon: Mountain, title: 'Hiking', desc: 'Trails, peaks, and the digital detox that comes with them.' },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const cardUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as const } },
};

export default function Hobby() {
  return (
    <div className="flex h-screen flex-col overflow-hidden px-6 py-10 mx-auto max-w-[1000px] relative z-1">
      <GlowEffect />
      <StatusBadge />

      <PageHeader
        label="BEYOND THE CODE"
        title="Hobby"
        subtitle="The things that feed my creativity away from the screen — and always find their way back into my work."
      />

      {/* Main hobbies */}
      <motion.div className="grid grid-cols-3 gap-3 mb-3" variants={stagger} initial="hidden" animate="visible">
        {mainHobbies.map((hobby) => (
          <motion.div
            key={hobby.id}
            className="group relative aspect-4/3 rounded-lg overflow-hidden cursor-pointer"
            variants={cardUp}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <img
              src={hobby.image}
              alt={hobby.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:scale-[1.08]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <h3 className="text-[0.9rem] font-semibold text-text-primary">{hobby.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Secondary hobbies */}
      <motion.div className="grid grid-cols-3 gap-2.5 mb-5" variants={stagger} initial="hidden" animate="visible">
        {secondaryHobbies.map((hobby) => (
          <motion.div
            key={hobby.id}
            className="flex items-center gap-3 p-3.5 bg-bg-card border border-border rounded-lg transition-[border-color,transform] duration-300 hover:border-border-hover"
            variants={cardUp}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white/4 text-text-secondary shrink-0">
              <hobby.icon size={18} />
            </div>
            <div>
              <h4 className="text-[0.82rem] font-semibold text-text-primary mb-0.5">{hobby.title}</h4>
              <p className="text-[0.72rem] text-text-secondary leading-snug">{hobby.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        className="py-5 border-t border-border text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-[0.9rem] text-text-secondary italic mb-1">"Creativity is just connecting things."</p>
        <cite className="text-[0.72rem] text-text-muted not-italic">— Steve Jobs</cite>
      </motion.blockquote>
    </div>
  );
}
