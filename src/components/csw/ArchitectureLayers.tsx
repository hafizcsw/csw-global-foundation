import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Layer { label: string; body: string }

/** Neutral truth-link to the four-layer portfolio architecture defined in the registry. No entities. */
export const ArchitectureLayers = () => {
  const { t } = useTranslation();
  const layers = t("architectureLayers.layers", { returnObjects: true }) as Layer[];

  return (
    <section className="relative bg-background border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <SectionHeader
          eyebrow={t("architectureLayers.eyebrow")}
          title={t("architectureLayers.title")}
          body={t("architectureLayers.body")}
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
          {layers.map((l, i) => (
            <div key={i} className="bg-background p-10 md:p-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-6 block">
                {`L${i + 1}`}
              </span>
              <h3
                className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-5"
                style={{ fontWeight: 600, letterSpacing: "0.005em" }}
              >
                {l.label}
              </h3>
              <p className="text-sm text-ink-soft leading-[1.85]">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
