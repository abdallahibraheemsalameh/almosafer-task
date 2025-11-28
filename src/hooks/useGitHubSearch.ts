"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { searchGitHub } from "@/lib/api";
import {
  SearchType,
  UserSearchResponse,
  RepositorySearchResponse,
} from "@/types";
import { ITEMS_PER_PAGE } from "@/lib/constants";

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

      // github API limits search results to 1000 items
      const maxResults = Math.min(totalCount, 1000);

      if (totalFetched < maxResults) {
        return allPages.length + 1;
      }
      return undefined;
    },
    enabled: enabled && query.trim().length > 0,
    staleTime: 5 * 60 * 1000, // cache for 5 minutes
    gcTime: 10 * 60 * 1000, // garbage collect after 10 minutes
    refetchOnWindowFocus: false,
  });
};
export { useGitHubSearch };

// type guards
const isUserSearchResponse = (
  response: UserSearchResponse | RepositorySearchResponse
): response is UserSearchResponse => {
  return response.items.length === 0 || "login" in response.items[0];
};

const isRepositorySearchResponse = (
  response: UserSearchResponse | RepositorySearchResponse
): response is RepositorySearchResponse => {
  return response.items.length === 0 || "full_name" in response.items[0];
};

export { isUserSearchResponse, isRepositorySearchResponse };
