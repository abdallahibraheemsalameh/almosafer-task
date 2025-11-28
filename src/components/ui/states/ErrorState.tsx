"use client";

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
}

const ErrorState = ({ error, onRetry }: ErrorStateProps) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center py-20 px-6 text-center
      "
      data-testid="error-state"
    >
      {/* error icon */}
      <div
        className="
        relative w-32 h-32 mb-8
        flex items-center justify-center
        rounded-full bg-red-500/10 border border-red-500/20
      "
      >
        <svg
          className="w-16 h-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      {/* message */}
      <h3 className="text-xl font-semibold text-white mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-slate-400 max-w-md mb-6">{error}</p>

      {/* retry button */}
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="
            flex items-center gap-2 px-6 py-3 rounded-xl
            bg-emerald-500 text-white font-medium
            hover:bg-emerald-600 transition-colors duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
          "
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Try Again
        </button>
      )}
    </div>
  );
};
export { ErrorState };
