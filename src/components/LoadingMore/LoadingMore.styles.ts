import type { SxProps, Theme } from "@mui/material/styles";

export const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    py: 4,
  } as SxProps<Theme>,

  content: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
  } as SxProps<Theme>,

  text: {
    color: "grey.400",
  } as SxProps<Theme>,
};

