"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import { styles } from "./SearchBar.styles";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search GitHub...",
  isLoading = false,
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = useCallback(() => {
    onChange("");
    inputRef.current?.focus();
  }, [onChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.inputContainer(isFocused)}>
        <Box sx={styles.iconContainer}>
          {isLoading ? (
            <CircularProgress size={20} color="primary" />
          ) : (
            <SearchIcon sx={styles.searchIcon(isFocused)} />
          )}
        </Box>

        <InputBase
          inputRef={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          sx={styles.input}
          inputProps={{
            "aria-label": "Search query",
            "data-testid": "search-input",
          }}
        />

        <Box sx={styles.controlsContainer}>
          {value && (
            <IconButton
              onClick={handleClear}
              size="small"
              aria-label="Clear search"
              data-testid="clear-search"
              sx={styles.clearButton}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
          <Box component="kbd" sx={styles.kbd}>
            <span style={{ fontSize: "10px" }}>⌘</span>
            <span>K</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { SearchBar };

