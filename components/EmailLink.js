"use client";

import { useState } from "react";

// A mailto: link only works if the visitor has a mail app set up, so on many computers
// clicking it seems to "do nothing". This keeps the mailto: link but also copies the
// address to the clipboard and shows a short confirmation, so it always does something.
export default function EmailLink({ email, className, copiedLabel, children }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard not available: the mailto: link still works as usual.
    }
  }

  return (
    <a href={`mailto:${email}`} onClick={handleClick} className={className} title={email}>
      {copied ? copiedLabel : children}
    </a>
  );
}
