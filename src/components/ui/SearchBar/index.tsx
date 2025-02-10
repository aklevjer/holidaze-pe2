import { useState, useRef, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { debounce } from "@/utils/common/debounce";

interface SearchBarProps {
  queryParam: string;
  onSearch: (query: string) => void;
}

/**
 * SearchBar component with a debounced input for searching.
 * Triggers the `onSearch` callback after a delay to improve performance.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.queryParam - The query param to populate the input with.
 * @param props.onSearch - Callback to handle the search when the query changes.
 *
 * @returns JSX element representing the search bar.
 */
export default function SearchBar({ queryParam, onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(queryParam);
  const debouncedSearch = useRef(debounce((query: string) => onSearch(query)));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    debouncedSearch.current(query);
  };

  useEffect(() => {
    setInputValue(queryParam);
  }, [queryParam]);

  return (
    <div className="space-y-2 sm:basis-52">
      <label htmlFor="search" className="text-m font-medium">
        Search for venues
      </label>

      <div className="relative">
        <input
          type="search"
          id="search"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Enter keywords.."
          className="w-full rounded-md border border-slate-500 p-2 pl-8 text-m focus:outline-teal-900"
        />
        <BiSearchAlt2 size={18} className="absolute left-2 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
