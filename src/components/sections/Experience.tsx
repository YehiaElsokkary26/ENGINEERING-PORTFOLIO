import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Shield, Camera, Film, TrendingUp, Building2, Users } from 'lucide-react'
import type { ComponentType } from 'react'

interface Exp {
  company: string
  role: string
  period: string
  accentColor: string
  icon: ComponentType<{ size?: number; color?: string }>
  bullets: string[]
  tags: string[]
  image?: string
}

const ENGINEERING: Exp[] = [
  {
    company: 'CYSHEILD',
    role: 'Cyber Security & AI Intern',
    period: 'July 2025 – August 2025',
    accentColor: '#4F6EF7',
    icon: Shield,
    image: '/images/experience/cyshield.jpg',
    bullets: [
      'Participated in hands-on cybersecurity and AI-powered threat detection training led by industry professionals.',
      'Gained experience in threat analysis, security fundamentals, and AI-based anomaly detection systems.',
      'Learned security protocols, risk assessment techniques, and data protection best practices.',
    ],
    tags: ['Cybersecurity', 'AI', 'Threat Analysis', 'Risk Assessment', 'Data Protection'],
  },
]

const MARKETING: Exp[] = [
  {
    company: 'ELARABY',
    role: 'Summer Internship Trainee',
    period: 'Aug 2025 – Sept 2025',
    accentColor: '#E07B39',
    icon: TrendingUp,
    image: '/images/experience/elaraby.jpg',
    bullets: [
      'Learned social media marketing, branding, and audience engagement strategies.',
      'Assisted with marketing campaigns and content planning in a professional business environment.',
    ],
    tags: ['Marketing', 'Social Media', 'Branding', 'Content Planning'],
  },
  {
    company: 'KLEAN CORP',
    role: 'Photographer & Content Creator',
    period: 'Sept 2023 – Present',
    accentColor: '#8B5CF6',
    icon: Camera,
    bullets: [
      'Lead Photographer & Content Creator responsible for producing creative visual content for the brand.',
      'Captured and edited cinematic photo/video content for social media and marketing campaigns.',
    ],
    tags: ['Photography', 'Video Editing', 'Content Creation', 'Social Media'],
  },
  {
    company: 'FILQAHERA',
    role: 'Multimedia Intern',
    period: 'July 2024 – Sept 2025',
    accentColor: '#E07B39',
    icon: Film,
    bullets: [
      'Interned as part of the Multimedia Team, creating engaging Reels and TikToks.',
      "Contributed to enhancing the brand's social media presence through consistent video content.",
      'Helped boost engagement and improve page aesthetics by introducing creative, high-quality visuals.',
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
      'Co-founded a creative production space; created campaigns and negotiated deals with clients.',
      "Contributed to enhancing the brand's social media presence through consistent video content.",
      'Helped boost engagement and improve page aesthetics by introducing creative, high-quality visuals.',
    ],
    tags: ['Entrepreneurship', 'Campaigns', 'Client Relations', 'Social Media'],
  },
]

const VOLUNTEERING: Exp[] = [
  {
    company: 'Riseup Summit',
    role: 'Event Volunteer',
    period: '2025',
    accentColor: '#10d4a0',
    icon: Users,
    image: '/images/experience/riseup.jpg',
    bullets: [
      "Volunteered at one of the Middle East's largest startup and innovation summits.",
      'Supported event operations, logistics, and attendee experience across the venue.',
    ],
    tags: ['Volunteering', 'Events', 'Startups', 'Innovation'],
  },
  {
    company: 'SYNC Summit',
    role: 'Event Volunteer',
    period: '2025',
    accentColor: '#8B5CF6',
    icon: Users,
    image: '/images/experience/sync.jpg',
    bullets: [
      'Volunteered at SYNC Summit, a major creative and media industry conference.',
      'Contributed to team coordination and on-ground event support.',
    ],
    tags: ['Volunteering', 'Events', 'Media', 'Creative Industry'],
  },
]

function ExpCard({ exp }: { exp: Exp }) {
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

            {/* Period + optional photo thumbnail */}
            <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: `${exp.accentColor}12`,
                  border: `1px solid ${exp.accentColor}25`,
                  color: exp.accentColor,
                }}
              >
                {exp.period}
              </span>
              {exp.image && (
                <div
                  className="w-28 h-18 rounded-xl overflow-hidden flex-shrink-0"
                  style={{ border: `1px solid ${exp.accentColor}25` }}
                >
                  <img
                    src={exp.image}
                    alt={`${exp.company} — on-site photo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ display: 'block' }}
                  />
                </div>
              )}
            </div>
          </div>

          <ul className="flex flex-col gap-4 mb-7">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-body)' }}>
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
                className="px-3 py-1 rounded-full text-xs whitespace-nowrap"
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
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
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

        {/* Volunteering */}
        <div className="flex items-center gap-4 my-10">
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
          <span className="section-tag">Volunteering</span>
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        </div>

        <div className="flex flex-col gap-7">
          {VOLUNTEERING.map((exp) => <ExpCard key={exp.company} exp={exp} />)}
        </div>
      </div>
    </section>
  )
}
