interface SortSelectProps {
  onSort: (sortOptions: string) => void;
}

/**
 * SortSelect component that allows users to select a sorting option from a dropdown.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.onSort - Callback function triggered when the user selects a sorting option.
 *
 * @returns JSX element representing the sort select dropdown.
 */
export default function SortSelect({ onSort }: SortSelectProps) {
  /**
   * Handles sorting option changes and triggers the onSort callback.
   *
   * @param e - The select change event.
   */
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOptions = e.target.value;
    onSort(sortOptions);
  };
  return (
    <div className="space-y-2 sm:basis-52">
      <label htmlFor="sort" className="text-m font-medium">
        Sort by
      </label>

      <select
        id="sort"
        onChange={handleSelectChange}
        className="w-full rounded-md border-r-8 border-r-transparent px-2 py-2.5 text-m ring-1 ring-slate-500"
      >
        <option value="created_desc">Latest Added</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
        <option value="rating_desc">Rating (High to Low)</option>
        <option value="rating_asc">Rating (Low to High)</option>
      </select>
    </div>
  );
}
