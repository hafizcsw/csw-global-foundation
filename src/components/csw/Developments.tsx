import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { CinematicBackdrop } from "./CinematicBackdrop";
import obsidian from "@/assets/cinema-obsidian-veins.jpg";

interface Item { category: string; date: string; title: string; body: string }

export const Developments = () => {
  const { t } = useTranslation();
  const items = t("developments.items", { returnObjects: true }) as Item[];
  return (
    <section className="relative border-b border-hairline-soft bg-background overflow-hidden">
      <CinematicBackdrop src={obsidian} opacity={14} />
      <div className="container-csw relative py-32 md:py-44">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-ink-muted">
                {t("developments.eyebrow")}
              </span>
            </div>
            <h2
              className="font-display uppercase text-ink leading-[0.98] text-3xl md:text-5xl lg:text-6xl"
              style={{ fontWeight: 600, letterSpacing: "0.005em" }}
            >
              {t("developments.title")}
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-ink hover:text-gold transition-colors duration-500"
          >
            {t("developments.viewAll")}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
          {items.map((item, i) => (
            <article
              key={i}
              className="group bg-background p-10 md:p-12 min-h-[340px] flex flex-col cursor-pointer transition-colors duration-700 hover:bg-secondary"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.36em] mb-12">
                <span className="text-gold">{item.category}</span>
                <span className="text-ink-muted">{item.date}</span>
              </div>
              <h3
                className="font-display uppercase text-ink leading-[1.15] text-xl md:text-2xl mb-5 group-hover:text-gold transition-colors duration-700"
                style={{ fontWeight: 600, letterSpacing: "0.005em" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-ink-soft leading-[1.85] flex-1">{item.body}</p>
              <div className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-ink-soft group-hover:text-gold transition-colors duration-500">
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
