import { PageHeader } from "@/components/csw/PageHeader";
import { OperatingModel } from "@/components/csw/OperatingModel";
import { Capabilities } from "@/components/csw/Capabilities";
import { GlobalOutlook } from "@/components/csw/GlobalOutlook";

const OurModelPage = () => (
  <>
    <PageHeader
      eyebrowKey="operatingModel.eyebrow"
      titleKey="operatingModel.title"
      bodyKey="operatingModel.body"
    />
    <OperatingModel />
    <Capabilities />
    <GlobalOutlook />
  </>
);

export default OurModelPage;