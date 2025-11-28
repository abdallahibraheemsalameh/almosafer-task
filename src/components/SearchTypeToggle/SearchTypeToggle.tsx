"use client";

import type { SearchType } from "@/types";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FolderIcon from "@mui/icons-material/Folder";
import PeopleIcon from "@mui/icons-material/People";
import { styles } from "./SearchTypeToggle.styles";

interface SearchTypeToggleProps {
  value: SearchType;
  onChange: (type: SearchType) => void;
  disabled?: boolean;
}

const SearchTypeToggle = ({
  value,
  onChange,
  disabled = false,
}: SearchTypeToggleProps) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: SearchType | null
  ) => {
    if (newValue) onChange(newValue);
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      disabled={disabled}
      aria-label="search type"
      sx={styles.root}
    >
      <ToggleButton value="repositories" data-testid="toggle-repositories">
        <FolderIcon sx={styles.icon} />
        Repositories
      </ToggleButton>
      <ToggleButton value="users" data-testid="toggle-users">
        <PeopleIcon sx={styles.icon} />
        Users
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export { SearchTypeToggle };

