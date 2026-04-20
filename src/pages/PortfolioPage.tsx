import { PageHeader } from "@/components/csw/PageHeader";
import { PageTransition } from "@/components/csw/PageTransition";
import { SectionEyebrow } from "@/components/csw/SectionEyebrow";
import { Portfolio } from "@/components/csw/Portfolio";
import { PortfolioPrelude, PortfolioDeep } from "@/components/csw/PortfolioDeep";
import { Seo } from "@/components/csw/Seo";
import heroPortfolio from "@/assets/hero-portfolio.mp4.asset.json";

const PortfolioPage = () => (
  <>
    <Seo titleKey="seo.portfolio.title" descriptionKey="seo.portfolio.description" />
    <PageHeader
      eyebrowKey="portfolio.eyebrow"
      titleKey="portfolio.title"
      bodyKey="portfolio.intro"
      videoSrc={heroPortfolio.url}
    />
    <PageTransition />
    <SectionEyebrow groupKey="nav.groups.work" sectionKey="nav.portfolio" />
    <PortfolioPrelude />
    <Portfolio />
    <PortfolioDeep />
  </>
);

export default PortfolioPage;
