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
      <section className="relative border-b border-hairline-soft bg-obsidian-soft/40">
        <div className="container-csw py-32 md:py-40">
          <SectionHeader
            eyebrow={t("about.principlesEyebrow")}
            title={t("about.principlesTitle")}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="luxury-card p-10 md:p-12 group">
                <div className="flex items-baseline justify-between mb-10">
                  <span className="font-serif text-5xl text-gold/40 group-hover:text-gold transition-colors duration-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-hairline group-hover:bg-gold transition-colors duration-700" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-5 leading-tight">{p.title}</h3>
                <p className="text-sm text-ink-soft leading-[1.8]">{p.body}</p>
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
