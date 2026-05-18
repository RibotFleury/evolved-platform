import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark2)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '48px 5% 32px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '40px',
        marginBottom: '40px',
      }}>
        <div>
          <Link href="/" style={{ fontSize: '20px', fontWeight: 800, color: 'var(--white)', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>
            Evolve<span style={{ color: 'var(--orange)' }}>D</span>
          </Link>
          <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.7 }}>
            Agence digitale basée à Laval, spécialisée dans la création de solutions web professionnelles pour les PME et entrepreneurs.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--gray)', marginBottom: '14px' }}>
            Services
          </h4>
          {['Création de site web', 'Refonte de site', 'Présence en ligne', 'Maintenance', 'Landing page'].map((s) => (
            <Link key={s} href="/services" style={{ display: 'block', fontSize: '13px', color: 'var(--gray)', marginBottom: '8px', textDecoration: 'none', transition: 'color 0.2s' }}>
              {s}
            </Link>
          ))}
        </div>

        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--gray)', marginBottom: '14px' }}>
            Entreprise
          </h4>
          {[
            { href: '/about', label: 'À propos' },
            { href: '/portfolio', label: 'Portfolio' },
            { href: '/contact', label: 'Contact' },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--gray)', marginBottom: '8px', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <p style={{ fontSize: '12px', color: 'var(--gray)' }}>
          © {new Date().getFullYear()} EvolveD. Tous droits réservés. Laval, Canada.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--blue-light)', fontWeight: 700, letterSpacing: '1px' }}>
          BUILD TRUST · DRIVE GROWTH
        </p>
      </div>
    </footer>
  )
}
