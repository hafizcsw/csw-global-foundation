import { PageHeader } from "@/components/csw/PageHeader";
import { PageTransition } from "@/components/csw/PageTransition";
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
    <PortfolioPrelude />
    <Portfolio showFilters showViewAll={false} />
    <PortfolioDeep />
  </>
);

export default PortfolioPage;
