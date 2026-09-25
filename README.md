# 🎨 Portfolio Gaspard

Portfolio personnel développé avec **React** et **Vite**, dans le cadre du programme **EIG Bénin** (Entrepreneurs d'Intérêt Général).

---

## 🚀 Stack Technique

| Technologie | Version | Rôle |
|---|---|---|
| [React](https://react.dev/) | 19 | Framework UI |
| [React Router](https://reactrouter.com/) | 7 | Routage (accueil, expériences, détail projet) |
| [Vite](https://vitejs.dev/) | 8 | Bundler / Dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Styling utilitaire |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | — | Linter JS/JSX |
| [PostCSS](https://postcss.org/) | — | Transformations CSS |

---

## 📁 Structure du projet

```
My-Folio-Gaspard/
├── public/                          # Assets statiques
├── src/
│   ├── assets/                      # Images et médias
│   ├── components/                  # Composants React
│   │   ├── NavbarComponent.jsx      # Barre de navigation
│   │   ├── HeroComponent.jsx        # Section d'accueil
│   │   ├── AboutComponent.jsx       # À propos
│   │   ├── SkillsComponent.jsx      # Compétences
│   │   ├── ParcoursComponent.jsx    # Parcours
│   │   ├── ExperiencesComponent.jsx # Expériences professionnelles
│   │   ├── ProjectsComponent.jsx    # Liste des projets
│   │   ├── ProjectDetailComponent.jsx # Détail d'un projet (route dynamique)
│   │   ├── ServicesComponent.jsx    # Services proposés
│   │   ├── TechnologiesComponent.jsx # Technologies maîtrisées
│   │   ├── EducationComponent.jsx   # Formation académique
│   │   ├── ContactComponent.jsx     # Formulaire de contact
│   │   ├── FooterComponent.jsx      # Pied de page
│   │   ├── WhatsAppButtonComponent.jsx # Bouton flottant WhatsApp
│   │   └── ui/                      # Composants UI réutilisables
│   │       ├── RevealSectionComponent.jsx
│   │       └── ThemeToggleComponent.jsx
│   ├── data/
│   │   ├── siteContent.js           # Contenu principal du site
│   │   └── projects.js              # Données des projets
│   ├── hooks/
│   │   └── useTheme.js              # Hook gestion thème dark/light
│   ├── App.jsx                      # Composant racine + routage
│   ├── App.css                      # Styles du composant App
│   ├── index.css                    # Styles globaux
│   └── main.jsx                     # Point d'entrée
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🧭 Routes

| Route | Composant | Description |
|---|---|---|
| `/` | `Home` | Page d'accueil (toutes les sections) |
| `/experiences` | `ExperiencesComponent` | Détail des expériences |
| `/projets/:slug` | `ProjectDetailComponent` | Détail d'un projet |

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

- ✅ **Mode sombre / clair** — basculement via `useTheme` et `ThemeToggleComponent`
- ✅ **Design responsive** — adapté mobile, tablette et desktop
- ✅ **Routage multi-pages** — accueil, page expériences, pages détail projet
- ✅ **Animations au scroll** — révélation des sections via `RevealSectionComponent`
- ✅ **Bouton de contact WhatsApp** — accès rapide à la discussion
- ✅ **Sections complètes** — Hero, À propos, Compétences, Parcours, Projets, Services, Technologies, Formation, Contact

---

## 📄 Licence

Projet réalisé dans le cadre du programme **EIG Bénin**. Tous droits réservés.
