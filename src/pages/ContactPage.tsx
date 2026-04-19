import { PageHeader } from "@/components/csw/PageHeader";
import { Contact } from "@/components/csw/Contact";
import heroContact from "@/assets/hero-contact.mp4.asset.json";

const ContactPage = () => (
  <>
    <PageHeader
      eyebrowKey="contact.eyebrow"
      titleKey="contact.title"
      bodyKey="contact.intro"
      videoSrc={heroContact.url}
    />
    <Contact />
  </>
);

export default ContactPage;
