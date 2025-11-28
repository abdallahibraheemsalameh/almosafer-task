// ============================================
// API constants
// ============================================
export const GITHUB_API_BASE_URL = "https://api.github.com";

// ============================================
// search & pagination constants
// ============================================
export const SEARCH_DEBOUNCE_MS = 500;
export const ITEMS_PER_PAGE = 30;
export const MAX_RESULTS = 1000; // GitHub API limit

// ============================================
// cache time constants (in milliseconds)
// ============================================
export const CACHE_TIME = {
  ONE_MINUTE: 60 * 1000,
  FIVE_MINUTES: 5 * 60 * 1000,
  TEN_MINUTES: 10 * 60 * 1000,
  THIRTY_MINUTES: 30 * 60 * 1000,
  ONE_HOUR: 60 * 60 * 1000,
} as const;

// default query cache settings
export const DEFAULT_STALE_TIME = CACHE_TIME.FIVE_MINUTES;
export const DEFAULT_GC_TIME = CACHE_TIME.TEN_MINUTES;
export const LANGUAGES_STALE_TIME = CACHE_TIME.THIRTY_MINUTES;
export const LANGUAGES_GC_TIME = CACHE_TIME.ONE_HOUR;

// ============================================
// UI display constants
// ============================================
export const MAX_TOPICS_DISPLAY = 5;
export const MAX_LANGUAGES_DISPLAY = 5;
export const FORKS_TO_DISPLAY = 3;

// ============================================
// intersectionObserver constants
// ============================================
export const INTERSECTION_ROOT_MARGIN = "100px";

// ============================================
// language colors (for badges)
// ============================================
export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Shell: "#89e051",
  Dart: "#00B4AB",
  Scala: "#c22d40",
  R: "#198CE7",
  Jupyter: "#DA5B0B",
  Haskell: "#5e5086",
  Lua: "#000080",
  Perl: "#0298c3",
  Elixir: "#6e4a7e",
  Clojure: "#db5855",
  Dockerfile: "#384d54",
  Makefile: "#427819",
  default: "#384d54",
};
