"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { content, links, stack } from "@/content/content";
import ContactForm from "@/components/ContactForm";

// Put your photo in /public/wilver.jpg and change this to "/wilver.jpg".
// While it's null, the site shows your initials instead.
const PHOTO = "/wilver.jpg";

function SectionTitle({ index, children }) {
  return (
    <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
      <span className="font-mono text-base text-emerald-600">0{index}.</span>
      {children}
      <span className="ml-4 hidden h-px flex-1 bg-zinc-200 sm:block" />
    </h2>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-600">
      {children}
    </span>
  );
}

// Switches between light and dark by toggling the "dark" class on <html> (see globals.css), and remembers the choice.
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {}
}

export default function Portfolio() {
  // Current language: "en" or "es". Every text below reads from content[lang].
  const [lang, setLang] = useState("en");
  const t = content[lang];

  // Moves the light source: follows the mouse, and drifts slowly on its own when idle (e.g. on phones).
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = -0.5, y = -0.7; // current light position
    let target = null; // set while the mouse is moving
    let lastMove = 0;
    let frame;

    const onMove = (e) => {
      target = { x: (e.clientX / window.innerWidth) * 2 - 1, y: (e.clientY / window.innerHeight) * 2 - 1 };
      lastMove = performance.now();
    };

    const tick = (now) => {
      if (!target || now - lastMove > 3000) {
        target = { x: Math.cos(now / 3500) * 0.9, y: Math.sin(now / 5000) * 0.8 - 0.2 };
      }
      x += (target.x - x) * 0.06;
      y += (target.y - y) * 0.06;
      root.style.setProperty("--lx", x.toFixed(3));
      root.style.setProperty("--ly", y.toFixed(3));
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="page-bg min-h-screen text-zinc-600">
      <div className="light-glow" aria-hidden="true" />
      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 header-bg backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-mono text-sm font-semibold text-emerald-600">
            &lt;wilver /&gt;
          </a>
          <div className="flex items-center gap-5">
            <ul className="hidden gap-5 font-mono text-sm md:flex">
              {Object.entries(t.nav).map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="transition hover:text-emerald-600">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
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

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ---------- Hero ---------- */}
        <section className="flex min-h-[85vh] flex-col-reverse items-start justify-center gap-10 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-sm text-emerald-600">$ whoami</p>
            <p className="text-lg text-zinc-500">{t.hero.greeting}</p>
            <h1 className="cast-text mt-1 text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl">Wilver Guzmán</h1>
            <p className="mt-3 text-2xl font-semibold text-zinc-500 sm:text-4xl">{t.hero.role}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{t.hero.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-emerald-600 px-6 py-3 font-mono text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href={links.cv[lang]}
                download
                className="rounded-md border border-emerald-600 px-6 py-3 font-mono text-sm text-emerald-600 transition hover:bg-emerald-600/10"
              >
                {t.hero.ctaCv}
              </a>
            </div>
            <div className="mt-8 flex gap-5 font-mono text-sm">
              <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-emerald-600">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-600">LinkedIn</a>
              <a href={`mailto:${links.email}`} className="hover:text-emerald-600">Email</a>
            </div>
          </div>

          <div className="cast-box relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-2 border-emerald-600/60 sm:h-72 sm:w-72">
            {PHOTO ? (
              <Image src={PHOTO} alt="Wilver Guzmán" fill sizes="288px" className="object-cover" priority />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-100 font-mono text-5xl font-bold text-emerald-600">
                WG
              </div>
            )}
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={1}>{t.about.title}</SectionTitle>
          <div className="max-w-3xl space-y-4 leading-relaxed">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={2}>{t.projects.title}</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {t.projects.items.map((project) => (
              <article
                key={project.name}
                className={`cast-box flex flex-col rounded-lg border bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-600/60 ${
                  project.featured ? "border-emerald-600/40 md:col-span-2" : "border-zinc-200"
                }`}
              >
                <h3 className="text-xl font-semibold text-zinc-900">{project.name}</h3>
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
                    className="mt-5 font-mono text-sm text-emerald-600 hover:underline"
                  >
                    {project.url.includes("github.com") ? t.projects.code : t.projects.visit} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Stack ---------- */}
        <section id="stack" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={3}>{t.stack.title}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-3">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="cast-box rounded-lg border border-zinc-200 p-6">
                <h3 className="mb-4 font-mono text-sm text-emerald-600">{group}</h3>
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
        <section id="hardware" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={4}>{t.hardware.title}</SectionTitle>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <p className="leading-relaxed">{t.hardware.body}</p>
            <ul className="space-y-3 font-mono text-sm">
              {t.hardware.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-emerald-600">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={5}>{t.contact.title}</SectionTitle>
          <p className="mb-8 max-w-2xl leading-relaxed">{t.contact.body}</p>
          <div className="max-w-2xl">
            <ContactForm t={t.contact} />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} Wilver Guzmán · {t.footer}
      </footer>
    </div>
  );
}
