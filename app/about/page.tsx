import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos — EvolveD',
  description: 'EvolveD est une agence digitale basée à Montréal avec une expertise pour l\'Afrique francophone. Notre mission : bâtir confiance et croissance.',
}

const values = [
  { icon: '🤝', title: 'Confiance avant tout', desc: 'Nous construisons des relations durables basées sur la transparence, la communication honnête et le respect des engagements.' },
  { icon: '🚀', title: 'Croissance orientée résultats', desc: 'Chaque décision est guidée par une question : est-ce que ça aide notre client à croître ? Pas de travail cosmétique.' },
  { icon: '💎', title: 'Excellence sans compromis', desc: 'La qualité n\'est pas négociable. Chaque ligne de code, chaque pixel de design reflète notre standard élevé.' },
  { icon: '🌍', title: 'Impact local, vision globale', desc: 'Nous servons des clients à Montréal et en Afrique. La diversité de nos expériences enrichit chaque projet.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '120px 5% 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div className="section-tag">Notre histoire</div>
            <h1 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '20px' }}>
              Une agence née de la conviction que la technologie transforme les destins
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.8, marginBottom: '16px' }}>
              EvolveD est une agence digitale basée à Montréal, fondée avec une mission claire : aider les entrepreneurs et les PME à bâtir une présence en ligne qui inspire confiance et génère de la croissance.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.8, marginBottom: '16px' }}>
              Nous croyons que chaque entreprise, qu'elle soit à Montréal ou à Douala, mérite des outils digitaux professionnels qui la positionnent à sa juste valeur sur le marché.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.8, marginBottom: '28px' }}>
              Notre approche combine expertise technique, sens du design et compréhension profonde des enjeux business de nos clients.
            </p>
            <Link href="/contact" className="btn-primary">Travaillons ensemble</Link>
          </div>

          <div style={{ background: 'var(--dark2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '36px' }}>
            <p style={{ fontSize: '13px', color: 'var(--gray)', marginBottom: '24px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Notre mission
            </p>
            <p style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)', letterSpacing: '-0.5px' }}>
              "Construire des présences digitales qui inspirent confiance et propulsent la croissance de nos clients."
            </p>
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <p style={{ fontSize: '13px', color: 'var(--gray)', marginBottom: '8px' }}>Basés à</p>
              <p style={{ fontSize: '16px', fontWeight: 700 }}>🇨🇦 Montréal, Canada</p>
              <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '4px' }}>Avec une expertise pour l'Afrique francophone</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
              {[
                { num: '4+', label: 'Projets livrés' },
                { num: '2', label: 'Marchés servis' },
                { num: '5', label: 'Services offerts' },
                { num: '100%', label: 'Clients satisfaits' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'rgba(20,93,161,0.1)', borderRadius: '10px', padding: '16px' }}>
                  <p style={{ fontSize: '24px', fontWeight: 800, color: '#60a5fa', letterSpacing: '-1px' }}>{s.num}</p>
                  <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '2px' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '0 5% 80px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div className="section-tag">Nos valeurs</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1 }}>
            Ce qui nous guide
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {values.map((v) => (
            <div key={v.title} style={{ background: 'var(--dark2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{v.icon}</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{v.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 5% 80px' }}>
        <div style={{ background: 'linear-gradient(135deg,var(--blue-dark) 0%,var(--dark2) 100%)', border: '1px solid rgba(20,93,161,0.3)', borderRadius: '24px', padding: '64px 5%', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>
            Prêt à bâtir quelque chose de solide ?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--gray)', marginBottom: '32px' }}>
            Discutons de votre projet. Première consultation gratuite, sans engagement.
          </p>
          <Link href="/contact" className="btn-primary">Démarrer maintenant</Link>
        </div>
      </section>
    </>
  )
}
