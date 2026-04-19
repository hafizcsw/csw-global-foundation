import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface StubPageProps {
  titleKey: string;
}

/**
 * Bugatti-grade stub — full-bleed dark hero with Antonio title and pill back link.
 */
const StubPage = ({ titleKey }: StubPageProps) => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[88vh] flex items-center bg-obsidian text-parchment overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(220 28% 12%) 0%, hsl(220 22% 4%) 70%)",
        }}
      />
      <div className="container-csw relative py-32 md:py-44">
        <div className="max-w-4xl">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-8">
            {t(titleKey)}
          </div>
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-parchment/45 mb-10">
            {t("pageStub.eyebrow")}
          </div>
          <h1
            className="font-display uppercase text-parchment leading-[0.92] text-[2.5rem] md:text-[5rem] lg:text-[7rem]"
            style={{ fontWeight: 700, letterSpacing: "0.005em" }}
          >
            {t("pageStub.title")}
          </h1>
          <p className="mt-12 text-base md:text-lg text-parchment/70 leading-[1.85] max-w-2xl">
            {t("pageStub.body")}
          </p>
          <Link to="/" className="mt-14 btn-pill inline-flex">
            {t("pageStub.back")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StubPage;
