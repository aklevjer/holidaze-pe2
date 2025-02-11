import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { BiSearch } from "react-icons/bi";

interface SearchFormProps {
  className?: string;
  onSearch?: () => void;
}

/**
 * SearchForm component that allows users to search for venues by title or description.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param [props.className] - Additional CSS classes for the form (optional).
 * @param [props.onSearch] - Callback function triggered after a search (optional).
 *
 * @returns JSX element representing the search form.
 */
export default function SearchForm({ className, onSearch }: SearchFormProps) {
  const searchId = useId();
  const navigate = useNavigate();

  /**
   * Handles the form submission for the search form.
   *
   * @param e - The form submission event.
   * @param e.target.search - The search query entered by the user in the form.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchQuery = (e.target as HTMLFormElement).search.value.trim();
    if (searchQuery) {
      navigate(`/venues?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(`/venues`);
    }

    if (onSearch) onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className={twMerge("flex", className)}>
      <label htmlFor={searchId} className="sr-only">
        Search for venues
      </label>

      <input
        type="search"
        name="search"
        id={searchId}
        placeholder="Search for venues.."
        className="w-full rounded-l-md border-y border-l border-white bg-white p-2 text-sm text-teal-900 outline-teal-900 md:border-slate-700"
      />

      <button
        type="submit"
        aria-label="Search"
        className="rounded-r-md border border-white bg-teal-700 px-4 text-neutral-100 transition-colors hover:bg-teal-900 md:border-none"
      >
        <BiSearch size={18} />
      </button>
    </form>
  );
}
