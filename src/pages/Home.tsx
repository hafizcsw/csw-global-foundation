import { Hero } from "@/components/csw/Hero";
import { ProofStrip } from "@/components/csw/ProofStrip";
import { Thesis } from "@/components/csw/Thesis";
import { WhatWeBuild } from "@/components/csw/WhatWeBuild";
import { Portfolio } from "@/components/csw/Portfolio";
import { OperatingModel } from "@/components/csw/OperatingModel";
import { GlobalOutlook } from "@/components/csw/GlobalOutlook";
import { FounderNote } from "@/components/csw/FounderNote";
import { Developments } from "@/components/csw/Developments";
import { Careers } from "@/components/csw/Careers";
import { Contact } from "@/components/csw/Contact";

const Home = () => (
  <>
    <Hero />
    <ProofStrip />
    <Thesis />
    <WhatWeBuild />
    <Portfolio />
    <OperatingModel />
    <GlobalOutlook />
    <FounderNote />
    <Developments />
    <Careers />
    <Contact />
  </>
);

export default Home;