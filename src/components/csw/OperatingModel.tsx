import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Step { title: string; body: string }

export const OperatingModel = () => {
  const { t } = useTranslation();
  const steps = t("operatingModel.steps", { returnObjects: true }) as Step[];
  return (
    <section
      id="operating-model"
      className="relative border-b border-hairline-soft bg-obsidian"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, hsl(var(--gold) / 0.08), transparent 50%)",
        }}
      />
      <div className="container-csw relative py-32 md:py-40">
        <SectionHeader
          eyebrow={t("operatingModel.eyebrow")}
          title={t("operatingModel.title")}
          body={t("operatingModel.body")}
        />

        <ol className="mt-24 md:mt-28 border-t border-hairline">
          {steps.map((step, i) => (
            <li
              key={i}
              className="grid grid-cols-12 gap-6 py-10 md:py-14 border-b border-hairline group hover:bg-obsidian-soft/40 transition-colors duration-700 px-2"
            >
              <div className="col-span-2 md:col-span-1 text-[10px] uppercase tracking-[0.32em] text-gold pt-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="col-span-10 md:col-span-5 font-serif text-2xl md:text-3xl lg:text-4xl text-ink leading-tight group-hover:text-gold transition-colors duration-700">
                {step.title}
              </h3>
              <p className="col-span-12 md:col-span-6 text-base text-ink-soft leading-[1.8]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
