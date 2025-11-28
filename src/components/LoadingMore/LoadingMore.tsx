"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { styles } from "./LoadingMore.styles";

const LoadingMore = () => {
  return (
    <Box sx={styles.container} data-testid="loading-more">
      <Box sx={styles.content}>
        <CircularProgress size={20} color="primary" />
        <Typography sx={styles.text}>Loading more results...</Typography>
      </Box>
    </Box>
  );
};

export { LoadingMore };

