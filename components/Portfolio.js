"use client";

import { useEffect, useState } from "react";
import { motion, MotionConfig, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { content, links, stack } from "@/content/content";
import ContactForm from "@/components/ContactForm";
import EmailLink from "@/components/EmailLink";
import { fadeUp, rise } from "@/components/Reveal";

// Put your photo in /public/wilver.jpg and change this to "/wilver.jpg".
// While it's null, the site shows your initials instead.
const PHOTO = "/wilver.jpg";

function SectionTitle({ index, children }) {
  return (
    <motion.h2 {...fadeUp()} className="mb-10 flex items-center gap-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
      <span className="font-mono text-base text-emerald-600">0{index}.</span>
      {children}
      <span className="ml-4 hidden h-px flex-1 bg-zinc-200 sm:block" />
    </motion.h2>
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

  // Thin progress bar at the top of the page that fills as you scroll.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

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
    <MotionConfig reducedMotion="user">
    <div className="page-bg min-h-screen text-zinc-600">
      <motion.div
        className="fixed inset-x-0 top-0 z-20 h-0.5 origin-left bg-emerald-500"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <div className="light-glow" aria-hidden="true" />
      {/* ---------- Navbar ---------- */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-10 border-b border-zinc-200 header-bg backdrop-blur"
      >
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
              <li>
                <Link href="/netsuite" className="transition hover:text-emerald-600">
                  NetSuite
                </Link>
              </li>
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
      </motion.header>

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ---------- Hero ---------- */}
        <section className="flex min-h-[85vh] flex-col-reverse items-start justify-center gap-10 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <motion.p {...rise(0.1)} className="mb-4 font-mono text-sm text-emerald-600">$ whoami</motion.p>
            <motion.p {...rise(0.2)} className="text-lg text-zinc-500">{t.hero.greeting}</motion.p>
            <motion.h1 {...rise(0.3)} className="cast-text mt-1 text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl">Wilver Guzmán</motion.h1>
            <motion.p {...rise(0.45)} className="mt-3 text-2xl font-semibold text-zinc-500 sm:text-4xl">{t.hero.role}</motion.p>
            <motion.p {...rise(0.55)} className="mt-6 max-w-xl text-lg leading-relaxed">{t.hero.tagline}</motion.p>
            <motion.div {...rise(0.7)} className="mt-8 flex flex-wrap gap-3">
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
            </motion.div>
            <motion.div {...rise(0.85)} className="mt-8 flex gap-5 font-mono text-sm">
              <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-emerald-600">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-600">LinkedIn</a>
              <EmailLink
                email={links.email}
                className="hover:text-emerald-600"
                copiedLabel={lang === "en" ? "Email copied ✓" : "Email copiado ✓"}
              >
                Email
              </EmailLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            className="cast-box relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-2 border-emerald-600/60 sm:h-72 sm:w-72"
          >
            {PHOTO ? (
              <Image src={PHOTO} alt="Wilver Guzmán" fill sizes="288px" className="object-cover" priority />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-100 font-mono text-5xl font-bold text-emerald-600">
                WG
              </div>
            )}
          </motion.div>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={1}>{t.about.title}</SectionTitle>
          <div className="max-w-3xl space-y-4 leading-relaxed">
            {t.about.body.map((paragraph, i) => (
              <motion.p key={paragraph} {...fadeUp(i)}>
                {paragraph}
              </motion.p>
            ))}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={2}>{t.projects.title}</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {t.projects.items.map((project, i) => (
              <motion.article
                {...fadeUp(i)}
                key={project.name}
                className={`cast-box flex flex-col rounded-lg border bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-600/60 ${
                  project.featured ? "border-emerald-600/40 md:col-span-2" : "border-zinc-200"
                } ${project.featured && project.image ? "md:grid md:grid-cols-5 md:items-center md:gap-8" : ""}`}
              >
                {project.image && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative mb-5 block aspect-[16/9] overflow-hidden rounded-md border border-zinc-200 bg-zinc-100 ${
                      project.featured ? "md:col-span-3 md:mb-0" : ""
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-100/90 px-3 py-2 backdrop-blur">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                      <span className="ml-3 truncate font-mono text-xs text-zinc-500">
                        {project.url.replace("https://", "")}
                      </span>
                    </div>
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top pt-8 transition duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                )}
<div className={`flex flex-1 flex-col ${project.featured && project.image ? "md:col-span-2" : ""}`}>
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
              </div>
              </motion.article>
            ))}
            <motion.article
              {...fadeUp(0)}
              className="cast-box flex flex-col rounded-lg border border-emerald-600/40 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-600/60 md:col-span-2"
            >
              <h3 className="text-xl font-semibold text-zinc-900">{t.netsuite.teaserTitle}</h3>
              <p className="mt-3 flex-1 leading-relaxed">{t.netsuite.teaserBody}</p>
              <Link href="/netsuite" className="mt-5 font-mono text-sm text-emerald-600 hover:underline">
                {t.netsuite.teaserCta} →
              </Link>
            </motion.article>
          </div>
        </section>

        {/* ---------- Featured features ---------- */}
        <section id="features" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={3}>{t.features.title}</SectionTitle>
          <p className="-mt-4 mb-10 max-w-2xl leading-relaxed">{t.features.intro}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {t.features.items.map((item, i) => (
              <motion.article
                {...fadeUp(i)}
                key={item.title}
                className="cast-box flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-emerald-600/60"
              >
                <div className="relative aspect-[16/9] border-b border-zinc-200 bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.project}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs text-emerald-600">{item.project}</p>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ---------- Stack ---------- */}
        <section id="stack" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={4}>{t.stack.title}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-3">
            {Object.entries(stack).map(([group, items], i) => (
              <motion.div {...fadeUp(i)} key={group} className="cast-box rounded-lg border border-zinc-200 p-6">
                <h3 className="mb-4 font-mono text-sm text-emerald-600">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------- Hardware ---------- */}
        <section id="hardware" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={5}>{t.hardware.title}</SectionTitle>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <p className="leading-relaxed">{t.hardware.body}</p>
            <ul className="space-y-3 font-mono text-sm">
              {t.hardware.items.map((item, i) => (
                <motion.li {...fadeUp(i)} key={item} className="flex items-center gap-3">
                  <span className="text-emerald-600">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="scroll-mt-20 border-t-2 border-zinc-400 py-20">
          <SectionTitle index={6}>{t.contact.title}</SectionTitle>
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
    </MotionConfig>
  );
}
