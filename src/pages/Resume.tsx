import { motion } from 'framer-motion';

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
            href="/resume.pdf"
            download
            className="inline-flex items-center px-5 py-2.5 border border-gray-600 rounded-md font-medium gap-2 text-primary-dark hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M22 16.92V19.92C22.0011 20.6849 21.6156 21.4016 20.9811 21.8484C20.3467 22.2953 19.5344 22.4219 18.8 22.1892C15.1428 21.097 11.787 19.1813 9.00001 16.5892C6.42074 14.1983 4.37737 11.2714 3.01001 8.03922C2.72199 7.27099 2.85305 6.39232 3.36603 5.72454C3.87902 5.05676 4.70935 4.66538 5.58001 4.67922H8.58001C9.95529 4.66403 11.2519 5.38304 11.9 6.53922C12.431 7.49481 12.8474 8.51428 13.14 9.57922C13.3357 10.2474 13.2414 10.9683 12.88 11.5692L11.37 14.0892C13.2746 17.2783 16.1827 20.1864 19.37 22.0892L21.89 20.5792C22.4909 20.2178 23.2118 20.1235 23.88 20.3192C24.9449 20.6118 25.9644 21.0282 26.92 21.5592C28.0762 22.2073 28.7952 23.5039 28.78 24.8792V27.8792C28.7812 28.2279 28.7124 28.5732 28.5782 28.8941C28.444 29.215 28.2471 29.5049 28.0001 29.7477C27.7531 29.9905 27.4606 30.1815 27.1382 30.309C26.8158 30.4365 26.4698 30.4978 26.12 30.4892C5.18001 30.4892 0.120007 24.7192 0.120007 8.03922" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-300">+62 812 1033 1898</span>
              </div>
              
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-300">farizputrahanggara@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M9 19C9 19 4 15.5 4 10C4 7.5 6 5 9 5C11.5 5 14 7.5 14 10C14 15.5 9 19 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-gray-300">github.com/Farizptr</span>
              </div>
              
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.0275 7.0275 1 12 1S21 5.0275 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-gray-300">Bandung, Indonesia</span>
              </div>
            </div>
          </div>

          <div
            className="mt-8 pt-8 border-t border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-3 text-primary-dark">Resume Highlights</h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>3+ years of experience in full-stack development</li>
              <li>Proficient in Python, Node.js, Go, and modern web technologies</li>
              <li>Experience with cloud platforms (AWS, GCP) and containerization (Docker)</li>
              <li>Strong background in database design and API development</li>
              <li>Proven track record of delivering scalable web applications</li>
              <li>Experience in agile development methodologies and team collaboration</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
