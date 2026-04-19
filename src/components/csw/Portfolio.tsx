import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

interface Company {
  name: string;
  sector: string;
  status: string;
  description: string;
  relationship: string;
}

// Door 1 locked taxonomy. Filter labels resolve to taxonomy values that match company.sector.
const FILTER_KEYS = ["all", "access", "mobility", "commerce", "financial", "ai", "future"] as const;
const FILTER_TO_SECTOR: Record<(typeof FILTER_KEYS)[number], string | null> = {
  all: null,
  access: "Access & Opportunity",
  mobility: "Mobility & Services",
  commerce: "Commerce & Consumer Platforms",
  financial: "Financial Enablement",
  ai: "AI & Digital Infrastructure",
  future: "Strategic Future Ventures",
};

interface PortfolioProps {
  showFilters?: boolean;
  showViewAll?: boolean;
}

export const Portfolio = ({ showFilters = false, showViewAll = true }: PortfolioProps) => {
  const { t } = useTranslation();
  const [active, setActive] = useState<(typeof FILTER_KEYS)[number]>("all");
  const companies = t("portfolio.companies", { returnObjects: true }) as Company[];
  const sectorMatch = FILTER_TO_SECTOR[active];
  const visible = sectorMatch ? companies.filter((c) => c.sector === sectorMatch) : companies;
  return (
    <section id="portfolio" className="border-b border-hairline">
      <div className="container-csw py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            body={t("portfolio.body")}
          />
          {showViewAll && (
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink hover:text-gold transition-colors whitespace-nowrap"
            >
              {t("portfolio.viewAll")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>

        {showFilters && (
          <div className="mt-12 flex flex-wrap gap-2">
            {FILTER_KEYS.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setActive(k)}
                className={`px-4 py-2 border text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  active === k
                    ? "border-ink bg-ink text-parchment"
                    : "border-hairline text-ink-soft hover:text-ink hover:border-ink"
                }`}
              >
                {t(`portfolio.filters.${k}`)}
              </button>
            ))}
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {visible.map((c, i) => (
            <article key={i} className="bg-background p-8 md:p-12 group">
              <div className="flex items-start justify-between gap-6 mb-8">
                <h3 className="font-serif text-3xl md:text-4xl text-ink">{c.name}</h3>
                <span className="text-[10px] uppercase tracking-[0.22em] px-3 py-1.5 border border-hairline text-ink-soft whitespace-nowrap">
                  {c.status}
                </span>
              </div>
              <p className="text-base text-ink-soft leading-relaxed mb-10 max-w-lg">{c.description}</p>
              <dl className="grid grid-cols-2 gap-y-4 gap-x-6 pt-6 border-t border-hairline text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5">{t("portfolio.sectorLabel")}</dt>
                  <dd className="text-ink">{c.sector}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5">{t("portfolio.relationshipLabel")}</dt>
                  <dd className="text-ink">{c.relationship}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
