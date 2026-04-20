import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/csw/PageHeader";
import { PageTransition } from "@/components/csw/PageTransition";
import { SectionEyebrow } from "@/components/csw/SectionEyebrow";
import { SectionHeader } from "@/components/csw/SectionHeader";
import { Seo } from "@/components/csw/Seo";
import heroLeadership from "@/assets/hero-leadership.mp4.asset.json";
import atmosphereSilk from "@/assets/atmosphere-silk.mp4.asset.json";

interface Item { title: string; body: string }
interface Profile { role: string; scope: string }

const LeadershipPage = () => {
  const { t } = useTranslation();
  const responsibilities = t("leadership.responsibilities", { returnObjects: true }) as Item[];
  const profiles = t("leadership.profiles", { returnObjects: true }) as Profile[];
  const governance = t("leadership.governancePoints", { returnObjects: true }) as Item[];

  return (
    <>
      <Seo titleKey="seo.leadership.title" descriptionKey="seo.leadership.description" />
      <PageHeader
        eyebrowKey="leadership.eyebrow"
        titleKey="leadership.title"
        bodyKey="leadership.intro"
        videoSrc={heroLeadership.url}
      />
      <PageTransition />
      <SectionEyebrow groupKey="nav.groups.house" sectionKey="nav.leadership" />

      {/* Philosophy */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("leadership.philosophyEyebrow")}
            title={t("leadership.philosophyTitle")}
            body={t("leadership.philosophyBody")}
          />
        </div>
      </section>

      {/* Responsibilities */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("leadership.responsibilitiesEyebrow")}
            title={t("leadership.responsibilitiesTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {responsibilities.map((r, i) => (
              <div key={i} className="bg-background p-10 md:p-14 transition-colors duration-700 hover:bg-secondary/40">
                <div className="flex items-baseline justify-between mb-10">
                  <span className="font-display uppercase text-ink/30 text-4xl md:text-5xl" style={{ fontWeight: 700 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-ink/30" />
                </div>
                <h3 className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-6" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {r.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder leadership note */}
      <section className="relative bg-obsidian text-parchment overflow-hidden">
        <video
          src={atmosphereSilk.url}
          autoPlay loop muted playsInline preload="metadata" aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div aria-hidden className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(220 25% 6% / 0.55) 0%, hsl(220 22% 3% / 0.95) 80%)"
        }} />
        <div className="container-csw relative py-32 md:py-44">
          <div className="max-w-5xl mx-auto text-center">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-12">
              {t("leadership.founderEyebrow")}
            </div>
            <blockquote className="font-display uppercase text-parchment leading-[1.1] text-2xl md:text-4xl lg:text-5xl" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
              {t("leadership.founderBody")}
            </blockquote>
            <div className="mt-14 inline-flex items-center gap-4">
              <span className="h-px w-10 bg-parchment/50" />
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-parchment/70">
                {t("leadership.founderAttribution")}
              </span>
              <span className="h-px w-10 bg-parchment/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("leadership.profilesEyebrow")}
            title={t("leadership.profilesTitle")}
            body={t("leadership.profilesBody")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {profiles.map((p, i) => (
              <div key={i} className="bg-background p-10 md:p-14">
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.28em] px-3 py-2 border border-ink/30 text-ink-muted mb-8">
                  {t("leadership.profilesPending")}
                </span>
                <h3 className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-4" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {p.role}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{p.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("leadership.governanceEyebrow")}
            title={t("leadership.governanceTitle")}
            body={t("leadership.governanceBody")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
            {governance.map((g, i) => (
              <div key={i} className="bg-background p-10 md:p-12">
                <h3 className="font-display uppercase text-ink leading-[1.05] text-lg md:text-xl mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {g.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipPage;
