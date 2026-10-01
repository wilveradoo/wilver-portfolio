# Wilver Guzmán — Portfolio

Bilingual (EN/ES) developer portfolio built with **Next.js** (App Router) and **Tailwind CSS**.

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```

## Structure
- `content/content.js` — all site text in English and Spanish, plus links and tech stack
- `components/Portfolio.js` — the page (client component, holds the language state)
- `components/ContactForm.js` — contact form (Formspree)
- `public/cv-wilver-guzman.pdf` — downloadable CV

## Contact form
Create a free form at [formspree.io](https://formspree.io) and set `NEXT_PUBLIC_FORMSPREE_ID` in Vercel.
Without it, the form opens the visitor's email app instead.
