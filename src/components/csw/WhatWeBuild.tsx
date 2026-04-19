import { useTranslation } from "react-i18next";
import buildArchitecture from "@/assets/build-architecture.jpg";
import buildCapital from "@/assets/build-capital.jpg";
import buildEnergy from "@/assets/build-energy.jpg";

interface Sector { title: string; body: string }

/**
 * Bugatti-pattern editorial grid: pure black ground, no hairlines, no numbering.
 * Three large visual cards — image → uppercase title → body. Generous gaps.
 * Images map by index to first three sectors; remaining sectors (if any in
 * locale files) are rendered below in a clean 12-language-safe text row.
 */
export const WhatWeBuild = () => {
  const { t } = useTranslation();
  const sectors = t("whatWeBuild.sectors", { returnObjects: true }) as Sector[];
  const images = [buildArchitecture, buildCapital, buildEnergy];
  const featured = sectors.slice(0, 3);
  const rest = sectors.slice(3);

  return (
    <section className="relative bg-background border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        {/* Header — Bugatti style: no eyebrow chip, just colossal title */}
        <div className="max-w-5xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-muted mb-8">
            {t("whatWeBuild.eyebrow")}
          </div>
          <h2
            className="font-display uppercase text-ink leading-[0.95] text-4xl md:text-6xl lg:text-7xl"
            style={{ fontWeight: 700, letterSpacing: "0.005em" }}
          >
            {t("whatWeBuild.title")}
          </h2>
          <p className="mt-10 text-base md:text-lg text-ink-soft leading-[1.85] max-w-2xl">
            {t("whatWeBuild.body")}
          </p>
        </div>

        {/* Three image cards — pure, no borders, generous gap */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-14">
          {featured.map((s, i) => (
            <article key={i} className="group flex flex-col">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={images[i]}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3
                className="mt-8 font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl lg:text-[1.7rem]"
                style={{ fontWeight: 700, letterSpacing: "0.005em" }}
              >
                {s.title}
              </h3>
              <p className="mt-4 text-sm md:text-[15px] text-ink-soft leading-[1.85] max-w-md">
                {s.body}
              </p>
            </article>
          ))}
        </div>

        {/* Remaining sectors (locale-driven, may be empty) */}
        {rest.length > 0 && (
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {rest.map((s, i) => (
              <div key={i} className="flex flex-col">
                <h3
                  className="font-display uppercase text-ink leading-[1.05] text-lg md:text-xl"
                  style={{ fontWeight: 700, letterSpacing: "0.005em" }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-[1.85]">{s.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
