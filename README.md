# 🎨 Portfolio Isidore — EIG Bénin

Portfolio personnel développé avec **React** et **Vite**, dans le cadre du programme **EIG Bénin** (Entrepreneurs d'Intérêt Général).

---

## 🚀 Stack Technique

| Technologie | Version | Rôle |
|---|---|---|
| [React](https://react.dev/) | 19 | Framework UI |
| [Vite](https://vitejs.dev/) | 8 | Bundler / Dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Styling utilitaire |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | — | Linter JS/JSX |
| [PostCSS](https://postcss.org/) | — | Transformations CSS |

---

## 📁 Structure du projet

```
_portfolio_ISIDORE_EIG/
├── public/                  # Assets statiques
├── src/
│   ├── assets/              # Images et médias
│   ├── components/          # Composants React
│   │   ├── Navbar.jsx       # Barre de navigation
│   │   ├── Hero.jsx         # Section d'accueil
│   │   ├── About.jsx        # À propos
│   │   ├── Skills.jsx       # Compétences
│   │   ├── Experience.jsx   # Expériences professionnelles
│   │   ├── Projects.jsx     # Projets réalisés
│   │   ├── Services.jsx     # Services proposés
│   │   ├── Technologies.jsx # Technologies maîtrisées
│   │   ├── Education.jsx    # Formation académique
│   │   ├── Testimonials.jsx # Témoignages
│   │   ├── Contact.jsx      # Formulaire de contact
│   │   ├── Footer.jsx       # Pied de page
│   │   └── ui/              # Composants UI réutilisables
│   ├── data/
│   │   ├── siteContent.js   # Contenu principal du site
│   │   └── projects.js      # Données des projets
│   ├── hooks/
│   │   └── useTheme.js      # Hook gestion thème dark/light
│   ├── App.jsx              # Composant racine
│   ├── App.css              # Styles du composant App
│   ├── index.css            # Styles globaux
│   └── main.jsx             # Point d'entrée
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛠️ Installation & Démarrage

### Prérequis
- [Node.js](https://nodejs.org/) v18+
- npm

### Installer les dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

> L'application sera accessible sur **http://localhost:5173**

### Build de production

```bash
npm run build
```

### Prévisualiser le build

```bash
npm run preview
```

### Linter

```bash
npm run lint
```

---

## 🎨 Fonctionnalités

- ✅ **Mode sombre / clair** — basculement automatique via `useTheme`
- ✅ **Design responsive** — adapté mobile, tablette et desktop
- ✅ **Gradient animé** — fond avec dégradés radial rouge/rose
- ✅ **Single Page Application** — navigation fluide sans rechargement
- ✅ **Sections complètes** — Hero, À propos, Compétences, Expériences, Projets, Services, Technologies, Formation, Témoignages, Contact

---

## 📄 Licence

Projet réalisé dans le cadre du programme **EIG Bénin**. Tous droits réservés.
