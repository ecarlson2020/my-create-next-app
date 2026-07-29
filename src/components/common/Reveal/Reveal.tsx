import { ReactNode, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";

interface RevealProps {
  children: ReactNode;
  /** Stagger within a group, in ms. */
  delay?: number;
}

/**
 * Fades + rises its children in once they scroll into view. Uses an
 * IntersectionObserver rather than a scroll listener so it costs nothing while
 * off-screen, and disconnects after the first reveal — these never animate out.
 *
 * The `riseIn` keyframes live in _app.tsx GlobalStyles, and the global
 * prefers-reduced-motion rule there collapses the animation to ~0ms.
 */
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // No observer (old browsers, jsdom): show immediately rather than trapping
    // the content at opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    // Reduced motion: there's no animation to stagger, so gating the content on
    // a scroll observer only risks leaving it invisible. Show it straight away.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: shown ? 1 : 0,
        animation: shown ? "riseIn 900ms ease-out both" : "none",
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}
