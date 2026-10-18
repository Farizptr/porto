import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { PROJECT_FILTERS, projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import { SOCIAL_LINKS } from '../data/site';

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

const Projects = () => {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold mb-8 text-primary-dark">All Projects</h1>
      </motion.div>
      <p className="-mt-4 mb-6 text-secondary-dark">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {PROJECT_FILTERS.map((f) => (
          <button
            type="button"
            key={f.key}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${filter === f.key ? 'border-teal-400/40 bg-teal-400/10 text-teal-300' : 'border-gray-700 text-gray-400 hover:text-white'}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        key={filter}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      <motion.div
        className="mt-16 rounded-xl border border-gray-800 bg-gray-900/40 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Want to see more?</h2>
        <p className="text-gray-300 mb-6">
          These are just a few highlights of my work. I'm always working on new projects and exploring different technologies.
        </p>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-teal-400 px-5 py-2.5 font-medium text-gray-950 transition-colors hover:bg-teal-300"
        >
          View GitHub Profile
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
