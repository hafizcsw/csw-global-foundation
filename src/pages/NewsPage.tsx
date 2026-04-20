import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/csw/PageHeader";
import { PageTransition } from "@/components/csw/PageTransition";
import { SectionEyebrow } from "@/components/csw/SectionEyebrow";
import { SectionHeader } from "@/components/csw/SectionHeader";
import { Seo } from "@/components/csw/Seo";
import heroNews from "@/assets/hero-news.mp4.asset.json";

interface NewsItem { category: string; date: string; title: string; body: string }
interface Insight { category: string; title: string; body: string }

const NewsPage = () => {
  const { t } = useTranslation();
  const latest = t("news.latest", { returnObjects: true }) as NewsItem[];
  const insights = t("news.insights", { returnObjects: true }) as Insight[];

  return (
    <>
      <Seo titleKey="seo.news.title" descriptionKey="seo.news.description" />
      <PageHeader
        eyebrowKey="news.eyebrow"
        titleKey="news.title"
        bodyKey="news.intro"
        videoSrc={heroNews.url}
      />
      <PageTransition />
      <SectionEyebrow groupKey="nav.groups.work" sectionKey="nav.news" />

      {/* Featured update */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-10 bg-ink/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-ink-muted">
              {t("news.featuredEyebrow")}
            </span>
          </div>
          <article className="max-w-5xl">
            <div className="flex items-center gap-6 mb-10 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              <span>{t("news.featuredCategory")}</span>
              <span className="h-px w-8 bg-ink/30" />
              <span>{t("news.featuredDate")}</span>
            </div>
            <h2 className="font-display uppercase text-ink leading-[0.95] text-3xl md:text-5xl lg:text-6xl" style={{ fontWeight: 700, letterSpacing: "0.005em" }}>
              {t("news.featuredTitle")}
            </h2>
            <p className="mt-10 text-base md:text-lg text-ink-soft leading-[1.85] max-w-3xl">
              {t("news.featuredBody")}
            </p>
          </article>
        </div>
      </section>

      {/* Latest grid */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader eyebrow={t("news.latestEyebrow")} title={t("news.latestTitle")} />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline-soft border border-hairline-soft">
            {latest.map((n, i) => (
              <article key={i} className="bg-background p-10 md:p-14 transition-colors duration-700 hover:bg-secondary/40">
                <div className="flex items-center gap-6 mb-8 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                  <span>{n.category}</span>
                  <span className="h-px w-8 bg-ink/30" />
                  <span>{n.date}</span>
                </div>
                <h3 className="font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl lg:text-3xl mb-6" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                  {n.title}
                </h3>
                <p className="text-sm text-ink-soft leading-[1.85]">{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insights / Leadership Notes */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow={t("news.insightsEyebrow")}
                title={t("news.insightsTitle")}
                body={t("news.insightsBody")}
              />
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-soft border border-hairline-soft">
              {insights.map((s, i) => (
                <div key={i} className="bg-background p-8 md:p-10">
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted mb-6">
                    {s.category}
                  </div>
                  <h3 className="font-display uppercase text-ink leading-[1.1] text-base md:text-lg mb-5" style={{ fontWeight: 600, letterSpacing: "0.005em" }}>
                    {s.title}
                  </h3>
                  <p className="text-xs text-ink-soft leading-[1.85]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="relative bg-background border-b border-hairline-soft">
        <div className="container-csw py-32 md:py-44">
          <SectionHeader
            eyebrow={t("news.archiveEyebrow")}
            title={t("news.archiveTitle")}
            body={t("news.archiveBody")}
          />
        </div>
      </section>
    </>
  );
};

export default NewsPage;
