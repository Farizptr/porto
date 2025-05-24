import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, subtitle, image }) => {
  return (
    <motion.div
      className="project-card group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/projects/${id}`} className="block">
        <div className="overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold text-xl text-primary-dark mb-1">{title}</h3>
        <p className="text-secondary-dark text-base">{subtitle}</p>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
