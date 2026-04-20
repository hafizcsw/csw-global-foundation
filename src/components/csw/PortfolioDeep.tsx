import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Item { title: string; body: string }
interface Phase { phase: string; title: string; body: string }

/** Door-1 deepening for /portfolio — adds context around the existing grid. */
export const PortfolioDeep = () => {
  const { t } = useTranslation();
  const connect = t("portfolioExt.connect", { returnObjects: true }) as Item[];
  const principles = t("portfolioExt.principles", { returnObjects: true }) as Item[];
  const evolution = t("portfolioExt.evolution", { returnObjects: true }) as Phase[];

  return (
    <>
      {/* What Connects The Portfolio */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("portfolioExt.connectEyebrow")}
            title={t("portfolioExt.connectTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline-soft border border-hairline-soft">
            {connect.map((c, i) => (
              <div key={i} className="bg-background p-8 md:p-10">
                <h3 className="font-display uppercase text-ink leading-[1.1] text-base md:text-lg mb-4" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {c.title}
                </h3>
                <p className="text-xs text-ink-soft leading-[1.85]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Principles */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("portfolioExt.principlesEyebrow")}
            title={t("portfolioExt.principlesTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {principles.map((p, i) => (
              <div key={i} className="bg-background p-10 md:p-14">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display uppercase text-ink/30 text-4xl md:text-5xl" style={{ fontWeight: 700 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-ink/30" />
                </div>
                <h3 className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Evolution */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("portfolioExt.evolutionEyebrow")}
            title={t("portfolioExt.evolutionTitle")}
          />
          <ol className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline-soft border border-hairline-soft">
            {evolution.map((e, i) => (
              <li key={i} className="bg-background p-8 md:p-10">
                <div className="font-display uppercase text-ink/40 text-3xl md:text-4xl mb-8" style={{ fontWeight: 700 }}>
                  {e.phase}
                </div>
                <h3 className="font-display uppercase text-ink leading-[1.1] text-lg md:text-xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {e.title}
                </h3>
                <p className="text-xs text-ink-soft leading-[1.85]">{e.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

/** Top-of-page intro section for /portfolio. */
export const PortfolioPrelude = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-background border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <SectionHeader
          eyebrow={t("portfolioExt.logicEyebrow")}
          title={t("portfolioExt.logicTitle")}
          body={t("portfolioExt.logicBody")}
        />
      </div>
    </section>
  );
};
