import { PageHeader } from "@/components/csw/PageHeader";
import { Portfolio } from "@/components/csw/Portfolio";

const PortfolioPage = () => (
  <>
    <PageHeader eyebrowKey="portfolio.eyebrow" titleKey="portfolio.title" bodyKey="portfolio.body" />
    <Portfolio showFilters showViewAll={false} />
  </>
);

export default PortfolioPage;