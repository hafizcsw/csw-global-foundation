import { PageHeader } from "@/components/csw/PageHeader";
import { Contact } from "@/components/csw/Contact";
import { ContactDeep } from "@/components/csw/ContactDeep";
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
    <ContactDeep />
  </>
);

export default ContactPage;
