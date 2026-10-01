"use client";

import { useState } from "react";
import { links } from "@/content/content";

// The form sends messages through Formspree (free service that forwards them to your email).
// Set NEXT_PUBLIC_FORMSPREE_ID in Vercel (Settings → Environment Variables).
// If it's missing, the form falls back to opening the visitor's email app.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm({ t }) {
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio contact: ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-emerald-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block font-mono text-xs text-zinc-500">{t.name}</span>
          <input name="name" required className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1 block font-mono text-xs text-zinc-500">{t.email}</span>
          <input name="email" type="email" required className={inputClass} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block font-mono text-xs text-zinc-500">{t.message}</span>
        <textarea name="message" rows={5} required className={inputClass} />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-emerald-600 px-6 py-3 font-mono text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.send}
      </button>

      {status === "success" && <p className="text-sm text-emerald-600">{t.success}</p>}
      {status === "error" && <p className="text-sm text-red-600">{t.error}</p>}
    </form>
  );
}
