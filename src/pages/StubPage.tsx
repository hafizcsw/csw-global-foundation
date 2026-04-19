import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroCareers from "@/assets/hero-careers.mp4.asset.json";
import heroNews from "@/assets/hero-news.mp4.asset.json";
import heroLeadership from "@/assets/hero-leadership.mp4.asset.json";

interface StubPageProps {
  titleKey: string;
}

/** Map nav title key → cinematic hero video. */
const VIDEO_BY_KEY: Record<string, string> = {
  "nav.careers": heroCareers.url,
  "nav.news": heroNews.url,
  "nav.leadership": heroLeadership.url,
};

/**
 * Bugatti-grade stub — full-bleed cinematic hero with looping video,
 * Antonio title, and pill back link. Always renders dark via .cinematic-dark.
 */
const StubPage = ({ titleKey }: StubPageProps) => {
  const { t } = useTranslation();
  const videoSrc = VIDEO_BY_KEY[titleKey];
  return (
    <section className="cinematic-dark relative min-h-[88vh] flex items-end bg-obsidian text-parchment overflow-hidden">
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(220 28% 12%) 0%, hsl(220 22% 4%) 70%)",
          }}
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 25% 3% / 0.55) 0%, hsl(220 25% 3% / 0.35) 40%, hsl(220 25% 3% / 0.92) 100%)",
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
            className="font-display uppercase text-parchment leading-[0.95] text-[2rem] md:text-[3rem] lg:text-[4.5rem]"
            style={{ fontWeight: 700, letterSpacing: "0.005em" }}
          >
            {t("pageStub.title")}
          </h1>
          <p className="mt-12 text-base md:text-lg text-parchment/75 leading-[1.85] max-w-2xl">
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
