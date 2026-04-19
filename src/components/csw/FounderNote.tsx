import { useTranslation } from "react-i18next";

/**
 * Bugatti-grade founder note — full editorial chamber, Antonio condensed.
 */
export const FounderNote = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-obsidian text-parchment overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(220 25% 10%) 0%, hsl(220 22% 4%) 80%)",
        }}
      />
      <div className="container-csw relative py-32 md:py-48">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-12">
            {t("founder.eyebrow")}
          </div>
          <blockquote
            className="font-display uppercase text-parchment leading-[1.05] text-[1.75rem] md:text-[3rem] lg:text-[4rem]"
            style={{ fontWeight: 600, letterSpacing: "0.005em" }}
          >
            {t("founder.body")}
          </blockquote>
          <div className="mt-16 inline-flex items-center gap-4">
            <span className="h-px w-10 bg-parchment/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-parchment/70">
              {t("founder.attribution")}
            </span>
            <span className="h-px w-10 bg-parchment/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
