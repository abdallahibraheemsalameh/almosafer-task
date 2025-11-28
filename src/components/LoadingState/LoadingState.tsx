"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import { styles } from "./LoadingState.styles";

interface LoadingStateProps {
  count?: number;
}

const LoadingState = ({ count = 6 }: LoadingStateProps) => {
  return (
    <Grid container spacing={2} data-testid="loading-state">
      {Array.from({ length: count }).map((_, index) => (
        <Grid size={{ xs: 12, sm: 6 }} key={index}>
          <Box sx={styles.card}>
            <Box sx={styles.header}>
              <Skeleton
                variant="rounded"
                width={40}
                height={40}
                sx={styles.avatarSkeleton}
              />
              <Box sx={{ flex: 1 }}>
                <Skeleton
                  variant="text"
                  width="66%"
                  height={24}
                  sx={styles.titleSkeleton}
                />
                <Skeleton
                  variant="text"
                  width="100%"
                  height={20}
                  sx={styles.descriptionSkeleton}
                />
              </Box>
            </Box>

            <Box sx={styles.badgesContainer}>
              <Skeleton
                variant="rounded"
                width={64}
                height={24}
                sx={styles.badgeSkeleton}
              />
              <Skeleton
                variant="rounded"
                width={80}
                height={24}
                sx={styles.badgeSkeleton}
              />
              <Skeleton
                variant="rounded"
                width={56}
                height={24}
                sx={styles.badgeSkeleton}
              />
            </Box>

            <Box sx={styles.statsContainer}>
              <Skeleton
                variant="text"
                width={48}
                height={20}
                sx={styles.statSkeleton}
              />
              <Skeleton
                variant="text"
                width={64}
                height={20}
                sx={styles.statSkeleton}
              />
              <Skeleton
                variant="text"
                width={80}
                height={20}
                sx={styles.statSkeleton}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export { LoadingState };

