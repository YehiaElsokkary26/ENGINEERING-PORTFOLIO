import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Shield, Camera, Film, TrendingUp, Building2 } from 'lucide-react'

const ENGINEERING = [
  {
    company: 'CYSHEILD',
    role: 'Cyber Security & AI Intern',
    period: 'July 2025 – August 2025',
    accentColor: '#4F6EF7',
    icon: Shield,
    bullets: [
      'Completed intensive hands-on training in AI-powered threat detection, working directly alongside active industry security professionals.',
      'Applied Pandas and NumPy to preprocess security log datasets for AI-based risk assessment workflows.',
      'Studied offensive and defensive security frameworks — protocols, anomaly detection, risk assessment, and incident response — in a structured professional environment.',
    ],
    tags: ['Cybersecurity', 'AI', 'Pandas', 'NumPy', 'Anomaly Detection', 'Risk Assessment'],
  },
]

const MARKETING = [
  {
    company: 'ELARABY',
    role: 'Summer Internship Trainee',
    period: 'Aug 2025 – Sept 2025',
    accentColor: '#10d4a0',
    icon: TrendingUp,
    bullets: [
      'Executed social media campaigns and content planning within a structured corporate marketing department at one of Egypt\'s largest electronics companies.',
      'Developed hands-on skills in audience targeting, brand positioning, and campaign coordination inside a large-scale business environment.',
    ],
    tags: ['Marketing', 'Social Media', 'Branding', 'Content Planning'],
  },
  {
    company: 'KLEAN CORP',
    role: 'Lead Photographer & Content Creator',
    period: 'Sept 2023 – Present',
    accentColor: '#8B5CF6',
    icon: Camera,
    bullets: [
      'Serve as sole visual content lead — conceiving, shooting, and editing all photo and video assets for the brand\'s social media and marketing campaigns.',
      'Deliver cinematic photo/video production across ongoing campaigns, from initial concept through final cut and platform-ready export.',
    ],
    tags: ['Photography', 'Video Editing', 'Content Creation', 'Social Media'],
  },
  {
    company: 'FILQAHERA',
    role: 'Multimedia Intern',
    period: 'July 2024 – Sept 2025',
    accentColor: '#8B5CF6',
    icon: Film,
    bullets: [
      'Produced short-form video content (Reels, TikToks) as a core member of the Multimedia Team, contributing directly to the brand\'s content pipeline.',
      'Raised visual production standards across the brand\'s social channels by introducing a more cinematic shooting and editing approach.',
      'Drove consistent audience growth through regular high-quality content drops that improved both aesthetic coherence and engagement rates.',
    ],
    tags: ['Video Production', 'Reels', 'TikTok', 'Social Media', 'Content Creation'],
  },
  {
    company: 'Shoof El Roof Creative Space',
    role: 'Co-Founder',
    period: 'July 2025',
    accentColor: '#10d4a0',
    icon: Building2,
    bullets: [
      'Co-founded a creative production studio from scratch — led client acquisition, contract negotiation, and end-to-end campaign production.',
      'Established the studio\'s visual identity and creative direction, building a brand and pitching process from the ground up.',
    ],
    tags: ['Entrepreneurship', 'Campaigns', 'Client Relations', 'Social Media'],
  },
]

function ExpCard({ exp }: { exp: typeof ENGINEERING[number] }) {
  const Icon = exp.icon
  return (
    <motion.div
      className="exp-card rounded-2xl p-6 md:p-10"
      style={{
        background: 'rgba(14,14,26,0.7)',
        backdropFilter: 'blur(14px)',
        border: `1px solid ${exp.accentColor}20`,
        borderLeft: `3px solid ${exp.accentColor}`,
      }}
      whileHover={{ y: -4, boxShadow: `0 8px 40px ${exp.accentColor}22` }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-7">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${exp.accentColor}12`, border: `1px solid ${exp.accentColor}30` }}
        >
          <Icon size={20} color={exp.accentColor} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
            <div>
              <h3
                className="text-lg md:text-xl font-bold mb-1 leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                {exp.company}
              </h3>
              <p className="text-sm font-medium" style={{ color: exp.accentColor, fontFamily: 'var(--font-body)' }}>
                {exp.role}
              </p>
            </div>
            <span
              className="inline-flex items-center px-4 py-2 rounded-full text-xs whitespace-nowrap self-start"
              style={{
                fontFamily: 'var(--font-body)',
                background: `${exp.accentColor}12`,
                border: `1px solid ${exp.accentColor}25`,
                color: exp.accentColor,
              }}
            >
              {exp.period}
            </span>
          </div>

          <ul className="flex flex-col gap-4 mb-7">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-base" style={{ color: 'var(--text-body)' }}>
                <span
                  className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: exp.accentColor }}
                />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2.5">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 rounded-full text-xs whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-muted)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.exp-card', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      id="experience"
      ref={containerRef}
      className="section-padding"
      style={{ background: 'var(--bg-void)' }}
    >
      <div className="container-wide">
        <div className="mb-10">
          <p className="section-tag mb-4">Experience</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Work in the field.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-muted)' }}>
            Real-world experience applying skills in professional settings.
          </p>
        </div>

        {/* Engineering Related */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
          <span className="section-tag">Engineering Related</span>
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        </div>

        <div className="flex flex-col gap-7">
          {ENGINEERING.map((exp) => <ExpCard key={exp.company} exp={exp} />)}
        </div>

        {/* Other */}
        <div className="flex items-center gap-4 my-10">
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
          <span className="section-tag">Other</span>
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        </div>

        <div className="flex flex-col gap-7">
          {MARKETING.map((exp) => <ExpCard key={exp.company} exp={exp} />)}
        </div>
      </div>
    </section>
  )
}
