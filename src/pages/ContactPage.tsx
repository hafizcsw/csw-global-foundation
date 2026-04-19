import { PageHeader } from "@/components/csw/PageHeader";
import { Contact } from "@/components/csw/Contact";

const ContactPage = () => (
  <>
    <PageHeader eyebrowKey="contact.eyebrow" titleKey="contact.title" bodyKey="contact.body" />
    <Contact />
  </>
);

export default ContactPage;