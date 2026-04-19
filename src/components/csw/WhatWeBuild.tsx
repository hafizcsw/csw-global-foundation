import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Sector { title: string; body: string }

export const WhatWeBuild = () => {
  const { t } = useTranslation();
  const sectors = t("whatWeBuild.sectors", { returnObjects: true }) as Sector[];
  return (
    <section className="border-b border-hairline bg-secondary/30">
      <div className="container-csw py-24 md:py-32">
        <SectionHeader
          eyebrow={t("whatWeBuild.eyebrow")}
          title={t("whatWeBuild.title")}
          body={t("whatWeBuild.body")}
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {sectors.map((s, i) => (
            <div
              key={i}
              className="bg-background p-8 md:p-10 min-h-[220px] flex flex-col justify-between hover:bg-card transition-colors"
            >
              <div className="text-[11px] tracking-[0.22em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {String(sectors.length).padStart(2, "0")}
              </div>
              <div className="mt-10">
                <h3 className="font-serif text-xl md:text-2xl text-ink mb-3">{s.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
