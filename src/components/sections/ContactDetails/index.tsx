import { BiPhone, BiEnvelope, BiMap } from "react-icons/bi";
import { SOCIAL_LINKS } from "@/constants/links";

/**
 * ContactDetails component that displays contact information and social media links.
 *
 * @component
 * @returns JSX element representing the contact details.
 */
export default function ContactDetails() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold capitalize">Get in touch</h2>
      <p className="mb-8">
        Need assistance with a booking, listing a venue, or other inquiries? Get in touch with us
        through any of the options below.
      </p>

      <ul className="mb-8 space-y-6 overflow-wrap-anywhere">
        <li className="flex gap-4 rounded-md border border-neutral-300 p-4">
          <div className="grid size-12 flex-shrink-0 place-items-center rounded-md border border-sky-100 bg-sky-50">
            <BiPhone size={28} className="text-teal-700" />
          </div>
          <div>
            <span className="font-medium text-slate-500">Phone</span>
            <a href="tel:+4712345678" className="block font-semibold underline hover:no-underline">
              +47 12 34 56 78
            </a>
          </div>
        </li>

        <li className="flex gap-4 rounded-md border border-neutral-300 p-4">
          <div className="grid size-12 flex-shrink-0 place-items-center rounded-md border border-sky-100 bg-sky-50">
            <BiEnvelope size={28} className="text-teal-700" />
          </div>
          <div>
            <span className="font-medium text-slate-500">Email</span>
            <a
              href="mailto:support@holidaze.com"
              className="block font-semibold underline hover:no-underline"
            >
              support@holidaze.com
            </a>
          </div>
        </li>

        <li className="flex gap-4 rounded-md border border-neutral-300 p-4">
          <div className="grid size-12 flex-shrink-0 place-items-center rounded-md border border-sky-100 bg-sky-50">
            <BiMap size={28} className="text-teal-700" />
          </div>
          <div>
            <span className="font-medium text-slate-500">Address</span>
            <span className="block font-semibold">Slottsplassen 1, 0010 Oslo</span>
          </div>
        </li>
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-medium">Connect with us on</span>
        <ul className="flex gap-4">
          {SOCIAL_LINKS.map(({ label, contactIcon: Icon }) => (
            <li key={label}>
              <a
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-md bg-teal-700 transition-colors hover:bg-teal-900"
              >
                <Icon size={24} className="text-neutral-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
