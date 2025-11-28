"use client";

interface LoadingStateProps {
  count?: number;
}

const LoadingState = ({ count = 6 }: LoadingStateProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2" data-testid="loading-state">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="
            rounded-2xl bg-slate-800/50 border border-slate-700/50
            p-6 animate-pulse
          "
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-slate-700" />
            <div className="flex-1">
              <div className="h-5 w-2/3 bg-slate-700 rounded mb-2" />
              <div className="h-4 w-full bg-slate-700/50 rounded" />
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <div className="h-6 w-16 bg-slate-700/50 rounded-full" />
            <div className="h-6 w-20 bg-slate-700/50 rounded-full" />
            <div className="h-6 w-14 bg-slate-700/50 rounded-full" />
          </div>
          <div className="flex gap-4">
            <div className="h-4 w-12 bg-slate-700/50 rounded" />
            <div className="h-4 w-16 bg-slate-700/50 rounded" />
            <div className="h-4 w-20 bg-slate-700/50 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};
export { LoadingState };

