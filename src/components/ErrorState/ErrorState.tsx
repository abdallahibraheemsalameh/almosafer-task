"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WarningIcon from "@mui/icons-material/Warning";
import RefreshIcon from "@mui/icons-material/Refresh";
import { styles } from "./ErrorState.styles";

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
}

const ErrorState = ({ error, onRetry }: ErrorStateProps) => {
  return (
    <Box sx={styles.container} data-testid="error-state">
      <Box sx={styles.iconContainer}>
        <WarningIcon sx={{ fontSize: 64, color: "error.main" }} />
      </Box>

      <Typography variant="h5" sx={styles.title}>
        Oops! Something went wrong
      </Typography>

      <Typography sx={styles.errorMessage}>{error}</Typography>

      {onRetry && (
        <Button
          onClick={onRetry}
          variant="contained"
          color="primary"
          startIcon={<RefreshIcon />}
          sx={styles.retryButton}
        >
          Try Again
        </Button>
      )}
    </Box>
  );
};

export { ErrorState };

