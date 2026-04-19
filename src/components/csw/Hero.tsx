import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hypercar.jpg";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="top"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-obsidian text-ink -mt-20"
    >
      {/* Full-bleed cinematic image */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
        draggable={false}
      />

      {/* Tonal vignette — preserve image, deepen edges */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 30% 3% / 0.55) 0%, hsl(220 30% 3% / 0) 30%, hsl(220 30% 3% / 0) 60%, hsl(220 30% 3% / 0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(220 30% 3% / 0.55) 0%, hsl(220 30% 3% / 0) 40%)",
        }}
      />

      {/* Top-left spec coordinate */}
      <div className="absolute top-28 start-6 md:start-12 lg:start-20 z-10 reveal-soft" style={{ animationDelay: "200ms" }}>
        <div className="flex items-start gap-3">
          <span className="mt-[6px] h-px w-8 bg-ink/60" />
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-ink/60 uppercase">
              {t("hero.specMark")}
            </div>
            <div className="mt-1 font-mono text-[10px] tracking-[0.3em] text-ink/40">
              {t("hero.specRef")}
            </div>
          </div>
        </div>
      </div>

      {/* Top-right series mark */}
      <div className="absolute top-28 end-6 md:end-12 lg:end-20 z-10 reveal-soft text-end" style={{ animationDelay: "300ms" }}>
        <div className="font-mono text-[10px] tracking-[0.3em] text-ink/60 uppercase">
          {t("hero.specSeries")}
        </div>
        <div className="mt-1 font-mono text-[10px] tracking-[0.3em] text-ink/40">
          48° 32′ N · 7° 28′ E
        </div>
      </div>

      {/* Headline — bottom-left, hairline serif, massive */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-csw pb-16 md:pb-20 lg:pb-24">
          <div
            className="reveal-soft mb-8 flex items-center gap-4"
            style={{ animationDelay: "500ms" }}
          >
            <span className="h-px w-12 bg-ink" />
            <span className="font-mono text-[10px] tracking-[0.36em] uppercase text-ink/80">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1
            className="reveal display font-light text-ink tracking-[-0.035em] leading-[0.88] text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem] max-w-[18ch]"
            style={{
              animationDelay: "650ms",
              fontWeight: 300,
            }}
          >
            {t("hero.headline")}
          </h1>

          <div
            className="reveal mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
            style={{ animationDelay: "950ms" }}
          >
            <p className="max-w-md text-sm md:text-base text-ink/70 leading-[1.8]">
              {t("hero.subheadline")}
            </p>
            <div className="flex items-center gap-8">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.32em] uppercase text-ink hover:text-gold-glow transition-colors duration-700"
              >
                <span className="relative">
                  {t("hero.primaryCta")}
                  <span className="absolute inset-x-0 -bottom-2 h-px bg-ink/40 group-hover:bg-gold-glow transition-colors duration-700" />
                </span>
                <span className="block w-10 h-px bg-ink group-hover:bg-gold-glow group-hover:w-14 transition-all duration-700" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center font-mono text-[11px] tracking-[0.32em] uppercase text-ink/60 hover:text-ink transition-colors duration-700"
              >
                {t("hero.secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
