'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* Page Hero */}
      <section style={{ padding: '120px 5% 40px', textAlign: 'center' }}>
        <div className="section-tag">Contact</div>
        <h1 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px' }}>
          Parlons de <span style={{ color: '#60a5fa' }}>votre projet</span>
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--gray)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
          Première consultation gratuite. Réponse sous 24h (jours ouvrables).
        </p>
      </section>

      {/* Contact Grid */}
      <section style={{ padding: '20px 5% 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '52px', alignItems: 'start' }}>

          {/* Form */}
          <div style={{ background: 'var(--dark2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '36px' }}>
            {submitted && (
              <div style={{ background: 'rgba(20,93,161,0.2)', border: '1px solid rgba(20,93,161,0.4)', borderRadius: '10px', padding: '14px 16px', marginBottom: '20px', fontSize: '14px', color: '#60a5fa', fontWeight: 600 }}>
                ✅ Message envoyé ! Nous vous répondons sous 24h.
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray2)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Nom complet</label>
              <input name="name" value={form.name} onChange={handleChange} className="form-input" type="text" placeholder="Jean-Marie Dupont" />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray2)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="form-input" type="email" placeholder="jean@example.com" />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray2)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Entreprise</label>
              <input name="company" value={form.company} onChange={handleChange} className="form-input" type="text" placeholder="Mon Entreprise Inc." />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray2)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Service souhaité</label>
              <select name="service" value={form.service} onChange={handleChange} className="form-input">
                <option value="">— Choisissez un service —</option>
                <option>Création de site web</option>
                <option>Refonte de site existant</option>
                <option>Présence en ligne complète</option>
                <option>Maintenance mensuelle</option>
                <option>Landing page rapide</option>
                <option>Je ne sais pas encore</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray2)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Budget approximatif</label>
              <select name="budget" value={form.budget} onChange={handleChange} className="form-input">
                <option value="">— Sélectionner —</option>
                <option>Moins de 500 $</option>
                <option>500 $ – 1 000 $</option>
                <option>1 000 $ – 2 500 $</option>
                <option>2 500 $ +</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--gray2)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Décrivez votre projet</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="form-input" placeholder="Parlez-nous de votre activité, vos objectifs, ce que vous souhaitez accomplir..." style={{ resize: 'vertical', minHeight: '120px' }} />
            </div>

            <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '15px', textAlign: 'center' }}>
              Envoyer ma demande →
            </button>
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'var(--dark2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px' }}>
              <p style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>📍 Où nous trouver</p>

              {[
                { icon: '📧', label: 'Email', val: 'hello@evolved.agency' },
                { icon: '📍', label: 'Localisation', val: 'Laval, Québec, Canada' },
                { icon: '⏱️', label: 'Délai de réponse', val: 'Sous 24h (jours ouvrables)' },
              ].map((c) => (
                <div key={c.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(20,93,161,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--gray)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{c.label}</p>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>{c.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(135deg,rgba(20,93,161,0.2),rgba(249,115,22,0.08))', border: '1px solid rgba(20,93,161,0.3)', borderRadius: '20px', padding: '28px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.3px' }}>
                Consultation gratuite
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.7 }}>
                Pas sûr de ce dont vous avez besoin ? Pas de problème. Contactez-nous et nous vous guiderons vers la meilleure solution pour votre budget et vos objectifs.
              </p>
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <p style={{ fontSize: '12px', color: 'var(--gray)', marginBottom: '8px', fontWeight: 600 }}>CE QUE VOUS OBTENEZ</p>
                {['Analyse de vos besoins', 'Recommandation personnalisée', 'Devis détaillé', 'Zéro engagement'].map((item) => (
                  <p key={item} style={{ fontSize: '13px', color: 'var(--white)', marginBottom: '6px' }}>✅ {item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
