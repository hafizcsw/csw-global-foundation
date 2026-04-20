import { PageHeader } from "@/components/csw/PageHeader";
import { PageTransition } from "@/components/csw/PageTransition";
import { OperatingModel } from "@/components/csw/OperatingModel";
import { Capabilities } from "@/components/csw/Capabilities";
import { GlobalOutlook } from "@/components/csw/GlobalOutlook";
import { OurModelDeep } from "@/components/csw/OurModelDeep";
import { Seo } from "@/components/csw/Seo";
import heroOurModel from "@/assets/hero-our-model.mp4.asset.json";

const OurModelPage = () => (
  <>
    <Seo titleKey="seo.ourModel.title" descriptionKey="seo.ourModel.description" />
    <PageHeader
      eyebrowKey="ourModel.eyebrow"
      titleKey="ourModel.title"
      bodyKey="ourModel.intro"
      videoSrc={heroOurModel.url}
    />
    <PageTransition />
    <OurModelDeep />
    <OperatingModel />
    <Capabilities />
    <GlobalOutlook />
  </>
);

export default OurModelPage;
