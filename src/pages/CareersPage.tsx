import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/csw/PageHeader";
import { PageTransition } from "@/components/csw/PageTransition";
import { SectionEyebrow } from "@/components/csw/SectionEyebrow";
import { SectionHeader } from "@/components/csw/SectionHeader";
import { Seo } from "@/components/csw/Seo";
import heroCareers from "@/assets/hero-careers.mp4.asset.json";

interface Item { title: string; body: string }
interface RoleEntry { code: string; title: string; location: string; type: string; scope: string }

const CareersPage = () => {
  const { t } = useTranslation();
  const why = t("careersPage.whyPoints", { returnObjects: true }) as Item[];
  const who = t("careersPage.who", { returnObjects: true }) as Item[];
  const areas = t("careersPage.areas", { returnObjects: true }) as Item[];
  const values = t("careersPage.values", { returnObjects: true }) as Item[];
  const roles = t("careersPage.rolesList", { returnObjects: true }) as RoleEntry[];

  return (
    <>
      <Seo titleKey="seo.careers.title" descriptionKey="seo.careers.description" />
      <PageHeader
        eyebrowKey="careersPage.eyebrow"
        titleKey="careersPage.title"
        bodyKey="careersPage.intro"
        videoSrc={heroCareers.url}
      />
      <PageTransition />
      <SectionEyebrow groupKey="nav.groups.engage" sectionKey="nav.careers" />

      {/* Why Join */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("careersPage.whyEyebrow")}
            title={t("careersPage.whyTitle")}
            body={t("careersPage.whyBody")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
            {why.map((p, i) => (
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

      {/* Who We Look For */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("careersPage.whoEyebrow")}
            title={t("careersPage.whoTitle")}
            body={t("careersPage.whoBody")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
            {who.map((p, i) => (
              <div key={i} className="bg-background p-10 md:p-12">
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

      {/* Areas of Contribution */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("careersPage.areasEyebrow")}
            title={t("careersPage.areasTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {areas.map((a, i) => (
              <div key={i} className="bg-background p-10 md:p-14">
                <h3 className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {a.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles placeholder */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("careersPage.rolesEyebrow")}
            title={t("careersPage.rolesTitle")}
            body={t("careersPage.rolesBody")}
          />
          <ul className="mt-16 border-y border-hairline-soft divide-y divide-hairline-soft">
            {roles.map((r) => (
              <li key={r.code} className="grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-8 items-start">
                <div className="col-span-12 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted pt-1">
                  {r.code}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h4 className="font-display uppercase text-ink leading-[1.1] text-lg md:text-xl mb-3" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                    {r.title}
                  </h4>
                  <p className="text-xs md:text-sm text-ink-soft leading-[1.85] max-w-2xl">{r.scope}</p>
                </div>
                <div className="col-span-6 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted pt-1">
                  {r.location}
                </div>
                <div className="col-span-6 md:col-span-2 flex md:justify-end pt-1">
                  <Link
                    to="/contact#careers"
                    className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
                  >
                    {t("careersPage.rolesApply")} →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-ink-muted leading-[1.85] max-w-2xl">
            {t("careersPage.rolesNote")}
          </p>
        </div>
      </section>

      {/* Talent Network */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("careersPage.talentEyebrow")}
            title={t("careersPage.talentTitle")}
            body={t("careersPage.talentBody")}
          />
          <Link to="/contact#careers" className="btn-pill-dark mt-12 inline-flex">
            {t("careers.cta")}
          </Link>
        </div>
      </section>

      {/* Values / Work Principles */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("careersPage.valuesEyebrow")}
            title={t("careersPage.valuesTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {values.map((v, i) => (
              <div key={i} className="bg-background p-10 md:p-14">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display uppercase text-ink/30 text-4xl md:text-5xl" style={{ fontWeight: 700 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-ink/30" />
                </div>
                <h3 className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
