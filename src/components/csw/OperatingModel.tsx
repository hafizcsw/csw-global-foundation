import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Step {
  title: string;
  body: string;
}

export const OperatingModel = () => {
  const { t } = useTranslation();
  const steps = t("operatingModel.steps", { returnObjects: true }) as Step[];
  return (
    <section id="operating-model" className="relative bg-background border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <SectionHeader
          eyebrow={t("operatingModel.eyebrow")}
          title={t("operatingModel.title")}
          body={t("operatingModel.body")}
        />

        <ol className="mt-24 md:mt-28 border-t border-hairline-soft">
          {steps.map((step, i) => (
            <li
              key={i}
              className="grid grid-cols-12 gap-6 py-10 md:py-14 border-b border-hairline-soft transition-colors duration-700 hover:bg-secondary/40 px-2"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted pt-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="col-span-10 md:col-span-5 font-display uppercase text-ink leading-[1.05] text-2xl md:text-3xl lg:text-4xl"
                style={{ fontWeight: 600, letterSpacing: "0.005em" }}
              >
                {step.title}
              </h3>
              <p className="col-span-12 md:col-span-6 text-base text-ink-soft leading-[1.85]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
