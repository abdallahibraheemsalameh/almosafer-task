"use client";

import type { SearchType } from "@/types";

interface SearchTypeToggleProps {
  value: SearchType;
  onChange: (type: SearchType) => void;
  disabled?: boolean;
}

const SearchTypeToggle = ({
  value,
  onChange,
  disabled = false,
}: SearchTypeToggleProps) => {
  return (
    <div className="flex items-center gap-1 rounded-xl bg-slate-800/50 p-1 backdrop-blur-sm border border-slate-700/50">
      <button
        type="button"
        onClick={() => onChange("repositories")}
        disabled={disabled}
        className={`
          relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            value === "repositories"
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
              : "text-slate-400 hover:text-white hover:bg-slate-700/50"
          }
        `}
        aria-pressed={value === "repositories"}
        data-testid="toggle-repositories"
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          Repositories
        </span>
      </button>
      <button
        type="button"
        onClick={() => onChange("users")}
        disabled={disabled}
        className={`
          relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            value === "users"
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
              : "text-slate-400 hover:text-white hover:bg-slate-700/50"
          }
        `}
        aria-pressed={value === "users"}
        data-testid="toggle-users"
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Users
        </span>
      </button>
    </div>
  );
};
export { SearchTypeToggle };
