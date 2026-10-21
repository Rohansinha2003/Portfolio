// ──────────────────────────────────────────────────────────────
// EDIT THIS FILE. Everything on the site comes from here.
// Every value marked [PLACEHOLDER] should be replaced with your own.
// ──────────────────────────────────────────────────────────────

export const site = {
  name: 'Rohan Sinha', // [PLACEHOLDER]
  firstName: 'Rohan',
  lastName: 'Sinha',
  handle: 'rohansinha',
  role: 'ML Engineer', // [PLACEHOLDER]
  city: 'Bengalore',
  email: '2003rohansinha@gmail.com', // [PLACEHOLDER]
  github: 'Rohansinha2003', // [PLACEHOLDER] used for the live GitHub section
  linkedin: 'https://www.linkedin.com/in/rohan-sinhaa/',
  x: 'https://x.com/RohanSinhaAI',
  resumeUrl: '/resume',
  tagline:
    'Building intelligent systems, pushing the boundaries of AI, and engineering the future—one model at a time.', // [PLACEHOLDER]
  stats: [
    { value: 'Does it matter?', label: 'Avg CGPA' },
    { value: '8+1', label: 'Projects shipped' },
  ],
  marquee: ['ENGINEER', 'PROBLEM SOLVER', 'Machine learning', 'Deep learning', 'Python'],
  quote: 'Building cool stuff, one idea at a time.',

  origin: [
    "I'm Rohan Sinha, an AI/ML developer from Bangalore, India, with an engineering background and a strong passion for building intelligent systems. My journey revolves around deep learning, large language models, and turning ideas into working AI products.",

    "I enjoy exploring how machines learn, reason, and solve real-world problems. Through DeepNova, my AI-focused initiative, I work on making complex machine learning concepts easier to understand and building practical AI solutions. I'm also proud of developing Coding_Model, a lightweight language model designed to explore the possibilities of locally running AI.",

    "From experimenting with compact language models to building AI projects such as DeepNova and a chest X-ray analysis system, I focus on learning by building, testing, and improving. My goal is to create efficient, accessible AI systems that make a meaningful impact, one experiment at a time."
  ],

  originCards: [
    { label: 'Recently shipped', title: 'Deepnova AI', body: 'DeepNova AI is my vision to make artificial intelligence and deep learning accessible to everyone through intuitive learning experiences, innovative AI projects, and real-world solutions.' },
    { label: 'Learning', title: 'Deeplearning', body: 'Currently mastering deep learning, LLMs, and agentic AI to build intelligent systems that solve real-world problems.' },
    { label: 'Building foundations', title: 'Production level AI', body: 'Learning to deploy production level AI systems.' },
  ],
  tiers: [
    { tier: 'S', name: 'Proficient', skills: ['Skill One', 'Skill Two', 'Skill Three'] },
    { tier: 'A', name: 'Intermediate', skills: ['Skill Four', 'Skill Five', 'Skill Six'] },
    { tier: 'B', name: 'Learning / Basics', skills: ['Skill Seven', 'Skill Eight'] },
  ],
  assistantFacts: {
    available: 'Yes, open to internships and entry-level roles. Use the Hire me button to reach out.',
    education: 'B.E. in Your Branch, Your University. Add GPA and key coursework here.',
  },
  sideQuest: {
    title: 'Your Side Quest',
    kicker: 'Hobby',
    body: 'A fun page about something you love: anime, music, books, games. Recruiters remember people, not just skills.',
    items: ['Item one', 'Item two', 'Item three', 'Item four', 'Item five', 'Item six'],
  },
}

export type Project = {
  slug: string
  eyebrow: string
  title: string
  blurb: string
  stats: { value: string; label: string }[]
  tags: string[]
  live?: string
  color: string
  problem: string
  built: string
  tradeoffs: string
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    eyebrow: 'Capstone · Internship',
    title: 'Project One',
    blurb: 'Two sentences on what this does, who it is for, and what makes the engineering interesting.',
    stats: [
      { value: '0.85', label: 'Metric A' },
      { value: '82%', label: 'Metric B' },
      { value: '~$100k', label: 'Impact' },
    ],
    tags: ['Python', 'Scikit-learn', 'Streamlit'],
    live: 'https://example.com',
    color: '#c6ff3d',
    problem: 'What problem were you solving, and for whom?',
    built: 'What did you actually build? Mention the architecture and the key technical choices.',
    tradeoffs: 'What trade-offs did you make, and what would you do differently?',
  },
  {
    slug: 'project-two',
    eyebrow: 'Full-stack · Auth',
    title: 'Project Two',
    blurb: 'A full-stack app with authentication and a database. Say what is special about it.',
    stats: [
      { value: '1,000', label: 'Users' },
      { value: '0', label: 'Leaks' },
      { value: 'SSR', label: 'Rendering' },
    ],
    tags: ['TypeScript', 'React', 'Postgres'],
    live: 'https://example.com',
    color: '#ff5d8f',
    problem: 'Describe the problem and the constraints.',
    built: 'Describe the build.',
    tradeoffs: 'Describe the trade-offs.',
  },
  {
    slug: 'project-three',
    eyebrow: 'Personal tool',
    title: 'Project Three',
    blurb: 'A tool you made for yourself or a friend that solved a real, small problem well.',
    stats: [
      { value: '60', label: 'Tests' },
      { value: '3', label: 'Roles' },
      { value: '100%', label: 'Offline' },
    ],
    tags: ['TypeScript', 'MySQL', 'Vitest'],
    live: 'https://example.com',
    color: '#5db8ff',
    problem: 'Describe the problem.',
    built: 'Describe the build.',
    tradeoffs: 'Describe the trade-offs.',
  },
  {
    slug: 'project-four',
    eyebrow: 'Algorithms · Visual',
    title: 'Project Four',
    blurb: 'A visual or interactive project that teaches an algorithm or concept.',
    stats: [
      { value: '5', label: 'Algorithms' },
      { value: '60fps', label: 'Smooth' },
      { value: '1', label: 'Embed widget' },
    ],
    tags: ['React', 'Three.js', 'Motion'],
    live: 'https://example.com',
    color: '#ffb23d',
    problem: 'Describe the problem.',
    built: 'Describe the build.',
    tradeoffs: 'Describe the trade-offs.',
  },
  {
    slug: 'project-five',
    eyebrow: 'Terminal · OOP',
    title: 'Project Five',
    blurb: 'A smaller project that shows fundamentals: clean structure, validation, no frameworks.',
    stats: [
      { value: '3', label: 'Programs' },
      { value: '100%', label: 'Validated' },
      { value: 'C++17', label: 'Standard' },
    ],
    tags: ['C++', 'OOP'],
    color: '#a78bfa',
    problem: 'Describe the problem.',
    built: 'Describe the build.',
    tradeoffs: 'Describe the trade-offs.',
  },
]
