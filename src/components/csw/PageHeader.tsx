import { useTranslation } from "react-i18next";

interface PageHeaderProps {
  eyebrowKey: string;
  titleKey: string;
  bodyKey?: string;
}

export const PageHeader = ({ eyebrowKey, titleKey, bodyKey }: PageHeaderProps) => {
  const { t } = useTranslation();
  return (
    <section className="border-b border-hairline">
      <div className="container-csw py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t(eyebrowKey)}</div>
          <h1 className="display text-4xl md:text-5xl lg:text-6xl text-ink">{t(titleKey)}</h1>
          {bodyKey && (
            <p className="mt-8 text-base md:text-lg text-ink-soft leading-relaxed max-w-2xl">
              {t(bodyKey)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};