import { PageHeader } from "@/components/csw/PageHeader";
import { OperatingModel } from "@/components/csw/OperatingModel";
import { Capabilities } from "@/components/csw/Capabilities";
import { GlobalOutlook } from "@/components/csw/GlobalOutlook";
import heroOurModel from "@/assets/hero-our-model.mp4.asset.json";

const OurModelPage = () => (
  <>
    <PageHeader
      eyebrowKey="ourModel.eyebrow"
      titleKey="ourModel.title"
      bodyKey="ourModel.intro"
      videoSrc={heroOurModel.url}
    />
    <OperatingModel />
    <Capabilities />
    <GlobalOutlook />
  </>
);

export default OurModelPage;
