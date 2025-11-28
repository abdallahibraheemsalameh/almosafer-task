"use client";

import type { SearchType } from "@/types";

interface ResultsHeaderProps {
  totalCount: number;
  searchType: SearchType;
}

const ResultsHeader = ({ totalCount, searchType }: ResultsHeaderProps) => {
  const formattedCount = totalCount.toLocaleString();

  return (
    <div className="mb-6" data-testid="results-header">
      <p className="text-slate-400">
        Found <span className="text-white font-semibold">{formattedCount}</span>{" "}
        {searchType === "repositories" ? "repositories" : "users"}
      </p>
    </div>
  );
};
export { ResultsHeader };
