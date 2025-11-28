import type { SxProps, Theme } from "@mui/material/styles";
import { BACKGROUND, BORDER, TEXT } from "@/styles/colors";

export const styles = {
  badge: (size: "sm" | "md") =>
    ({
      display: "inline-flex",
      alignItems: "center",
      gap: 0.75,
      borderRadius: 5,
      fontWeight: 500,
      bgcolor: BACKGROUND.slate["800-80"],
      border: `1px solid ${BORDER.default}`,
      transition: "all 0.2s",
      px: size === "sm" ? 1.25 : 1.5,
      py: size === "sm" ? 0.25 : 0.5,
      fontSize: size === "sm" ? "0.75rem" : "0.875rem",
      "&:hover": {
        transform: "scale(1.05)",
        borderColor: BORDER.hoverDark,
      },
    }) as SxProps<Theme>,

  colorDot: (color: string) =>
    ({
      width: 8,
      height: 8,
      borderRadius: "50%",
      flexShrink: 0,
      bgcolor: color,
    }) as SxProps<Theme>,

  languageName: {
    color: TEXT.secondary,
    fontSize: "inherit",
  } as SxProps<Theme>,

  percentage: {
    color: TEXT.muted,
    fontSize: "10px",
  } as SxProps<Theme>,
};
