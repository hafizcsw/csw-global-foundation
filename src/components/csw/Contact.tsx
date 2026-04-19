import { useTranslation } from "react-i18next";

const LANES = ["partnerships", "media", "strategic", "careers"] as const;

// Door 1 §8.3: institutional contact email is unresolved.
const CONTACT_EMAIL: string | null = null;

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="relative bg-background border-b border-hairline-soft">
      <div className="container-csw relative py-32 md:py-44">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-ink/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-ink-muted">
              {t("contact.eyebrow")}
            </span>
          </div>
          <h2
            className="font-display uppercase text-ink leading-[0.92] text-4xl md:text-6xl lg:text-7xl"
            style={{ fontWeight: 700, letterSpacing: "0.005em" }}
          >
            {t("contact.title")}
          </h2>
          <p className="mt-10 text-base md:text-lg text-ink-soft leading-[1.85] max-w-2xl">
            {t("contact.body")}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline-soft border border-hairline-soft">
          {LANES.map((c) => (
            <div
              key={c}
              id={c === "careers" ? "careers" : undefined}
              className="scroll-mt-24 bg-background p-8 md:p-10 transition-colors duration-700 hover:bg-secondary/40"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-6">
                {t(`contact.lanes.${c}.title`)}
              </div>
              <p className="text-sm text-ink-soft leading-[1.85]">
                {t(`contact.lanes.${c}.body`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          {CONTACT_EMAIL ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-pill-dark">
              {t("contact.cta")}
            </a>
          ) : (
            <div
              role="status"
              aria-live="polite"
              className="inline-flex flex-col gap-3 border border-ink/30 px-10 py-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink">
                {t("contact.ctaPending")}
              </span>
              <span className="text-sm text-ink-soft max-w-md leading-[1.85] normal-case tracking-normal">
                {t("contact.pendingNote")}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
