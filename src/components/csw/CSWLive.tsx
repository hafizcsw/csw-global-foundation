import { useTranslation } from "react-i18next";

interface Item {
  category: string;
  date: string;
  title: string;
}

export const CSWLive = () => {
  const { t } = useTranslation();
  const items = t("home.live.items", { returnObjects: true }) as Item[];

  return (
    <section className="bg-obsidian text-ink border-y border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-gold">
              {t("home.live.eyebrow")}
            </div>
            <h2 className="mt-8 display font-light text-ink tracking-[-0.025em] leading-[1.02] text-[2rem] md:text-[3rem] lg:text-[3.75rem] max-w-[18ch]">
              {t("home.live.title")}
            </h2>
          </div>
          <a
            href="#all"
            className="font-mono text-[11px] tracking-[0.32em] uppercase text-ink/60 hover:text-gold-glow transition-colors duration-500"
          >
            {t("home.live.viewAll")} →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft">
          {items.map((it, i) => (
            <article
              key={i}
              className="group bg-obsidian p-10 lg:p-12 min-h-[260px] flex flex-col justify-between transition-colors duration-700 hover:bg-carbon"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.36em] uppercase text-gold">
                  {it.category}
                </span>
                <span className="h-px w-6 bg-ink/30" />
                <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-ink-muted">
                  {it.date}
                </span>
              </div>
              <h3 className="mt-12 display text-lg md:text-xl lg:text-2xl font-light leading-[1.25] text-ink tracking-[-0.01em] group-hover:text-gold-glow transition-colors duration-700">
                {it.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
