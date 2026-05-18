# EvolveD — Site Web

Agence digitale basée à Montréal.  
**"Build trust. Drive growth."**

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : CSS Variables + Tailwind CSS (utilitaires)
- **Police** : Montserrat (Google Fonts)
- **Déploiement** : Vercel

## Structure du projet

```
evolved/
├── app/
│   ├── layout.tsx          # Layout global (Navbar + Footer)
│   ├── globals.css         # Styles globaux + variables CSS
│   ├── page.tsx            # Page d'accueil
│   ├── services/page.tsx   # Page services
│   ├── portfolio/page.tsx  # Page portfolio
│   ├── about/page.tsx      # Page à propos
│   └── contact/page.tsx    # Page contact
├── components/
│   ├── Navbar.tsx          # Navigation fixe
│   └── Footer.tsx          # Pied de page
└── public/                 # Assets statiques (images, favicon, etc.)
```

## Installation et démarrage

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Démarrer en production
npm start
```

## Déploiement sur Vercel

1. Push le projet sur GitHub
2. Importer le repo sur [vercel.com](https://vercel.com)
3. Vercel détecte Next.js automatiquement
4. Cliquer sur "Deploy"

## Personnalisation

### Couleurs (globals.css)
```css
:root {
  --blue: #145DA1;          /* Bleu principal */
  --orange: #F97316;        /* Orange accent */
  --dark: #0F172A;          /* Fond sombre */
}
```

### Contenu
- Modifier les textes directement dans les fichiers `page.tsx`
- Ajouter des images dans `/public` et les référencer avec `<Image>` de Next.js
- Mettre à jour les prix dans `app/services/page.tsx`
- Ajouter des projets dans `app/portfolio/page.tsx`

### Formulaire de contact
Le formulaire affiche actuellement un message de succès simulé.  
Pour le connecter à un vrai backend :
- [Resend](https://resend.com) pour l'envoi d'emails
- [Formspree](https://formspree.io) pour un service clé-en-main
- API Route Next.js (`app/api/contact/route.ts`)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero, services, portfolio aperçu, CTA |
| Services | `/services` | 5 services détaillés avec prix |
| Portfolio | `/portfolio` | 4 projets réalisés |
| À propos | `/about` | Mission, histoire, valeurs |
| Contact | `/contact` | Formulaire + infos de contact |

## Prochaines étapes

- [ ] Connecter le formulaire à Resend ou Formspree
- [ ] Ajouter un favicon et les images OG
- [ ] Ajouter des vraies photos de projets dans le portfolio
- [ ] Configurer le domaine custom sur Vercel
- [ ] Ajouter Google Analytics
- [ ] Version mobile responsive (hamburger menu)
