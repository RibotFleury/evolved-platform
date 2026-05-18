'use client'

import Link from 'next/link'
import Image from 'next/image'

const services = [
  { icon: '🌐', title: 'Création de site web', desc: "Un site professionnel, rapide et optimisé qui reflète votre identité et convertit vos visiteurs en clients.", price: 'À partir de 800 $CAD' },
  { icon: '🔄', title: 'Refonte de site existant', desc: "Votre site actuel ne vous représente plus ? Nous le modernisons pour qu'il soit à la hauteur de votre ambition.", price: 'À partir de 600 $CAD' },
  { icon: '📱', title: 'Présence en ligne complète', desc: "Site web + Google Business + réseaux sociaux configurés. Tout ce qu'il faut pour être trouvé et faire bonne impression.", price: 'À partir de 1 200 $CAD' },
  { icon: '🛡️', title: 'Maintenance mensuelle', desc: "Mises à jour, sécurité, sauvegardes et modifications mineures. Votre site reste performant pendant que vous gérez votre business.", price: 'À partir de 80 $CAD/mois' },
  { icon: '⚡', title: 'Landing page rapide', desc: "Une page percutante livrée en 5-7 jours pour lancer une offre, valider une idée ou promouvoir un événement.", price: 'À partir de 350 $CAD' },
]

const whyItems = [
  { icon: '🎯', title: 'Approche sur mesure', desc: 'Chaque projet est unique. Nous prenons le temps de comprendre votre business avant de coder.' },
  { icon: '⚡', title: 'Livraison rapide', desc: 'Des délais clairs et respectés. Votre site en ligne sans attendre des mois.' },
  { icon: '🤝', title: 'Accompagnement continu', desc: 'Nous restons disponibles après la livraison. Votre succès est notre priorité à long terme.' },
  { icon: '💡', title: 'Technologies modernes', desc: 'Next.js, React, performance optimisée. Des sites qui chargent vite et se positionnent bien sur Google.' },
]

const portfolioPrev = [
  { logo: '/logos/njiahdaah.png', logoBg: '#ffffff', tag: 'Hôtellerie', title: 'Njiah Daah Hotel', desc: 'Site vitrine pour un hôtel camerounais avec galerie et formulaire de réservation.', url: 'https://njiahdaahhotel.com/' },
  { logo: '/logos/celux.png', logoBg: '#000000', tag: 'Rénovation', title: 'Celux Renovation', desc: 'Présence en ligne moderne pour une entreprise de rénovation basée au Canada.', url: 'https://www.celuxrenovation.ca/' },
  { logo: '/logos/longcourrier.jpeg', logoBg: '#ffffff', tag: 'Transport', title: 'LongCourrier SARL', desc: 'Plateforme web pour une compagnie de transport inter-villes au Cameroun.', url: 'https://www.lclongcourrier.com/' },
  { logo: '/logos/nettoya.svg', logoBg: '#0a1628', tag: 'Services', title: 'Nettoya', desc: 'Site web et stratégie digitale pour une startup de nettoyage à Douala.', url: 'https://www.nettoya.cam/' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 5%', paddingTop: '70px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 70% 50%,rgba(20,93,161,0.25) 0%,transparent 70%),radial-gradient(ellipse 40% 40% at 20% 80%,rgba(249,115,22,0.08) 0%,transparent 60%)' }} />
        <div className="hero-grid" />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(20,93,161,0.15)', border: '1px solid rgba(20,93,161,0.4)', borderRadius: '100px', padding: '6px 16px', marginBottom: '28px', fontSize: '12px', fontWeight: 600, color: '#60a5fa', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <span className="animate-pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#60a5fa', display: 'inline-block' }} />
            Agence digitale · Montréal, Canada
          </div>

          <h1 style={{ fontSize: 'clamp(40px,5vw,68px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '20px' }}>
            Build trust.<br />
            <span style={{ color: 'var(--orange)' }}>Drive growth.</span>
          </h1>

          <p style={{ fontSize: '17px', color: 'var(--gray)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '520px', fontWeight: 400 }}>
            EvolveD transforme votre vision en présence digitale professionnelle. Des solutions web sur mesure pour les PME et entrepreneurs qui veulent être pris au sérieux.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/services" className="btn-primary">Découvrir nos services</Link>
            <Link href="/portfolio" className="btn-outline">Voir nos réalisations</Link>
          </div>

          <div style={{ display: 'flex', gap: '40px', marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { num: '4+', label: 'Projets livrés' },
              { num: '100%', label: 'Clients satisfaits' },
              { num: '5★', label: 'Services offerts' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1px' }}>
                  {s.num.replace('+','')}<span style={{ color: 'var(--orange)' }}>{s.num.includes('+') ? '+' : s.num.includes('%') ? '' : ''}</span>
                  {s.num === '100%' && <span style={{ color: 'var(--orange)' }}>%</span>}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--gray)', fontWeight: 500, marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="section-tag">Ce que nous faisons</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '12px' }}>
            Des services pensés pour <span style={{ color: '#60a5fa' }}>votre croissance</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--gray)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
            Des solutions concrètes pour établir votre crédibilité en ligne et attirer plus de clients.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {services.map((s) => (
            <div key={s.title} className="card-hover" style={{ background: 'var(--dark2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '28px', cursor: 'pointer' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(20,93,161,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', fontSize: '22px' }}>{s.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--white)' }}>{s.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.7 }}>{s.desc}</p>
              <p style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '12px', color: '#60a5fa', fontWeight: 600 }}>{s.price}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link href="/services" className="btn-primary">Voir tous les services →</Link>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: '0 5% 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '52px', alignItems: 'center' }}>
          <div>
            <div className="section-tag">Pourquoi EvolveD</div>
            <h2 style={{ fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '16px' }}>
              La confiance se <span style={{ color: 'var(--orange)' }}>construit</span>, la croissance se <span style={{ color: '#60a5fa' }}>mérite</span>
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.8 }}>
              Nous ne créons pas juste des sites web. Nous construisons des outils de croissance adaptés à votre réalité, que vous soyez PME au Québec ou entrepreneur de la diaspora africaine.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {whyItems.map((w) => (
              <div key={w.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(20,93,161,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px' }}>{w.icon}</div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>{w.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: '0 5% 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">Nos réalisations</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-1px' }}>
            Des projets qui parlent <span style={{ color: '#60a5fa' }}>d'eux-mêmes</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {portfolioPrev.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover"
              style={{ display: 'block', background: 'var(--dark2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: p.logoBg, position: 'relative', padding: '16px' }}>
                <Image src={p.logo} alt={p.title} fill style={{ objectFit: 'contain', padding: '16px' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ display: 'inline-block', background: 'rgba(20,93,161,0.15)', color: '#60a5fa', borderRadius: '6px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, marginBottom: '10px' }}>{p.tag}</span>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link href="/portfolio" className="btn-outline">Voir tout le portfolio →</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 5% 90px' }}>
        <div style={{ background: 'linear-gradient(135deg,var(--blue-dark) 0%,var(--dark2) 100%)', border: '1px solid rgba(20,93,161,0.3)', borderRadius: '24px', padding: '64px 5%', textAlign: 'center' }}>
          <div className="section-tag" style={{ marginBottom: '20px' }}>Prêt à démarrer ?</div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>
            Votre projet commence<br />avec une conversation
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--gray)', marginBottom: '32px' }}>
            Discutons de vos objectifs. Première consultation gratuite, sans engagement.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '15px', padding: '16px 36px' }}>
            Obtenir un devis gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
