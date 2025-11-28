import type { SxProps, Theme } from "@mui/material/styles";
import { ERROR, TEXT } from "@/styles/colors";

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
    bgcolor: ERROR[100],
    border: `1px solid ${ERROR[200]}`,
  } as SxProps<Theme>,

  title: {
    fontWeight: 600,
    color: TEXT.primary,
    mb: 1,
  } as SxProps<Theme>,

  errorMessage: {
    color: TEXT.tertiary,
    maxWidth: 400,
    mb: 3,
  } as SxProps<Theme>,

  retryButton: {
    borderRadius: 3,
    px: 3,
    py: 1.5,
  } as SxProps<Theme>,
};
