import type { SxProps, Theme } from "@mui/material/styles";
import { BACKGROUND, TEXT } from "@/styles/colors";

export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  } as SxProps<Theme>,

  label: {
    fontSize: "0.75rem",
    color: TEXT.muted,
  } as SxProps<Theme>,

  avatarsContainer: {
    display: "flex",
  } as SxProps<Theme>,

  skeletonAvatar: (index: number) =>
    ({
      width: 28,
      height: 28,
      borderRadius: "50%",
      bgcolor: "grey.700",
      border: `2px solid ${BACKGROUND.dark}`,
      ml: index === 0 ? 0 : -1,
      animation: "pulse 2s infinite",
      "@keyframes pulse": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 },
      },
    } as SxProps<Theme>),
};
