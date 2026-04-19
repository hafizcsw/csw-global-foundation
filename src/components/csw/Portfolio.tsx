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

// Door 1 locked taxonomy.
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
    <section id="portfolio" className="relative border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-40">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <SectionHeader
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            body={t("portfolio.body")}
          />
          {showViewAll && (
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink hover:text-gold transition-colors duration-500 whitespace-nowrap"
            >
              {t("portfolio.viewAll")}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>

        {showFilters && (
          <div className="mt-16 flex flex-wrap gap-2">
            {FILTER_KEYS.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setActive(k)}
                className={`px-5 py-3 border text-[10px] uppercase tracking-[0.28em] transition-all duration-500 ${
                  active === k
                    ? "border-gold bg-gold text-obsidian"
                    : "border-hairline text-ink-soft hover:text-gold hover:border-gold"
                }`}
              >
                {t(`portfolio.filters.${k}`)}
              </button>
            ))}
          </div>
        )}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((c, i) => (
            <article key={i} className="luxury-card p-10 md:p-14 group">
              <div className="flex items-start justify-between gap-6 mb-10">
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink group-hover:text-gold transition-colors duration-700 leading-tight">
                  {c.name}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.28em] px-3 py-2 border border-gold/40 text-gold whitespace-nowrap">
                  {c.status}
                </span>
              </div>
              <p className="text-base text-ink-soft leading-[1.8] mb-12 max-w-lg">{c.description}</p>
              <dl className="grid grid-cols-2 gap-y-5 gap-x-8 pt-8 border-t border-hairline text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-ink-muted mb-2">{t("portfolio.sectorLabel")}</dt>
                  <dd className="text-ink font-serif text-lg">{c.sector}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-ink-muted mb-2">{t("portfolio.relationshipLabel")}</dt>
                  <dd className="text-ink font-serif text-lg">{c.relationship}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
