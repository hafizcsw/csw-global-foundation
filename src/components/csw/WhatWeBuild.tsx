import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Sector { title: string; body: string }

export const WhatWeBuild = () => {
  const { t } = useTranslation();
  const sectors = t("whatWeBuild.sectors", { returnObjects: true }) as Sector[];
  return (
    <section className="relative border-b border-hairline-soft bg-background">
      <div className="container-csw py-32 md:py-44">
        <SectionHeader
          eyebrow={t("whatWeBuild.eyebrow")}
          title={t("whatWeBuild.title")}
          body={t("whatWeBuild.body")}
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
          {sectors.map((s, i) => (
            <article
              key={i}
              className="group bg-background p-10 md:p-12 min-h-[280px] flex flex-col justify-between transition-colors duration-700 hover:bg-secondary"
            >
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.36em] uppercase">
                <span className="text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink-muted">{String(sectors.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-12">
                <h3
                  className="font-display uppercase text-ink leading-[1.1] text-xl md:text-2xl lg:text-[1.75rem] mb-5"
                  style={{ fontWeight: 600, letterSpacing: "0.005em" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
