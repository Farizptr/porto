import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    id: 'damaresa',
    title: 'Damaresa Group Website',
    subtitle: 'Website for Hotel bookings and reservations',
    image: '/projects/damaresa/damaresa1.png'
  },
  {
    id: 'dormihub',
    title: 'DormiHub',
    subtitle: 'Dormitory management system with real-time features',
    image: '/projects/dormihub/dormi1.png'
  },
  {
    id: 'gepo',
    title: 'Gepo Energy',
    subtitle: 'Company website for Gepo Energy',
    image: '/projects/gepo/gepo1.png'
  },
  {
    id: 'loaknow',
    title: 'LoakNow',
    subtitle: 'E-commerce platform for secondhand items',
    image: '/projects/loaknow/loaknow1.png'
  },
  {
    id: 'pqms',
    title: 'Patient Queue Management System',
    subtitle: 'Queue management system for patients',
    image: '/projects/pqms/pqms1.png'
  },
  {
    id: 'spotpark',
    title: 'SpotPark',
    subtitle: 'Smart parking solution for parking lots',
    image: '/projects/spotpark/spotpark1.png'
  },
  {
    id: 'rekrutmen',
    title: 'Rekrutmen System',
    subtitle: 'HR recruitment management platform',
    image: '/projects/rekrutmen/rekrutmen1.png'
  }
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

const Projects = () => {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold mb-8 text-primary-dark">All Projects</h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
          />
        ))}
      </motion.div>

      <motion.div
        className="mt-12 bg-gray-800 p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Want to see more?</h2>
        <p className="text-gray-300 mb-6">
          These are just a few highlights of my work. I'm always working on new projects and exploring different technologies.
        </p>
        <a
          href="https://github.com/Farizptr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-primary-dark text-background-dark rounded-md font-medium"
        >
          View GitHub Profile
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
