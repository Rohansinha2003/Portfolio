import { KNOWLEDGE_BASE, type KnowledgeChunk } from '~/data/ragKnowledge'

export type RagResult = {
  answer: string
  sources: { title: string; category: string }[]
  links: { label: string; url: string }[]
}

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he',
  'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'were', 'will',
  'with', 'what', 'who', 'how', 'where', 'when', 'why', 'can', 'you', 'tell', 'me',
  'about', 'do', 'does', 'did', 'show', 'give', 'know', 'rohan', 'rohans', 'sinha'
])

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#_ -]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w))
}

export function retrieveChunks(query: string, topK = 3): { chunk: KnowledgeChunk; score: number }[] {
  const queryTokens = tokenize(query)
  if (queryTokens.length === 0) {
    return [{ chunk: KNOWLEDGE_BASE[0], score: 1 }]
  }

  const rawLower = query.toLowerCase()

  const scored = KNOWLEDGE_BASE.map((chunk) => {
    let score = 0
    const chunkTitleLower = chunk.title.toLowerCase()
    const chunkContentLower = chunk.content.toLowerCase()

    // 1. Exact phrase match boost
    if (chunkTitleLower.includes(rawLower)) score += 25
    if (chunkContentLower.includes(rawLower)) score += 15

    // 2. Tag matching (highest relevance signal)
    for (const tag of chunk.tags) {
      const tagLower = tag.toLowerCase()
      if (rawLower.includes(tagLower)) {
        score += 18
      }
      for (const qt of queryTokens) {
        if (tagLower.includes(qt) || qt.includes(tagLower)) {
          score += 10
        }
      }
    }

    // 3. Title token overlap
    for (const qt of queryTokens) {
      if (chunkTitleLower.includes(qt)) {
        score += 8
      }
    }

    // 4. Content token frequency
    for (const qt of queryTokens) {
      const regex = new RegExp(`\\b${qt}\\b`, 'gi')
      const matches = chunk.content.match(regex)
      if (matches) {
        score += Math.min(matches.length * 3, 12)
      } else if (chunkContentLower.includes(qt)) {
        score += 1.5
      }
    }

    // Category boost
    if (rawLower.includes('leetcode') && chunk.category === 'leetcode') score += 20
    if (rawLower.includes('dsa') && chunk.category === 'leetcode') score += 20
    if (rawLower.includes('kaggle') && chunk.category === 'kaggle') score += 20
    if (rawLower.includes('github') && chunk.category === 'github') score += 15
    if ((rawLower.includes('51m') || rawLower.includes('coding model')) && chunk.id === 'project-coding-model-51m') score += 30
    if (rawLower.includes('deepnova') && chunk.id === 'project-deepnova-ai') score += 30
    if ((rawLower.includes('xray') || rawLower.includes('x-ray')) && chunk.id === 'project-chest-xray') score += 30

    return { chunk, score }
  })

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topK)
}

export function answerWithRag(query: string): RagResult {
  const qLower = query.toLowerCase().trim()

  // Quick greetings
  if (/^(hi|hello|hey|greetings|who are you|what can you do)/i.test(qLower)) {
    return {
      answer:
        "Hello! I am Rohan Sinha's interactive RAG assistant. I have full context on his LeetCode problem solving, Kaggle datasets & pipelines, 57+ GitHub projects, and custom AI models like the 51M Coding Model and DeepNova AI. Ask me anything!",
      sources: [{ title: 'Overview & Capabilities', category: 'background' }],
      links: [
        { label: 'GitHub Profile', url: 'https://github.com/Rohansinha2003' },
        { label: 'Hugging Face', url: 'https://huggingface.co/2003Rohansinha' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-sinhaa/' },
      ],
    }
  }

  // Retrieve top context chunks
  const retrieved = retrieveChunks(query, 3)
  const topMatch = retrieved[0]

  if (!topMatch || topMatch.score < 2) {
    return {
      answer:
        "I couldn't find a direct match in Rohan's technical index for that specific question. You can ask about his LeetCode & C++ problem solving, Kaggle ML projects, 57+ GitHub repositories, the 51M Coding Model, or his availability for roles.",
      sources: [{ title: 'Knowledge Base Index', category: 'background' }],
      links: [
        { label: 'View GitHub', url: 'https://github.com/Rohansinha2003' },
        { label: 'Contact Rohan', url: 'mailto:2003rohansinha@gmail.com' },
      ],
    }
  }

  // Synthesize answer from retrieved chunks
  let synthesizedAnswer = topMatch.chunk.content

  // If there's a strong secondary chunk with distinct information, enrich answer
  const secondary = retrieved[1]
  if (secondary && secondary.score >= topMatch.score * 0.65 && secondary.chunk.id !== topMatch.chunk.id) {
    synthesizedAnswer += `\n\nAdditionally, ${secondary.chunk.content}`
  }

  // Collect unique links and sources
  const sourcesMap = new Map<string, { title: string; category: string }>()
  const linksMap = new Map<string, string>()

  retrieved.forEach(({ chunk, score }) => {
    if (score >= 2) {
      sourcesMap.set(chunk.id, { title: chunk.title, category: chunk.category })
      chunk.links?.forEach((l) => {
        linksMap.set(l.label, l.url)
      })
    }
  })

  const sources = Array.from(sourcesMap.values())
  const links = Array.from(linksMap.entries()).map(([label, url]) => ({ label, url }))

  return {
    answer: synthesizedAnswer,
    sources,
    links,
  }
}
