import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useVenues } from "@/hooks/venues/useVenues";

import Page from "@/components/layout/Page";
import SearchBar from "@/components/ui/SearchBar";
import SortSelect from "@/components/ui/SortSelect";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
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
    window.scrollTo({ top: window.scrollY * 0.3, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setQueryParam(query);
      setSearchQuery(query);
      setCurrentPage(1);
    }
  }, [searchParams]);

  return (
    <Page
      title="Venues"
      description="Browse and discover unique venues on Holidaze. Search, sort, and browse venues to find your perfect stay."
    >
      <section className="container mb-20 mt-12">
        <h1 className="mb-6 text-3xl font-semibold capitalize">Venues</h1>

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
          <SearchBar queryParam={queryParam} onSearch={handleSearch} />
          <SortSelect onSort={handleSort} />
        </div>

        {isLoading && (
          <div className="grid grid-cols-list gap-x-6 gap-y-8">
            {Array.from({ length: 16 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        )}

        {isError && (
          <Alert type="error" message="Oops! Failed to load venues. Please try again later." />
        )}

        {searchQuery && !isLoading && (
          <p className="mb-6 flex gap-1">
            Found {meta?.totalCount} result{meta?.totalCount !== 1 ? "s" : ""} for
            <span className="font-semibold overflow-wrap-anywhere">‘{searchQuery}’</span>
          </p>
        )}

        {venues.length > 0 && !isLoading && (
          <ul className="grid grid-cols-list gap-x-6 gap-y-8 overflow-wrap-anywhere">
            {venues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} useH2 />
            ))}
          </ul>
        )}

        {meta && <Pagination meta={meta} onChangePage={handlePagination} />}
      </section>
    </Page>
  );
}
