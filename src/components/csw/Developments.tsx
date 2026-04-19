import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

interface Item { category: string; date: string; title: string; body: string }

export const Developments = () => {
  const { t } = useTranslation();
  const items = t("developments.items", { returnObjects: true }) as Item[];
  return (
    <section className="relative border-b border-hairline-soft bg-obsidian-soft/40">
      <div className="container-csw py-32 md:py-40">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">{t("developments.eyebrow")}</span>
            </div>
            <h2 className="display text-3xl md:text-5xl lg:text-6xl">{t("developments.title")}</h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink hover:text-gold transition-colors duration-500"
          >
            {t("developments.viewAll")}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <article
              key={i}
              className="luxury-card p-10 md:p-12 flex flex-col group cursor-pointer min-h-[340px]"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] mb-10">
                <span className="text-gold">{item.category}</span>
                <span className="text-ink-muted">{item.date}</span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-ink mb-5 leading-snug group-hover:text-gold transition-colors duration-700">
                {item.title}
              </h3>
              <p className="text-sm text-ink-soft leading-[1.8] flex-1">{item.body}</p>
              <div className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft group-hover:text-gold transition-colors duration-500">
                <span className="h-px w-8 bg-current" />
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
