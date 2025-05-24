import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

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

// Project data with actual images and descriptions
const projects = {
  damaresa: {
    title: 'Damaresa Group Website',
    subtitle: 'Website for Hotel bookings and reservations',
    images: [
      '/projects/damaresa/damaresa1.png',
      '/projects/damaresa/damaresa2.png',
      '/projects/damaresa/damaresa3.png'
    ],
    period: 'Oct 2024 - Jan 2025',
    role: 'Software Engineer Intern',
    description: 'Developed a fully responsive website from scratch using Flutter, leveraging Firebase for real-time backend integration and data management to optimize user experience. Improved the responsiveness of the user interface by analyzing performance bottlenecks, resulting in a 30% faster load time across multiple device types. Designed and implemented adaptive layouts and scalable UI components, ensuring seamless compatibility with over 95% of screen resolutions, enhancing accessibility for a diverse user base.',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Real-time Database'],
    features: [
      'Responsive design across all devices',
      'Real-time data synchronization',
      'Optimized loading performance',
      'Scalable UI components',
      'Cross-platform compatibility'
    ],
    challenges: 'The main challenge was creating a website that works seamlessly across different screen sizes while maintaining fast loading times and real-time data updates.',
    solution: 'Implemented adaptive layouts using Flutter\'s responsive design principles and optimized Firebase queries to reduce load times by 30%.'
  },
  dormihub: {
    title: 'DormiHub',
    subtitle: 'Dormitory management system with real-time features',
    images: [
      '/projects/dormihub/dormi1.png',
      '/projects/dormihub/dormi2.png',
      '/projects/dormihub/dormi3.png'
    ],
    period: 'Academic Project - 2024',
    role: 'Full Stack Developer',
    description: 'A comprehensive dormitory management system designed to streamline the management of student accommodations. The platform provides tools for room allocation, maintenance requests, visitor management, and communication between residents and administration staff.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Socket.io'],
    features: [
      'Room allocation and management',
      'Maintenance request system',
      'Visitor registration and tracking',
      'Real-time notifications',
      'Payment integration',
      'Student communication portal'
    ],
    challenges: 'Managing real-time updates for multiple users while ensuring data consistency and providing an intuitive interface for both students and administrators.',
    solution: 'Implemented WebSocket connections for real-time updates and created role-based access control to ensure appropriate permissions for different user types.'
  },
  gepo: {
    title: 'Gepo Energy',
    subtitle: 'Company website for Gepo Energy',
    images: [
      '/projects/gepo/gepo1.png',
      '/projects/gepo/gepo2.png',
      '/projects/gepo/gepo3.png'
    ],
    period: 'Personal Project - 2024',
    role: 'Mobile Developer',
    description: 'A location-based service platform that connects users with nearby services and businesses. The application uses GPS technology to provide personalized recommendations and enable location-based social interactions.',
    technologies: ['React Native', 'Google Maps API', 'Firebase', 'Node.js'],
    features: [
      'GPS-based location tracking',
      'Nearby service discovery',
      'Real-time location sharing',
      'Business directory integration',
      'User reviews and ratings',
      'Push notifications for nearby events'
    ],
    challenges: 'Accurately tracking user location while preserving battery life and ensuring user privacy.',
    solution: 'Implemented smart location tracking algorithms that balance accuracy with battery consumption and added comprehensive privacy controls.'
  },
  loaknow: {
    title: 'LoakNow',
    subtitle: 'E-commerce platform for secondhand items',
    images: [
      '/projects/loaknow/loaknow1.png',
      '/projects/loaknow/loaknow-2.png',
      '/projects/loaknow/loaknow-3.png'
    ],
    period: 'Freelance Project - 2024',
    role: 'Full Stack Developer',
    description: 'An e-commerce platform specifically designed to help local businesses establish their online presence. The platform provides tools for inventory management, order processing, customer communication, and payment integration.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe API', 'Tailwind CSS'],
    features: [
      'Multi-vendor marketplace',
      'Inventory management system',
      'Integrated payment processing',
      'Order tracking and management',
      'Customer review system',
      'Mobile-responsive design'
    ],
    challenges: 'Creating a scalable platform that can handle multiple vendors while maintaining a consistent user experience.',
    solution: 'Developed a modular architecture with vendor-specific dashboards and implemented a unified checkout process for customers.'
  },
  pqms: {
    title: 'Patient Queue Management System',
    subtitle: 'Queue management system for patients',
    images: [
      '/projects/pqms/pqms1.png',
      '/projects/pqms/pqms2.png',
      '/projects/pqms/pqms3.png'
    ],
    period: 'Jun 2024 - Aug 2024',
    role: 'Software Engineer Intern at Krakatau IT',
    description: 'Led the design and development of a comprehensive patient queue management system application, streamlining patient flow and improving healthcare service efficiency. Engineered and deployed a robust user interface with React Native and a Python backend, achieving seamless integration and real-time data synchronization with Firebase.',
    technologies: ['React Native', 'Python', 'Firebase', 'PostgreSQL', 'Flask'],
    features: [
      'Patient queue management',
      'Appointment scheduling system',
      'Real-time queue status updates',
      'Patient notification system',
      'Healthcare provider dashboard',
      'Analytics and reporting tools'
    ],
    challenges: 'Building a system that could handle real-time patient flow while maintaining user-friendly interfaces for both patients and healthcare providers.',
    solution: 'Created role-based interfaces and implemented real-time queue updates that reduced patient waiting times and improved service efficiency by 20%.'
  },
  spotpark: {
    title: 'SpotPark',
    subtitle: 'Smart parking solution for parking lots',
    images: [
      '/projects/spotpark/spotpark1.png',
      '/projects/spotpark/spotpark2.png',
      '/projects/spotpark/spotpark3.png'
    ],
    period: 'Academic Project - 2024',
    role: 'Mobile App Developer',
    description: 'A smart parking solution that helps users find available parking spots in real-time. The application integrates with IoT sensors and provides features for parking reservation, payment processing, and navigation to available spots.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'IoT Integration'],
    features: [
      'Real-time parking availability',
      'Spot reservation system',
      'Integrated payment processing',
      'Navigation to parking spots',
      'Parking history and receipts',
      'Push notifications for booking reminders'
    ],
    challenges: 'Integrating real-time data from IoT sensors while providing accurate location-based services.',
    solution: 'Implemented efficient data polling mechanisms and used Google Maps API for precise location tracking and navigation.'
  },
  rekrutmen: {
    title: 'Rekrutmen System',
    subtitle: 'HR recruitment management platform',
    images: [
      '/projects/rekrutmen/rekrutmen1.png',
      '/projects/rekrutmen/rekrutmen2.png',
      '/projects/rekrutmen/rekrutmen3.png'
    ],
    period: 'Professional Project - 2024',
    role: 'Full Stack Developer',
    description: 'A comprehensive recruitment management system designed to streamline the hiring process for HR departments. The platform provides tools for job posting, candidate tracking, interview scheduling, and evaluation management with automated workflows.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT Authentication'],
    features: [
      'Job posting and management',
      'Candidate application tracking',
      'Interview scheduling system',
      'Automated email notifications',
      'Document management for CVs',
      'Multi-stage evaluation process',
      'Analytics and reporting dashboard'
    ],
    challenges: 'Managing complex recruitment workflows while ensuring data privacy and providing intuitive interfaces for both HR staff and candidates.',
    solution: 'Implemented role-based access control, automated workflow processes, and created separate portals for HR staff and candidates with appropriate permissions and features.'
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  // Scroll to top when component mounts or project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

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

  return (
    <motion.div
      className="py-12 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Back button */}
      <motion.div variants={fadeIn}>
        <Link to="/projects" className="flex items-center text-primary-dark mb-8 hover:underline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        className="text-xl text-secondary-dark mb-8"
        variants={fadeInUp}
      >
        {project.subtitle}
      </motion.p>

      {/* Image layout: 1 large image, 2 smaller images below */}
      <motion.div className="mb-12" variants={fadeInUp}>
        {/* Large main image */}
        <div className="mb-4">
          <img 
            src={project.images[0]} 
            alt={`${project.title} - Main view`}
            className="w-full rounded-lg object-cover"
          />
        </div>
        
        {/* Two smaller images side by side */}
        <div className="grid grid-cols-2 gap-4">
          <img 
            src={project.images[1]} 
            alt={`${project.title} - View 2`}
            className="w-full h-64 rounded-lg object-cover"
          />
          <img 
            src={project.images[2]} 
            alt={`${project.title} - View 3`}
            className="w-full h-64 rounded-lg object-cover"
          />
        </div>
      </motion.div>

      {/* Project info cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        variants={fadeInUp}
      >
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="font-medium text-lg mb-2 text-primary-dark">Timeline & Role</h3>
          <p className="text-gray-300 mb-2">{project.period}</p>
          <p className="text-gray-300">{project.role}</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="font-medium text-lg mb-2 text-primary-dark">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="inline-block bg-gray-700 rounded-md px-2 py-1 text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
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
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-primary-dark rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Challenges & Solution */}
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

      {/* More projects section */}
      <motion.div className="mt-16" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-6 text-primary-dark">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(projects)
            .filter(([id]) => id !== projectId)
            .slice(0, 2)
            .map(([id, project]) => (
              <motion.div
                key={id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/projects/${id}`} className="block">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-primary-dark mb-1">{project.title}</h3>
                  <p className="text-secondary-dark text-base">{project.subtitle}</p>
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
    </motion.div>
  );
};

export default ProjectDetail;
