import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function Hero() {
  const { user } = useAuthStore();

  return (
    <section className="grid min-h-[350px] place-items-center bg-black bg-hero bg-cover">
      <div className="container py-8 text-center text-neutral-100">
        <h1 className="mb-2 text-3xl font-semibold capitalize leading-tight">
          Your next stay, made simple.
        </h1>

        <p className="mx-auto mb-4 max-w-lg">
          Book unique stays or share your space with travelers worldwide. Whether you're hosting or
          exploring, Holidaze makes it effortless.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/venues"
            className="rounded-md bg-amber-400 px-4 py-2 font-medium capitalize text-teal-900 transition-colors hover:bg-amber-600"
          >
            Explore venues
          </Link>

          <Link
            to={!user ? "/login" : user.venueManager ? "/venue/add" : "/profile"}
            className="rounded-md border border-amber-400 px-4 py-2 font-medium capitalize transition-colors hover:border-neutral-100"
          >
            List your venue
          </Link>
        </div>
      </div>
    </section>
  );
}
