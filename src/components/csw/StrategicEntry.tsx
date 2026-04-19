import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const StrategicEntry = () => {
  const { t } = useTranslation();
  const lanes = ["partnerships", "institutions", "media", "strategic"] as const;

  return (
    <section className="bg-background text-ink">
      <div className="container-csw py-32 md:py-48 lg:py-56">
        <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-gold">
          {t("home.entry.eyebrow")}
        </div>
        <h2 className="mt-10 display font-light text-ink tracking-[-0.03em] leading-[0.98] text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] max-w-[16ch]">
          {t("home.entry.title")}
        </h2>
        <p className="mt-10 max-w-xl text-base md:text-lg leading-[1.8] text-ink-soft">
          {t("home.entry.body")}
        </p>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline-soft border border-hairline-soft">
          {lanes.map((lane) => (
            <div key={lane} className="bg-background p-8 min-h-[120px] flex items-center">
              <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-soft">
                {t(`home.entry.lanes.${lane}`)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-5 font-mono text-[12px] tracking-[0.36em] uppercase text-ink hover:text-gold-glow transition-colors duration-700"
          >
            <span className="relative">
              {t("home.entry.cta")}
              <span className="absolute inset-x-0 -bottom-2 h-px bg-gold group-hover:bg-gold-glow transition-colors duration-700" />
            </span>
            <span className="block w-12 h-px bg-gold group-hover:bg-gold-glow group-hover:w-20 transition-all duration-700" />
          </Link>
        </div>
      </div>
    </section>
  );
};
