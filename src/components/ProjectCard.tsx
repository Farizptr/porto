import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const MAX_VISIBLE_TECH = 3;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies ?? [];
  const visibleTech = technologies.slice(0, MAX_VISIBLE_TECH);
  const extraCount = technologies.length - visibleTech.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 transition-colors hover:border-teal-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-800">
          <img
            src={project.images[0]}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {project.liveUrl && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-teal-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Live
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-primary-dark transition-colors group-hover:text-teal-300">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-secondary-dark">{project.subtitle}</p>
          {technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {visibleTech.map((tech) => (
                <span key={tech} className="rounded-md bg-gray-800 px-2 py-0.5 text-xs text-gray-300">
                  {tech}
                </span>
              ))}
              {extraCount > 0 && (
                <span className="rounded-md bg-gray-800 px-2 py-0.5 text-xs text-gray-300">
                  +{extraCount}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
