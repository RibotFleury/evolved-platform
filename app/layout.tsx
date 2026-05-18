import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EvolveD — Build trust. Drive growth.',
  description: 'Agence digitale basée à Montréal. Création de sites web professionnels pour PME et entrepreneurs. Solutions sur mesure pour bâtir votre crédibilité en ligne.',
  keywords: ['agence digitale', 'création site web', 'Montréal', 'PME', 'Next.js', 'web design'],
  authors: [{ name: 'EvolveD' }],
  openGraph: {
    title: 'EvolveD — Build trust. Drive growth.',
    description: 'Agence digitale basée à Montréal spécialisée dans la création de sites web professionnels.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
