import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroVideoAsset from "@/assets/hero-cinematic-hd.mp4.asset.json";

const heroVideoUrl = heroVideoAsset.url;

/**
 * HeroFilm — full-bleed cinematic film hero.
 * Bugatti-grade: video carries atmosphere, type carries authority.
 * No interactivity beyond two CTAs and a scroll cue.
 */
export const HeroFilm = () => {
  const { t } = useTranslation();
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(m.matches);
    const onChange = () => setReduce(m.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);

  return (
    <section
      id="top"
      className="snap-chapter relative w-full bg-obsidian text-parchment"
      data-chapter="01"
    >
      {!reduce && (
        <video
          src={heroVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
          aria-hidden="true"
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 25% 3% / 0.68) 0%, hsl(220 25% 3% / 0.18) 28%, hsl(220 25% 3% / 0.28) 58%, hsl(220 25% 3% / 0.96) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(220 25% 3% / 0.78) 0%, hsl(220 25% 3% / 0.2) 42%, hsl(220 25% 3% / 0.08) 62%, hsl(220 25% 3% / 0.42) 100%)",
        }}
      />

      {/* Top markers removed — brand already lives in the header.
          Keeping the hero quiet lets the film + headline carry the moment. */}

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-csw pb-16 md:pb-20 lg:pb-24">
          <div
            className="reveal-soft mb-8 flex items-center gap-4"
            style={{ animationDelay: "600ms" }}
          >
            <span className="h-px w-12 bg-gold" />
            <span className="font-mono text-[10px] tracking-[0.36em] uppercase text-parchment/85">
              {t("home.hero.eyebrow")}
            </span>
          </div>

          <h1
            className="reveal display font-light text-parchment tracking-[-0.03em] leading-[0.92] text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] max-w-[20ch]"
            style={{ animationDelay: "800ms", fontWeight: 300 }}
          >
            {t("home.hero.headline")}
          </h1>

          <div
            className="reveal mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
            style={{ animationDelay: "1100ms" }}
          >
            <p className="max-w-md text-sm md:text-base text-parchment/72 leading-[1.8]">
              {t("home.hero.subheadline")}
            </p>
            <div className="flex items-center gap-8">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.32em] uppercase text-parchment hover:text-gold-glow transition-colors duration-700"
              >
                <span className="relative">
                  {t("home.hero.primaryCta")}
                  <span className="absolute inset-x-0 -bottom-2 h-px bg-gold/60 group-hover:bg-gold-glow transition-colors duration-700" />
                </span>
                <span className="block w-10 h-px bg-gold group-hover:bg-gold-glow group-hover:w-14 transition-all duration-700" />
              </Link>
              <Link
                to="/our-model"
                className="group inline-flex items-center font-mono text-[11px] tracking-[0.32em] uppercase text-parchment/65 hover:text-parchment transition-colors duration-700"
              >
                {t("home.hero.secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 inset-x-0 z-10 flex justify-center reveal-soft"
        style={{ animationDelay: "1400ms" }}
        aria-hidden
      >
        <div className="font-mono text-[9px] tracking-[0.4em] uppercase text-parchment/45">
          {t("home.hero.scroll")} ↓
        </div>
      </div>
    </section>
  );
};
