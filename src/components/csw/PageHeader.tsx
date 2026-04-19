import { useTranslation } from "react-i18next";

interface PageHeaderProps {
  eyebrowKey: string;
  titleKey: string;
  bodyKey?: string;
}

/**
 * Bugatti-grade page header — full-width dark cinematic band.
 * Antonio uppercase title, hairline rule, generous breathing room.
 */
export const PageHeader = ({ eyebrowKey, titleKey, bodyKey }: PageHeaderProps) => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-obsidian text-parchment">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, hsl(220 28% 12%) 0%, hsl(220 22% 4%) 70%)",
        }}
      />
      <div className="container-csw relative pt-40 pb-28 md:pt-52 md:pb-36">
        <div className="max-w-5xl">
          <div
            className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/60 mb-10 reveal-soft"
            style={{ animationDelay: "100ms" }}
          >
            {t(eyebrowKey)}
          </div>
          <h1
            className="font-display uppercase text-parchment leading-[0.92] text-[2.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] reveal"
            style={{ animationDelay: "250ms", fontWeight: 700, letterSpacing: "0.005em" }}
          >
            {t(titleKey)}
          </h1>
          {bodyKey && (
            <p
              className="mt-12 text-base md:text-lg text-parchment/70 leading-[1.85] max-w-2xl reveal"
              style={{ animationDelay: "500ms" }}
            >
              {t(bodyKey)}
            </p>
          )}
          <div className="mt-14 h-px w-24 bg-parchment/40" />
        </div>
      </div>
    </section>
  );
};
