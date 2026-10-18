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
      className="border border-gray-800 bg-gray-800 rounded-lg p-4 hover:shadow-md transition-colors hover:border-teal-400/40"
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
  location,
  jobTitle,
  bulletPoints
}: {
  period: string;
  company: string;
  location?: string;
  jobTitle: string;
  bulletPoints: string[];
}) => {
  return (
    <motion.div
      className="relative pl-8"
      variants={fadeInUp}
    >
      <span
        aria-hidden="true"
        className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-teal-400 ${period.includes('Present') ? 'bg-teal-400' : 'bg-background-dark'}`}
      />
      <p className="mb-1 text-sm text-teal-300/80">{period}</p>
      <h3 className="text-lg font-medium text-primary-dark">
        {company}
        {location && <span className="text-gray-400 font-normal"> · {location}</span>}
      </h3>
      <p className="text-primary-dark mb-3">{jobTitle}</p>
      <ul className="list-disc space-y-2 pl-5 text-gray-300 marker:text-gray-600">
        {bulletPoints.map((point) => (
          <li key={point} className="leading-relaxed">{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Go', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'PHP', 'Dart']
  },
  {
    title: 'Frameworks & Libraries',
    items: ['FastAPI', 'Flask', 'Node.js', 'Express', 'React', 'Next.js', 'Laravel', 'Flutter', 'React Native', 'Tailwind CSS', 'PyTorch', 'YOLOv8']
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase']
  },
  {
    title: 'Infrastructure & Tools',
    items: ['Docker', 'RabbitMQ', 'Nginx', 'APISIX', 'Linux', 'Git', 'SonarQube', 'GCP', 'AWS']
  }
];

const certifications = [
  {
    name: 'AWS Skill Builder',
    detail: 'Serverless CI/CD, DevOps, Containers',
    date: 'Aug 2025'
  },
  {
    name: 'Google Cloud Skills Boost',
    detail: 'Cloud Fundamentals, Core Infrastructure',
    date: 'Aug 2025'
  },
  {
    name: 'Cisco CyberOps Associate',
    detail: 'CyberOps Associate, Cybersecurity Essentials',
    date: 'May 2024'
  }
];

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
          Software Engineer focused on backend development and system integration, with hands-on experience building Go and Python services, REST APIs, and high-volume messaging systems. I work with Docker, RabbitMQ, MongoDB, and PostgreSQL, and I am comfortable with production deployment, distributed-system troubleshooting, and performance optimization.
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
          <ServicesCard title="Backend Development & APIs" />
          <ServicesCard title="System Integration" />
          <ServicesCard title="Messaging & Distributed Systems" />
          <ServicesCard title="Cloud Infrastructure & DevOps" />
          <ServicesCard title="Full-stack Web Development" />
          <ServicesCard title="Database Design & Optimization" />
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

        <div className="relative ml-2 space-y-10 border-l border-gray-700">
          <WorkExperienceItem
            period="Dec 2025 - Present"
            company="Jatis Mobile"
            location="Jakarta"
            jobTitle="Junior Software Engineer"
            bulletPoints={[
              "Developed and maintained backend services for high-volume messaging and enterprise platforms, covering message scheduling, file ingestion, message processing and delivery, API gateways, chatbots, and AI-powered HR services, supporting workloads of 100,000+ messages per batch",
              "Improved benchmark messaging throughput from approximately 100 TPS to 1,100+ TPS through query batching, database indexing, MongoDB BulkWrite operations, and worker concurrency optimization",
              "Integrated and troubleshot distributed backend services connected to internal core systems, messaging providers, and third-party APIs, resolving application, database, queue, and message-delivery issues through root-cause analysis",
              "Managed deployments across local, staging, and production environments, including Linux VM access via SSH, repository updates, environment configuration, Docker Compose builds, log monitoring, backups, and production incident handling"
            ]}
          />

          <WorkExperienceItem
            period="May 2025 - Oct 2025"
            company="Sinergi Merah Putih"
            location="Jakarta"
            jobTitle="Backend Engineer Intern"
            bulletPoints={[
              "Developed a Flask backend for a Pepper Robot used in live stage performances, implementing movement-control APIs, face recognition, and Gemini AI via Vertex AI for interactive experiences",
              "Monitored and maintained Google Cloud infrastructure through Cloud Console and SSH, troubleshooting CPU spikes, restarting services, and automating recovery of unsent data to maintain service availability",
              "Rebuilt an internal administration dashboard in Go and integrated APISIX log monitoring, improving service observability and troubleshooting workflows"
            ]}
          />

          <WorkExperienceItem
            period="Sep 2024 - Feb 2025"
            company="Damaresa Group"
            location="Bandung"
            jobTitle="Frontend Engineer Intern"
            bulletPoints={[
              "Developed responsive Flutter applications backed by Firebase, implementing reusable interfaces and real-time data synchronization across application features",
              "Improved application load times by approximately 40% through performance profiling, bottleneck analysis, and caching optimization"
            ]}
          />

          <WorkExperienceItem
            period="Jun 2024 - Aug 2024"
            company="Krakatau IT"
            location="Cilegon"
            jobTitle="Digital Transformation Intern"
            bulletPoints={[
              "Developed a mobile procurement system to digitize paper-based workflows, reducing processing time from approximately 1 day to under 3 hours",
              "Built a Flask backend for procurement workflows, including automated PDF generation and document retrieval for reporting and operational processes"
            ]}
          />

          <WorkExperienceItem
            period="Apr 2024 - Present"
            company="Freelance"
            jobTitle="Software Engineer"
            bulletPoints={[
              "Gathered requirements with clients and translated business needs into technical solutions, delivering end-to-end web projects",
              "Worked alongside UI/UX designers and system analysts to keep development aligned with user experience and system architecture standards",
              "Delivered client projects on schedule and iterated on feedback after launch"
            ]}
          />
        </div>
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

        {skillGroups.map(({ title, items }) => (
          <motion.div key={title} className="mb-8" variants={fadeInUp}>
            <h3 className="text-lg font-medium text-primary-dark mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-gray-800 bg-gray-900/60 px-3 py-1.5 text-sm text-gray-200 transition-colors hover:border-teal-400/40"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mb-16"
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
          <p className="text-gray-400 mb-1">Aug 2021 - Aug 2025</p>
          <h3 className="text-lg font-medium text-primary-dark">Bachelor of Science in Information Systems and Technology</h3>
          <p className="text-primary-dark mb-3">Institut Teknologi Bandung (ITB)</p>
          <p className="text-gray-300 mb-2">Area of Interest: Software Engineering</p>
          <p className="text-gray-300 text-sm">Related Coursework: Algorithm and Data Structures, Object Oriented Programming, Software Engineering, Database Management, Mobile Development</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 text-primary-dark"
          variants={fadeInUp}
        >
          Certifications & Training
        </motion.h2>
        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-primary-dark">{cert.name} <span className="text-gray-400">— {cert.detail}</span></span>
              <span className="text-sm text-teal-300/80">{cert.date}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 text-primary-dark"
          variants={fadeInUp}
        >
          Languages
        </motion.h2>
        <p className="text-gray-300">English — Professional proficiency</p>
        <p className="text-gray-300">Bahasa Indonesia — Native</p>
      </motion.div>
    </div>
  );
};

export default About;
