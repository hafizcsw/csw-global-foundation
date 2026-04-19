interface CinematicBackdropProps {
  src: string;
  alt?: string;
  /** Image opacity 0-100. Default 18 — keeps type readable on light bg. */
  opacity?: number;
  /** Tone overlay direction. */
  tone?: "light" | "dark";
  /** Optional position (default center). */
  position?: string;
}

/**
 * Bugatti-grade cinematic backdrop — a fixed image layer with a strong
 * tonal grade so foreground typography stays legible. Pure decorative.
 */
export const CinematicBackdrop = ({
  src,
  alt = "",
  opacity = 18,
  tone = "light",
  position = "center",
}: CinematicBackdropProps) => {
  const veil =
    tone === "dark"
      ? "linear-gradient(180deg, hsl(220 30% 3% / 0.55) 0%, hsl(220 30% 3% / 0.92) 100%)"
      : "linear-gradient(180deg, hsl(var(--background) / 0.82) 0%, hsl(var(--background) / 0.96) 100%)";

  return (
    <>
      <img
        src={src}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        loading="lazy"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 w-full h-full object-cover select-none"
        style={{ opacity: opacity / 100, objectPosition: position }}
      />
      <div aria-hidden className="absolute inset-0" style={{ background: veil }} />
    </>
  );
};
