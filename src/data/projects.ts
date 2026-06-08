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
}

export const projects: Project[] = [
  {
    id: 'nazamly',
    number: '01',
    title: 'NAZAMLY',
    tagline: 'Smart scheduling and productivity, built full-stack.',
    category: 'WEB APPLICATION',
    description:
      'A smart scheduling and productivity web app built with React and Node.js. Designed to help users organize their time, manage tasks, and stay on top of deadlines through a clean, scalable full-stack platform.',
    challenge:
      'Productivity tools often trade simplicity for power. Building a scheduling app that feels intuitive while supporting rich backend logic — user accounts, persistent schedules, and real-time data — required careful full-stack design.',
    solution:
      'Built the frontend in React with a focus on clean UX and responsive layouts. Implemented Node.js backend systems for user data, scheduling logic, and database management. Designed the architecture to be scalable from the ground up, supporting growing feature sets without rewrites.',
    tech: ['React', 'Node.js', 'JavaScript', 'Database', 'Full-Stack'],
    year: 2026,
    duration: 'March – May 2026',
    role: 'Full-Stack Developer',
    gradient: ['#0a1628', '#0a1e12'],
    accentColor: '#10d4a0',
    results: [
      { label: 'Stack', value: 'React + Node' },
      { label: 'Type', value: 'Full-Stack' },
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
      'A fully playable digital adaptation of Jackaroo — the popular Middle Eastern board game — built entirely in Java. Complete game rules, turn-based logic, collision detection, and a graphical interface, all from scratch.',
    challenge:
      'Jackaroo has non-trivial mechanics: card-driven movement, marble collisions, safe zones, and multi-player turn management. Translating these physical rules into clean, bug-free code required careful design before writing a single line.',
    solution:
      'Applied object-oriented design to model the board, marbles, players, and card deck as distinct classes with clear responsibilities. Implemented the full rule engine including special card effects, collision resolution, and win-state detection. Iterated through play sessions to surface and fix edge cases.',
    tech: ['Java', 'OOP', 'Eclipse', 'Game Logic', 'Software Design'],
    year: 2025,
    duration: 'Dec 2024 – May 2025',
    role: 'Developer',
    gradient: ['#1a0f05', '#0f0a1f'],
    accentColor: '#E07B39',
    results: [
      { label: 'Language', value: 'Java' },
      { label: 'Pattern', value: 'OOP' },
      { label: 'Status', value: 'Complete' },
    ],
  },
  {
    id: 'hr-db',
    number: '03',
    title: 'HR Management System',
    tagline: 'Relational database design for real HR workflows.',
    category: 'DATABASE',
    description:
      'An HR management system built with Visual Studio and JavaScript, featuring integrated database management. Covers recruitment workflows, employee records, department structures, and organized data handling for scalable HR operations.',
    challenge:
      'HR data is inherently relational: employees belong to departments, managers oversee teams, salaries have history, and reports span multiple entities. Modeling this without redundancy or broken joins requires upfront schema discipline.',
    solution:
      'Developed backend logic and database structures in Visual Studio. Built features for recruitment workflows and employee management. Designed scalable data architecture with clean separation between business logic and storage layers.',
    tech: ['JavaScript', 'Visual Studio', 'SQL', 'Database Design', 'HR Systems'],
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
];
