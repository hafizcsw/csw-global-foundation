import { PageHeader } from "@/components/csw/PageHeader";
import { Portfolio } from "@/components/csw/Portfolio";
import heroPortfolio from "@/assets/hero-portfolio.mp4.asset.json";

const PortfolioPage = () => (
  <>
    <PageHeader
      eyebrowKey="portfolio.eyebrow"
      titleKey="portfolio.title"
      bodyKey="portfolio.intro"
      videoSrc={heroPortfolio.url}
    />
    <Portfolio showFilters showViewAll={false} />
  </>
);

export default PortfolioPage;
