import type { SxProps, Theme } from "@mui/material/styles";
import { GRADIENTS, PRIMARY, SECONDARY } from "@/styles/colors";

export const styles = {
  root: {
    minHeight: "100vh",
    background: GRADIENTS.background,
  } as SxProps<Theme>,

  backgroundContainer: {
    position: "fixed",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
  } as SxProps<Theme>,

  backgroundOrbLeft: {
    position: "absolute",
    top: "25%",
    left: -128,
    width: 384,
    height: 384,
    bgcolor: PRIMARY[100],
    borderRadius: "50%",
    filter: "blur(48px)",
  } as SxProps<Theme>,

  backgroundOrbRight: {
    position: "absolute",
    bottom: "25%",
    right: -128,
    width: 384,
    height: 384,
    bgcolor: SECONDARY[100],
    borderRadius: "50%",
    filter: "blur(48px)",
  } as SxProps<Theme>,

  main: {
    position: "relative",
    maxWidth: 1280,
    mx: "auto",
    px: { xs: 2, sm: 3, lg: 4 },
    py: 4,
  } as SxProps<Theme>,
};
