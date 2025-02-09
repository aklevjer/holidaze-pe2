import Page from "@/components/layout/Page";
import ContactDetails from "@/components/sections/ContactDetails";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <Page
      title="Contact Us"
      description="Contact Holidaze for customer support, inquiries, or feedback. We're happy to assist."
    >
      <h1 className="my-12 text-center text-3xl font-semibold capitalize">Contact us</h1>
      <div className="container mb-20 grid gap-12 md:grid-cols-2 md:gap-20">
        <ContactDetails />
        <ContactForm />
      </div>
    </Page>
  );
}
