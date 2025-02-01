import ContactDetails from "@/components/sections/ContactDetails";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <>
      <h1 className="my-12 text-center text-3xl font-semibold capitalize">Contact us</h1>
      <div className="container mb-20 grid gap-12 md:grid-cols-2 md:gap-20">
        <ContactDetails />
        <ContactForm />
      </div>
    </>
  );
}
