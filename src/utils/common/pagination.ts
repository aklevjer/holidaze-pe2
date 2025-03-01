/**
 * Calculates the range of page numbers to display for pagination.
 * Ensures a maximum of 5 pages are shown, centered around the current page.
 *
 * @param currentPage - The current active page number.
 * @param pageCount - The total number of pages available.
 *
 * @returns An array of page numbers to display.
 */
export const getPaginationRange = (currentPage: number, pageCount: number) => {
  const shownPages = 5;
  const pages: number[] = [];

  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(shownPages, pageCount);
  }

  if (endPage > pageCount) {
    endPage = pageCount;
    startPage = Math.max(1, pageCount - shownPages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
};
