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
    icon: '{ }',
    title: 'Programming Languages',
    accentColor: '#4F6EF7',
    skills: ['Python', 'Java', 'JavaScript', 'C', 'SQL', 'Assembly', 'HTML / CSS'],
  },
  {
    id: 'technical',
    icon: '⚙',
    title: 'Technical Skills',
    accentColor: '#10d4a0',
    skills: [
      'OOP',
      'Data Structures',
      'Database Design',
      'REST APIs',
      'Full-Stack Development',
      'DLD',
      'Signal Processing',
      'Circuit Analysis',
      'Computer Organization',
      'UI/UX Design',
    ],
  },
  {
    id: 'tools',
    icon: '🛠',
    title: 'Tools & Platforms',
    accentColor: '#8B5CF6',
    skills: ['React', 'Node.js', 'GitHub', 'Arduino', 'Eclipse', 'Visual Studio', 'Agile / Scrum'],
  },
  {
    id: 'soft',
    icon: '★',
    title: 'Soft Skills',
    accentColor: '#E07B39',
    skills: [
      'Problem Solving',
      'Leadership',
      'Teamwork',
      'Communication',
      'Public Speaking',
      'Creativity',
      'Adaptability',
      'Analytical Thinking',
    ],
  },
];
