import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useVenues } from "@/hooks/venues/useVenues";

import SearchBar from "@/components/ui/SearchBar";
import SortSelect from "@/components/ui/SortSelect";
import VenueCard from "@/components/venues/VenueCard";
import Pagination from "@/components/ui/Pagination";
import Alert from "@/components/ui/Alert";

export default function Venues() {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [queryParam, setQueryParam] = useState(searchParams.get("search") || "");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [sortOption, setSortOption] = useState({ sort: "created", order: "desc" });

  const { venues, meta, isLoading, isError } = useVenues({
    query: searchQuery,
    sort: sortOption.sort,
    sortOrder: sortOption.order,
    page: currentPage,
    limit: 16,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim() ? query : "");
    setCurrentPage(1);
  };

  const handleSort = (sortValue: string) => {
    const [sort, sortOrder] = sortValue.split("_");
    setSortOption({ sort: sort, order: sortOrder });
    setCurrentPage(1);
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setQueryParam(query);
      setSearchQuery(query);
    }
  }, [searchParams]);

  return (
    <section className="container mb-20 mt-12">
      <h1 className="mb-6 text-2xl font-semibold capitalize">Venues</h1>

      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
        <SearchBar queryParam={queryParam} onSearch={handleSearch} />
        <SortSelect onSort={handleSort} />
      </div>

      {isError && (
        <Alert type="error" message="Oops! Failed to load venues. Please try again later." />
      )}

      {searchQuery && !isLoading && (
        <p className="mb-6 flex gap-1">
          Found {meta?.totalCount} result{meta?.totalCount !== 1 ? "s" : ""} for
          <span className="font-semibold overflow-wrap-anywhere">‘{searchQuery}’</span>
        </p>
      )}

      {venues.length > 0 && (
        <ul className="grid grid-cols-autofill-220 gap-x-6 gap-y-8 overflow-wrap-anywhere">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} useH2 />
          ))}
        </ul>
      )}

      {meta && <Pagination meta={meta} onChangePage={handlePagination} />}
    </section>
  );
}
