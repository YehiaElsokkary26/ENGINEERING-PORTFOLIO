export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  tech: string[];
  year: number;
  duration: string;
  role: string;
  gradient: [string, string];
  accentColor: string;
  results: { label: string; value: string }[];
  image?: string;
  github?: string;
  live?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: 'nazamly',
    number: '01',
    title: 'NAZAMLY',
    tagline: 'Smart scheduling and productivity, built full-stack.',
    category: 'WEB APPLICATION',
    description:
      'A full-stack scheduling platform built with React, Node.js, Express.js, and Supabase — supporting task management, calendar scheduling, and team collaboration across mobile and desktop.',
    challenge:
      'Scheduling tools often sacrifice power for simplicity. Building one that handles team collaboration, real-time state, and secure access management without becoming complex required careful API and auth design from the ground up.',
    solution:
      'Built a RESTful API with JWT authentication and role-based access control (RBAC) on the backend. Designed a responsive Tailwind CSS frontend in React with Supabase for persistent data. Structured the full-stack architecture to support feature growth without rewrites.',
    tech: ['React', 'Node.js', 'Express.js', 'Supabase', 'REST API', 'JWT', 'Tailwind CSS'],
    year: 2026,
    duration: 'March – June 2026',
    role: 'Full-Stack Developer',
    gradient: ['#0a1628', '#0a1e12'],
    accentColor: '#10d4a0',
    github: 'https://github.com/YehiaElsokkary26/NAZAMLY---NEWEST-TRIAL',
    results: [
      { label: 'Auth', value: 'JWT + RBAC' },
      { label: 'Stack', value: 'React + Express' },
      { label: 'Status', value: 'Complete' },
    ],
  },
  {
    id: 'jackaroo',
    number: '02',
    title: 'Jackaroo',
    tagline: 'A classic board game, fully reimagined in Java.',
    category: 'JAVA APPLICATION',
    description:
      'A fully playable digital Jackaroo — built in Java using 15+ classes and all four OOP principles. Full 52-card engine supporting 4-player sessions, with 50+ test cases and zero critical bugs.',
    challenge:
      'Jackaroo has non-trivial mechanics: card-driven movement, marble collisions, safe zones, and multi-player turn management. Translating these physical rules into clean, testable code required careful object design before writing a single line.',
    solution:
      'Modeled the board, marbles, players, and card deck as distinct classes with clear responsibilities across 15+ classes. Implemented the full rule engine including special card effects and collision resolution. Validated correctness with 50+ test cases — zero critical bugs at submission.',
    tech: ['Java', 'OOP', 'Eclipse IDE', 'Game Logic', 'Unit Testing'],
    year: 2024,
    duration: 'Dec 2023 – May 2024',
    role: 'Developer',
    gradient: ['#12082a', '#0f0a1f'],
    accentColor: '#8B5CF6',
    results: [
      { label: 'Classes', value: '15+' },
      { label: 'Test Cases', value: '50+' },
      { label: 'Bugs', value: 'Zero critical' },
    ],
  },
  {
    id: 'hr-db',
    number: '03',
    title: 'HR Management System',
    tagline: 'Relational database design for real HR workflows.',
    category: 'DATABASE',
    description:
      'A web-based HR management system covering recruitment, employee records, and payroll modules — backed by a normalised MySQL database with 8 tables, dynamic search/filter, and form validation.',
    challenge:
      'HR data is inherently relational: employees belong to departments, managers oversee teams, salaries have history, and reports span multiple entities. Modeling this without redundancy or broken joins requires upfront schema discipline.',
    solution:
      'Designed a normalised MySQL schema with 8 tables covering all HR entities. Built recruitment, records, and payroll modules with dynamic search, filtering, and validated forms throughout. Kept business logic and data layers cleanly separated.',
    tech: ['JavaScript', 'HTML', 'CSS', 'MySQL', 'Database Design'],
    year: 2025,
    duration: 'March – May 2025',
    role: 'Developer & Database Designer',
    gradient: ['#0a1e12', '#0d1a2e'],
    accentColor: '#10d4a0',
    results: [
      { label: 'Stack', value: 'JS + SQL' },
      { label: 'Type', value: 'Full-Stack' },
      { label: 'Status', value: 'Complete' },
    ],
  },
  {
    id: 'filmmaking-portfolio',
    number: '04',
    title: "Yehia Elsokkary's Website",
    tagline: 'Cinematic personal portfolio for filmmaking & software.',
    category: 'WEB DEVELOPMENT',
    description:
      'A cinematic personal portfolio website showcasing projects in filmmaking, photography, and software development. Built with JavaScript and HTML, featuring responsive modern UI/UX, smooth navigation, and visual storytelling.',
    challenge:
      'Creative portfolios must balance aesthetics with performance and discoverability. Every design decision — typography, spacing, image presentation — directly affects whether a viewer stays or leaves in the first few seconds.',
    solution:
      'Designed and developed from scratch with a focus on clean visual hierarchy and interactive design elements. Optimized layouts for personal branding and online presence, with smooth transitions and a responsive experience across all devices.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Responsive Design', 'UI/UX'],
    year: 2025,
    duration: 'March – May 2025',
    role: 'Developer & Designer',
    gradient: ['#110820', '#050e1f'],
    accentColor: '#8B5CF6',
    live: 'https://yehiaelsokkary.lovable.app/',
    results: [
      { label: 'Status', value: 'Live' },
      { label: 'Type', value: 'Personal' },
      { label: 'Stack', value: 'JS + HTML' },
    ],
  },
  {
    id: 'special-folio',
    number: '05',
    title: 'Special Folio',
    tagline: 'A collaborative platform built as part of a university software engineering team.',
    category: 'WEBSITE',
    description:
      'A full-stack portfolio platform with PHP/MySQL backend handling user authentication, profile management, and data storage — built as part of a university software engineering team.',
    challenge:
      'Coordinating a multi-person engineering team around a shared codebase requires alignment on conventions, tooling, and responsibilities before any useful code can be written.',
    solution:
      'Built the backend in PHP with MySQL — covering user auth flows, profile data management, and persistent storage. Collaborated in a structured team using version control workflows, modular design, and agile practices throughout.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    year: 2026,
    duration: 'March – May 2026',
    role: 'Team Member',
    gradient: ['#0a1628', '#0d1a2e'],
    accentColor: '#4F6EF7',
    github: 'https://github.com/Software-Engineering-Spring-2026/The-special-ones',
    results: [
      { label: 'Type', value: 'Team Project' },
      { label: 'Category', value: 'Website' },
      { label: 'Status', value: 'Complete' },
    ],
  },
  {
    id: 'cima',
    number: '06',
    title: 'CIMA',
    tagline: 'A cinematic student film platform for discovering and sharing student films.',
    category: 'WEB APPLICATION',
    description:
      'A cinematic student film platform for discovering and sharing student films. Built with a modern stack focused on performance and clean UI.',
    challenge:
      'Student film content is scattered across platforms not designed for it. Building a dedicated space that feels cinematic rather than generic required both product thinking and technical execution.',
    solution:
      'Built with React, TypeScript, and Supabase for a performant, type-safe full-stack experience. Focused on clean UI and fast content discovery as core product values from the start.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
    year: 2026,
    duration: '2026',
    role: 'Developer',
    gradient: ['#110820', '#0a1628'],
    accentColor: '#8B5CF6',
    github: 'https://github.com/YehiaElsokkary26/CIMA-',
    status: 'Work in Progress',
    results: [
      { label: 'Stack', value: 'React + Supabase' },
      { label: 'Status', value: 'WIP' },
    ],
  },
  {
    id: 'clubify',
    number: '07',
    title: 'CLUBIFY',
    tagline: 'A club management and discovery platform for university students.',
    category: 'WEB APPLICATION',
    description:
      'A club management and discovery platform for university students. Designed to simplify how students find, join, and engage with campus clubs through a unified interface.',
    challenge:
      'University students struggle to discover and engage with campus clubs due to fragmented information and no central management layer.',
    solution:
      'Designing a unified platform for club discovery and management, currently in active development with a focus on intuitive UX and scalable data architecture.',
    tech: ['React', 'TypeScript', 'Full-Stack'],
    year: 2026,
    duration: '2026',
    role: 'Developer',
    gradient: ['#0a1e12', '#0a1628'],
    accentColor: '#10d4a0',
    github: 'https://github.com/YehiaElsokkary26/CLUBIFY',
    status: 'Work in Progress',
    results: [
      { label: 'Stack', value: 'Full-Stack' },
      { label: 'Status', value: 'WIP' },
    ],
  },
];
