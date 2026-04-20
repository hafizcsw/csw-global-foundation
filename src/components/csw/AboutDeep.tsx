import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import { ArchitectureLayers } from "./ArchitectureLayers";

interface Item { title: string; body: string }
interface Snap { label: string; value: string }

/** Door-1 deepening for /about — additive sections beyond Principles + Founder. */
export const AboutDeep = () => {
  const { t } = useTranslation();
  const buildPoints = t("aboutExt.buildPoints", { returnObjects: true }) as Item[];
  const parentPoints = t("aboutExt.parentPoints", { returnObjects: true }) as Item[];
  const snapshot = t("aboutExt.snapshot", { returnObjects: true }) as Snap[];

  return (
    <>
      {/* Why We Exist */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("aboutExt.whyEyebrow")}
            title={t("aboutExt.whyTitle")}
            body={t("aboutExt.whyBody")}
          />
        </div>
      </section>

      {/* What We Build */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("aboutExt.buildEyebrow")}
            title={t("aboutExt.buildTitle")}
            body={t("aboutExt.buildBody")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
            {buildPoints.map((p, i) => (
              <div key={i} className="bg-background p-10 md:p-12">
                <h3 className="font-display uppercase text-ink leading-[1.05] text-lg md:text-xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Role of the Parent Company */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("aboutExt.parentEyebrow")}
            title={t("aboutExt.parentTitle")}
            body={t("aboutExt.parentBody")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {parentPoints.map((p, i) => (
              <div key={i} className="bg-background p-10 md:p-14">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-6 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Architecture (truth-link) */}
      <ArchitectureLayers />

      {/* Group Snapshot */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-24 md:py-32">
          <SectionHeader
            eyebrow={t("aboutExt.snapshotEyebrow")}
            title={t("aboutExt.snapshotTitle")}
          />
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline-soft border border-hairline-soft">
            {snapshot.map((s, i) => (
              <div key={i} className="bg-background p-8 md:p-10">
                <dt className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-4">
                  {s.label}
                </dt>
                <dd className="font-display uppercase text-ink text-2xl md:text-3xl" style={{ fontWeight: 700, letterSpacing: "0.005em" }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("aboutExt.ctaEyebrow")}
            title={t("aboutExt.ctaTitle")}
            body={t("aboutExt.ctaBody")}
          />
          <Link to="/contact" className="btn-pill-dark mt-12 inline-flex">
            {t("aboutExt.ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
};
