import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Pillar { title: string; body: string }

export const Thesis = () => {
  const { t } = useTranslation();
  const pillars = t("thesis.pillars", { returnObjects: true }) as Pillar[];
  return (
    <section id="thesis" className="relative border-b border-hairline-soft bg-background">
      <div className="container-csw py-32 md:py-44">
        <SectionHeader
          eyebrow={t("thesis.eyebrow")}
          title={t("thesis.title")}
          body={t("thesis.body")}
        />
        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
          {pillars.map((p, i) => (
            <article
              key={i}
              className="group bg-background p-10 md:p-12 min-h-[280px] flex flex-col justify-between transition-colors duration-700 hover:bg-secondary"
            >
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-mono text-[10px] tracking-[0.36em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block w-6 h-px bg-ink/30 group-hover:bg-gold group-hover:w-12 transition-all duration-700" />
              </div>
              <div>
                <h3
                  className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl lg:text-[1.75rem] mb-5"
                  style={{ fontWeight: 600, letterSpacing: "0.005em" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
