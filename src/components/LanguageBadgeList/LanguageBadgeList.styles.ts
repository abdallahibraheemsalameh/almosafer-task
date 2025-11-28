import type { SxProps, Theme } from "@mui/material/styles";
import { TEXT } from "@/styles/colors";

export const styles = {
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 0.75,
  } as SxProps<Theme>,

  moreText: {
    px: 1.25,
    py: 0.25,
    fontSize: "0.75rem",
    color: TEXT.muted,
  } as SxProps<Theme>,
};

