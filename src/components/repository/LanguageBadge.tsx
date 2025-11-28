"use client";

import { LANGUAGE_COLORS } from "@/lib/constants";

interface LanguageBadgeProps {
  language: string;
  percentage?: number;
  size?: "sm" | "md";
}

const LanguageBadge = ({
  language,
  percentage,
  size = "sm",
}: LanguageBadgeProps) => {
  const color = LANGUAGE_COLORS[language] || LANGUAGE_COLORS.default;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full font-medium
        bg-slate-800/80 border border-slate-700/50
        transition-all duration-200 hover:scale-105 hover:border-slate-600
        ${size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"}
      `}
      title={
        percentage !== undefined
          ? `${language}: ${percentage.toFixed(1)}%`
          : language
      }
    >
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <span className="text-slate-300">{language}</span>
      {percentage !== undefined && (
        <span className="text-slate-500 text-[10px]">
          {percentage.toFixed(0)}%
        </span>
      )}
    </span>
  );
};

interface LanguageBadgeListProps {
  languages: Record<string, number>;
  maxDisplay?: number;
}

const LanguageBadgeList = ({
  languages,
  maxDisplay = 5,
}: LanguageBadgeListProps) => {
  const entries = Object.entries(languages);
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);

  // sort by bytes descending and take top languages
  const sortedLanguages = entries
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxDisplay);

  const remainingCount = entries.length - maxDisplay;

  if (sortedLanguages.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1.5" data-testid="language-badges">
      {sortedLanguages.map(([lang, bytes]) => (
        <LanguageBadge
          key={lang}
          language={lang}
          percentage={(bytes / total) * 100}
        />
      ))}
      {remainingCount > 0 && (
        <span className="inline-flex items-center px-2.5 py-0.5 text-xs text-slate-500">
          +{remainingCount} more
        </span>
      )}
    </div>
  );
};
export { LanguageBadge, LanguageBadgeList };
