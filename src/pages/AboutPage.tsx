import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/csw/PageHeader";
import { SectionHeader } from "@/components/csw/SectionHeader";
import { FounderNote } from "@/components/csw/FounderNote";

interface Principle {
  title: string;
  body: string;
}

const AboutPage = () => {
  const { t } = useTranslation();
  const principles = t("about.principles", { returnObjects: true }) as Principle[];
  return (
    <>
      <PageHeader eyebrowKey="about.eyebrow" titleKey="about.title" bodyKey="about.intro" />
      <section className="border-b border-hairline bg-secondary/30">
        <div className="container-csw py-24 md:py-32">
          <SectionHeader
            eyebrow={t("about.principlesEyebrow")}
            title={t("about.principlesTitle")}
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {principles.map((p, i) => (
              <div key={i} className="bg-background p-8 md:p-10">
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-2xl text-ink mb-4">{p.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
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