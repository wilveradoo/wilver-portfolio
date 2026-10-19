// Shared animation presets (powered by the "motion" library).
// Spread them on any motion.* element: <motion.div {...fadeUp(index)} />

const ease = [0.22, 1, 0.36, 1];

// Fades and slides up when the element scrolls into view. `i` staggers siblings a little.
export const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay: (i % 3) * 0.1, ease },
});

// Plays once on page load (hero), with a delay in seconds.
export const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});
