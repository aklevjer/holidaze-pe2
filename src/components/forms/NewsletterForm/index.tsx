import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { BiSolidErrorCircle } from "react-icons/bi";
import { NewsletterFormData, newsletterSchema } from "@/schemas/newsletterSchema";
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
      <div className="grid place-items-center gap-6 rounded-md border border-neutral-300 bg-neutral-50 px-4 py-10">
        <h2 className="max-w-md text-center text-xl font-semibold leading-tight">
          Stay up-to-date with exclusive offers, new venues, and more!
        </h2>

        <form onSubmit={handleSubmit(handleNewsletter)} className="w-full max-w-lg space-y-2">
          <div className="flex gap-2">
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative w-full">
              <input
                type="email"
                id="email"
                placeholder="email@stud.noroff.no"
                {...register("email")}
                className={twMerge(
                  "w-full rounded-md border border-slate-500 p-2 text-m focus:outline-teal-900",
                  errors.email && "border-red-700 pr-10 focus:outline-red-700",
                )}
              />

              {errors.email && (
                <BiSolidErrorCircle
                  size={24}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-red-700"
                />
              )}
            </div>

            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </div>

          {errors.email && (
            <p role="alert" className="text-m font-medium text-red-700">
              {errors.email.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
