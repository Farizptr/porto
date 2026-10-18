import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProject, projects } from '../data/projects';
import Lightbox from '../components/Lightbox';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = getProject(projectId);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="py-12 text-center">
        <motion.h1
          className="text-4xl font-semibold mb-4 text-primary-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project Not Found
        </motion.h1>
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The project you're looking for doesn't exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/projects" className="px-5 py-2.5 bg-primary-dark text-background-dark rounded-md font-medium">
            Return to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  const hasLinks = Boolean(project.liveUrl || project.repoLinks?.length);

  return (
    <motion.div
      className="py-12 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Back button */}
      <motion.div variants={fadeIn}>
        <Link to="/projects" className="flex items-center text-teal-300 mb-8 hover:underline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-2">Back to Projects</span>
        </Link>
      </motion.div>

      {/* Project title and subtitle */}
      <motion.h1
        className="text-4xl font-semibold mb-2 text-primary-dark"
        variants={fadeInUp}
      >
        {project.title}
      </motion.h1>

      <motion.p
        className={`text-xl text-secondary-dark ${hasLinks ? 'mb-6' : 'mb-8'}`}
        variants={fadeInUp}
      >
        {project.subtitle}
      </motion.p>

      {/* Links */}
      {hasLinks && (
        <motion.div className="flex flex-wrap gap-3 mb-8" variants={fadeInUp}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-400 text-gray-950 font-medium hover:bg-teal-300 transition-colors"
            >
              Live demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.repoLinks?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-600 text-primary-dark font-medium hover:bg-gray-800 hover:border-teal-400/50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              {link.label}
            </a>
          ))}
        </motion.div>
      )}

      {/* Image layout: 1 large image, 2 smaller images below */}
      <motion.div className="mb-12" variants={fadeInUp}>
        {/* Large main image */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            className="block w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            aria-label={`Enlarge ${project.title} - Main view`}
          >
            <img
              src={project.images[0]}
              alt={`${project.title} - Main view`}
              className="w-full rounded-lg object-cover object-top max-h-[640px] transition-transform duration-500 hover:scale-[1.02]"
              decoding="async"
            />
          </button>
        </div>

        {/* Two smaller images side by side */}
        {project.images.length > 1 && (
          <div className={`grid gap-4 ${project.images.length - 1 >= 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2'}`}>
            {project.images.slice(1).map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(i + 1)}
                className="block w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-label={`Enlarge ${project.title} - View ${i + 2}`}
              >
                <img
                  src={src}
                  alt={`${project.title} - View ${i + 2}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 rounded-lg object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Project info cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        variants={fadeInUp}
      >
        {(project.period || project.role) && (
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
            <h3 className="font-medium text-lg mb-2 text-primary-dark">Timeline & Role</h3>
            {project.period && <p className="text-gray-300 mb-2">{project.period}</p>}
            {project.role && <p className="text-gray-300">{project.role}</p>}
          </div>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
            <h3 className="font-medium text-lg mb-2 text-primary-dark">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="inline-block rounded-md border border-teal-400/20 bg-teal-400/10 px-2 py-1 text-sm text-teal-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Project description */}
      <motion.div className="mb-12" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Project Overview</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {project.description}
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div className="mb-12" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Challenges & Solution */}
      {project.challenges && project.solution && (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={fadeInUp}>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Challenges</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Solution</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </motion.div>
      )}

      {/* More projects section */}
      <motion.div className="mt-16" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-6 text-primary-dark">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter((item) => item.id !== projectId)
            .slice(0, 2)
            .map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/projects/${item.id}`} className="block">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-primary-dark mb-1">{item.title}</h3>
                  <p className="text-secondary-dark text-base">{item.subtitle}</p>
                </Link>
              </motion.div>
            ))}
        </div>

        <div className="mt-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projects"
              className="inline-block px-6 py-3 border border-gray-600 rounded-md font-medium text-primary-dark hover:bg-gray-800 transition-colors"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <Lightbox
        images={project.images}
        index={lightboxIndex}
        alt={project.title}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </motion.div>
  );
};

export default ProjectDetail;
