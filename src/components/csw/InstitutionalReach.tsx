import { useTranslation } from "react-i18next";
import { CinematicBackdrop } from "./CinematicBackdrop";
import skyline from "@/assets/cinema-skyline.jpg";

interface Metric {
  value: string;
  label: string;
}

export const InstitutionalReach = () => {
  const { t } = useTranslation();
  const metrics = t("home.reach.metrics", { returnObjects: true }) as Metric[];

  return (
    <section className="relative bg-background text-ink overflow-hidden">
      <CinematicBackdrop src={skyline} opacity={16} position="center 35%" />
      <div className="container-csw relative py-32 md:py-44">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-gold">
              {t("home.reach.eyebrow")}
            </div>
            <h2 className="mt-8 display font-light text-ink tracking-[-0.025em] leading-[1.02] text-[2rem] md:text-[3rem] lg:text-[4rem] max-w-[18ch]">
              {t("home.reach.title")}
            </h2>
            <p className="mt-8 max-w-xl text-sm md:text-base leading-[1.8] text-ink-soft">
              {t("home.reach.body")}
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-3 border-t border-hairline-soft">
              {metrics.map((m) => (
                <div key={m.label} className="py-8 border-e border-hairline-soft last:border-e-0">
                  <div className="display text-4xl md:text-5xl lg:text-6xl font-light text-gold leading-none">
                    {m.value}
                  </div>
                  <div className="mt-3 font-mono text-[9px] tracking-[0.32em] uppercase text-ink-muted">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
