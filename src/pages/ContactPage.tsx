import { PageHeader } from "@/components/csw/PageHeader";
import { PageTransition } from "@/components/csw/PageTransition";
import { SectionEyebrow } from "@/components/csw/SectionEyebrow";
import { Contact } from "@/components/csw/Contact";
import { ContactDeep } from "@/components/csw/ContactDeep";
import { Seo } from "@/components/csw/Seo";
import heroContact from "@/assets/hero-contact.mp4.asset.json";

const ContactPage = () => (
  <>
    <Seo titleKey="seo.contact.title" descriptionKey="seo.contact.description" />
    <PageHeader
      eyebrowKey="contact.eyebrow"
      titleKey="contact.title"
      bodyKey="contact.intro"
      videoSrc={heroContact.url}
    />
    <PageTransition />
    <SectionEyebrow groupKey="nav.groups.engage" sectionKey="nav.contact" />
    <Contact />
    <ContactDeep />
  </>
);

export default ContactPage;
