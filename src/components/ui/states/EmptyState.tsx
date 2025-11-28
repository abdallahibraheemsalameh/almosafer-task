"use client";

import type { SearchType } from "@/types";

interface EmptyStateProps {
  searchType: SearchType;
  query?: string;
}

const EmptyState = ({ searchType, query }: EmptyStateProps) => {
  const isInitial = !query || query.trim() === "";

  return (
    <div
      className="
        flex flex-col items-center justify-center py-20 px-6 text-center
      "
      data-testid="empty-state"
    >
      {/* illustration */}
      <div
        className="
        relative w-32 h-32 mb-8
        flex items-center justify-center
        rounded-full bg-slate-800/50 border border-slate-700/50
      "
      >
        {isInitial ? (
          <svg
            className="w-16 h-16 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-16 h-16 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        {/* decorative rings */}
        <div className="absolute inset-0 rounded-full border border-slate-700/30 animate-ping opacity-20" />
      </div>

      {/* message */}
      <h3 className="text-xl font-semibold text-white mb-2">
        {isInitial ? `Search GitHub ${searchType}` : "No results found"}
      </h3>
      <p className="text-slate-400 max-w-md">
        {isInitial
          ? `Enter a search query to find ${
              searchType === "repositories"
                ? "public repositories"
                : "GitHub users"
            }`
          : `We couldn't find any ${searchType} matching "${query}". Try a different search term.`}
      </p>

      {/* suggestions for no results */}
      {!isInitial && (
        <div className="mt-6 text-sm text-slate-500">
          <p>Suggestions:</p>
          <ul className="mt-2 space-y-1">
            <li>• Check your spelling</li>
            <li>• Try more general keywords</li>
            <li>• Try different keywords</li>
          </ul>
        </div>
      )}
    </div>
  );
};
export { EmptyState };
