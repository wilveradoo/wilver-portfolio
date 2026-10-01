"use client";

import { useState } from "react";
import Image from "next/image";
import { content, links, stack } from "@/content/content";
import ContactForm from "@/components/ContactForm";

// Put your photo in /public/wilver.jpg and change this to "/wilver.jpg".
// While it's null, the site shows your initials instead.
const PHOTO = "/wilver.jpg";

function SectionTitle({ index, children }) {
  return (
    <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-zinc-100 sm:text-3xl">
      <span className="font-mono text-base text-emerald-400">0{index}.</span>
      {children}
      <span className="ml-4 hidden h-px flex-1 bg-zinc-800 sm:block" />
    </h2>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 font-mono text-xs text-zinc-300">
      {children}
    </span>
  );
}

export default function Portfolio() {
  // Current language: "en" or "es". Every text below reads from content[lang].
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-10 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-mono text-sm font-semibold text-emerald-400">
            &lt;wilver /&gt;
          </a>
          <div className="flex items-center gap-5">
            <ul className="hidden gap-5 font-mono text-sm md:flex">
              {Object.entries(t.nav).map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="transition hover:text-emerald-400">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="rounded border border-zinc-700 px-3 py-1 font-mono text-xs transition hover:border-emerald-400 hover:text-emerald-400"
              aria-label="Change language"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* ---------- Hero ---------- */}
        <section className="flex min-h-[85vh] flex-col-reverse items-start justify-center gap-10 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-sm text-emerald-400">$ whoami</p>
            <p className="text-lg text-zinc-400">{t.hero.greeting}</p>
            <h1 className="mt-1 text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl">Wilver Guzmán</h1>
            <p className="mt-3 text-2xl font-semibold text-zinc-400 sm:text-3xl">{t.hero.role}</p>
            <p className="mt-6 max-w-xl leading-relaxed">{t.hero.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-emerald-400 px-6 py-3 font-mono text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href={links.cv}
                download
                className="rounded-md border border-emerald-400 px-6 py-3 font-mono text-sm text-emerald-400 transition hover:bg-emerald-400/10"
              >
                {t.hero.ctaCv}
              </a>
            </div>
            <div className="mt-8 flex gap-5 font-mono text-sm">
              <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400">LinkedIn</a>
              <a href={`mailto:${links.email}`} className="hover:text-emerald-400">Email</a>
            </div>
          </div>

          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-emerald-400/60 sm:h-56 sm:w-56">
            {PHOTO ? (
              <Image src={PHOTO} alt="Wilver Guzmán" fill sizes="224px" className="object-cover" priority />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-900 font-mono text-5xl font-bold text-emerald-400">
                WG
              </div>
            )}
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="scroll-mt-20 py-20">
          <SectionTitle index={1}>{t.about.title}</SectionTitle>
          <div className="max-w-3xl space-y-4 leading-relaxed">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="scroll-mt-20 py-20">
          <SectionTitle index={2}>{t.projects.title}</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {t.projects.items.map((project) => (
              <article
                key={project.name}
                className={`flex flex-col rounded-lg border bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-emerald-400/60 ${
                  project.featured ? "border-emerald-400/40 md:col-span-2" : "border-zinc-800"
                }`}
              >
                <h3 className="text-xl font-semibold text-zinc-100">{project.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 font-mono text-sm text-emerald-400 hover:underline"
                  >
                    {project.url.includes("github.com") ? t.projects.code : t.projects.visit} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Stack ---------- */}
        <section id="stack" className="scroll-mt-20 py-20">
          <SectionTitle index={3}>{t.stack.title}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-3">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="rounded-lg border border-zinc-800 p-6">
                <h3 className="mb-4 font-mono text-sm text-emerald-400">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Hardware ---------- */}
        <section id="hardware" className="scroll-mt-20 py-20">
          <SectionTitle index={4}>{t.hardware.title}</SectionTitle>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <p className="leading-relaxed">{t.hardware.body}</p>
            <ul className="space-y-3 font-mono text-sm">
              {t.hardware.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-emerald-400">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="scroll-mt-20 py-20">
          <SectionTitle index={5}>{t.contact.title}</SectionTitle>
          <p className="mb-8 max-w-2xl leading-relaxed">{t.contact.body}</p>
          <div className="max-w-2xl">
            <ContactForm t={t.contact} />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-8 text-center font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} Wilver Guzmán · {t.footer}
      </footer>
    </div>
  );
}
