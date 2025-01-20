export interface ApiResponseMeta {
  isFirstPage?: boolean;
  isLastPage?: boolean;
  currentPage?: number;
  previousPage?: null | number;
  nextPage?: null | number;
  pageCount?: number;
  totalCount?: number;
}

export interface ApiResponse<T> {
  data: T;
  meta: ApiResponseMeta;
}
