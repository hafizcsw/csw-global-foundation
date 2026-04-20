import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import {
  PORTFOLIO_GROUPS,
  PORTFOLIO_REGISTRY,
  PENDING_DISCLOSURE_COUNT,
  type PortfolioEntity,
} from "@/data/portfolioRegistry";

interface PortfolioProps {
  /** Show "view all" CTA back to /portfolio (used on the homepage if needed). */
  showViewAll?: boolean;
}

/**
 * Bugatti-grade portfolio renderer.
 * Reads the canonical registry (portfolioRegistry.ts) and groups entities by
 * the four approved layers. Names are brand identifiers and remain in the
 * registry's English form across all locales — only descriptive fields are
 * pulled from i18n. A neutral "held under disclosure" panel closes the page.
 */
export const Portfolio = ({ showViewAll = false }: PortfolioProps) => {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="relative bg-background border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <SectionHeader
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            body={t("portfolio.intro")}
          />
          {showViewAll && (
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink hover:text-ink/70 transition-colors duration-500 whitespace-nowrap"
            >
              {t("portfolio.viewAll")}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>

        <div className="mt-24 space-y-28 md:space-y-36">
          {PORTFOLIO_GROUPS.map((g) => {
            const entities = PORTFOLIO_REGISTRY.filter((e) => e.group === g.id);
            if (entities.length === 0) return null;
            return (
              <div key={g.id}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-hairline-soft">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-muted mb-4">
                      {String(g.order).padStart(2, "0")} · {t(`portfolio.groups.${g.id}.title`)}
                    </div>
                    <h3
                      className="font-display uppercase text-ink leading-[0.95] text-2xl md:text-3xl lg:text-4xl"
                      style={{ fontWeight: 700, letterSpacing: "0.005em" }}
                    >
                      {t(`portfolio.groups.${g.id}.title`)}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-ink-soft leading-[1.85] max-w-md">
                    {t(`portfolio.groups.${g.id}.tagline`)}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
                  {entities.map((e) => (
                    <EntityCard key={e.id} entity={e} />
                  ))}
                </div>
              </div>
            );
          })}

          <DisclosurePanel />
        </div>
      </div>
    </section>
  );
};

const EntityCard = ({ entity }: { entity: PortfolioEntity }) => {
  const { t } = useTranslation();
  return (
    <article className="bg-background p-10 md:p-14 group transition-colors duration-700 hover:bg-secondary/40">
      <div className="flex items-start justify-between gap-6 mb-8">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-4">
            {t(`portfolio.type.${entity.entity_type}`)}
            {entity.flagship_or_support === "flagship" && (
              <span className="ms-3 text-ink/60">· {t("portfolio.labels.role")}</span>
            )}
          </div>
          <h4
            className="font-display uppercase text-ink leading-[0.95] text-2xl md:text-3xl"
            style={{ fontWeight: 700, letterSpacing: "0.005em" }}
          >
            {entity.name}
          </h4>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] px-3 py-2 border border-ink/30 text-ink whitespace-nowrap">
          {t(`portfolio.stage.${entity.stage}`)}
        </span>
      </div>
      <p className="text-base text-ink-soft leading-[1.85] mb-8 max-w-lg">
        {t(`portfolio.entities.${entity.id}.description`)}
      </p>
      <p className="text-[13px] text-ink-soft/85 leading-[1.8] mb-10 max-w-lg italic">
        {t(`portfolio.entities.${entity.id}.role`)}
      </p>
      <dl className="grid grid-cols-2 gap-y-5 gap-x-8 pt-8 border-t border-hairline-soft text-sm">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted mb-2">
            {t("portfolio.labels.sector")}
          </dt>
          <dd
            className="font-display uppercase text-ink text-[15px] leading-tight"
            style={{ fontWeight: 600, letterSpacing: "0.01em" }}
          >
            {t(`portfolio.sector.${entity.sector}`)}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted mb-2">
            {t("portfolio.labels.audience")}
          </dt>
          <dd
            className="font-display uppercase text-ink text-[15px] leading-tight"
            style={{ fontWeight: 600, letterSpacing: "0.01em" }}
          >
            {t(`portfolio.audience.${entity.target_audience}`)}
          </dd>
        </div>
      </dl>
    </article>
  );
};

const DisclosurePanel = () => {
  const { t } = useTranslation();
  const count = PENDING_DISCLOSURE_COUNT;
  return (
    <div className="border border-ink/20 bg-secondary/30 p-12 md:p-16">
      <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-muted mb-6">
        {t("portfolio.disclosure.eyebrow")}
        {count !== null && <span className="ms-3 text-ink">· {count}</span>}
      </div>
      <h3
        className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl lg:text-[1.7rem] max-w-2xl mb-6"
        style={{ fontWeight: 700, letterSpacing: "0.005em" }}
      >
        {t("portfolio.disclosure.title")}
      </h3>
      <p className="text-sm md:text-base text-ink-soft leading-[1.85] max-w-2xl">
        {t("portfolio.disclosure.body")}
      </p>
    </div>
  );
};
