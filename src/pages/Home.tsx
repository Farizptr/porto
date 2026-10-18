import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects, projects } from '../data/projects';
import { RESUME_FILENAME, RESUME_PDF, SITE } from '../data/site';

const MotionLink = motion.create(Link);

const highlights = [
  { value: '1,100+', label: 'TPS after optimization' },
  { value: '100k+', label: 'messages per batch' },
  { value: '4', label: 'engineering roles' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Home = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <div className="py-12">
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <StatusBadge text="Open to opportunities" />
        </motion.div>

        <motion.h1
          className="text-5xl font-semibold mt-8 mb-4 text-primary-dark"
          variants={itemVariants}
        >
          Hello! I'm Fariz
        </motion.h1>

        <motion.h2
          className="text-4xl text-secondary-dark font-normal mb-6"
          variants={itemVariants}
        >
          Software Engineer
        </motion.h2>

        <motion.div
          className="flex items-center mb-6"
          variants={itemVariants}
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-secondary-dark">{SITE.location}</span>
        </motion.div>

        <motion.p
          className="mb-4 text-secondary-dark"
          variants={itemVariants}
        >
          Currently <span className="text-primary-dark">Junior Software Engineer</span> at <span className="text-primary-dark">Jatis Mobile</span>
        </motion.p>

        <motion.p
          className="text-lg text-secondary-dark max-w-3xl"
          variants={itemVariants}
        >
          Software Engineer focused on backend development and system integration, building Go and Python services, REST APIs, and high-volume messaging systems.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mt-8"
          variants={itemVariants}
        >
          <MotionLink
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-teal-400 px-5 py-2.5 font-medium text-gray-950 transition-colors hover:bg-teal-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View projects
          </MotionLink>
          <motion.a
            href={RESUME_PDF}
            download={RESUME_FILENAME}
            className="inline-flex items-center gap-2 rounded-md border border-gray-600 px-5 py-2.5 font-medium text-primary-dark transition-colors hover:border-teal-400/50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </motion.a>
          <motion.button
            type="button"
            className="px-5 py-2.5 border border-gray-600 rounded-md font-medium flex items-center gap-2 text-primary-dark transition-colors hover:border-teal-400/50"
            onClick={copyEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V6C19 4.34315 17.6569 3 16 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {copied ? 'Copied!' : 'Copy email'}
          </motion.button>
          <span className="sr-only" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</span>
        </motion.div>

        <motion.div
          className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          variants={itemVariants}
        >
          {[...highlights, { value: String(projects.length), label: 'portfolio projects' }].map(({ value, label }) => (
            <div key={label} className="rounded-xl border border-gray-800 bg-gray-900/40 p-4">
              <p className="text-2xl font-semibold text-teal-300">{value}</p>
              <p className="mt-1 text-xs text-gray-400">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <motion.h2
            className="text-2xl font-semibold text-primary-dark"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Selected Work
          </motion.h2>
          <Link to="/projects" className="text-sm font-medium text-teal-300 hover:text-teal-200">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
