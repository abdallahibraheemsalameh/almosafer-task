"use client";

import { useMemo } from "react";
import type { SearchType, GitHubUser, GitHubRepository } from "@/types";
import { UserCard } from "@/components/user";
import { RepositoryCard } from "@/components/repository";
import { InfiniteScroll } from "@/components/ui";
import {
  LoadingState,
  EmptyState,
  ErrorState,
  LoadingMore,
  ResultsHeader,
} from "@/components/ui/states";
import { useGitHubSearch } from "@/hooks/useGitHubSearch";

interface SearchResultsProps {
  query: string;
  searchType: SearchType;
}

const SearchResults = ({ query, searchType }: SearchResultsProps) => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
    refetch,
  } = useGitHubSearch({
    query,
    searchType,
    enabled: query.trim().length > 0,
  });

  // flatten pages into a single array
  const items = useMemo((): (GitHubUser | GitHubRepository)[] => {
    if (!data?.pages) return [];
    return data.pages.flatMap(
      (page) => page.items as (GitHubUser | GitHubRepository)[]
    );
  }, [data]);

  const totalCount = data?.pages[0]?.total_count ?? 0;

  // no query entered - show initial empty state
  if (!query.trim()) {
    return <EmptyState searchType={searchType} />;
  }

  // loading initial results
  if (isLoading) {
    return <LoadingState count={6} />;
  }

  // error state
  if (error) {
    return (
      <ErrorState
        error={error instanceof Error ? error.message : "An error occurred"}
        onRetry={() => refetch()}
      />
    );
  }

  // no results found
  if (items.length === 0) {
    return <EmptyState searchType={searchType} query={query} />;
  }

  return (
    <div>
      <ResultsHeader totalCount={totalCount} searchType={searchType} />

      <InfiniteScroll
        onLoadMore={fetchNextPage}
        hasMore={!!hasNextPage}
        isLoading={isFetchingNextPage}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {searchType === "users"
            ? (items as GitHubUser[]).map((user) => (
                <UserCard key={user.id} user={user} />
              ))
            : (items as GitHubRepository[]).map((repo) => (
                <RepositoryCard key={repo.id} repository={repo} />
              ))}
        </div>
      </InfiniteScroll>

      {isFetchingNextPage && <LoadingMore />}

      {!hasNextPage && items.length > 0 && (
        <div className="text-center py-8 text-slate-500">
          <p>You&apos;ve reached the end of the results</p>
        </div>
      )}
    </div>
  );
};
export { SearchResults };
