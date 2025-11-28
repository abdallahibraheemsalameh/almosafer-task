"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search GitHub...",
  isLoading = false,
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = useCallback(() => {
    onChange("");
    inputRef.current?.focus();
  }, [onChange]);

  // handle keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-2xl">
      <div
        className={`
          relative flex items-center rounded-2xl transition-all duration-300
          bg-slate-800/50 backdrop-blur-sm border
          ${
            isFocused
              ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/20"
              : "border-slate-700/50 hover:border-slate-600/50"
          }
        `}
      >
        {/* search icon */}
        <div className="absolute left-4 flex items-center pointer-events-none">
          {isLoading ? (
            <svg
              className="w-5 h-5 text-emerald-500 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <svg
              className={`w-5 h-5 transition-colors duration-200 ${
                isFocused ? "text-emerald-500" : "text-slate-500"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </div>

        {/* input field */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="
            w-full py-4 pl-12 pr-24 bg-transparent text-white placeholder-slate-500
            text-lg 
          "
          style={{ outline: "none" }}
          aria-label="Search query"
          data-testid="search-input"
        />

        {/* clear button & keyboard shortcut */}
        <div className="absolute right-4 flex items-center gap-2">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="
                p-1.5 rounded-lg text-slate-500 hover:text-white
                hover:bg-slate-700/50 transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
              "
              aria-label="Clear search"
              data-testid="clear-search"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs text-slate-500 bg-slate-800 rounded-lg border border-slate-700">
            <span className="text-[10px]">⌘</span>
            <span>K</span>
          </kbd>
        </div>
      </div>
    </div>
  );
};
export { SearchBar };
