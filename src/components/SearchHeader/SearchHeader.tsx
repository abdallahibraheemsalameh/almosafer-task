"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SearchType } from "@/types";
import { SearchBar } from "@/components/SearchBar";
import { SearchTypeToggle } from "@/components/SearchTypeToggle";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styles } from "./SearchHeader.styles";

interface SearchHeaderProps {
  query: string;
  searchType: SearchType;
  isSearching: boolean;
  onQueryChange: (value: string) => void;
  onSearchTypeChange: (type: SearchType) => void;
}

const SearchHeader = ({
  query,
  searchType,
  isSearching,
  onQueryChange,
  onSearchTypeChange,
}: SearchHeaderProps) => {
  return (
    <Box component="header" sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Box sx={styles.logoContainer}>
            <Box sx={styles.logoIcon}>
              <GitHubIcon sx={{ fontSize: 24, color: "white" }} />
            </Box>
            <Typography variant="h6" sx={styles.logoText}>
              GitHub Explorer
            </Typography>
          </Box>

          <Box sx={styles.searchBarWrapper}>
            <SearchBar
              value={query}
              onChange={onQueryChange}
              placeholder={`Search ${searchType}...`}
              isLoading={isSearching}
            />
          </Box>

          <SearchTypeToggle value={searchType} onChange={onSearchTypeChange} />
        </Box>
      </Box>
    </Box>
  );
};

export { SearchHeader };

