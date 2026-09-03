/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO UPDATE THE ENTIRE SITE.
 *  Everything the portfolio renders comes from here.
 *  Items marked  // TODO  need your input.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Deekshith Poojary',
  initials: 'DP',
  role: 'Python Backend Developer',
  // Rotates in the hero, one phrase at a time.
  taglines: [
    'Python Backend Developer',
    'Django & REST API Builder',
    'Data Analytics Enthusiast',
    'MCA — 8.8 CGPA',
  ],
  location: 'Mangalore, Karnataka, India',
  email: 'deekshithpoojarii01@gmail.com',
  phone: '+91 86608 96808',
  resume: '/Deekshith-Poojary-Resume.pdf',
  summary:
    'Backend developer working with Python and Django to design clean, reliable APIs and data-driven services. I hold an MCA from Visvesvaraya Technological University and came into engineering through data — building predictive models, dashboards and analysis pipelines before moving into full-time backend work. I care about readable code, well-shaped databases and systems that hold up in production.',
  // Short punchy facts shown under the hero.
  stats: [
    { value: '8.8', label: 'MCA CGPA' },
    { value: '3+', label: 'Shipped Projects' },
    { value: '4', label: 'Certifications' },
    { value: '2', label: 'Degrees' },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/DeekshithPoojary', icon: 'github' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/deekshith-poojary-9b618b2a7/',
      icon: 'linkedin',
    },
    { name: 'Email', url: 'mailto:deekshithpoojarii01@gmail.com', icon: 'mail' },
  ],
}

export const skills = [
  {
    title: 'Languages',
    icon: 'code',
    items: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend & Frameworks',
    icon: 'server',
    items: ['Django', 'REST APIs', 'PHP', 'Postman', 'Authentication'],
  },
  {
    title: 'Data & ML',
    icon: 'chart',
    items: ['Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Tableau'],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Core Concepts',
    icon: 'cpu',
    items: ['OOP', 'Data Structures', 'Algorithms', 'Problem Solving'],
  },
  {
    title: 'Tools & Environment',
    icon: 'terminal',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Linux'],
  },
]

export const experience = [
  {
    role: 'Python Backend Developer',
    company: 'SKY360.Ai Tech LLP',
    location: 'Mangalore',
    period: 'Feb 2026 — Present',
    current: true,
    points: [
      'Build and maintain backend services in Python, turning product requirements into clean, documented APIs.',
      'Model and query relational data, keeping schemas normalised and access patterns efficient.',
      'Work through the full change cycle — implementation, testing with Postman, code review and release.',
    ],
    tech: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Git'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'CODTECH IT Solutions',
    location: 'Mangalore',
    period: 'Nov 2024 — Jan 2025',
    points: [
      'Analysed sales datasets with Python and Excel to surface revenue trends and product-level patterns.',
      'Built Tableau dashboards that made those trends readable at a glance for non-technical stakeholders.',
      'Handled the unglamorous half of analytics properly: cleaning, deduplication and validation before reporting.',
    ],
    tech: ['Python', 'Pandas', 'Excel', 'Tableau'],
  },
]

export const projects = [
  {
    title: 'SkyBook — Airline Reservation System',
    blurb:
      'A full-stack flight booking platform handling real-time seat availability, user accounts and secure reservations end to end.',
    points: [
      'Designed and implemented the application in PHP with a MySQL backend to streamline the booking flow.',
      'Built a responsive front end in HTML, CSS and JavaScript that holds up across screen sizes.',
      'Engineered backend logic for live seat availability, user authentication and reservation integrity.',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    tag: 'Full Stack',
    featured: true,
    links: {}, // e.g. { repo: 'https://github.com/...', demo: 'https://...' }
  },
  {
    title: 'Cricket Score Prediction (ML)',
    blurb:
      'A supervised-learning model that forecasts match scores from historical cricket data, tuned down to a materially lower error rate.',
    points: [
      'Built a Linear Regression model to forecast match scores with high accuracy.',
      'Performed extensive data cleaning and feature engineering on historical datasets using Pandas and NumPy.',
      'Trained and validated with scikit-learn, cutting Mean Absolute Error significantly through hyperparameter tuning.',
    ],
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy'],
    tag: 'Machine Learning',
    featured: true,
    links: {},
  },
  {
    title: 'Social Media Usage Analysis',
    blurb:
      'A data-driven study of social media behaviour — how engagement shifts across platforms, cohorts and time.',
    points: [
      'Conducted a data-driven analysis of usage patterns across platforms using Python.',
      'Focused on engagement trends and platform-wise behavioural differences.',
      'Communicated findings through clear Matplotlib and Seaborn visualisations.',
    ],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    tag: 'Data Analysis',
    links: {},
  },
]

/**
 * Certifications.
 *
 *  documents — every scan of this credential, in display order. The first is
 *              the card's cover image; the lightbox tabs between them when
 *              there's more than one. Files live in `public/certificates/`.
 *  badge     — the square Credly badge (shown as a thumbnail on the card, and
 *              used as the cover if no documents load).
 *  verify    — public verification URL, read off each certificate.
 *
 * A file that's missing or fails to load is skipped automatically — the card
 * falls back to the badge, then to a plain icon. Nothing renders broken.
 */
export const certifications = [
  {
    title: 'Data Analysis with Python',
    id: 'DA0101EN',
    issuer: 'IBM · Cognitive Class',
    date: 'Jul 2024',
    level: 'Intermediate',
    note: 'Statistical techniques, data manipulation and model building in Python.',
    badge: '/certificates/badge-data-analysis.png',
    documents: [
      { label: 'IBM Certificate', src: '/certificates/ibm-data-analysis.png' },
      { label: 'Cognitive Class', src: '/certificates/cc-data-analysis.png' },
    ],
    verify: 'https://www.credly.com/badges/252b5bd1-3d7c-4091-870a-92ad6ef92b41',
  },
  {
    title: 'Data Visualization with Python',
    id: 'DV0101EN',
    issuer: 'IBM · Cognitive Class',
    date: 'Apr 2024',
    level: 'Intermediate',
    note: 'Creating and interpreting visualisations with Matplotlib, Seaborn and Folium.',
    badge: '/certificates/badge-data-visualization.png',
    documents: [
      { label: 'IBM Certificate', src: '/certificates/ibm-data-visualization.png' },
      { label: 'Cognitive Class', src: '/certificates/cc-data-visualization.png' },
    ],
    verify: 'https://www.credly.com/badges/da798b6f-be6e-48b2-a50a-f275431e1194',
  },
  {
    title: 'Python 101 for Data Science',
    id: 'PY0101EN',
    issuer: 'IBM · Cognitive Class',
    date: 'Mar 2024',
    level: 'Foundational',
    note: 'Python fundamentals and their application to data science workflows.',
    badge: '/certificates/badge-python-for-data-science.png',
    documents: [
      { label: 'IBM Certificate', src: '/certificates/ibm-python-for-data-science.png' },
      { label: 'Cognitive Class', src: '/certificates/cc-python-101.png' },
    ],
    verify: 'https://www.credly.com/badges/386b3b02-24f3-42e5-9c89-db4f461718d8',
  },
  {
    title: 'Applied Data Science with Python — Level 2',
    id: 'IBM Skills Network',
    issuer: 'IBM',
    date: 'Jul 2024',
    level: 'Foundational',
    note: 'Applied specialisation covering the end-to-end data science toolchain.',
    badge: '/certificates/badge-applied-data-science-l2.png',
    documents: [
      { label: 'IBM Certificate', src: '/certificates/ibm-applied-data-science-l2.png' },
    ],
    verify: 'https://www.credly.com/badges/eb2a725f-4b08-4327-b1f0-a0363348103c',
  },
  {
    title: 'Data Analytics with Python',
    id: 'Elite · Gold',
    issuer: 'NPTEL · VTU Centre for Online Education',
    date: 'May 2025',
    level: '3 Credits',
    note: 'Elite Gold course completion certificate awarded by VTU Centre for Online Education.',
    badge: '',
    documents: [{ label: 'VTU Certificate', src: '/certificates/vtu-data-analytics.png' }],
    verify: '',
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Visvesvaraya Technological University, Belagavi',
    period: 'Feb 2024 — Sep 2025',
    score: '8.8 CGPA',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Mangalore University, Mangalore',
    period: 'Jan 2020 — Jul 2023',
    score: '7.97 CGPA',
  },
]

export const achievements = [
  {
    title: 'Co-organizer — IT Manager Event, Medha 23',
    detail:
      'Co-organised the IT Manager event at Medha 23, a national-level IT fest hosted by Shree Devi Institute of Technology, Mangalore.',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
