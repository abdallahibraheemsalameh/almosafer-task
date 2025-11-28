"use client";

import { useMemo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { SearchType, GitHubUser, GitHubRepository } from "@/types";
import { UserCard } from "@/components/UserCard";
import { RepositoryCard } from "@/components/RepositoryCard";
import { InfiniteScroll } from "@/components/InfiniteScroll";
import { LoadingState } from "@/components/LoadingState";
import { EmptyState } from "@/components/EmptyState";
import { ErrorState } from "@/components/ErrorState";
import { LoadingMore } from "@/components/LoadingMore";
import { ResultsHeader } from "@/components/ResultsHeader";
import { useGitHubSearch } from "@/hooks/useGitHubSearch";
import { styles } from "./SearchResults.styles";

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

  const items = useMemo((): (GitHubUser | GitHubRepository)[] => {
    if (!data?.pages) return [];
    return data.pages.flatMap(
      (page) => page.items as (GitHubUser | GitHubRepository)[]
    );
  }, [data]);

  const totalCount = data?.pages[0]?.total_count ?? 0;

  if (!query.trim()) {
    return <EmptyState searchType={searchType} />;
  }

  if (isLoading) {
    return <LoadingState count={6} />;
  }

  if (error) {
    return (
      <ErrorState
        error={error instanceof Error ? error.message : "An error occurred"}
        onRetry={() => refetch()}
      />
    );
  }

  if (items.length === 0) {
    return <EmptyState searchType={searchType} query={query} />;
  }

  return (
    <Box>
      <ResultsHeader totalCount={totalCount} searchType={searchType} />

      <InfiniteScroll
        onLoadMore={fetchNextPage}
        hasMore={!!hasNextPage}
        isLoading={isFetchingNextPage}
      >
        <Grid container spacing={2}>
          {searchType === "users"
            ? (items as GitHubUser[]).map((user) => (
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  key={`user-${user.id}`}
                  sx={{ display: "flex" }}
                >
                  <UserCard user={user} />
                </Grid>
              ))
            : (items as GitHubRepository[]).map((repo) => (
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  key={`repo-${repo.id}`}
                  sx={{ display: "flex" }}
                >
                  <RepositoryCard repository={repo} />
                </Grid>
              ))}
        </Grid>
      </InfiniteScroll>

      {isFetchingNextPage && <LoadingMore />}

      {!hasNextPage && items.length > 0 && (
        <Box sx={styles.endOfResults}>
          <Typography sx={styles.endOfResultsText}>
            You&apos;ve reached the end of the results
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export { SearchResults };
