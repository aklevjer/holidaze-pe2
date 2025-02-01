import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsletterFormData, newsletterSchema } from "@/schemas/newsletterSchema";

import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const handleNewsletter = (newsletterData: NewsletterFormData) => {
    console.log("Newsletter form data:", newsletterData);
    reset();
  };

  return (
    <section className="container mb-20">
      <div className="grid place-items-center gap-4 rounded-md border border-neutral-300 bg-neutral-50 px-4 py-10">
        <h2 className="max-w-md text-center text-2xl font-semibold leading-tight">
          Stay up-to-date with exclusive offers, new venues, and more!
        </h2>

        <form
          onSubmit={handleSubmit(handleNewsletter)}
          className="w-full max-w-lg [&_label]:sr-only"
        >
          <TextInput
            id="email"
            type="email"
            label="Email"
            placeholder="email@stud.noroff.no"
            register={register("email")}
            error={errors.email}
          >
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </TextInput>
        </form>
      </div>
    </section>
  );
}
