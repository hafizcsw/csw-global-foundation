import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

interface Item { title: string; body: string }
interface KV { label: string; value: string }

/** Door-1 deepening for /contact — institutional context around the lanes. */
export const ContactDeep = () => {
  const { t } = useTranslation();
  const responsePoints = t("contactExt.responsePoints", { returnObjects: true }) as Item[];
  const principles = t("contactExt.principles", { returnObjects: true }) as Item[];
  const corp = t("contactExt.corporatePoints", { returnObjects: true }) as KV[];

  return (
    <>
      {/* Response Expectations */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("contactExt.responseEyebrow")}
            title={t("contactExt.responseTitle")}
            body={t("contactExt.responseBody")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
            {responsePoints.map((p, i) => (
              <div key={i} className="bg-background p-10 md:p-12">
                <h3 className="font-display uppercase text-ink leading-[1.1] text-lg md:text-xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Principles */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("contactExt.principlesEyebrow")}
            title={t("contactExt.principlesTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
            {principles.map((p, i) => (
              <div key={i} className="bg-background p-10 md:p-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-6 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display uppercase text-ink leading-[1.05] text-lg md:text-xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Context */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("contactExt.corporateEyebrow")}
            title={t("contactExt.corporateTitle")}
            body={t("contactExt.corporateBody")}
          />
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline-soft border border-hairline-soft">
            {corp.map((c, i) => (
              <div key={i} className="bg-background p-8 md:p-10">
                <dt className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-4">
                  {c.label}
                </dt>
                <dd className="font-display uppercase text-ink text-base md:text-lg" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {c.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Institutional info — scaffold-safe */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("contactExt.instInfoEyebrow")}
            title={t("contactExt.instInfoTitle")}
            body={t("contactExt.instInfoBody")}
          />
          <div className="mt-12 inline-flex border border-ink/30 px-8 py-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink">
              {t("contactExt.instInfoPending")}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
