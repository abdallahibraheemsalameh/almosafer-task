import type { SxProps, Theme } from "@mui/material/styles";
import { BACKGROUND, BORDER, TEXT } from "@/styles/colors";

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    py: 10,
    px: 3,
    textAlign: "center",
  } as SxProps<Theme>,

  iconContainer: {
    position: "relative",
    width: 128,
    height: 128,
    mb: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    bgcolor: BACKGROUND.slate["800-50"],
    border: `1px solid ${BORDER.default}`,
  } as SxProps<Theme>,

  animatedRing: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: `1px solid ${BORDER.light}`,
    animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
    opacity: 0.2,
    "@keyframes ping": {
      "75%, 100%": {
        transform: "scale(1.5)",
        opacity: 0,
      },
    },
  } as SxProps<Theme>,

  title: {
    fontWeight: 600,
    color: TEXT.primary,
    mb: 1,
  } as SxProps<Theme>,

  description: {
    color: TEXT.tertiary,
    maxWidth: 400,
  } as SxProps<Theme>,

  suggestionsContainer: {
    mt: 3,
    fontSize: "0.875rem",
    color: TEXT.muted,
  } as SxProps<Theme>,

  suggestionsList: {
    mt: 1,
    listStyle: "none",
    p: 0,
  } as SxProps<Theme>,

  suggestionItem: {
    py: 0.25,
  } as SxProps<Theme>,
};
