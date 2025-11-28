import type { SxProps, Theme } from "@mui/material/styles";
import { BACKGROUND, GRADIENTS, SHADOWS } from "@/styles/colors";

export const styles = {
  root: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    borderBottom: `1px solid ${BACKGROUND.slate["800-50"]}`,
    backdropFilter: "blur(8px)",
    bgcolor: BACKGROUND.paperAlt,
  } as SxProps<Theme>,

  container: {
    maxWidth: 1280,
    mx: "auto",
    px: { xs: 2, sm: 3, lg: 4 },
    py: 2,
  } as SxProps<Theme>,

  content: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    gap: 2,
  } as SxProps<Theme>,

  logoContainer: {
    display: { xs: "none", sm: "flex" },
    alignItems: "center",
    gap: 1.5,
    flexShrink: 0,
  } as SxProps<Theme>,

  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 3,
    background: GRADIENTS.primaryButton,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: SHADOWS.button,
  } as SxProps<Theme>,

  logoText: {
    display: { xs: "none", md: "block" },
    fontWeight: 700,
    color: "white",
  } as SxProps<Theme>,

  searchBarWrapper: {
    flex: 1,
    width: "100%",
  } as SxProps<Theme>,
};
