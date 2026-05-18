'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'À propos' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      padding: '0 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '70px',
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <Link href="/" style={{
        fontSize: '22px',
        fontWeight: 800,
        color: 'var(--white)',
        letterSpacing: '-0.5px',
        textDecoration: 'none',
      }}>
        Evolve<span style={{ color: 'var(--orange)' }}>D</span>
      </Link>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: pathname === link.href ? 'var(--white)' : 'var(--gray)',
              fontSize: '13px',
              fontWeight: 500,
              padding: '8px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textDecoration: 'none',
              background: pathname === link.href ? 'rgba(255,255,255,0.08)' : 'transparent',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          style={{
            background: 'var(--orange)',
            color: 'var(--white)',
            fontSize: '13px',
            fontWeight: 700,
            padding: '8px 18px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
