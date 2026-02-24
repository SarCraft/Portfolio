import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GlowEffect from '../components/GlowEffect';
import '../styles/Home.css';

const navItems = [
  {
    label: 'DEVELOPER & UI/UX→',
    title: 'Work',
    desc: 'Professional projects and client work',
    path: '/work',
  },
  {
    label: 'PERSONAL INTERESTS→',
    title: 'Hobby',
    desc: 'Creative explorations and passions',
    path: '/hobby',
  },
  {
    label: 'PERSONAL WORK→',
    title: 'Projects',
    desc: 'Side projects and experiments',
    path: '/projects',
  },
  {
    label: 'WHO I AM →',
    title: 'About',
    desc: 'Background, skills, and contact',
    path: '/about',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as const },
  },
};

export default function Home() {
  return (
    <div className="home">
      <GlowEffect />
      <StatusBadge />
      <div className="gradient-bar" />

      <motion.div
        className="home__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="home__hero" variants={itemVariants}>
          <motion.h1
            className="home__name"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] as const }}
          >
            <span className="home__name--light">Nathan</span>
            <br />
            <span className="home__name--bold">Henaux</span>
          </motion.h1>

          <motion.p
            className="home__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Creative Developer & UI/UX Designer
          </motion.p>

          <motion.p
            className="home__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Créateur d'expériences digitales entre code et design
          </motion.p>
        </motion.div>

        <motion.div
          className="home__grid"
          variants={containerVariants}
        >
          {navItems.map((item, i) => (
            <motion.div key={item.path} variants={cardVariants} custom={i}>
              <Link to={item.path} className="home__card">
                <div className="home__card-glow" />
                <span className="home__card-label">{item.label}</span>
                <h2 className="home__card-title">{item.title}</h2>
                <p className="home__card-desc">{item.desc}</p>
                <span className="home__card-link">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
