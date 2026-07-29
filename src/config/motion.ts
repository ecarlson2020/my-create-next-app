import type { MotionProps } from "framer-motion";

export const revealMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
} satisfies MotionProps;

export const imageRevealMotion = {
  initial: { opacity: 0, scale: 0.97 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
} satisfies MotionProps;
