import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

interface Item { category: string; date: string; title: string; body: string }

export const Developments = () => {
  const { t } = useTranslation();
  const items = t("developments.items", { returnObjects: true }) as Item[];
  return (
    <section className="border-b border-hairline bg-secondary/30">
      <div className="container-csw py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">{t("developments.eyebrow")}</div>
            <h2 className="display text-3xl md:text-4xl lg:text-5xl text-ink">
              {t("developments.title")}
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink hover:text-gold transition-colors">
            {t("developments.viewAll")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {items.map((item, i) => (
            <article key={i} className="bg-background p-8 md:p-10 flex flex-col group cursor-pointer hover:bg-card transition-colors">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-ink mb-4 leading-snug">{item.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed flex-1">{item.body}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink group-hover:text-gold transition-colors">
                <span className="h-px w-6 bg-current" />
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
