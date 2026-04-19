import { useTranslation } from "react-i18next";

interface Venture {
  name: string;
  sector: string;
  status: string;
  description: string;
}

export const FlagshipVentures = () => {
  const { t } = useTranslation();
  const items = t("home.ventures.items", { returnObjects: true }) as Venture[];

  return (
    <section className="bg-background text-ink">
      <div className="container-csw py-32 md:py-44">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-gold">
              {t("home.ventures.eyebrow")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display font-light text-ink tracking-[-0.025em] leading-[1.02] text-[2rem] md:text-[3rem] lg:text-[4rem] max-w-[20ch]">
              {t("home.ventures.title")}
            </h2>
            <p className="mt-8 max-w-xl text-sm md:text-base leading-[1.8] text-ink-soft">
              {t("home.ventures.body")}
            </p>
          </div>
        </div>

        <div className="divide-y divide-hairline-soft border-y border-hairline-soft">
          {items.map((v, i) => (
            <article
              key={v.name}
              className="group grid grid-cols-12 gap-6 py-10 md:py-14 transition-colors duration-700 hover:bg-obsidian-soft cursor-default"
            >
              <div className="col-span-12 md:col-span-1 font-mono text-[10px] tracking-[0.36em] text-gold pt-1">
                0{i + 1}
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="display text-2xl md:text-3xl lg:text-4xl font-light leading-[1.05] text-ink tracking-[-0.015em]">
                  {v.name}
                </h3>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="font-mono text-[9px] tracking-[0.32em] uppercase text-ink-muted mb-2">
                  {t("home.ventures.sectorLabel")}
                </div>
                <div className="text-sm text-ink-soft">{v.sector}</div>
              </div>
              <div className="col-span-6 md:col-span-2">
                <div className="font-mono text-[9px] tracking-[0.32em] uppercase text-ink-muted mb-2">
                  {t("home.ventures.statusLabel")}
                </div>
                <div className="text-sm text-ink-soft">{v.status}</div>
              </div>
              <div className="col-span-12 md:col-span-2">
                <p className="text-sm leading-[1.7] text-ink/65">{v.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
