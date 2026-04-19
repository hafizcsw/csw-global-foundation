import { useTranslation } from "react-i18next";

interface Domain {
  code: string;
  title: string;
  body: string;
}

/**
 * FlagshipDomains — six large cinematic panels, no card frames.
 * Hairline grid, gold accent on hover, slow reveals.
 */
export const FlagshipDomains = () => {
  const { t } = useTranslation();
  const items = t("home.domains.items", { returnObjects: true }) as Domain[];

  return (
    <section className="bg-background text-ink border-y border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-gold">
              {t("home.domains.eyebrow")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display font-light text-ink tracking-[-0.025em] leading-[1.02] text-[2rem] md:text-[3rem] lg:text-[4rem] max-w-[20ch]">
              {t("home.domains.title")}
            </h2>
            <p className="mt-8 max-w-xl text-sm md:text-base leading-[1.8] text-ink/60">
              {t("home.domains.body")}
            </p>
            <p className="mt-6 max-w-xl font-mono text-[10px] tracking-[0.24em] uppercase text-ink-muted">
              {t("home.domains.note")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline-soft">
          {items.map((d) => (
            <article
              key={d.code}
              className="group relative bg-card p-10 lg:p-12 min-h-[280px] flex flex-col justify-between transition-colors duration-700 hover:bg-secondary"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.36em] text-gold">
                  {d.code}
                </span>
                <span className="block w-6 h-px bg-ink/30 group-hover:bg-gold group-hover:w-12 transition-all duration-700" />
              </div>
              <div>
                <h3 className="display text-xl md:text-2xl lg:text-[1.75rem] font-light leading-[1.15] text-ink tracking-[-0.01em]">
                  {d.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.7] text-ink/55 max-w-[34ch]">
                  {d.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
