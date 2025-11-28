"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { GitHubFork } from "@/types";
import { ForkAvatar } from "@/components/ForkAvatar";
import { styles } from "./ForkAvatars.styles";

interface ForkAvatarsProps {
  forks: GitHubFork[];
  isLoading?: boolean;
}

const ForkAvatars = ({ forks, isLoading = false }: ForkAvatarsProps) => {
  if (isLoading) {
    return (
      <Box sx={styles.container}>
        <Typography sx={styles.label}>Recent forks:</Typography>
        <Box sx={styles.avatarsContainer}>
          {[0, 1, 2].map((i) => (
            <Box key={i} sx={styles.skeletonAvatar(i)} />
          ))}
        </Box>
      </Box>
    );
  }

  if (!forks || forks.length === 0) {
    return null;
  }

  return (
    <Box sx={styles.container} data-testid="fork-avatars">
      <Typography sx={styles.label}>Recent forks:</Typography>
      <Box sx={styles.avatarsContainer}>
        {forks.map((fork, index) => (
          <ForkAvatar key={fork.id} fork={fork} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export { ForkAvatars };
