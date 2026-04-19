import { ReactNode, useEffect, useRef, useState } from "react";

interface SnapChapterProps {
  index: string;
  background?: ReactNode;
  overlay?: "dark" | "light" | "none";
  align?: "center" | "bottom" | "top";
  children: ReactNode;
  textColor?: "parchment" | "ink";
  id?: string;
}

/**
 * SnapChapter — full-viewport (100svh) cinematic chapter.
 * Snaps into place inside `.snap-stage`, applies a parallax transform
 * to its background, and fades content in once visible.
 */
export const SnapChapter = ({
  index,
  background,
  overlay = "dark",
  align = "center",
  textColor = "parchment",
  children,
  id,
}: SnapChapterProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.4) setVisible(true);
        }
      },
      { threshold: [0.4, 0.6] }
    );
    io.observe(node);

    // Parallax: shift bg based on intersection ratio
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = node.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // -1..+1
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${progress * -40}px, 0) scale(1.06)`;
        }
      });
    };
    const stage = node.closest(".snap-stage");
    (stage ?? window).addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      (stage ?? window).removeEventListener("scroll", onScroll as EventListener);
    };
  }, []);

  const justify =
    align === "bottom" ? "justify-end pb-24 md:pb-32" : align === "top" ? "justify-start pt-32" : "justify-center";

  const overlayBg =
    overlay === "dark"
      ? "linear-gradient(180deg, hsl(220 25% 3% / 0.55) 0%, hsl(220 25% 3% / 0.25) 35%, hsl(220 25% 3% / 0.85) 100%)"
      : overlay === "light"
        ? "linear-gradient(180deg, hsl(30 14% 98% / 0.6) 0%, hsl(30 14% 98% / 0.3) 50%, hsl(30 14% 98% / 0.85) 100%)"
        : "transparent";

  const txt = textColor === "parchment" ? "text-parchment" : "text-ink";

  return (
    <section
      ref={ref}
      id={id}
      data-chapter={index}
      className={`snap-chapter ${txt}`}
    >
      {background && (
        <div ref={bgRef} className="parallax-bg">
          {background}
        </div>
      )}
      {overlay !== "none" && (
        <div aria-hidden className="absolute inset-0 z-[1]" style={{ background: overlayBg }} />
      )}

      {/* Chapter index marker */}
      <div className="absolute top-8 right-8 md:top-10 md:right-12 z-[3] font-mono text-[10px] tracking-[0.4em] opacity-70">
        {index} / 08
      </div>

      <div className={`chapter-content container-csw flex ${justify}`}>
        <div className={`chapter-enter ${visible ? "is-visible" : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
};
