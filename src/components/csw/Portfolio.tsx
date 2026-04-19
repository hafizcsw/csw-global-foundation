import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

interface Company {
  name: string;
  sector: string;
  status: string;
  description: string;
  relationship: string;
}

export const Portfolio = () => {
  const { t } = useTranslation();
  const companies = t("portfolio.companies", { returnObjects: true }) as Company[];
  return (
    <section id="portfolio" className="border-b border-hairline">
      <div className="container-csw py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            body={t("portfolio.body")}
          />
          <a href="#" className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink hover:text-gold transition-colors whitespace-nowrap">
            {t("portfolio.viewAll")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {companies.map((c, i) => (
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
