import { useTranslation } from "react-i18next";

const LANES = ["partnerships", "media", "strategic", "careers"] as const;

// Door 1 §8.3: institutional contact email is unresolved.
// Set CONTACT_EMAIL only when a cleared, approved address is provided.
// While null, the CTA renders as a non-shipping pending state — no fabricated address.
const CONTACT_EMAIL: string | null = null;

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="border-b border-hairline bg-ink text-parchment">
      <div className="container-csw py-28 md:py-36">
        <div className="max-w-3xl">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-parchment/60 mb-8">
            {t("contact.eyebrow")}
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-parchment">
            {t("contact.title")}
          </h2>
          <p className="mt-8 text-base md:text-lg text-parchment/70 leading-relaxed max-w-2xl">
            {t("contact.body")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-parchment/15 pt-12">
          {LANES.map((c) => (
            <div key={c} id={c === "careers" ? "careers" : undefined} className="scroll-mt-24">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-3">
                {t(`contact.lanes.${c}.title`)}
              </div>
              <p className="text-sm text-parchment/70 leading-relaxed">
                {t(`contact.lanes.${c}.body`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          {CONTACT_EMAIL ? (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-3 bg-parchment text-ink px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ink transition-colors"
            >
              {t("contact.cta")}
            </a>
          ) : (
            <div
              role="status"
              aria-live="polite"
              className="inline-flex flex-col gap-2 border border-parchment/30 px-8 py-4"
            >
              <span className="text-xs uppercase tracking-[0.22em] text-parchment/80">
                {t("contact.ctaPending")}
              </span>
              <span className="text-xs text-parchment/60 max-w-md leading-relaxed normal-case tracking-normal">
                {t("contact.pendingNote")}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
