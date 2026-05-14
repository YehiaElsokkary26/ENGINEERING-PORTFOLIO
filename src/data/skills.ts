export interface SkillDomain {
  id: string;
  icon: string;
  title: string;
  accentColor: string;
  skills: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: 'electrical',
    icon: '⚡',
    title: 'Electrical',
    accentColor: '#4F6EF7',
    skills: ['PCB Design', 'Embedded C/C++', 'FPGA / Verilog', 'Signal Processing', 'Altium Designer', 'KiCad', 'Power Electronics'],
  },
  {
    id: 'software',
    icon: '🧠',
    title: 'Software',
    accentColor: '#8B5CF6',
    skills: ['TypeScript', 'Python', 'Rust', 'Go', 'React / Next.js', 'Node.js', 'GraphQL', 'WebGL / Three.js'],
  },
  {
    id: 'systems',
    icon: '🤖',
    title: 'Systems',
    accentColor: '#10d4a0',
    skills: ['RTOS / FreeRTOS', 'Linux Kernel', 'Docker / K8s', 'Distributed Systems', 'ROS 2', 'Apache Kafka', 'eBPF'],
  },
  {
    id: 'engineering',
    icon: '📐',
    title: 'Engineering',
    accentColor: '#E07B39',
    skills: ['SolidWorks / CAD', 'FEA Simulation', 'Rapid Prototyping', 'System Architecture', 'Technical Writing', 'DFM / DFA'],
  },
];
