import { useTranslation } from "react-i18next";

interface PageHeaderProps {
  eyebrowKey: string;
  titleKey: string;
  bodyKey?: string;
}

export const PageHeader = ({ eyebrowKey, titleKey, bodyKey }: PageHeaderProps) => {
  const { t } = useTranslation();
  return (
    <section className="relative border-b border-hairline-soft overflow-hidden bg-gradient-hero">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 start-1/3 h-[400px] w-[400px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.18), transparent 60%)" }}
      />
      <div className="container-csw relative pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-10 reveal-soft" style={{ animationDelay: "100ms" }}>
            <span className="h-px w-12 bg-gold animate-gold-pulse" />
            <span className="eyebrow">{t(eyebrowKey)}</span>
          </div>
          <h1
            className="display text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] reveal"
            style={{ animationDelay: "200ms" }}
          >
            {t(titleKey)}
          </h1>
          {bodyKey && (
            <p
              className="mt-10 text-base md:text-lg text-ink-soft leading-[1.8] max-w-2xl reveal"
              style={{ animationDelay: "450ms" }}
            >
              {t(bodyKey)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
