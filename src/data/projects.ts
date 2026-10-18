export type ProjectCategory = 'web' | 'mobile' | 'backend-ai';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  images: string[];
  period?: string;
  role?: string;
  description: string;
  technologies?: string[];
  features: string[];
  challenges?: string;
  solution?: string;
  liveUrl?: string;
  repoLinks?: ProjectLink[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'drm',
    title: 'Disaster Risk Management',
    subtitle: 'Earthquake risk analysis platform for building detection and damage estimation',
    categories: ['backend-ai', 'web'],
    images: ['/projects/drm/drm1.webp', '/projects/drm/drm2.webp', '/projects/drm/drm3.webp'],
    period: 'Sep 2025',
    role: 'Backend & ML Engineer',
    description: 'An end-to-end earthquake risk analysis platform that detects buildings from map imagery, classifies their typology, and estimates damage severity for a selected region. I built the FastAPI inference microservice, containerized it with Docker and deployed it behind Nginx on a remote Linux server, and handled model training, backend deployment, and service maintenance over SSH.',
    technologies: ['Python', 'FastAPI', 'YOLOv8 (Ultralytics)', 'PyTorch', 'React', 'Vite', 'OpenStreetMap', 'Docker', 'Nginx', 'Linux'],
    features: [
      'Building detection inside GeoJSON polygons using YOLOv8',
      'Building typology classification and damage severity estimation',
      'Interactive global map with OpenStreetMap',
      'Region management and risk assessment',
      'Earthquake simulation and analysis',
      'Google sign-in'
    ],
    challenges: 'Serving a heavy computer-vision model reliably to a web dashboard while keeping training, deployment, and maintenance manageable on a single remote server.',
    solution: 'Split inference into a dedicated FastAPI microservice, containerized it with Docker behind Nginx, and managed training runs and deployments through Linux and SSH-based workflows.',
    liveUrl: 'https://drm.goesmart.id',
    repoLinks: [
      { label: 'Inference service', url: 'https://github.com/Farizptr/backend-coordinate' },
      { label: 'Model training', url: 'https://github.com/Farizptr/DRM-ai' }
    ],
    featured: true
  },
  {
    id: 'damaresa',
    title: 'Damaresa Booking Property',
    subtitle: 'Flutter booking app for hotels and villas, released on the App Store and Google Play',
    categories: ['mobile'],
    images: [
      '/projects/damaresa/damaresa1.webp',
      '/projects/damaresa/damaresa2.webp',
      '/projects/damaresa/damaresa3.webp'
    ],
    period: 'Sep 2024 - Feb 2025',
    role: 'Frontend Engineer Intern, Damaresa Group',
    description: 'A property booking application for houses, apartments, villas, hotels, and guest houses, built with Flutter and Firebase and released on the App Store and Google Play. I developed booking and property-management features with reusable interfaces and real-time data synchronization, and improved load times by about 40% through performance profiling, bottleneck analysis, and caching.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    features: [
      'Search by city, check-in and check-out dates, and number of guests',
      'Browse by property type: house, apartment, villa, hotel, guest house',
      'Property details with photo gallery, facilities, and nightly price',
      'Ratings and reviews',
      'Location map with full address',
      'Direct chat with the property team'
    ],
    challenges: 'Keeping listings and availability consistent across many screens while keeping the app fast on a wide range of devices.',
    solution: 'Used Firebase real-time synchronization for shared data, built reusable responsive components, and cut load times by about 40% through profiling and caching.',
    featured: true
  },
  {
    id: 'rekrutmen',
    title: 'Rekrutmen System',
    subtitle: 'Admin panel for job openings and applicant tracking',
    categories: ['web'],
    images: [
      '/projects/rekrutmen/rekrutmen3.webp',
      '/projects/rekrutmen/rekrutmen1.webp',
      '/projects/rekrutmen/rekrutmen2.webp'
    ],
    period: 'Professional Project - 2024',
    role: 'Full Stack Developer',
    description: 'A Laravel web application that helps an HR team manage job openings and move applicants through the hiring pipeline. Admins publish and manage vacancies, add applicants, track each candidate from application to shortlist, interview, and hire, and export the data for reporting.',
    technologies: ['Laravel 10', 'PHP', 'Blade', 'Laravel Sanctum', 'Vite'],
    features: [
      'Admin dashboard with job, recruitment, and user statistics',
      'Job opening management with search and status',
      'Applicant tracking with search and per-stage status',
      'Pipeline summary: total applicants, shortlisted, interview stage, hired',
      'Export applicant data',
      'Authenticated admin access'
    ],
    repoLinks: [
      { label: 'Source', url: 'https://github.com/Farizptr/rekrutmen' }
    ],
    featured: true
  },
  {
    id: 'gepo',
    title: 'Gepo Energy',
    subtitle: 'Company profile website for a solar roof tile company',
    categories: ['web'],
    images: [
      '/projects/gepo/gepo1.webp',
      '/projects/gepo/gepo2.webp',
      '/projects/gepo/gepo3.webp'
    ],
    role: 'Frontend Developer',
    description: 'A company profile website for Gepo Energy, a renewable energy company whose main product is Genting Photovoltaic (GEPO): IoT-enabled solar roof tiles with a self-cleaning glass layer. The site introduces the company and its products, legal documents, completed projects, and customer testimonials, and lets visitors contact the team or subscribe for updates.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Lucide Icons'],
    features: [
      'Hero section with impact stats: green energy, CO₂ avoided, trees planted',
      'About section with product video',
      'Product, legal, and project showcase sections',
      'Testimonial carousel',
      'Contact details and newsletter sign-up',
      'Responsive layout'
    ],
    liveUrl: 'https://gepo-liard.vercel.app',
    repoLinks: [
      { label: 'Source', url: 'https://github.com/Farizptr/gepo' }
    ],
    featured: true
  },
  {
    id: 'dormihub',
    title: 'DormiHub',
    subtitle: 'Booking website for a smart student dormitory',
    categories: ['web'],
    images: [
      '/projects/dormihub/dormi4.webp',
      '/projects/dormihub/dormi3.webp',
      '/projects/dormihub/dormi2.webp'
    ],
    period: 'Academic Project - 2023',
    role: 'Full Stack Developer',
    description: 'A booking website for a smart student dormitory. Students can explore the facilities on the landing page, log in, and register for a room by submitting their details, student ID, check-in date, and supporting documents. Built with Next.js and TypeScript, with an Express API and MongoDB for storing registrations and uploaded files.',
    technologies: ['Next.js 14', 'TypeScript', 'Express', 'MongoDB (Mongoose)', 'Multer'],
    features: [
      'Landing page presenting dormitory facilities and benefits',
      'User login',
      'Room registration with student ID and check-in date',
      'Supporting document upload',
      'Toast notifications for form feedback',
      'Photo gallery page'
    ],
    liveUrl: 'https://dormi-hub.vercel.app',
    repoLinks: [
      { label: 'Source', url: 'https://github.com/Farizptr/dormi-hub' }
    ],
    featured: false
  },
  {
    id: 'spotpark',
    title: 'SpotPark',
    subtitle: 'Parking slot reservation for web and mobile',
    categories: ['web', 'mobile'],
    images: [
      '/projects/spotpark/spotpark3.webp',
      '/projects/spotpark/spotpark1.webp',
      '/projects/spotpark/spotpark2.webp'
    ],
    period: 'Academic Project - 2024',
    role: 'Web & Mobile Developer',
    description: 'A parking reservation app. Drivers enter their license plate, pick a free slot from the parking map, and get a confirmation that their spot is secured. The web version is built with Next.js and the mobile version with Expo and React Native, both sharing a Firebase backend.',
    technologies: ['Next.js 14', 'React Native (Expo)', 'Firebase', 'Tailwind CSS', 'NativeWind'],
    features: [
      'Check-in by license plate number',
      'Slot map showing available, occupied, and selected slots',
      'Slot reservation with confirmation screen',
      'Shared Firebase backend for web and mobile',
      'Mobile app with stack navigation'
    ],
    liveUrl: 'https://spot-park.vercel.app',
    repoLinks: [
      { label: 'Web source', url: 'https://github.com/Farizptr/SpotPark' },
      { label: 'Mobile source', url: 'https://github.com/Farizptr/SpotPark-Mobile' }
    ],
    featured: false
  },
  {
    id: 'pqms',
    title: 'Patient Queue Management System',
    subtitle: 'Mobile-first hospital queue and appointment app',
    categories: ['mobile'],
    images: [
      '/projects/pqms/pqms-cover.webp',
      '/projects/pqms/pqms1.webp',
      '/projects/pqms/pqms2.webp',
      '/projects/pqms/pqms3.webp'
    ],
    description: 'A mobile-first app for PQMS Hospital that lets patients check the live queue for each doctor and specialization, review their appointments, and manage their profile, so they spend less time waiting at the hospital.',
    features: [
      'Home screen with quick access to specializations, appointments, live queue, and feedback',
      'Live queue by specialization showing each doctor\'s current number',
      'Appointment check',
      'Patient feedback',
      'Profile, saved addresses, and password management'
    ],
    featured: false
  },
  {
    id: 'loaknow',
    title: 'LoakNow',
    subtitle: 'Mobile marketplace for secondhand goods',
    categories: ['mobile'],
    images: [
      '/projects/loaknow/loaknow-cover.webp',
      '/projects/loaknow/loaknow1.webp',
      '/projects/loaknow/loaknow-2.webp',
      '/projects/loaknow/loaknow-3.webp'
    ],
    period: 'Apr 2024 - Jun 2024',
    role: 'Mobile Developer (team of 3)',
    description: 'A mobile marketplace for buying and selling secondhand items, built as a team of three with Expo, React Native, and Firebase. Users sign up, browse and buy items, and request to sell a product by uploading photos or videos and filling in its details, category, price, stock, condition, and whether it is a dangerous item.',
    technologies: ['React Native', 'Expo', 'Firebase', 'NativeWind', 'React Navigation', 'Formik'],
    features: [
      'Email login and sign-up',
      'Sell request form with photo and video upload',
      'Product details with category, price, stock, and condition percentage',
      'Dangerous item flag',
      'Transaction history',
      'Profile, support, and settings'
    ],
    repoLinks: [
      { label: 'Source', url: 'https://github.com/adrianfhr/LoakNow' }
    ],
    featured: false
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (id: string | undefined) =>
  projects.find((project) => project.id === id);

export const PROJECT_FILTERS: { key: 'all' | ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'backend-ai', label: 'Backend & AI' },
];
