import { motion } from 'framer-motion';

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
      staggerChildren: 0.1
    }
  }
};

const ServicesCard = ({ title }: { title: string }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
      variants={fadeInUp}
    >
      <h3 className="text-base text-primary-dark">{title}</h3>
    </motion.div>
  );
};

const ToolCard = ({ title }: { title: string }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
      variants={fadeInUp}
    >
      <h3 className="text-base text-primary-dark">{title}</h3>
    </motion.div>
  );
};

const WorkExperienceItem = ({
  period,
  company,
  jobTitle,
  bulletPoints
}: {
  period: string;
  company: string;
  jobTitle: string;
  bulletPoints: string[];
}) => {
  return (
    <motion.div
      className="mb-12"
      variants={fadeInUp}
    >
      <p className="text-gray-400 mb-1">{period}</p>
      <h3 className="text-lg font-medium text-primary-dark">{company}</h3>
      <p className="text-primary-dark mb-3">{jobTitle}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
        {bulletPoints.map((point, index) => (
          <li key={index} className="leading-relaxed">{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="py-12 max-w-4xl">
      <motion.div
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-4xl font-semibold mb-2 text-primary-dark"
          variants={fadeInUp}
        >
          Fariz Putra Hanggara
        </motion.h1>
        <motion.h2
          className="text-3xl text-secondary-dark mb-8"
          variants={fadeInUp}
        >
          Software Engineer
        </motion.h2>

        <motion.p
          className="text-gray-300 leading-relaxed mb-4"
          variants={fadeInUp}
        >
          As a final-year Information Systems and Technology student at ITB with hands-on experience in software engineering, I possess strong analytical, problem-solving, and communication skills. Driven by a passion for technology, I have honed my expertise in software development through academic projects and professional experience. Currently, I am focused on advancing my career in the technology industry by leveraging my technical knowledge and contributing to impactful projects as a software engineer.
        </motion.p>
      </motion.div>

      <motion.div
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ delayChildren: 0.3 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 text-primary-dark"
          variants={fadeInUp}
        >
          Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={staggerContainer}
        >
          <ServicesCard title="Full-stack Web Development" />
          <ServicesCard title="Mobile App Development" />
          <ServicesCard title="Backend Development" />
          <ServicesCard title="Frontend Development" />
          <ServicesCard title="Database Design & Management" />
          <ServicesCard title="Cloud Infrastructure & DevOps" />
        </motion.div>
      </motion.div>

      <motion.div
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ delayChildren: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 text-primary-dark"
          variants={fadeInUp}
        >
          Work Experience
        </motion.h2>

        <WorkExperienceItem
          period="May 2025 - Present"
          company="Sinergi Merah Putih"
          jobTitle="Backend Engineer Intern"
          bulletPoints={[
            "Configured and optimized backend authentication using LDAP, streamlining access control for over 500 internal users and reducing login-related errors by 40%",
            "Built a Role-Based Management (RBM) system leveraging Google Cloud and ProxySQL to enable dashboard broadcasting, improving data distribution efficiency by 60% across departments",
            "Provided on-call production support, resolving critical bugs with an average response time under 10 minutes, leading to a 25% reduction in system downtime incidents"
          ]}
        />

        <WorkExperienceItem
          period="Apr 2024 - Present"
          company="Freelance"
          jobTitle="Software Engineer"
          bulletPoints={[
            "Collaborated closely with clients to gather requirements and translate business needs into technical solutions, successfully delivering 3+ end-to-end projects tailored to client objectives",
            "Worked in a cross-functional team alongside UI/UX designers and system analysts to align development with user experience and system architecture standards",
            "Successfully delivered projects with 100% on-time completion rate, achieving a 90% client satisfaction score based on post-project feedback and reducing client revision requests by 40%"
          ]}
        />

        <WorkExperienceItem
          period="Oct 2024 - Jan 2025"
          company="Damaresa Group"
          jobTitle="Software Engineer Intern"
          bulletPoints={[
            "Developed a fully responsive website from scratch using Flutter, leveraging Firebase for real-time backend integration and data management to optimize user experience",
            "Improved the responsiveness of the user interface by analyzing performance bottlenecks, resulting in a 30% faster load time across multiple device types",
            "Designed and implemented adaptive layouts and scalable UI components, ensuring seamless compatibility with over 95% of screen resolutions, enhancing accessibility for a diverse user base",
            "Collaborated with a cross-functional team of 4 members, including designers and project managers, to align the development process with business goals, successfully delivering the project within the allocated 3-month timeline"
          ]}
        />

        <WorkExperienceItem
          period="Jun 2024 - Aug 2024"
          company="Krakatau IT"
          jobTitle="Software Engineer Intern"
          bulletPoints={[
            "Led the design and development of an enterprise-level procurement management system application, streamlining internal processes and improving efficiency for the organization",
            "Engineered and deployed a robust user interface with React Native and a Python backend, achieving seamless integration and real-time data synchronization with Firebase",
            "Drove efficiency improvements across the procurement lifecycle by automating workflows and processes, which contributed to a 20% improvement in operational productivity",
            "Conducted comprehensive testing and debugging, reducing post-deployment bugs by 15% and ensuring a reliable and user-friendly application"
          ]}
        />
      </motion.div>

      <motion.div
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ delayChildren: 0.7 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 text-primary-dark"
          variants={fadeInUp}
        >
          Technical Skills
        </motion.h2>
        
        <motion.div className="mb-8" variants={fadeInUp}>
          <h3 className="text-lg font-medium text-primary-dark mb-4">Programming Languages</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            <ToolCard title="JavaScript" />
            <ToolCard title="TypeScript" />
            <ToolCard title="Python" />
            <ToolCard title="Java" />
            <ToolCard title="Go" />
            <ToolCard title="PHP" />
            <ToolCard title="C" />
          </motion.div>
        </motion.div>

        <motion.div className="mb-8" variants={fadeInUp}>
          <h3 className="text-lg font-medium text-primary-dark mb-4">Frameworks & Libraries</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            <ToolCard title="React" />
            <ToolCard title="React Native" />
            <ToolCard title="Next.js" />
            <ToolCard title="Flutter" />
            <ToolCard title="Node.js" />
            <ToolCard title="Laravel" />
            <ToolCard title="Flask" />
            <ToolCard title="FastAPI" />
            <ToolCard title="Tailwind CSS" />
            <ToolCard title="PyTorch" />
          </motion.div>
        </motion.div>

        <motion.div className="mb-8" variants={fadeInUp}>
          <h3 className="text-lg font-medium text-primary-dark mb-4">Databases & Tools</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            <ToolCard title="MySQL" />
            <ToolCard title="PostgreSQL" />
            <ToolCard title="MongoDB" />
            <ToolCard title="Firebase" />
            <ToolCard title="Supabase" />
            <ToolCard title="Git" />
            <ToolCard title="Docker" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ delayChildren: 0.9 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 text-primary-dark"
          variants={fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div
          className="mb-6"
          variants={fadeInUp}
        >
          <p className="text-gray-400 mb-1">Aug 2021 - Aug 2025 (Expected)</p>
          <h3 className="text-lg font-medium text-primary-dark">Information Systems and Technology</h3>
          <p className="text-primary-dark mb-3">Institut Teknologi Bandung (ITB)</p>
          <p className="text-gray-300 mb-2">Area of Interest: Software Engineer</p>
          <p className="text-gray-300 text-sm">Related Coursework: Algorithm and Data Structures, Object Oriented Programming, Software Engineering, Database Management, Mobile Development</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
