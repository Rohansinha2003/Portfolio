// ──────────────────────────────────────────────────────────────
// EDIT THIS FILE. Everything on the site comes from here.
// Every value marked [PLACEHOLDER] should be replaced with your own.
// ──────────────────────────────────────────────────────────────

export const site = {
  name: 'Rohan Sinha', // [PLACEHOLDER]
  firstName: 'Rohan',
  lastName: 'Sinha',
  handle: 'rohansinha',
  role: 'ML Engineer',
  city: 'Bangalore',
  email: '2003rohansinha@gmail.com',
  github: 'Rohansinha2003',
  linkedin: 'https://www.linkedin.com/in/rohan-sinhaa/',
  x: 'https://x.com/RohanSinhaAI',
  leetcode: 'https://leetcode.com/u/rohan_sinha2003/',
  gfg: 'https://www.geeksforgeeks.org/profile/2003rohansinha?tab=activity',
  kaggle: 'https://www.kaggle.com/rohansinha2003',
  huggingface: 'https://huggingface.co/2003Rohansinha',
  resumeUrl: '/resume',
  tagline:
    'Building intelligent systems, pushing the boundaries of AI, and engineering the future—one model at a time.',
  stats: [
    { value: 'Does it matter?', label: 'CGPA' },
    { value: '8+1', label: 'Projects shipped' },
    { value: '51M', label: 'Model Params' },
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
    { label: 'Learning', title: 'Deep Learning', body: 'Currently mastering deep learning, LLMs, and agentic AI to build intelligent systems that solve real-world problems.' },
    { label: 'Building foundations', title: 'Production level AI', body: 'Learning to deploy production level AI systems.' },
  ],

  tiers: [
    {
      tier: 'S',
      name: 'Proficient',
      skills: [
        'C++ & DSA',
        'Python',
        'Machine Learning',
        'Deep Learning',
        'LLM Development',
        'Git & GitHub',
      ],
    },
    {
      tier: 'A',
      name: 'Intermediate',
      skills: [
        'Generative AI',
        'RAG & Vector Databases',
        'AI Agents & Tool Calling',
        'TensorFlow & OpenCV',
        'React & Next.js',
        'Node.js & Express.js',
        'MongoDB & PostgreSQL',
      ],
    },
    {
      tier: 'B',
      name: 'Learning / Basics',
      skills: [
        'MCP & Agentic Workflows',
        'LLM Fine-Tuning',
        'Model Deployment & MLOps',
        'Cloud & AI Infrastructure',
      ],
    },
  ],

  assistantFacts: {
    available: 'Yes, open to AI/ML engineering internships, full-time roles, and collaborations. Reach out via email or the contact section below.',
    education: 'Engineering background with deep focus on Computer Science, Data Structures & Algorithms, Machine Learning, and Deep Learning.',
  },

  sideQuest: {
    title: 'Beyond the Code',
    kicker: 'Side Quest',
    body: 'When I’m not working, I’m experimenting with AI models, exploring deep learning, solving challenging DSA problems, and turning ambitious ideas into real projects. I believe curiosity is the real engine behind innovation.',
    items: [
      'Building DeepNova AI',
      'Training My Own Coding Model',
      'Solving LeetCode Problems',
      'Exploring LLMs & AI Agents',
      'Experimenting with New Technologies',
      'Turning Ideas into Projects',
    ],
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
  github?: string
  huggingface?: string
  color: string
  problem: string
  built: string
  tradeoffs: string
}

export const projects: Project[] = [
  {
    slug: 'deepnova-ai',
    eyebrow: 'AI Platform · EdTech',
    title: 'DeepNova AI',
    blurb: 'An AI-focused platform making artificial intelligence and deep learning accessible through intuitive learning experiences and real-world tools.',
    stats: [
      { value: '100%', label: 'Hands-on AI' },
      { value: 'Full-Stack', label: 'Architecture' },
      { value: 'Production', label: 'Deployment' },
    ],
    tags: ['JavaScript', 'React', 'Deep Learning', 'Vercel'],
    live: 'https://deepnova-ten.vercel.app',
    github: 'https://github.com/Rohansinha2003/deepnova',
    color: '#c6ff3d',
    problem: 'Complex AI and machine learning concepts are often obscured by dense theoretical math and fragmented documentation, creating high barriers for learners and builders.',
    built: 'Engineered an accessible AI knowledge and solution space featuring guided learning modules, visual conceptual demos, and real-world machine learning solutions.',
    tradeoffs: 'Focused on delivering fast, responsive browser-first experiences with clean client interactions rather than requiring heavy GPU infrastructure for every visitor.',
  },
  {
    slug: 'coding-model-51m',
    eyebrow: 'Lightweight LLM · PyTorch',
    title: 'Coding_Model (51M)',
    blurb: 'A 51M parameter compact language model pre-trained and fine-tuned for code completion, syntax reasoning, and edge deployment.',
    stats: [
      { value: '51M', label: 'Parameters' },
      { value: 'PyTorch', label: 'Framework' },
      { value: 'HuggingFace', label: 'Weights' },
    ],
    tags: ['Python', 'PyTorch', 'Transformers', 'LLM', 'Hugging Face'],
    live: 'https://huggingface.co/2003Rohansinha/Coding_Model',
    huggingface: 'https://huggingface.co/2003Rohansinha/Coding_Model',
    color: '#38bdf8',
    problem: 'Running standard multi-billion parameter code models requires expensive GPUs, introduces network latency, and exposes privacy risks for local development workflows.',
    built: 'Trained a 51M parameter transformer causal language model from scratch. Optimized tokenization using Byte-Pair Encoding (BPE), implemented rotary position embeddings (RoPE), and published model weights and tokenizer configs on Hugging Face.',
    tradeoffs: 'Optimized parameter budget for fast CPU/edge inference and code syntax completion rather than general conversational knowledge.',
  },
  {
    slug: 'chest-x-ray',
    eyebrow: 'Computer Vision · Healthcare',
    title: 'Chest X-Ray Classifier',
    blurb: 'A deep learning computer vision model utilizing convolutional neural networks to detect pulmonary conditions from chest radiographs.',
    stats: [
      { value: 'CNN', label: 'Architecture' },
      { value: '94%+', label: 'Accuracy' },
      { value: 'Real-time', label: 'Inference' },
    ],
    tags: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Deep Learning'],
    github: 'https://github.com/Rohansinha2003/Chest_X_ray',
    color: '#5db8ff',
    problem: 'Chest radiograph interpretation in triage and high-volume medical environments can experience critical delays due to specialist availability.',
    built: 'Built an end-to-end medical image classification pipeline using CNN architectures, preprocessing with CLAHE, image augmentation, and feature extraction.',
    tradeoffs: 'Prioritized high sensitivity and recall to minimize missed diagnoses in screening scenarios while maintaining acceptable precision.',
  },
  {
    slug: 'cognix-agent',
    eyebrow: 'Agentic AI · Tool Calling',
    title: 'Cognix Agent',
    blurb: 'An autonomous AI agent framework designed with multi-step reasoning, dynamic tool calling, memory retrieval, and task execution.',
    stats: [
      { value: 'ReAct', label: 'Agent Loop' },
      { value: 'Multi-Tool', label: 'Calling' },
      { value: 'Autonomous', label: 'Execution' },
    ],
    tags: ['Python', 'LLMs', 'Tool Calling', 'Agentic AI', 'APIs'],
    github: 'https://github.com/Rohansinha2003/Cognix_Agent',
    color: '#ffb23d',
    problem: 'Standard language model responses are static and lack real-time context, environment interaction, and the ability to autonomously trigger external tools.',
    built: 'Developed an agentic execution pipeline implementing the ReAct pattern, schema-validated tool invocation, dynamic planning, and conversation state management.',
    tradeoffs: 'Enforced strict parameter validation and hallucination checks before tool execution, adding slight compute overhead to ensure system safety.',
  },
  {
    slug: 'rag-project',
    eyebrow: 'Generative AI · Vector Search',
    title: 'RAG Pipeline',
    blurb: 'A high-performance retrieval-augmented generation system connecting LLMs to custom knowledge bases with semantic vector search.',
    stats: [
      { value: 'Vector DB', label: 'Embeddings' },
      { value: '<100ms', label: 'Retrieval' },
      { value: '0-Hallucination', label: 'Grounded' },
    ],
    tags: ['Python', 'RAG', 'Vector Search', 'LangChain', 'Embeddings'],
    github: 'https://github.com/Rohansinha2003/RAG-Project',
    color: '#ff5d8f',
    problem: 'Foundation models lack private or newly published domain data and often hallucinate answers when queried about specialized domain contexts.',
    built: 'Constructed a complete semantic retrieval pipeline featuring document chunking, dense vector embeddings, similarity search, and prompt grounding with citation sources.',
    tradeoffs: 'Chose dense semantic embeddings combined with keyword ranking for higher recall precision, trading minor indexing storage for significantly better query accuracy.',
  },
  {
    slug: 'finance-buddy',
    eyebrow: 'FinTech · HackIndia 2025',
    title: 'Finance Buddy',
    blurb: 'An intelligent personal finance and budgeting platform created for HackIndia Spark 2025, offering conversational financial planning.',
    stats: [
      { value: 'Hackathon', label: 'HackIndia 2025' },
      { value: 'Full-Stack', label: 'Next.js' },
      { value: 'Live', label: 'Deployed' },
    ],
    tags: ['TypeScript', 'Next.js', 'React', 'FinTech', 'Vercel'],
    live: 'https://v0-finance-buddy-description.vercel.app',
    github: 'https://github.com/Rohansinha2003/finance-buddy',
    color: '#a78bfa',
    problem: 'Traditional financial tools present dry numbers without actionable advice, making personal financial management unapproachable for many young professionals.',
    built: 'Built a modern, responsive financial dashboard with interactive expense breakdown, goal tracking, and intelligent conversational guidance.',
    tradeoffs: 'Designed with lightweight client-side state for lightning-fast presentation and interaction during hackathon evaluation rounds.',
  },
]

