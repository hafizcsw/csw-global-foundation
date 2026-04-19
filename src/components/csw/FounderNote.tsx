import { useTranslation } from "react-i18next";
import atmosphereSilk from "@/assets/atmosphere-silk.mp4.asset.json";

/**
 * Bugatti-grade founder note — full editorial chamber, Antonio condensed,
 * cinematic silk/smoke video atmosphere underneath.
 */
export const FounderNote = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-obsidian text-parchment overflow-hidden">
      <video
        src={atmosphereSilk.url}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(220 25% 6% / 0.55) 0%, hsl(220 22% 3% / 0.95) 80%)",
        }}
      />
      <div className="container-csw relative py-32 md:py-48">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-12">
            {t("founder.eyebrow")}
          </div>
          <blockquote
            className="font-display uppercase text-parchment leading-[1.05] text-[1.75rem] md:text-[3rem] lg:text-[4rem]"
            style={{ fontWeight: 600, letterSpacing: "0.005em" }}
          >
            {t("founder.body")}
          </blockquote>
          <div className="mt-16 inline-flex items-center gap-4">
            <span className="h-px w-10 bg-parchment/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-parchment/70">
              {t("founder.attribution")}
            </span>
            <span className="h-px w-10 bg-parchment/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
