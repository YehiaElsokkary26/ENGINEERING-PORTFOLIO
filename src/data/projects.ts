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
}

export const projects: Project[] = [
  {
    id: 'orbital',
    number: '01',
    title: 'Orbital',
    tagline: 'Distributed sensor network at scale.',
    category: 'EMBEDDED SYSTEMS',
    description:
      'A fault-tolerant mesh network of 400+ wireless sensor nodes deployed across industrial infrastructure. Real-time telemetry, sub-10ms latency, and self-healing topology.',
    challenge:
      'Industrial environments create extreme RF interference. Traditional star topology collapses under node failure. The system needed to survive partial outages while maintaining data integrity across all nodes.',
    solution:
      'Designed a custom TDMA-based mesh protocol over 900MHz LoRa radios. Each node runs a lightweight RTOS scheduler with automatic re-routing via Dijkstra on link-state updates. Edge-aggregation nodes compress telemetry before forwarding to a Kafka cluster.',
    tech: ['Embedded C', 'FreeRTOS', 'LoRa', 'Kafka', 'Python', 'Grafana', 'PCB Design'],
    year: 2024,
    duration: '8 months',
    role: 'Lead Engineer',
    gradient: ['#0d1b4b', '#1a0533'],
    accentColor: '#4F6EF7',
    results: [
      { label: 'Sensor Nodes', value: '400+' },
      { label: 'Uptime', value: '99.97%' },
      { label: 'Latency', value: '<10ms' },
    ],
  },
  {
    id: 'pulse',
    number: '02',
    title: 'Pulse',
    tagline: 'Real-time data pipeline for live analytics.',
    category: 'SYSTEMS ENGINEERING',
    description:
      'A high-throughput event streaming platform processing 2M+ events/sec with sub-50ms end-to-end latency. Built for a fintech client tracking live market signals across 80 data feeds.',
    challenge:
      'Legacy batch pipelines introduced multi-second delays, making real-time trading decisions impossible. Backpressure during market volatility spikes caused cascading failures across downstream consumers.',
    solution:
      'Re-architected around Kafka Streams + Flink for stateful event processing. Implemented adaptive backpressure using credit-based flow control. Deployed on Kubernetes with horizontal pod autoscaling triggered by consumer lag metrics.',
    tech: ['Apache Kafka', 'Apache Flink', 'Kubernetes', 'Rust', 'Go', 'ClickHouse', 'Prometheus'],
    year: 2024,
    duration: '6 months',
    role: 'Systems Architect',
    gradient: ['#0a2218', '#0d1a2e'],
    accentColor: '#10d4a0',
    results: [
      { label: 'Events/sec', value: '2M+' },
      { label: 'E2E Latency', value: '<50ms' },
      { label: 'Cost Reduction', value: '60%' },
    ],
  },
  {
    id: 'drift',
    number: '03',
    title: 'Drift',
    tagline: 'Autonomous navigation for constrained environments.',
    category: 'ROBOTICS',
    description:
      'A full-stack autonomous navigation system for warehouse AMRs. Handles dynamic obstacle avoidance, multi-robot coordination, and path re-planning at 30Hz with no GPS.',
    challenge:
      'GPS-denied indoor environments require centimeter-level localisation. Dense warehouse layouts with moving humans and forklifts demand navigation decisions faster than human reaction time.',
    solution:
      'Fused LiDAR SLAM (Cartographer) with wheel odometry and IMU for robust localisation. Implemented DWA-based local planner with custom cost functions for pedestrian-aware navigation. Multi-robot coordination via a central fleet manager using auction-based task allocation.',
    tech: ['ROS 2', 'C++', 'Python', 'LiDAR SLAM', 'OpenCV', 'Docker', 'NVIDIA Jetson'],
    year: 2023,
    duration: '10 months',
    role: 'Robotics Engineer',
    gradient: ['#1a1205', '#0f0a1f'],
    accentColor: '#E07B39',
    results: [
      { label: 'Localisation Accuracy', value: '±2cm' },
      { label: 'Replanning Rate', value: '30Hz' },
      { label: 'Collision Rate', value: '0' },
    ],
  },
  {
    id: 'nexus',
    number: '04',
    title: 'Nexus',
    tagline: 'Where engineering teams converge.',
    category: 'WEB PLATFORM',
    description:
      'A collaborative engineering platform with live schematic editing, version-controlled simulation runs, and real-time multiplayer review sessions. Think Figma — for hardware teams.',
    challenge:
      'Engineering teams working on complex hardware projects lacked a unified collaboration layer. Design files lived in email threads. Review cycles took days. No single source of truth.',
    solution:
      'Built a CRDT-based collaborative editor using Yjs for conflict-free concurrent edits. Real-time presence via WebSockets. Simulation runs managed through a job queue (BullMQ) with progress streaming to clients. Schematic rendering via a custom WebGL canvas renderer.',
    tech: ['TypeScript', 'React', 'Yjs', 'WebSockets', 'Node.js', 'PostgreSQL', 'BullMQ', 'WebGL'],
    year: 2023,
    duration: '12 months',
    role: 'Full-Stack Lead',
    gradient: ['#110820', '#050e1f'],
    accentColor: '#8B5CF6',
    results: [
      { label: 'Review Cycle Time', value: '-80%' },
      { label: 'Active Teams', value: '120+' },
      { label: 'Concurrent Users', value: '500+' },
    ],
  },
];
