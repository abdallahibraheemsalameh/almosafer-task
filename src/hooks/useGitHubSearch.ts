"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { searchGitHub } from "@/lib/api";
import { SearchType } from "@/types";
import {
  ITEMS_PER_PAGE,
  MAX_RESULTS,
  DEFAULT_STALE_TIME,
  DEFAULT_GC_TIME,
} from "@/lib/constants";

interface UseGitHubSearchOptions {
  query: string;
  searchType: SearchType;
  enabled?: boolean;
}

const useGitHubSearch = ({
  query,
  searchType,
  enabled = true,
}: UseGitHubSearchOptions) => {
  return useInfiniteQuery({
    queryKey: ["github-search", searchType, query],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await searchGitHub(query, searchType, pageParam);
      return {
        ...response,
        page: pageParam,
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.length * ITEMS_PER_PAGE;
      const totalCount = lastPage.total_count;

      // GitHub API limits search results to MAX_RESULTS items
      const maxResults = Math.min(totalCount, MAX_RESULTS);

      if (totalFetched < maxResults) {
        return allPages.length + 1;
      }
      return undefined;
    },
    enabled: enabled && query.trim().length > 0,
    staleTime: DEFAULT_STALE_TIME,
    gcTime: DEFAULT_GC_TIME,
    refetchOnWindowFocus: false,
  });
};
export { useGitHubSearch };
