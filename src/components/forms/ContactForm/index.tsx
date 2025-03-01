import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAlert } from "@/hooks/ui/useAlert";
import { ContactFormData, contactSchema } from "@/schemas/contactSchema";

import TextInput from "@/components/ui/TextInput";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";

/**
 * ContactForm component that allows users to send a message with their name, email, subject, and message.
 *
 * @component
 * @returns JSX element representing the contact form.
 */
export default function ContactForm() {
  const { alertMessage, showAlert } = useAlert();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  /**
   * Handles the form submission for the contact form.
   */
  const handleContact = () => {
    showAlert("Your message was sent!");
    reset();
  };

  return (
    <section className="rounded-md border border-neutral-300 p-6 shadow-elevated md:p-8">
      <h2 className="mb-2 text-2xl font-semibold capitalize">Reach out</h2>
      <p className="mb-4">
        Have a question or feedback for us? Let us know by filling out the form below and we’ll be
        happy to help.
      </p>

      <form onSubmit={handleSubmit(handleContact)} className="space-y-4">
        <TextInput
          id="name"
          type="text"
          label="Name"
          placeholder="Name"
          register={register("name")}
          error={errors.name}
        />

        <TextInput
          id="email"
          type="email"
          label="Email"
          placeholder="email@stud.noroff.no"
          register={register("email")}
          error={errors.email}
        />

        <TextInput
          id="subject"
          type="text"
          label="Subject"
          placeholder="Subject"
          register={register("subject")}
          error={errors.subject}
        />

        <Textarea
          id="message"
          label="Message"
          placeholder="Write your message here.."
          register={register("message")}
          error={errors.message}
        />

        <Button variant="primary" type="submit" className="w-full">
          Send message
        </Button>

        {alertMessage && <Alert type="success" message={alertMessage} />}
      </form>
    </section>
  );
}
