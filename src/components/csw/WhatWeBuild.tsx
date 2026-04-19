import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Sector { title: string; body: string }

export const WhatWeBuild = () => {
  const { t } = useTranslation();
  const sectors = t("whatWeBuild.sectors", { returnObjects: true }) as Sector[];
  return (
    <section className="relative border-b border-hairline-soft bg-obsidian-soft/40">
      <div className="container-csw py-32 md:py-40">
        <SectionHeader
          eyebrow={t("whatWeBuild.eyebrow")}
          title={t("whatWeBuild.title")}
          body={t("whatWeBuild.body")}
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <article
              key={i}
              className="luxury-card p-10 md:p-12 min-h-[260px] flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-[10px] tracking-[0.32em] uppercase">
                <span className="text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink-muted">{String(sectors.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-12">
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4 group-hover:text-gold transition-colors duration-700 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.8]">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
