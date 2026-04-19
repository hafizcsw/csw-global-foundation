import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Step { title: string; body: string }

export const OperatingModel = () => {
  const { t } = useTranslation();
  const steps = t("operatingModel.steps", { returnObjects: true }) as Step[];
  return (
    <section id="operating-model" className="border-b border-hairline bg-ink text-parchment">
      <div className="container-csw py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-parchment/60 mb-6">
            {t("operatingModel.eyebrow")}
          </div>
          <h2 className="display text-3xl md:text-4xl lg:text-5xl text-parchment">
            {t("operatingModel.title")}
          </h2>
          <p className="mt-6 text-base md:text-lg text-parchment/70 leading-relaxed max-w-2xl">
            {t("operatingModel.body")}
          </p>
        </div>

        <ol className="mt-16 md:mt-20 divide-y divide-parchment/15 border-t border-b border-parchment/15">
          {steps.map((step, i) => (
            <li key={i} className="grid grid-cols-12 gap-6 py-8 md:py-10 group">
              <div className="col-span-2 md:col-span-1 text-[11px] uppercase tracking-[0.22em] text-gold pt-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="col-span-10 md:col-span-4 font-serif text-2xl md:text-3xl text-parchment">
                {step.title}
              </h3>
              <p className="col-span-12 md:col-span-7 text-base text-parchment/70 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
