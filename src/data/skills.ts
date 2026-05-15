export interface SkillDomain {
  id: string;
  icon: string;
  title: string;
  accentColor: string;
  skills: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: 'languages',
    icon: '💻',
    title: 'Languages',
    accentColor: '#4F6EF7',
    skills: ['Java', 'C', 'SQL', 'JavaScript', 'TypeScript', 'HTML / CSS'],
  },
  {
    id: 'web',
    icon: '🌐',
    title: 'Web',
    accentColor: '#8B5CF6',
    skills: ['React', 'Full-Stack Development', 'Frontend Development', 'Backend Development', 'Responsive Design'],
  },
  {
    id: 'database',
    icon: '🗄️',
    title: 'Database',
    accentColor: '#10d4a0',
    skills: ['SQL', 'Database Design', 'Schema Normalization', 'RDBMS', 'Query Optimization'],
  },
  {
    id: 'practices',
    icon: '🔧',
    title: 'Practices',
    accentColor: '#E07B39',
    skills: ['OOP', 'Git / GitHub', 'Problem Solving', 'Teamwork', 'Agile', 'Software Design'],
  },
];
