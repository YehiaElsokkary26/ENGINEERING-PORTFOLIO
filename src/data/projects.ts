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
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 'special-folio',
    number: '01',
    title: 'Special Folio',
    tagline: 'Where GUC students showcase their best work.',
    category: 'WEB PLATFORM',
    description:
      'A student project discovery platform built for the German University in Cairo (GUC). Students can browse, search, and publish academic projects in a centralized hub — replacing scattered links and hard-to-find work with one clean destination.',
    challenge:
      'Student projects at GUC lived in email threads, local drives, and disconnected course submissions. There was no shared space to discover what peers were building, or to surface completed work to recruiters and faculty.',
    solution:
      'Co-built a full-stack web platform across a 5-person team as part of a Software Engineering course. Implemented project listings, search and filtering, and a clean browsing interface. Coordinated using Git branching workflows and agile-style milestones to ship a working product within a single semester.',
    tech: ['Full-Stack Web', 'Git', 'Agile', 'Software Engineering', 'Teamwork'],
    year: 2026,
    duration: '1 Semester',
    role: 'Co-Developer',
    gradient: ['#0a1628', '#0d0a2e'],
    accentColor: '#4F6EF7',
    github: 'https://github.com/Software-Engineering-Spring-2026/The-special-ones',
    results: [
      { label: 'Team Size', value: '5+' },
      { label: 'Delivery', value: '1 Semester' },
      { label: 'Type', value: 'Group' },
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
    duration: '6 Weeks',
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
      'A SQL-based Human Resources Management System covering employee records, department hierarchies, payroll data, and reporting queries. Designed around normalization principles and realistic HR business logic.',
    challenge:
      'HR data is inherently relational: employees belong to departments, managers oversee teams, salaries have history, and reports span multiple entities. Modeling this without redundancy or broken joins requires upfront schema discipline.',
    solution:
      'Designed a normalized relational schema (3NF) covering employees, departments, roles, salaries, and managers. Wrote complex multi-table SQL queries for common HR reports: headcount by department, average salary by role, manager-report chains, and hire-date range filters. Validated data integrity using constraint-based testing.',
    tech: ['SQL', 'Database Design', 'Schema Normalization', 'RDBMS', 'Query Writing'],
    year: 2025,
    duration: '3 Weeks',
    role: 'Database Designer',
    gradient: ['#0a1e12', '#0d1a2e'],
    accentColor: '#10d4a0',
    results: [
      { label: 'Normal Form', value: '3NF' },
      { label: 'Language', value: 'SQL' },
      { label: 'Status', value: 'Complete' },
    ],
  },
  {
    id: 'filmmaking-portfolio',
    number: '04',
    title: 'Filmmaking Portfolio',
    tagline: 'A live creative showcase for cinematography work.',
    category: 'WEB DEVELOPMENT',
    description:
      'A personal portfolio website designed and deployed to showcase filmmaking and cinematography work. Clean layout, responsive design, and fast load performance — built to function as a public-facing creative profile.',
    challenge:
      'Creative portfolios must balance aesthetics with performance and discoverability. Every design decision — typography, spacing, image presentation — directly affects whether a viewer stays or leaves in the first few seconds.',
    solution:
      'Built using React-based modern web tooling. Focused on responsive layout, clean visual hierarchy, and a minimal interface that puts the work front and center. Deployed as a live, publicly accessible site that serves as a professional creative calling card.',
    tech: ['React', 'TypeScript', 'Web Development', 'Responsive Design', 'Deployment'],
    year: 2025,
    duration: '2 Weeks',
    role: 'Developer & Designer',
    gradient: ['#110820', '#050e1f'],
    accentColor: '#8B5CF6',
    github: 'https://github.com/YehiaElsokkary26/Yehia_Elsokkary_Filmmaking',
    live: 'https://yehiaelsokkary.lovable.app/',
    results: [
      { label: 'Status', value: 'Live' },
      { label: 'Type', value: 'Personal' },
      { label: 'Stack', value: 'React' },
    ],
  },
];
