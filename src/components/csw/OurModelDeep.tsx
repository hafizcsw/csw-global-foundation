import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Item { title: string; body: string }

/** Door-1 deepening for /our-model — adds the missing institutional sections. */
export const OurModelDeep = () => {
  const { t } = useTranslation();
  const logic = t("ourModelExt.logic", { returnObjects: true }) as Item[];
  const infra = t("ourModelExt.infra", { returnObjects: true }) as Item[];

  return (
    <>
      {/* Why This Model Exists */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("ourModelExt.whyEyebrow")}
            title={t("ourModelExt.whyTitle")}
            body={t("ourModelExt.whyBody")}
          />
        </div>
      </section>

      {/* Core Logic */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("ourModelExt.logicEyebrow")}
            title={t("ourModelExt.logicTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
            {logic.map((l, i) => (
              <div key={i} className="bg-background p-10 md:p-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-6 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display uppercase text-ink leading-[1.05] text-lg md:text-xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {l.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Infrastructure */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("ourModelExt.infraEyebrow")}
            title={t("ourModelExt.infraTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {infra.map((c, i) => (
              <div key={i} className="bg-background p-10 md:p-14">
                <h3 className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {c.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Company Role */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("ourModelExt.parentRoleEyebrow")}
            title={t("ourModelExt.parentRoleTitle")}
            body={t("ourModelExt.parentRoleBody")}
          />
        </div>
      </section>

      {/* AI & Operating Leverage */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("ourModelExt.leverageEyebrow")}
            title={t("ourModelExt.leverageTitle")}
            body={t("ourModelExt.leverageBody")}
          />
        </div>
      </section>

      {/* Portfolio Coherence */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("ourModelExt.coherenceEyebrow")}
            title={t("ourModelExt.coherenceTitle")}
            body={t("ourModelExt.coherenceBody")}
          />
        </div>
      </section>
    </>
  );
};
