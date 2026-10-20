# Portfolio (TanStack Start + Three.js)

Single-page portfolio with numbered chapters: hero, origin story, skill tiers, live GitHub activity, a 3D draggable project carousel with case-study pages, an ask-assistant, a side-quest page and a terminal-style contact section.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build into dist/
```

## Make it yours

1. Open `src/data/site.ts`. Every name, bio paragraph, skill, project and link lives there. Replace all the placeholders.
2. Set `github` to your real username so the live GitHub section works.
3. Add your photo at `public/portrait.jpg`, then uncomment the `<img>` line in `src/routes/index.tsx`.
4. Add your résumé at `public/resume.pdf`.
5. Colors and fonts are CSS variables at the top of `src/styles.css`.

## Notes

- The "Ask" assistant is rule-based and only knows what is in `site.ts`. Replace `answer()` in `src/components/AskAssistant.tsx` with a call to your own API if you want a real LLM.
- Deploy to Cloudflare, Netlify or Vercel using TanStack Start's hosting guides for your platform.
