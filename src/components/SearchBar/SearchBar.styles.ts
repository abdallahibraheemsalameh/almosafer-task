import type { SxProps, Theme } from "@mui/material/styles";
import {
  BACKGROUND,
  BORDER,
  PRIMARY,
  SHADOWS,
  TEXT,
} from "@/styles/colors";

export const styles = {
  root: {
    position: "relative",
    width: "100%",
    maxWidth: 672,
  } as SxProps<Theme>,

  inputContainer: (isFocused: boolean) =>
    ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      borderRadius: 4,
      transition: "all 0.3s",
      bgcolor: BACKGROUND.slate["800-50"],
      backdropFilter: "blur(4px)",
      border: "1px solid",
      borderColor: isFocused ? PRIMARY[500] : BORDER.default,
      boxShadow: isFocused ? SHADOWS.input : "none",
      "&:hover": {
        borderColor: isFocused ? PRIMARY[500] : BORDER.hover,
      },
    }) as SxProps<Theme>,

  iconContainer: {
    position: "absolute",
    left: 16,
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
  } as SxProps<Theme>,

  searchIcon: (isFocused: boolean) => ({
    fontSize: 20,
    color: isFocused ? "primary.main" : TEXT.muted,
    transition: "color 0.2s",
  }),

  input: {
    width: "100%",
    py: 2,
    pl: 6,
    pr: 12,
    fontSize: "1.125rem",
    color: TEXT.primary,
    "& input::placeholder": {
      color: TEXT.muted,
      opacity: 1,
    },
  } as SxProps<Theme>,

  controlsContainer: {
    position: "absolute",
    right: 16,
    display: "flex",
    alignItems: "center",
    gap: 1,
  } as SxProps<Theme>,

  clearButton: {
    color: TEXT.muted,
    "&:hover": { color: TEXT.primary, bgcolor: BORDER.default },
  } as SxProps<Theme>,

  kbd: {
    display: { xs: "none", sm: "flex" },
    alignItems: "center",
    gap: 0.5,
    px: 1,
    py: 0.5,
    fontSize: "0.75rem",
    color: TEXT.muted,
    bgcolor: BACKGROUND.slate["800-100"],
    borderRadius: 2,
    border: "1px solid",
    borderColor: "grey.700",
  } as SxProps<Theme>,
};
