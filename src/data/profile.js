import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase, faEnvelope, faGraduationCap, faLaptop, faRocket
} from '@fortawesome/free-solid-svg-icons';
import { createFaIcon } from '../components/common/FaIcon.jsx';
// React Icons Imports
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub as FaGithubIcon, FaDocker, FaBootstrap, FaCubes, FaBook, FaBuilding, FaCogs, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiGit, SiTailwindcss, SiPostman, SiRedux, SiJquery, SiGraphql, SiVite   } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const BriefcaseBusiness = createFaIcon(faBriefcase);
const GraduationCap = createFaIcon(faGraduationCap);
const Laptop = createFaIcon(faLaptop);
const Mail = createFaIcon(faEnvelope);
const Rocket = createFaIcon(faRocket);

export const profile = {
  name: 'Enas Ashoush',
  role: 'Software Developer',
  intro:
    'Crafting high-performance websites with modern tech stacks, clean architecture, accessibility, and exceptional user experiences.',
  email: 'enasashoushc41@gmail.com',
  phone: '01150895891',
  github: 'https://github.com/enasashoush16',
  linkedin: 'https://www.linkedin.com/in/enas-ashoush-082835218',
  instagram: 'https://www.instagram.com/enas_ashoush?igsh=MXNvaG9xZTJqNng1Zg==',
  facebook: 'https://www.facebook.com/share/1E5CCHS4nn/',
  whatsapp: 'https://wa.me/qr/QEXFHDVGANW6I1',
  availability: 'Available for frontend and software roles',
};

export const socialLinks = [
  { label: 'Facebook', href: profile.facebook, icon: createFaIcon(faFacebookF) },
  { label: 'Instagram', href: profile.instagram, icon: createFaIcon(faInstagram) },
  { label: 'WhatsApp', href: profile.whatsapp, icon: createFaIcon(faWhatsapp) },
  { label: 'LinkedIn', href: profile.linkedin, icon: createFaIcon(faLinkedinIn) },
  { label: 'GitHub', href: profile.github, icon: createFaIcon(faGithub) },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const stats = [
  { label: 'Production projects', value: 15, suffix: '+' },
  { label: 'Certifications Taken', value: 10, suffix: '' },
  { label: 'Core stacks', value: 20, suffix: '+' },
  { label: 'Members led on HealthGuard Project', value: 5, suffix: '' }

];

// Refactored experience timelines - strictly professional roles
export const experience = [
  {
    type: 'Professional Experience',
    title: 'ERP Zoho Developer',
    place: 'TSK for Consulting',
    period: 'Mar 2026 – Present',
    icon: BriefcaseBusiness,
    points: [
      'Engineered a business-critical CRM-to-Books integration pipeline, eliminating processing backlogs and modernizing data synchronization workflows.',
      'Automated Sales Order and Purchase Order synchronization across Zoho CRM and Zoho Books, reducing manual data entry errors by 40%.',
      'Redesigned CRM modules using Zoho Canvas and Blueprints, improving lead-to-deal conversion speed by 15% through optimized user workflows.',
      'Developed advanced Deluge functions and Client Scripts to enforce data integrity, saving internal teams more than 10 hours of manual validation each week.',
    ],
  },
  {
    type: 'Professional Experience',
    title: 'Contact Center Agent',
    place: 'SAIB Bank',
    period: 'Sep 2024 – Mar 2026',
    icon: BriefcaseBusiness,
    points: [
      'Managed over 85 high-priority customer interactions daily while maintaining accurate real-time banking records.',
      'Collaborated with multiple bank departments to resolve complex financial cases efficiently.',
      'Consistently met service quality and response KPIs in a fast-paced financial environment.',
      'Won 3rd Place across the operation as a top KPI achiever and "Employee of the Month" ',
    ],
  },
  {
    type: 'Professional Experience',
    title: 'Sales & Social Media Moderator',
    place: 'Mategoo Travel Agency',
    period: 'Jul 2024 – Sep 2024',
    icon: BriefcaseBusiness,
    points: [
      'Surpassed monthly sales targets by achieving 115% of agency revenue goals.',
      'Built strong client relationships through persuasive communication and consultative sales techniques.',
      'Resolved customer inquiries across digital channels, improving response times by 30%.',
      'Supported the company\'s online presence by managing customer engagement and social media interactions.',
    ],
  },
  {
    type: 'Professional Experience',
    title: 'Tour Guide',
    place: 'Viaggio Travel Agency',
    period: 'Aug 2022 – Sep 2023',
    icon: BriefcaseBusiness,
    points: [
      'Coordinated corporate travel plans, hotel reservations, and internal trips for multiple clients simultaneously.',
      'Delivered high-quality customer service while managing complex travel logistics.',
      'Improved customer satisfaction metrics by 20% through effective planning and personalized support.',
      'Developed strong communication, organization, and problem-solving skills in a client-facing environment.',
    ],
  },
];

// New educationTimeline export - modern card layout entries
export const educationTimeline = [
  {
    type: 'Education',
    title: 'Bachelor of Business Information Systems',
    institution: 'Helwan University',
    period: '2024',
    image: '/Images/BIS.jpg',
    icon: GraduationCap,
    highlights: [
      'GPA: 3.62',
      'Excellence with Honour.',
      'Studied software development, databases, business analysis, and information systems.',
    ],
  },
  {
    type: 'Professional Diploma',
    title: 'Full-Stack Web Development Diploma',
    institution: 'Route IT Training Center',
    period: '2024',
    image: '/Images/Route.png',
    icon: Laptop,
    highlights: [
      'Intensive Full-Stack Web Development Diploma.',
      'Built applications using React.js, Node.js, Express.js, MongoDB, and REST APIs.',
      'Learned frontend architecture, backend , auhentication, deployment, and modern software engineering practices.',
    ],
  },
  {
    type: 'Professional Program',
    title: 'Digitera Program',
    institution: 'iCareer',
    period: '2026',
    image: '/Images/icareeregy_logo.jpg',
    icon: Rocket,
    highlights: [
      'Executed complete PRD-to-engineering software workflows.',
      'Used Jira for project management.',
      'Applied Cursor AI for AI-assisted engineering.',
      'Collaborated using Git and modern software development practices.',
    ],
  },
];

// Flat skills array with 20 items and specific React Icons and brand color codes
export const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
  { name: 'jQuery', icon: SiJquery, color: '#0769AD', category: 'Frontend' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Vite', icon: SiVite, color: '#764ABC', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', category: 'Frontend' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', category: 'Backend' },
  { name: 'REST API', icon: TbApi, color: '#0DCAF0', category: 'Backend' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Databases' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', category: 'Databases' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
  { name: 'GitHub', icon: FaGithubIcon, color: '#FFFFFF', category: 'Tools' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'Tools' },
  { name: 'Zoho CRM', icon: FaBuilding, color: '#E42527', category: 'ERP & Business Systems' },
  { name: 'Zoho Books', icon: FaBook, color: '#0F9D58', category: 'ERP & Business Systems' },
  { name: 'Zoho Creator', icon: FaDatabase, color: '#0066FF', category: 'ERP & Business Systems' }
];
