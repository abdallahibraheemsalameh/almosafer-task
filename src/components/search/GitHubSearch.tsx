"use client";

import { useState, useCallback } from "react";
import type { SearchType } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";
import { SEARCH_DEBOUNCE_MS } from "@/lib/constants";
import { SearchBar } from "./SearchBar";
import { SearchTypeToggle } from "./SearchTypeToggle";
import { SearchResults } from "./SearchResults";

const GitHubSearch = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<SearchType>("repositories");

  // Debounce the search query
  const debouncedQuery = useDebounce(query, SEARCH_DEBOUNCE_MS);
  const isSearching = query !== debouncedQuery;

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const handleSearchTypeChange = useCallback((type: SearchType) => {
    setSearchType(type);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/5 to-transparent" />
      </div>

      {/* Header */}
      <header className="relative border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div
                className="
                w-10 h-10 rounded-xl
                bg-gradient-to-br from-emerald-500 to-teal-600
                flex items-center justify-center shadow-lg shadow-emerald-500/20
              "
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white hidden sm:block">
                GitHub Explorer
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 w-full">
              <SearchBar
                value={query}
                onChange={handleQueryChange}
                placeholder={`Search ${searchType}...`}
                isLoading={isSearching}
              />
            </div>

            {/* Search Type Toggle */}
            <SearchTypeToggle
              value={searchType}
              onChange={handleSearchTypeChange}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchResults query={debouncedQuery} searchType={searchType} />
      </main>
    </div>
  );
};
export { GitHubSearch };
