export type KnowledgeChunk = {
  id: string
  title: string
  category: 'leetcode' | 'kaggle' | 'github' | 'projects' | 'background' | 'contact'
  tags: string[]
  content: string
  links?: { label: string; url: string }[]
}

export const KNOWLEDGE_BASE: KnowledgeChunk[] = [
  // ─── LEETCODE & DSA ───
  {
    id: 'leetcode-dsa-profile',
    title: 'LeetCode & GeeksforGeeks Problem Solving & Data Structures in C++',
    category: 'leetcode',
    tags: ['leetcode', 'gfg', 'geeksforgeeks', 'dsa', 'c++', 'algorithms', 'data structures', 'problem solving', 'competitive programming'],
    content:
      'Rohan has solved extensive algorithmic problems on LeetCode and GeeksforGeeks primarily using modern C++ (C++17/C++20). His core strengths include Dynamic Programming, Graph Algorithms (BFS, DFS, Dijkstra), Trees, Sliding Window, Two Pointers, Heaps, and Backtracking. He maintains clean, modular implementations and automated sync of his solutions in his GitHub repository My-LeetCode-Problems and DSA.',
    links: [
      { label: 'LeetCode Profile', url: 'https://leetcode.com/u/rohan_sinha2003/' },
      { label: 'GeeksforGeeks Profile', url: 'https://www.geeksforgeeks.org/profile/2003rohansinha?tab=activity' },
      { label: 'My-LeetCode-Problems GitHub', url: 'https://github.com/Rohansinha2003/My-LeetCode-Problems' },
      { label: 'DSA Repository', url: 'https://github.com/Rohansinha2003/DSA' },
    ],
  },
  {
    id: 'dsa-philosophy',
    title: 'Algorithmic Optimization & Complexity Analysis',
    category: 'leetcode',
    tags: ['time complexity', 'space complexity', 'optimization', 'dsa', 'big o'],
    content:
      'In his DSA preparation, Rohan emphasizes optimal time and space complexity (Big O analysis), edge-case handling, and cache-friendly memory layouts in C++. This strong computer science foundation directly powers his machine learning work, especially in model optimization, custom tokenizers, and tensor operations.',
    links: [
      { label: 'DSA Repository', url: 'https://github.com/Rohansinha2003/DSA' },
    ],
  },

  // ─── KAGGLE & ML PIPELINES ───
  {
    id: 'kaggle-ml-competitions',
    title: 'Kaggle & Applied Machine Learning Projects',
    category: 'kaggle',
    tags: ['kaggle', 'machine learning', 'eda', 'scikit-learn', 'churn prediction', 'data analysis', 'covid analysis'],
    content:
      'On Kaggle and through independent data science work, Rohan has developed applied machine learning pipelines. His notable projects include: 1) End-to-End ML Pipeline Customer Churn Prediction (feature engineering, classification with Random Forests and Gradient Boosting), 2) COVID-19 Trend Analysis (time-series modeling and epidemiological data curves), and 3) Interactive EDA Dashboard (profiling datasets, distribution checks, and feature correlation).',
    links: [
      { label: 'Kaggle Profile', url: 'https://www.kaggle.com/rohansinha2003' },
      { label: 'Customer Churn Model Repo', url: 'https://github.com/Rohansinha2003/Customer-Churn-Prediction-Model-' },
      { label: 'Covid19 Trend Analysis Repo', url: 'https://github.com/Rohansinha2003/Covid19-Trend-Analysis' },
      { label: 'EDA Dashboard Repo', url: 'https://github.com/Rohansinha2003/EDA-Dashboard-Interactive-Data-Analysis-' },
    ],
  },
  {
    id: 'kaggle-nlp-cv',
    title: 'NLP Sentiment Analysis & OpenCV Computer Vision',
    category: 'kaggle',
    tags: ['nlp', 'sentiment analysis', 'opencv', 'computer vision', 'hand detection', 'kaggle'],
    content:
      'Rohan has also explored natural language processing and computer vision through Kaggle-style challenge datasets. Notable repositories include: NLP-Sentiment-Analysis (text preprocessing, TF-IDF, token embeddings, and sentiment classification) and Hand_detection (real-time contour tracking and gesture recognition using OpenCV).',
    links: [
      { label: 'NLP Sentiment Analysis Repo', url: 'https://github.com/Rohansinha2003/NLP-Sentiment-Analysis-' },
      { label: 'Hand Detection Repo', url: 'https://github.com/Rohansinha2003/Hand_detection' },
    ],
  },

  // ─── GITHUB & OPEN SOURCE ───
  {
    id: 'github-overview',
    title: 'GitHub Profile & 57+ Open-Source Repositories',
    category: 'github',
    tags: ['github', 'open source', 'repositories', 'commits', 'activity'],
    content:
      'Rohan Sinha active on GitHub as @Rohansinha2003 with 57+ public repositories spanning machine learning, deep learning architectures, full-stack tools, and utilities. His repositories cover Python, TypeScript, C++, and JavaScript with continuous shipping and version control best practices.',
    links: [
      { label: 'GitHub @Rohansinha2003', url: 'https://github.com/Rohansinha2003' },
    ],
  },
  {
    id: 'github-featured-repos',
    title: 'Key GitHub Repositories Overview',
    category: 'github',
    tags: ['ml tuitor', 'legalish', 'researchos', 'fraudshield', 'url shortener', 'email system'],
    content:
      'Key active repositories on Rohan\'s GitHub include: ML_Tuitor (interactive machine learning educational platform), LEGALISH (AI-powered legal document extraction and contract reasoning), ResearchOS (academic literature search and indexing workflow), FraudShield (real-time transaction fraud detection with ML classifiers), and Url_shortener (high-performance URL redirection microservice).',
    links: [
      { label: 'ML_Tuitor Repo', url: 'https://github.com/Rohansinha2003/ML_Tuitor' },
      { label: 'LEGALISH Repo', url: 'https://github.com/Rohansinha2003/LEGALISH' },
      { label: 'ResearchOS Repo', url: 'https://github.com/Rohansinha2003/ResearchOS' },
    ],
  },

  // ─── CORE PROJECTS & AI MODELS ───
  {
    id: 'project-coding-model-51m',
    title: 'Coding_Model (51M Parameters) - Lightweight LLM',
    category: 'projects',
    tags: ['coding_model', '51m', 'llm', 'language model', 'pytorch', 'transformers', 'hugging face', 'local ai'],
    content:
      'Coding_Model is Rohan\'s custom 51-million parameter lightweight language model built with PyTorch and Transformers. It was designed from scratch to explore locally running AI, capable of efficient Python code completion and syntax reasoning on edge or standard consumer CPUs without cloud latency. It uses Byte-Pair Encoding (BPE), Rotary Position Embeddings (RoPE), and causal self-attention. Weights and inference configurations are published on Hugging Face.',
    links: [
      { label: 'Hugging Face Model Page', url: 'https://huggingface.co/2003Rohansinha/Coding_Model' },
    ],
  },
  {
    id: 'project-deepnova-ai',
    title: 'DeepNova AI - Machine Learning Platform',
    category: 'projects',
    tags: ['deepnova', 'deepnova ai', 'platform', 'edtech', 'deep learning', 'react', 'vercel'],
    content:
      'DeepNova AI is Rohan\'s flagship initiative to make artificial intelligence and deep learning accessible to everyone through intuitive learning experiences, visual conceptual modules, and real-world tools. Built with a modern full-stack web architecture and deployed live on Vercel.',
    links: [
      { label: 'DeepNova AI Live Website', url: 'https://deepnova-ten.vercel.app' },
      { label: 'DeepNova AI GitHub', url: 'https://github.com/Rohansinha2003/deepnova' },
    ],
  },
  {
    id: 'project-chest-xray',
    title: 'Chest X-Ray Medical Diagnosis Classifier',
    category: 'projects',
    tags: ['chest x ray', 'medical ai', 'cnn', 'computer vision', 'tensorflow', 'healthcare', 'deep learning'],
    content:
      'An end-to-end medical deep learning system that detects and classifies pulmonary diseases from chest radiographs using Convolutional Neural Networks (CNNs). Implements CLAHE image contrast preprocessing, data augmentation, and high sensitivity/recall tuning to minimize missed diagnoses in clinical screening scenarios.',
    links: [
      { label: 'Chest_X_ray GitHub', url: 'https://github.com/Rohansinha2003/Chest_X_ray' },
    ],
  },
  {
    id: 'project-cognix-agent',
    title: 'Cognix Agent - Autonomous Tool-Calling Agent',
    category: 'projects',
    tags: ['cognix agent', 'ai agent', 'tool calling', 'react loop', 'agentic ai', 'langchain', 'python'],
    content:
      'An autonomous AI agent framework designed in Python that implements the ReAct (Reasoning + Acting) loop. It executes multi-step planning, dynamically invokes external tools and APIs, maintains short/long-term conversational memory, and validates arguments against structured schemas to prevent hallucinated actions.',
    links: [
      { label: 'Cognix_Agent GitHub', url: 'https://github.com/Rohansinha2003/Cognix_Agent' },
    ],
  },
  {
    id: 'project-rag-pipeline',
    title: 'RAG Knowledge Pipeline - Vector Search & LLM Grounding',
    category: 'projects',
    tags: ['rag', 'vector search', 'embeddings', 'langchain', 'vector db', 'hallucination', 'information retrieval'],
    content:
      'A high-performance retrieval-augmented generation pipeline that connects large language models to custom documents with zero hallucinations. Implements text chunking strategies, dense vector embeddings, vector database similarity search, and hybrid keyword ranking for sub-100ms accurate context retrieval.',
    links: [
      { label: 'RAG-Project GitHub', url: 'https://github.com/Rohansinha2003/RAG-Project' },
    ],
  },
  {
    id: 'project-finance-buddy',
    title: 'Finance Buddy - FinTech Platform (HackIndia Spark 2025)',
    category: 'projects',
    tags: ['finance buddy', 'fintech', 'hackindia', 'hackathon', 'next.js', 'typescript', 'vercel'],
    content:
      'Built for HackIndia Spark 2025, Finance Buddy is an intelligent personal financial advisory platform providing conversational financial planning, automated expense categorization, and savings trajectory forecasts. Built with Next.js, TypeScript, and deployed on Vercel.',
    links: [
      { label: 'Finance Buddy Live Demo', url: 'https://v0-finance-buddy-description.vercel.app' },
      { label: 'Finance Buddy GitHub', url: 'https://github.com/Rohansinha2003/finance-buddy' },
    ],
  },

  // ─── SKILLS, EDUCATION & CAREER ───
  {
    id: 'technical-skills-tiers',
    title: 'Technical Stack & Power Level Tiers',
    category: 'background',
    tags: ['skills', 'tech stack', 'python', 'c++', 'machine learning', 'deep learning', 'react', 'nextjs'],
    content:
      'Rohan\'s skills ranked honestly by tier: S-Tier (Proficient / Daily): C++ & DSA, Python, Machine Learning, Deep Learning, LLM Development, Git & GitHub. A-Tier (Intermediate): Generative AI, RAG & Vector Databases, AI Agents & Tool Calling, TensorFlow & OpenCV, React & Next.js, Node.js & Express, MongoDB & PostgreSQL. B-Tier (Learning / Next): MCP & Agentic Workflows, LLM Fine-Tuning, MLOps, Cloud & AI Infrastructure.',
  },
  {
    id: 'education-and-availability',
    title: 'Education, Location, and Role Availability',
    category: 'background',
    tags: ['education', 'college', 'degree', 'internships', 'jobs', 'hiring', 'bangalore', 'availability'],
    content:
      'Rohan Sinha is an AI/ML Engineer based in Bangalore, India. He has an engineering background with deep focus on Computer Science, Data Structures & Algorithms, and Deep Learning. He is actively available and open to AI/ML engineering internships, full-time junior/entry roles, and innovative project collaborations.',
    links: [
      { label: 'Résumé Page', url: '/resume' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-sinhaa/' },
    ],
  },
  {
    id: 'contact-details',
    title: 'Contact Information & Social Profiles',
    category: 'contact',
    tags: ['contact', 'email', 'socials', 'twitter', 'x', 'linkedin', 'huggingface', 'github', 'kaggle', 'leetcode', 'gfg', 'geeksforgeeks'],
    content:
      'Email: 2003rohansinha@gmail.com. GitHub: https://github.com/Rohansinha2003. LinkedIn: https://www.linkedin.com/in/rohan-sinhaa/. LeetCode: https://leetcode.com/u/rohan_sinha2003/. GeeksforGeeks: https://www.geeksforgeeks.org/profile/2003rohansinha?tab=activity. Kaggle: https://www.kaggle.com/rohansinha2003. X / Twitter: https://x.com/RohanSinhaAI. Hugging Face: https://huggingface.co/2003Rohansinha.',
    links: [
      { label: 'Email Rohan', url: 'mailto:2003rohansinha@gmail.com' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-sinhaa/' },
      { label: 'LeetCode', url: 'https://leetcode.com/u/rohan_sinha2003/' },
      { label: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/2003rohansinha?tab=activity' },
      { label: 'Kaggle', url: 'https://www.kaggle.com/rohansinha2003' },
      { label: 'X (Twitter)', url: 'https://x.com/RohanSinhaAI' },
      { label: 'Hugging Face', url: 'https://huggingface.co/2003Rohansinha' },
    ],
  },
]
