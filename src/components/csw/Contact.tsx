import { useTranslation } from "react-i18next";

const LANES = ["partnerships", "media", "strategic", "careers"] as const;

// Door 1 §8.3: institutional contact email is unresolved.
const CONTACT_EMAIL: string | null = null;

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="relative border-b border-hairline-soft bg-obsidian">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, hsl(var(--gold) / 0.1), transparent 55%)",
        }}
      />
      <div className="container-csw relative py-32 md:py-44">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">{t("contact.eyebrow")}</span>
          </div>
          <h2 className="display text-4xl md:text-5xl lg:text-7xl">{t("contact.title")}</h2>
          <p className="mt-10 text-base md:text-lg text-ink-soft leading-[1.8] max-w-2xl">
            {t("contact.body")}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {LANES.map((c) => (
            <div
              key={c}
              id={c === "careers" ? "careers" : undefined}
              className="scroll-mt-24 bg-obsidian p-8 md:p-10 group hover:bg-obsidian-soft transition-colors duration-700"
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
                {t(`contact.lanes.${c}.title`)}
              </div>
              <p className="text-sm text-ink-soft leading-[1.8]">
                {t(`contact.lanes.${c}.body`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          {CONTACT_EMAIL ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-luxury">
              {t("contact.cta")}
            </a>
          ) : (
            <div
              role="status"
              aria-live="polite"
              className="inline-flex flex-col gap-3 border border-gold/40 px-10 py-6"
            >
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold">
                {t("contact.ctaPending")}
              </span>
              <span className="text-sm text-ink-soft max-w-md leading-[1.8] normal-case tracking-normal">
                {t("contact.pendingNote")}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
