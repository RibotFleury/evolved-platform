'use client'

import Link from 'next/link'

const services = [
  {
    icon: '🌐',
    title: 'Création de site web',
    subtitle: 'Notre service phare',
    desc: 'Un site web professionnel conçu sur mesure pour votre activité. Design moderne, expérience utilisateur optimisée, compatible mobile et bien positionné sur Google. Nous gérons tout : design, développement, mise en ligne.',
    features: ['Design sur mesure', 'Compatible mobile', 'SEO de base', 'Formulaire de contact', 'Google Analytics', 'Livraison en 2-3 semaines'],
    price: '800',
    period: 'CAD · projet',
    cta: 'Demander un devis',
  },
  {
    icon: '🔄',
    title: 'Refonte de site existant',
    subtitle: 'Modernisez votre image',
    desc: 'Votre site web date un peu et ne reflète plus votre professionnalisme ? Nous le refondons complètement tout en préservant votre contenu existant et votre référencement acquis.',
    features: ['Audit complet', 'Migration de contenu', 'Nouveau design', 'Performance améliorée', 'Livraison en 2 semaines'],
    price: '600',
    period: 'CAD · projet',
    cta: 'Demander un devis',
  },
  {
    icon: '📱',
    title: 'Présence en ligne complète',
    subtitle: 'Package tout-en-un',
    desc: 'Le package idéal pour les entrepreneurs qui démarrent ou qui veulent tout centraliser. Site web + fiche Google My Business optimisée + configuration des pages réseaux sociaux. Une image cohérente partout.',
    features: ['Site web complet', 'Google My Business', 'Facebook / Instagram', 'Cohérence visuelle', 'Formation incluse'],
    price: '1 200',
    period: 'CAD · package',
    cta: 'Demander un devis',
  },
  {
    icon: '🛡️',
    title: 'Maintenance mensuelle',
    subtitle: 'Tranquillité d\'esprit',
    desc: 'Votre site a besoin d\'attention continue pour rester performant et sécurisé. Nous prenons en charge les mises à jour, la sécurité, les sauvegardes et les petites modifications mensuelles.',
    features: ['Mises à jour régulières', 'Sauvegardes hebdo', 'Surveillance sécurité', '2h de modifications/mois', 'Rapport mensuel'],
    price: '80',
    period: 'CAD · mois',
    cta: 'S\'abonner',
  },
  {
    icon: '⚡',
    title: 'Landing page rapide',
    subtitle: 'Lancez vite, testez vite',
    desc: 'Une page unique, percutante et optimisée pour la conversion. Idéale pour lancer une offre promotionnelle, valider une idée business ou promouvoir un événement. Livraison en 5-7 jours.',
    features: ['1 page optimisée', 'Formulaire de capture', 'Compatible mobile', 'Livraison en 5-7 jours'],
    price: '350',
    period: 'CAD · projet',
    cta: 'Commander',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ padding: '120px 5% 40px', textAlign: 'center' }}>
        <div className="section-tag">Nos services</div>
        <h1 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px' }}>
          Des solutions pour chaque <span style={{ color: '#60a5fa' }}>étape</span>
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--gray)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
          Que vous partiez de zéro ou souhaitiez améliorer ce qui existe, nous avons la solution adaptée à votre réalité et votre budget.
        </p>
      </section>

      {/* Services Detail */}
      <section style={{ padding: '20px 5% 60px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: 'var(--dark2)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: '36px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                alignItems: 'start',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(20,93,161,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(20,93,161,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.3px' }}>{s.title}</h2>
                    <p style={{ fontSize: '13px', color: '#60a5fa', fontWeight: 600 }}>{s.subtitle}</p>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.75, marginBottom: '20px' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.features.map((f) => (
                    <span key={f} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '5px 12px', fontSize: '12px', color: 'var(--gray2)', fontWeight: 500 }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'right', minWidth: '160px' }}>
                <p style={{ fontSize: '11px', color: 'var(--gray)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>À partir de</p>
                <p style={{ fontSize: '28px', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1px' }}>{s.price} $</p>
                <p style={{ fontSize: '12px', color: 'var(--gray)', marginBottom: '16px' }}>{s.period}</p>
                <Link href="/contact" className="btn-sm">{s.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 5% 80px' }}>
        <div style={{ background: 'linear-gradient(135deg,var(--blue-dark) 0%,var(--dark2) 100%)', border: '1px solid rgba(20,93,161,0.3)', borderRadius: '24px', padding: '64px 5%', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>
            Vous ne savez pas quel service choisir ?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--gray)', marginBottom: '32px' }}>
            Dites-nous simplement où vous en êtes. Nous vous conseillerons la meilleure option.
          </p>
          <Link href="/contact" className="btn-primary">Consultation gratuite</Link>
        </div>
      </section>
    </>
  )
}
