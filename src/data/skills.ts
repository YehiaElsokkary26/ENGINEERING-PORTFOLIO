export interface SkillDomain {
  id: string;
  icon: string;
  title: string;
  accentColor: string;
  skills: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: 'core',
    icon: '◆',
    title: 'Core',
    accentColor: '#4F6EF7',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'comfortable',
    icon: '◈',
    title: 'Comfortable',
    accentColor: '#8B5CF6',
    skills: ['Node.js', 'Express.js', 'SQL', 'REST APIs', 'JWT', 'Git / GitHub', 'Supabase', 'PostgreSQL / MySQL', 'Java', 'OOP', 'Database Design', 'Python'],
  },
  {
    id: 'familiar',
    icon: '◇',
    title: 'Familiar',
    accentColor: '#9090b0',
    skills: ['C', 'Pandas / NumPy', 'Arduino', 'Framer Motion', 'Figma', 'Agile / Scrum', 'Postman'],
  },
]
