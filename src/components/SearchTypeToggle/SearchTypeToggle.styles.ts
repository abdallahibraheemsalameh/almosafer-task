import type { SxProps, Theme } from "@mui/material/styles";
import { BACKGROUND, BORDER, GRADIENTS, SHADOWS } from "@/styles/colors";

export const styles = {
  root: {
    bgcolor: BACKGROUND.slate["800-50"],
    backdropFilter: "blur(4px)",
    border: `1px solid ${BORDER.default}`,
    borderRadius: 3,
    p: 0.5,
    "& .MuiToggleButton-root": {
      border: "none",
      borderRadius: "8px !important",
      px: 2,
      py: 1,
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "grey.400",
      "&:hover": {
        bgcolor: BORDER.default,
        color: "white",
      },
      "&.Mui-selected": {
        background: GRADIENTS.primary,
        color: "white",
        boxShadow: SHADOWS.buttonHover,
        "&:hover": {
          background: GRADIENTS.primary,
        },
      },
    },
  } as SxProps<Theme>,

  icon: {
    fontSize: 16,
    mr: 1,
  },
};
