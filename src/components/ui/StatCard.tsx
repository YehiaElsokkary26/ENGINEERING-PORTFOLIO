import { useRef, useEffect, useState } from 'react'

interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [displayed, setDisplayed] = useState('0')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const num = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (isNaN(num)) { setDisplayed(value); return }
    const suffix = value.replace(/[0-9]/g, '')
    let current = 0
    const steps = 40
    const stepVal = num / steps
    const id = setInterval(() => {
      current = Math.min(current + stepVal, num)
      setDisplayed(Math.floor(current) + suffix)
      if (current >= num) clearInterval(id)
    }, 28)
    return () => clearInterval(id)
  }, [started, value])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1.5 px-3 py-4 rounded-xl"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      <span
        className="text-4xl font-bold"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--glow-primary)' }}
      >
        {displayed}
      </span>
      <span
        className="text-xs uppercase label-tag"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        {label}
      </span>
    </div>
  )
}
