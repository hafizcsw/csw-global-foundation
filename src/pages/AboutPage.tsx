import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/csw/PageHeader";
import { SectionHeader } from "@/components/csw/SectionHeader";
import { FounderNote } from "@/components/csw/FounderNote";
import heroAbout from "@/assets/hero-about.mp4.asset.json";

interface Principle {
  title: string;
  body: string;
}

const AboutPage = () => {
  const { t } = useTranslation();
  const principles = t("about.principles", { returnObjects: true }) as Principle[];
  return (
    <>
      <PageHeader
        eyebrowKey="about.eyebrow"
        titleKey="about.title"
        bodyKey="about.intro"
        videoSrc={heroAbout.url}
      />
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("about.principlesEyebrow")}
            title={t("about.principlesTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {principles.map((p, i) => (
              <div key={i} className="bg-background p-10 md:p-14 transition-colors duration-700 hover:bg-secondary/40">
                <div className="flex items-baseline justify-between mb-10">
                  <span
                    className="font-display uppercase text-ink/30 text-4xl md:text-5xl"
                    style={{ fontWeight: 700 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-ink/30" />
                </div>
                <h3
                  className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl mb-6"
                  style={{ fontWeight: 600, letterSpacing: "0.005em" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FounderNote />
    </>
  );
};

export default AboutPage;
