import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { ApiResponseMeta } from "@/types/api";
import { getPaginationRange } from "@/utils/common/pagination";

interface PaginationProps {
  meta: ApiResponseMeta;
  onChangePage: (page: number) => void;
}

export default function Pagination({ meta, onChangePage }: PaginationProps) {
  const { currentPage, pageCount, previousPage, nextPage } = meta;

  if (!currentPage || !pageCount || pageCount <= 1) {
    return null;
  }

  const handlePrevPage = () => {
    if (previousPage) {
      onChangePage(previousPage);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      onChangePage(nextPage);
    }
  };

  const pages = getPaginationRange(currentPage, pageCount);

  return (
    <div className="mt-8 flex justify-between gap-4 md:justify-center">
      <button
        onClick={handlePrevPage}
        className={twMerge("flex items-center hover:underline", !previousPage && "invisible")}
      >
        <BiChevronLeft />
        <span>Prev</span>
      </button>

      <span className="font-medium md:hidden">Page {currentPage}</span>

      <ol className="hidden gap-1 md:flex">
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onChangePage(page)}
              className={twMerge(
                "grid size-8 place-items-center rounded hover:underline",
                page === currentPage && "bg-teal-900 text-neutral-100 hover:no-underline",
              )}
            >
              {page}
            </button>
          </li>
        ))}
      </ol>

      <button
        onClick={handleNextPage}
        className={twMerge("flex items-center hover:underline", !nextPage && "invisible")}
      >
        <span>Next</span>
        <BiChevronRight />
      </button>
    </div>
  );
}
