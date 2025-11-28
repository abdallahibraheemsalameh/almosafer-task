"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SearchType } from "@/types";
import SearchIcon from "@mui/icons-material/Search";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { styles } from "./EmptyState.styles";

interface EmptyStateProps {
  searchType: SearchType;
  query?: string;
}

const EmptyState = ({ searchType, query }: EmptyStateProps) => {
  const isInitial = !query || query.trim() === "";

  return (
    <Box sx={styles.container} data-testid="empty-state">
      <Box sx={styles.iconContainer}>
        {isInitial ? (
          <SearchIcon sx={{ fontSize: 64, color: "grey.600" }} />
        ) : (
          <SentimentDissatisfiedIcon sx={{ fontSize: 64, color: "grey.600" }} />
        )}
        <Box sx={styles.animatedRing} />
      </Box>

      <Typography variant="h5" sx={styles.title}>
        {isInitial ? `Search GitHub ${searchType}` : "No results found"}
      </Typography>

      <Typography sx={styles.description}>
        {isInitial
          ? `Enter a search query to find ${
              searchType === "repositories"
                ? "public repositories"
                : "GitHub users"
            }`
          : `We couldn't find any ${searchType} matching "${query}". Try a different search term.`}
      </Typography>

      {!isInitial && (
        <Box sx={styles.suggestionsContainer}>
          <Typography>Suggestions:</Typography>
          <Box component="ul" sx={styles.suggestionsList}>
            <Typography component="li" sx={styles.suggestionItem}>
              • Check your spelling
            </Typography>
            <Typography component="li" sx={styles.suggestionItem}>
              • Try more general keywords
            </Typography>
            <Typography component="li" sx={styles.suggestionItem}>
              • Try different keywords
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export { EmptyState };

