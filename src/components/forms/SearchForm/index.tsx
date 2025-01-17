import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { BiSearch } from "react-icons/bi";

interface SearchFormProps {
  className?: string;
  onSearch?: () => void;
}

export default function SearchForm({ className, onSearch }: SearchFormProps) {
  const searchId = useId();
  const navigate = useNavigate();

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
        className="rounded-r-md border border-white bg-teal-700 px-4 text-neutral-100 md:border-none"
      >
        <BiSearch size={18} />
      </button>
    </form>
  );
}
