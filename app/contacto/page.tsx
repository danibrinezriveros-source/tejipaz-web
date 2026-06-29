import Layout from "@/src/components/layout/Layout/Layout";
import {
  Hero,
  ContactInfo,
  ContactForm,
  Map,
} from "@/src/components/features/contacto";

export default function ContactoPage() {
  return (
    <Layout>
      <Hero />
      <ContactInfo />
      <ContactForm />
      <Map />
    </Layout>
  );
}