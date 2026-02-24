import { motion } from 'framer-motion';
import { BookOpen, Coffee, Mountain } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';
import PageHeader from '../components/PageHeader';
import '../styles/Hobby.css';

const mainHobbies = [
  {
    id: 1,
    title: 'Photography',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=700&fit=crop',
  },
  {
    id: 2,
    title: 'Music Production',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=700&fit=crop',
  },
  {
    id: 3,
    title: 'Generative Art',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=700&fit=crop',
  },
];

const secondaryHobbies = [
  {
    id: 4,
    icon: BookOpen,
    title: 'Reading',
    desc: 'Philosophy, science-fiction, and design theory.',
  },
  {
    id: 5,
    icon: Coffee,
    title: 'Coffee',
    desc: 'From beans to cup — the ritual of a perfect pour-over.',
  },
  {
    id: 6,
    icon: Mountain,
    title: 'Hiking',
    desc: 'Trails, peaks, and the digital detox that comes with them.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as const },
  },
};

export default function Hobby() {
  return (
    <div className="page hobby">
      <GlowEffect />
      <StatusBadge />
      <div className="gradient-bar" />

      <PageHeader
        label="BEYOND THE CODE"
        title="Hobby"
        subtitle="The things that feed my creativity away from the screen — and always find their way back into my work."
      />

      {/* Main hobbies */}
      <motion.div
        className="hobby__main-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {mainHobbies.map((hobby) => (
          <motion.div
            key={hobby.id}
            className="hobby__main-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <img
              src={hobby.image}
              alt={hobby.title}
              className="hobby__main-img"
              loading="lazy"
            />
            <div className="hobby__main-overlay">
              <h3 className="hobby__main-title">{hobby.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Secondary hobbies */}
      <motion.div
        className="hobby__secondary-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {secondaryHobbies.map((hobby) => (
          <motion.div
            key={hobby.id}
            className="hobby__secondary-card"
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div className="hobby__secondary-icon">
              <hobby.icon size={18} />
            </div>
            <div>
              <h4 className="hobby__secondary-title">{hobby.title}</h4>
              <p className="hobby__secondary-desc">{hobby.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        className="hobby__quote"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p>"Creativity is just connecting things."</p>
        <cite>— Steve Jobs</cite>
      </motion.blockquote>
    </div>
  );
}
