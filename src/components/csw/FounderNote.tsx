import { useTranslation } from "react-i18next";

export const FounderNote = () => {
  const { t } = useTranslation();
  return (
    <section className="relative border-b border-hairline-soft bg-card">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(var(--gold) / 0.1), transparent 60%)",
        }}
      />
      <div className="container-csw relative py-32 md:py-44">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">{t("founder.eyebrow")}</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <span className="block font-serif text-7xl md:text-8xl text-gold leading-none mb-4" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="display text-2xl md:text-4xl lg:text-5xl text-ink leading-[1.35]">
            {t("founder.body")}
          </blockquote>
          <div className="mt-12 inline-flex items-center gap-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-gold">
              {t("founder.attribution")}
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};
