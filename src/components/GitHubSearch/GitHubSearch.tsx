"use client";

import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import type { SearchType } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";
import { SEARCH_DEBOUNCE_MS } from "@/lib/constants";
import { SearchHeader } from "@/components/SearchHeader";
import { SearchResults } from "@/components/SearchResults";
import { styles } from "./GitHubSearch.styles";

const GitHubSearch = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<SearchType>("repositories");

  const debouncedQuery = useDebounce(query, SEARCH_DEBOUNCE_MS);
  const isSearching = query !== debouncedQuery;

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const handleSearchTypeChange = useCallback((type: SearchType) => {
    setSearchType(type);
  }, []);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.backgroundContainer}>
        <Box sx={styles.backgroundOrbLeft} />
        <Box sx={styles.backgroundOrbRight} />
      </Box>

      <SearchHeader
        query={query}
        searchType={searchType}
        isSearching={isSearching}
        onQueryChange={handleQueryChange}
        onSearchTypeChange={handleSearchTypeChange}
      />

      <Box component="main" sx={styles.main}>
        <SearchResults query={debouncedQuery} searchType={searchType} />
      </Box>
    </Box>
  );
};

export { GitHubSearch };
