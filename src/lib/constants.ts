// api constants
export const GITHUB_API_BASE_URL = "https://api.github.com";

// search constants
export const SEARCH_DEBOUNCE_MS = 500;
export const ITEMS_PER_PAGE = 30;
export const MAX_RESULTS = 1000; // GitHub API limit

// rate limiting
export const RATE_LIMIT_UNAUTHENTICATED = 10; // requests per minute for search

// language to color mapping (for badges)
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
  default: "#db5855",
};

// file type to language mapping
export const FILE_EXTENSION_TO_LANGUAGE: Record<string, string> = {
  js: "JavaScript",
  jsx: "JavaScript",
  ts: "TypeScript",
  tsx: "TypeScript",
  py: "Python",
  java: "Java",
  cpp: "C++",
  cc: "C++",
  c: "C",
  cs: "C#",
  rb: "Ruby",
  go: "Go",
  rs: "Rust",
  swift: "Swift",
  kt: "Kotlin",
  php: "PHP",
  html: "HTML",
  htm: "HTML",
  css: "CSS",
  scss: "SCSS",
  sass: "SCSS",
  vue: "Vue",
  sh: "Shell",
  bash: "Shell",
  dart: "Dart",
  scala: "Scala",
  r: "R",
  ipynb: "Jupyter",
  hs: "Haskell",
  lua: "Lua",
  pl: "Perl",
  ex: "Elixir",
  exs: "Elixir",
  clj: "Clojure",
  dockerfile: "Dockerfile",
  makefile: "Makefile",
};
