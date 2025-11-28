"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SearchType } from "@/types";
import { styles } from "./ResultsHeader.styles";

interface ResultsHeaderProps {
  totalCount: number;
  searchType: SearchType;
}

const ResultsHeader = ({ totalCount, searchType }: ResultsHeaderProps) => {
  const formattedCount = totalCount.toLocaleString();

  return (
    <Box sx={styles.container} data-testid="results-header">
      <Typography sx={styles.text}>
        Found{" "}
        <Typography component="span" sx={styles.count}>
          {formattedCount}
        </Typography>{" "}
        {searchType === "repositories" ? "repositories" : "users"}
      </Typography>
    </Box>
  );
};

export { ResultsHeader };

