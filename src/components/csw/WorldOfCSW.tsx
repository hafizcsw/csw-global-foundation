import { useTranslation } from "react-i18next";
import { CinematicBackdrop } from "./CinematicBackdrop";
import architecture from "@/assets/cinema-architecture-1.jpg";

/**
 * WorldOfCSW — "La Maison" equivalent. The brand's world stated quietly.
 */
export const WorldOfCSW = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-background text-ink overflow-hidden">
      <CinematicBackdrop src={architecture} opacity={20} position="center 30%" />
      <div className="container-csw relative py-32 md:py-48 lg:py-56">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-gold">
              {t("home.world.eyebrow")}
            </div>
            <div className="mt-4 font-mono text-[9px] tracking-[0.4em] uppercase text-ink-muted">
              {t("home.world.marker")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display uppercase text-ink leading-[1.02] text-[2.25rem] md:text-[3.5rem] lg:text-[5rem] max-w-[18ch]"
              style={{ fontWeight: 600, letterSpacing: "0.005em" }}
            >
              {t("home.world.title")}
            </h2>
            <div className="mt-12 h-px w-24 bg-gold" />
            <p className="mt-10 max-w-2xl text-base md:text-lg leading-[1.8] text-ink-soft">
              {t("home.world.body")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
