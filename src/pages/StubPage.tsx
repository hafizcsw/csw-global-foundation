import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface StubPageProps {
  titleKey: string;
}

const StubPage = ({ titleKey }: StubPageProps) => {
  const { t } = useTranslation();
  return (
    <section className="relative border-b border-hairline-soft overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(var(--gold) / 0.15), transparent 60%)",
        }}
      />
      <div className="container-csw relative py-32 md:py-44">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-10 reveal-soft" style={{ animationDelay: "100ms" }}>
            <span className="h-px w-12 bg-gold animate-gold-pulse" />
            <span className="eyebrow">{t(titleKey)}</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-6 reveal" style={{ animationDelay: "200ms" }}>
            {t("pageStub.eyebrow")}
          </div>
          <h1
            className="display text-4xl md:text-6xl lg:text-7xl reveal"
            style={{ animationDelay: "300ms" }}
          >
            {t("pageStub.title")}
          </h1>
          <p
            className="mt-10 text-base md:text-lg text-ink-soft leading-[1.8] max-w-2xl reveal"
            style={{ animationDelay: "500ms" }}
          >
            {t("pageStub.body")}
          </p>
          <Link
            to="/"
            className="mt-14 group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink hover:text-gold transition-colors duration-500 reveal"
            style={{ animationDelay: "700ms" }}
          >
            <span className="border-b border-hairline group-hover:border-gold pb-1 transition-colors duration-500">
              {t("pageStub.back")}
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StubPage;
