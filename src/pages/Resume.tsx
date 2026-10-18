import { motion } from 'framer-motion';
import { SITE, SOCIAL_LINKS, RESUME_PDF, RESUME_FILENAME } from '../data/site';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
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

const Resume = () => {
  return (
    <div className="py-12 max-w-4xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-4xl font-semibold mb-8 text-primary-dark"
          variants={fadeInUp}
        >
          Resume
        </motion.h1>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-md mb-8"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Download Resume</h2>
          <p className="text-gray-300 mb-6">You can download my complete resume in PDF format.</p>
          <motion.a
            href={RESUME_PDF}
            download={RESUME_FILENAME}
            className="inline-flex items-center px-5 py-2.5 border border-gray-600 rounded-md font-medium gap-2 text-primary-dark hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download PDF
          </motion.a>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-md"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white">{SITE.phone}</a>
              </div>
              
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 shrink-0" aria-hidden="true">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href={`mailto:${SITE.email}`} className="text-gray-300 hover:text-white min-w-0 break-all">{SITE.email}</a>
              </div>
              
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 shrink-0" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">github.com/Farizptr</a>
              </div>

              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 shrink-0" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">linkedin.com/in/farizptr</a>
              </div>
              
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 shrink-0" aria-hidden="true">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.0275 7.0275 1 12 1S21 5.0275 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-gray-300">{SITE.location}</span>
              </div>
            </div>
          </div>

          <div
            className="mt-8 pt-8 border-t border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-3 text-primary-dark">Resume Highlights</h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Junior Software Engineer at Jatis Mobile, building backend services for high-volume messaging (100,000+ messages per batch)</li>
              <li>Improved messaging throughput from about 100 TPS to 1,100+ TPS</li>
              <li>Go, Python, REST APIs, RabbitMQ, MongoDB, and PostgreSQL</li>
              <li>Docker, Linux, GCP, and AWS, with hands-on production deployment and incident handling</li>
              <li>B.Sc. in Information Systems and Technology, Institut Teknologi Bandung (2025)</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
