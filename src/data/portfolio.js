// Données centralisées du portfolio
export const DATA = {
  name: "MOUHAMED SALL",
  firstName: "MOUHAMED",
  lastName: "SALL",
  initials: "MS",
  title: "Développeur Fullstack & Fondateur",
  company: "Afrigen AI",
  email: "amethsl2218@gmail.com",
  location: "Dakar, Sénégal",
  linkedin: "https://www.linkedin.com/in/mouhamed-sall-%E2%80%93-fondateur-afrigen-ai-12aa323a1",
  github: "https://github.com/Amethnb2218",
  bio: "Consultant en développement web & prompt engineering — je conçois des applications modernes, des interfaces performantes et des solutions IA sur mesure. Orienté résultats, sans complexité inutile.",
  about: "Passionné par la technologie et l'innovation, je combine expertise en développement web, intelligence artificielle et télécommunications pour créer des solutions digitales qui transforment les entreprises africaines. Mon parcours chez Sonatel m'a donné une vision terrain des besoins technologiques du continent.",

  services: [
    { icon: "💻", title: "Développement Web", desc: "Sites performants et applications modernes avec React, Node.js et les dernières technologies.", color: "#7c3aed" },
    { icon: "🤖", title: "Automatisation IA", desc: "Automatisation des processus métier et chatbots intelligents grâce à l'intelligence artificielle.", color: "#8b5cf6" },
    { icon: "🌐", title: "Hébergement Sécurisé", desc: "Hébergement web, maintenance, noms de domaine et infrastructure cloud fiable.", color: "#06b6d4" },
    { icon: "🎨", title: "Identité Visuelle", desc: "Logos, affiches, supports de communication et branding complet pour votre marque.", color: "#f59e0b" },
    { icon: "📈", title: "Optimisation Digitale", desc: "SEO, stratégies de contenu et growth pour booster votre présence en ligne.", color: "#10b981" },
    { icon: "🛡️", title: "Conseil & Stratégie", desc: "Accompagnement dans la transformation digitale, de l'idée jusqu'à la production.", color: "#f43f5e" },
  ],

  skills: {
    "Frontend": {
      color: "#a855f7",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "Responsive Design", level: 88 },
      ]
    },
    "Backend & Data": {
      color: "#06b6d4",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "Prisma ORM", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST API", level: 88 },
        { name: "WebSocket", level: 78 },
      ]
    },
    "Infra & DevOps": {
      color: "#f59e0b",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "Vercel / Deploy", level: 82 },
        { name: "Linux", level: 75 },
        { name: "Cybersécurité", level: 70 },
        { name: "Réseaux & Télécom", level: 78 },
        { name: "PWA", level: 80 },
      ]
    }
  },

  experience: [
    {
      role: "Fondateur",
      company: "Afrigen AI",
      period: "2025 — Présent",
      location: "Dakar",
      current: true,
      desc: [
        "Solutions digitales complètes pour entreprises africaines",
        "Développement web, IA, hébergement & identité visuelle",
        "Création de StyleFlow — plateforme de réservation beauté"
      ]
    },
    {
      role: "Pilote Production B2B Fibre & ADSL",
      company: "Groupe Sonatel",
      period: "Nov. 2024 — Déc. 2025",
      location: "Dakar",
      desc: [
        "Pilotage productions B2B Fibre/ADSL clients professionnels",
        "Coordination équipes terrain — qualité de service",
        "Validation services via GAIA et SONIS"
      ]
    },
    {
      role: "Stagiaire CRM & FTTH",
      company: "Groupe Sonatel",
      period: "Juin — Nov. 2024",
      location: "Dakar",
      desc: [
        "Déploiement et documentation FTTH",
        "Surveys terrain, études liaisons LS et FTTO"
      ]
    },
    {
      role: "Stagiaire Réseaux",
      company: "ATECH",
      period: "Mai — Juin 2024",
      location: "Dakar",
      desc: [
        "Caméras IP, switchs réseau, Microsoft Exchange",
        "Infrastructure réseau et sécurisation systèmes"
      ]
    },
  ],

  education: [
    { degree: "Ingénieur Technologue", field: "Génie Logiciel & SI", school: "ESP Dakar", period: "2025 — 2026", level: "BAC+4" },
    { degree: "Ingénieur Technologue", field: "Génie Logiciel & SI", school: "ESP Dakar", period: "2024 — 2025", level: "BAC+3" },
    { degree: "Technicien Supérieur", field: "Télécoms & Réseaux", school: "ESP Dakar", period: "2022 — 2024", level: "BAC+2" },
  ],

  certifications: [
    { name: "Business Analysis & Process Management", org: "Coursera", date: "Mars 2025" },
  ],

  projects: [
    {
      name: "StyleFlow",
      tagline: "Plateforme de réservation beauté au Sénégal",
      desc: "Application complète de réservation de salons de coiffure avec recherche intelligente, réservation temps réel, paiement mobile money, chat intégré, programme de fidélité et dashboard professionnel.",
      tech: ["React", "Node.js", "Express", "Prisma", "Tailwind", "WebSocket", "PWA"],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      url: "https://styleflow.me",
      github: "https://github.com/Amethnb2218"
    },
    {
      name: "Afrigen AI Platform",
      tagline: "Solutions IA pour entreprises africaines",
      desc: "Plateforme de services digitaux intégrant développement web, automatisation IA, hébergement cloud et création d'identité visuelle pour les entreprises du continent.",
      tech: ["React", "AI/ML", "Node.js", "Cloud", "Branding"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      url: "#",
      github: "https://github.com/Amethnb2218"
    },
    {
      name: "Network Monitor",
      tagline: "Outil de supervision réseau",
      desc: "Dashboard de monitoring réseau développé lors de mon expérience chez Sonatel pour le suivi en temps réel des productions B2B Fibre et ADSL.",
      tech: ["JavaScript", "Node.js", "REST API", "Charts", "Real-time"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      url: "#",
      github: "https://github.com/Amethnb2218"
    },
  ],

  marquee: [
    "DÉVELOPPEMENT WEB", "INTELLIGENCE ARTIFICIELLE", "HÉBERGEMENT CLOUD",
    "IDENTITÉ VISUELLE", "REACT.JS", "NODE.JS", "INNOVATION DIGITALE",
    "MADE IN SÉNÉGAL", "AFRIGEN AI", "FULL STACK"
  ],
}
