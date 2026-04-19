import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface StubPageProps {
  titleKey: string;
}

const StubPage = ({ titleKey }: StubPageProps) => {
  const { t } = useTranslation();
  return (
    <section className="border-b border-hairline">
      <div className="container-csw py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-6">
            {t(titleKey)}
          </div>
          <div className="eyebrow mb-6">{t("pageStub.eyebrow")}</div>
          <h1 className="display text-4xl md:text-5xl text-ink">{t("pageStub.title")}</h1>
          <p className="mt-8 text-base md:text-lg text-ink-soft leading-relaxed">
            {t("pageStub.body")}
          </p>
          <Link
            to="/"
            className="mt-12 group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink hover:text-gold transition-colors"
          >
            <span className="border-b border-hairline group-hover:border-gold pb-1 transition-colors">
              {t("pageStub.back")}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StubPage;