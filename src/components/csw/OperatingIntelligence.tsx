import { useTranslation } from "react-i18next";

interface Step {
  code: string;
  title: string;
  body: string;
}

export const OperatingIntelligence = () => {
  const { t } = useTranslation();
  const steps = t("home.intelligence.steps", { returnObjects: true }) as Step[];

  return (
    <section className="relative bg-background text-ink border-y border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-gold">
              {t("home.intelligence.eyebrow")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display font-light text-ink tracking-[-0.025em] leading-[1.02] text-[2rem] md:text-[3rem] lg:text-[4rem] max-w-[20ch]">
              {t("home.intelligence.title")}
            </h2>
            <p className="mt-8 max-w-xl text-sm md:text-base leading-[1.8] text-ink/60">
              {t("home.intelligence.body")}
            </p>
          </div>
        </div>

        {/* Vertical timeline with hairline connector */}
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-px bg-hairline-soft">
          {steps.map((s) => (
            <div
              key={s.code}
              className="bg-card p-10 lg:p-12 min-h-[260px] flex flex-col"
            >
              <div className="font-mono text-[10px] tracking-[0.36em] text-gold mb-8">
                {s.code}
              </div>
              <h3 className="display text-xl md:text-2xl font-light leading-[1.15] text-ink tracking-[-0.01em] mb-4">
                {s.title}
              </h3>
              <p className="text-sm leading-[1.7] text-ink/55">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
