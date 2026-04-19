import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Pillar { title: string; body: string }

export const Thesis = () => {
  const { t } = useTranslation();
  const pillars = t("thesis.pillars", { returnObjects: true }) as Pillar[];
  return (
    <section id="thesis" className="relative border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-40">
        <SectionHeader
          eyebrow={t("thesis.eyebrow")}
          title={t("thesis.title")}
          body={t("thesis.body")}
        />
        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="luxury-card p-10 md:p-12 group">
              <div className="flex items-baseline justify-between mb-10">
                <span className="font-serif text-5xl md:text-6xl text-gold/40 group-hover:text-gold transition-colors duration-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-12 bg-hairline group-hover:bg-gold transition-colors duration-700" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-5 leading-tight">{p.title}</h3>
              <p className="text-sm text-ink-soft leading-[1.8]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
