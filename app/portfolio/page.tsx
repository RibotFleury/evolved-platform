'use client'

import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    logo: '/logos/njiahdaah.png',
    logoBg: '#ffffff',
    tags: ['Hôtellerie', 'Cameroun'],
    title: 'Njiah Daah Hotel',
    desc: 'Site vitrine élégant pour un établissement hôtelier au Cameroun. Design immersif, galerie de photos, présentation des chambres et services, et formulaire de réservation.',
    tech: ['Ruby on Rails', 'Render.com', 'PostgreSQL'],
    url: 'https://njiahdaahhotel.com/',
  },
  {
    logo: '/logos/celux.png',
    logoBg: '#000000',
    tags: ['Rénovation', 'Canada'],
    title: 'Celux Renovation',
    desc: 'Site web professionnel pour une entreprise de rénovation résidentielle et commerciale basée au Canada. Portfolio des réalisations, devis en ligne et galerie de projets.',
    tech: ['Next.js', 'Vercel', 'Tailwind CSS'],
    url: 'https://www.celuxrenovation.ca/',
  },
  {
    logo: '/logos/longcourrier.jpeg',
    logoBg: '#ffffff',
    tags: ['Transport', 'Cameroun'],
    title: 'LongCourrier SARL',
    desc: 'Plateforme web pour une entreprise de construction, immobilier et de gestion comptable active à Bafoussam, Douala et Yaoundé. Présentation des services, projets réalisés et formulaire de contact.',
    tech: ['Next.js', 'Namecheap', 'Vercel'],
    url: 'https://www.lclongcourrier.com/',
  },
  {
    logo: '/logos/nettoya.svg',
    logoBg: '#0a1628',
    tags: ['Services', 'Cameroun'],
    title: 'Nettoya',
    desc: 'Site web et stratégie digitale complète pour une startup de nettoyage professionnel à Douala. Branding, présence Facebook, et système de réservation en ligne.',
    tech: ['Next.js', 'Vercel', 'Facebook Ads'],
    url: 'https://www.nettoya.cam/',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ padding: '120px 5% 40px', textAlign: 'center' }}>
        <div className="section-tag">Portfolio</div>
        <h1 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px' }}>
          Nos <span style={{ color: '#60a5fa' }}>réalisations</span>
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--gray)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
          Chaque projet est une histoire de confiance bâtie et de croissance accompagnée.
        </p>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '20px 5% 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'var(--dark2)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s',
                textDecoration: 'none',
                color: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = 'rgba(20,93,161,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: p.logoBg, position: 'relative', padding: '24px' }}>
                <Image src={p.logo} alt={p.title} fill style={{ objectFit: 'contain', padding: '20px' }} />
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(20,93,161,0.9)', borderRadius: '6px', padding: '4px 8px', fontSize: '11px', color: '#fff', fontWeight: 700 }}>
                  Voir le site ↗
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ background: 'rgba(20,93,161,0.15)', color: '#60a5fa', borderRadius: '6px', padding: '3px 10px', fontSize: '11px', fontWeight: 700 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.3px' }}>{p.title}</h2>
                <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.7, marginBottom: '18px' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '3px 10px', fontSize: '11px', color: 'var(--gray2)', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <p style={{ color: 'var(--gray)', fontSize: '14px', marginBottom: '20px' }}>
            Votre projet pourrait être le prochain ici.
          </p>
          <Link href="/contact" className="btn-primary">Démarrer votre projet →</Link>
        </div>
      </section>
    </>
  )
}
