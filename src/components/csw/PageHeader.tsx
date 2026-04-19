import { useTranslation } from "react-i18next";

interface PageHeaderProps {
  eyebrowKey: string;
  titleKey: string;
  bodyKey?: string;
  /** Optional CDN URL of a background hero video (from .asset.json). */
  videoSrc?: string;
  /** Static fallback poster (still frame) for the video. Optional. */
  poster?: string;
}

/**
 * Bugatti-grade page header — full-width cinematic band.
 * Optional looping muted video backdrop with a strong tonal grade so the
 * Antonio uppercase title stays legible. The header always reads as a
 * cinematic dark surface (forced via .cinematic-dark token override in
 * index.css) — even when the user is in Day mode.
 */
export const PageHeader = ({
  eyebrowKey,
  titleKey,
  bodyKey,
  videoSrc,
  poster,
}: PageHeaderProps) => {
  const { t } = useTranslation();
  return (
    <section className="cinematic-dark relative overflow-hidden bg-obsidian text-parchment">
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* Tonal grade — three-stop gradient for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: videoSrc
            ? "linear-gradient(180deg, hsl(220 25% 3% / 0.55) 0%, hsl(220 25% 3% / 0.35) 40%, hsl(220 25% 3% / 0.92) 100%)"
            : "radial-gradient(ellipse 70% 50% at 50% 30%, hsl(220 28% 12%) 0%, hsl(220 22% 4%) 70%)",
        }}
      />

      <div className="container-csw relative pt-40 pb-28 md:pt-52 md:pb-36 min-h-[78vh] flex flex-col justify-end">
        <div className="max-w-5xl">
          <div
            className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/60 mb-10 reveal-soft"
            style={{ animationDelay: "100ms" }}
          >
            {t(eyebrowKey)}
          </div>
          <h1
            className="font-display uppercase text-parchment leading-[0.95] text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] reveal"
            style={{ animationDelay: "250ms", fontWeight: 700, letterSpacing: "0.005em" }}
          >
            {t(titleKey)}
          </h1>
          {bodyKey && (
            <p
              className="mt-12 text-base md:text-lg text-parchment/75 leading-[1.85] max-w-2xl reveal"
              style={{ animationDelay: "500ms" }}
            >
              {t(bodyKey)}
            </p>
          )}
          <div className="mt-14 h-px w-24 bg-parchment/40" />
        </div>
      </div>
    </section>
  );
};
