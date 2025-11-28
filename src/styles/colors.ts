// ============================================
// color Palette
// ============================================

// primary Colors (emerald/green)
export const PRIMARY = {
  main: "#10b981",
  light: "#34d399",
  dark: "#059669",
  50: "rgba(16, 185, 129, 0.05)",
  100: "rgba(16, 185, 129, 0.1)",
  200: "rgba(16, 185, 129, 0.2)",
  300: "rgba(16, 185, 129, 0.3)",
  500: "rgba(16, 185, 129, 0.5)",
} as const;

// secondary Colors (teal)
export const SECONDARY = {
  main: "#14b8a6",
  dark: "#0d9488",
  100: "rgba(20, 184, 166, 0.1)",
  500: "rgba(20, 184, 166, 0.5)",
} as const;

// error/danger colors
export const ERROR = {
  main: "#ef4444",
  100: "rgba(239, 68, 68, 0.1)",
  200: "rgba(239, 68, 68, 0.2)",
} as const;

// warning colors
export const WARNING = {
  main: "#fbbf24",
  100: "rgba(245, 158, 11, 0.1)",
  200: "rgba(245, 158, 11, 0.2)",
} as const;

// ============================================
// background colors
// ============================================
export const BACKGROUND = {
  darkest: "#020617", // slate-950
  dark: "#0f172a", // slate-900
  paper: "#1e293b", // slate-800
  paperAlt: "rgba(2, 6, 23, 0.8)",
  slate: {
    800: "#1e293b",
    "800-50": "rgba(30, 41, 59, 0.5)",
    "800-80": "rgba(30, 41, 59, 0.8)",
    "800-100": "rgba(30, 41, 59, 1)",
    900: "#0f172a",
    "900-50": "rgba(15, 23, 42, 0.5)",
  },
} as const;

// ============================================
// border colors
// ============================================
export const BORDER = {
  default: "rgba(51, 65, 85, 0.5)", // slate-700
  hover: "rgba(71, 85, 105, 0.5)", // slate-600
  hoverDark: "rgba(71, 85, 105, 1)",
  light: "rgba(51, 65, 85, 0.3)",
  solid: "rgba(51, 65, 85, 1)",
  primary: PRIMARY[300],
  primaryHover: PRIMARY[500],
} as const;

// ============================================
// skeleton/loading colors
// ============================================
export const SKELETON = {
  background: "rgba(51, 65, 85, 0.5)",
  pulse: "rgba(30, 41, 59, 0.5)",
} as const;

// ============================================
// scrollbar colors
// ============================================
export const SCROLLBAR = {
  track: "rgb(30 41 59 / 0.5)",
  thumb: "rgb(71 85 105 / 0.5)",
  thumbHover: "rgb(100 116 139 / 0.5)",
} as const;

// ============================================
// gradient definitions
// ============================================
export const GRADIENTS = {
  background: "linear-gradient(to bottom right, #020617, #0f172a, #020617)",
  cardBackground:
    "linear-gradient(to bottom right, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
  cardHover:
    "linear-gradient(to bottom right, rgba(16, 185, 129, 0.05), transparent, rgba(20, 184, 166, 0.05))",
  primary: "linear-gradient(to right, #10b981, #14b8a6)",
  primaryButton: "linear-gradient(to bottom right, #10b981, #0d9488)",
} as const;

// ============================================
// shadow definitions
// ============================================
export const SHADOWS = {
  card: "0 20px 25px -5px rgba(16, 185, 129, 0.05)",
  cardHover: "0 20px 25px -5px rgba(16, 185, 129, 0.05)",
  button: "0 10px 15px -3px rgba(16, 185, 129, 0.2)",
  buttonHover: "0 10px 15px -3px rgba(16, 185, 129, 0.25)",
  input:
    "0 10px 15px -3px rgba(16, 185, 129, 0.1), 0 0 0 2px rgba(16, 185, 129, 0.2)",
  glow: "0 0 0 2px rgba(16, 185, 129, 0.5)",
} as const;

// ============================================
// text colors
// ============================================
export const TEXT = {
  primary: "white",
  secondary: "grey.300",
  tertiary: "grey.400",
  muted: "grey.500",
} as const;
