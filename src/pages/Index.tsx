import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/csw/Header";
import { Hero } from "@/components/csw/Hero";
import { ProofStrip } from "@/components/csw/ProofStrip";
import { Thesis } from "@/components/csw/Thesis";
import { WhatWeBuild } from "@/components/csw/WhatWeBuild";
import { Portfolio } from "@/components/csw/Portfolio";
import { OperatingModel } from "@/components/csw/OperatingModel";
import { Capabilities } from "@/components/csw/Capabilities";
import { GlobalOutlook } from "@/components/csw/GlobalOutlook";
import { FounderNote } from "@/components/csw/FounderNote";
import { Developments } from "@/components/csw/Developments";
import { Careers } from "@/components/csw/Careers";
import { Contact } from "@/components/csw/Contact";
import { Footer } from "@/components/csw/Footer";

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("meta.title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = t("meta.description");
      document.head.appendChild(m);
    }
  }, [t]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Thesis />
        <WhatWeBuild />
        <Portfolio />
        <OperatingModel />
        <Capabilities />
        <GlobalOutlook />
        <FounderNote />
        <Developments />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
