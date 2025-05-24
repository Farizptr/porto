import { motion } from 'framer-motion';
import StatusBadge from '../components/StatusBadge';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    id: 'damaresa',
    title: 'Damaresa Group Website',
    subtitle: 'Responsive company website built with Flutter and Firebase',
    image: '/projects/damaresa/damaresa1.png'
  },
  {
    id: 'dormihub',
    title: 'DormiHub',
    subtitle: 'Dormitory management system with real-time features',
    image: '/projects/dormihub/dormi1.png'
  },
  {
    id: 'pqms',
    title: 'Procurement Quality Management System',
    subtitle: 'Enterprise procurement management application',
    image: '/projects/pqms/pqms1.png'
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
  return (
    <div className="py-12">
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <StatusBadge text="Available for work" />
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-secondary-dark">Bandung, Indonesia</span>
        </motion.div>

        <motion.p
          className="text-lg text-secondary-dark max-w-3xl"
          variants={itemVariants}
        >
          Experienced Software Engineer specializing in Full Stack Development with over 3 year of hands-on expertise.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-8"
          variants={itemVariants}
        >
          <motion.a
            href="/about"
            className="px-5 py-2.5 border border-gray-600 rounded-md font-medium text-primary-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.button
            className="px-5 py-2.5 border border-gray-600 rounded-md font-medium flex items-center gap-2 text-primary-dark"
            onClick={() => {
              navigator.clipboard.writeText('farizputrahanggara@gmail.com');
              // You could add a toast notification here
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V6C19 4.34315 17.6569 3 16 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Copy email
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-8 text-primary-dark"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
