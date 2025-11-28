type SearchType = "repositories" | "users";

interface SearchState {
  query: string;
  searchType: SearchType;
  page: number;
  isLoading: boolean;
  error: string | null;
}

interface PaginationInfo {
  currentPage: number;
  totalCount: number;
  perPage: number;
  hasMore: boolean;
}
export type { SearchType, SearchState, PaginationInfo };
