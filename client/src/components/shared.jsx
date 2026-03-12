import React, { useEffect, useRef, useState } from 'react'

export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}

export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  )
}

export function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.2em',
      textTransform: 'uppercase', color: 'var(--accent)',
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      marginBottom: '1rem',
    }}>
      <span style={{ width: '2rem', height: '1px', background: 'var(--accent)', display: 'inline-block' }} />
      {children}
    </div>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
      fontWeight: 400, letterSpacing: '0.02em', lineHeight: 1.05,
      marginBottom: '3rem',
    }}>
      {children}
    </h2>
  )
}

export function Tag({ children, color }) {
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: '0.68rem',
      color: color || 'var(--text)',
      background: color ? `rgba(56,189,248,0.08)` : 'rgba(255,255,255,0.04)',
      border: `1px solid ${color ? 'rgba(56,189,248,0.2)' : 'rgba(255,255,255,0.07)'}`,
      padding: '0.28rem 0.65rem', borderRadius: '2px',
      transition: 'all 0.2s', cursor: 'default',
      display: 'inline-block',
    }}
      onMouseEnter={e => { e.target.style.background = 'rgba(56,189,248,0.15)'; e.target.style.color = 'var(--accent)'; e.target.style.borderColor = 'var(--accent)' }}
      onMouseLeave={e => { e.target.style.background = color ? 'rgba(56,189,248,0.08)' : 'rgba(255,255,255,0.04)'; e.target.style.color = color || 'var(--text)'; e.target.style.borderColor = color ? 'rgba(56,189,248,0.2)' : 'rgba(255,255,255,0.07)' }}
    >
      {children}
    </span>
  )
}
