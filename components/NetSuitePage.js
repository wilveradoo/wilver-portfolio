"use client";

import { useState } from "react";
import Link from "next/link";
import { content, links } from "@/content/content";

function Tag({ children }) {
  return (
    <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-600">
      {children}
    </span>
  );
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {}
}

export default function NetSuitePage() {
  const [lang, setLang] = useState("en");
  const t = content[lang].netsuite;
  const contact = content[lang].contact;

  return (
    <div className="page-bg min-h-screen text-zinc-600">
      <div className="light-glow" aria-hidden="true" />
      <header className="sticky top-0 z-10 border-b border-zinc-200 header-bg backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="font-mono text-sm font-semibold text-emerald-600">
            &lt;wilver /&gt;
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/" className="hidden font-mono text-sm transition hover:text-emerald-600 sm:inline">
              {t.back}
            </Link>
            <button
              onClick={toggleTheme}
              className="rounded border border-zinc-300 px-3 py-1 font-mono text-xs transition hover:border-emerald-600 hover:text-emerald-600"
              aria-label="Toggle light/dark mode"
            >
              <span className="dark:hidden">☾</span>
              <span className="hidden dark:inline">☀</span>
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="rounded border border-zinc-300 px-3 py-1 font-mono text-xs transition hover:border-emerald-600 hover:text-emerald-600"
              aria-label="Change language"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6">
        <section className="py-20">
          <p className="mb-4 font-mono text-sm text-emerald-600">$ whoami --netsuite</p>
          <h1 className="cast-text text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl">Wilver Guzmán</h1>
          <p className="mt-3 text-2xl font-semibold text-zinc-500 sm:text-3xl">{t.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{t.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={links.cvNetsuite[lang]}
              download
              className="rounded-md bg-emerald-600 px-6 py-3 font-mono text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              {t.ctaCv}
            </a>
            <a
              href={`mailto:${links.email}`}
              className="rounded-md border border-emerald-600 px-6 py-3 font-mono text-sm text-emerald-600 transition hover:bg-emerald-600/10"
            >
              {t.ctaContact}
            </a>
          </div>
          <div className="mt-8 flex gap-5 font-mono text-sm">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-600">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-emerald-600">GitHub</a>
            <a href={`mailto:${links.email}`} className="hover:text-emerald-600">Email</a>
          </div>
        </section>

        <section className="border-t-2 border-zinc-400 py-16">
          <h2 className="mb-6 text-3xl font-bold text-zinc-900">{t.experienceTitle}</h2>
          <p className="mb-10 max-w-3xl leading-relaxed">{t.experienceIntro}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {t.projects.map((project) => (
              <article
                key={project.name}
                className="cast-box flex flex-col rounded-lg border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-zinc-900">{project.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t-2 border-zinc-400 py-16">
          <h2 className="mb-6 text-3xl font-bold text-zinc-900">{t.stackTitle}</h2>
          <div className="flex flex-wrap gap-2">
            {t.stack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <p className="mt-6 font-mono text-sm text-zinc-500">{t.note}</p>
        </section>

        <section className="border-t-2 border-zinc-400 py-16">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900">{contact.title}</h2>
          <p className="mb-6 max-w-2xl leading-relaxed">{contact.body}</p>
          <a
            href={`mailto:${links.email}`}
            className="font-mono text-emerald-600 hover:underline"
          >
            {links.email}
          </a>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} Wilver Guzmán · {content[lang].footer}
      </footer>
    </div>
  );
}
