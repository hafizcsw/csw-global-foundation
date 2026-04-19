import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Pillar { title: string; body: string }

export const Thesis = () => {
  const { t } = useTranslation();
  const pillars = t("thesis.pillars", { returnObjects: true }) as Pillar[];
  return (
    <section id="thesis" className="border-b border-hairline">
      <div className="container-csw py-24 md:py-32">
        <SectionHeader
          eyebrow={t("thesis.eyebrow")}
          title={t("thesis.title")}
          body={t("thesis.body")}
        />
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {pillars.map((p, i) => (
            <div key={i} className="bg-background p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl text-ink mb-4">{p.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
