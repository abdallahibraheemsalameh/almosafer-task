"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MAX_LANGUAGES_DISPLAY } from "@/lib/constants";
import { LanguageBadge } from "@/components/LanguageBadge";
import { styles } from "./LanguageBadgeList.styles";

interface LanguageBadgeListProps {
  languages: Record<string, number>;
  maxDisplay?: number;
}

const LanguageBadgeList = ({
  languages,
  maxDisplay = MAX_LANGUAGES_DISPLAY,
}: LanguageBadgeListProps) => {
  const entries = Object.entries(languages);
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);

  const sortedLanguages = entries
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxDisplay);

  const remainingCount = entries.length - maxDisplay;

  if (sortedLanguages.length === 0) {
    return null;
  }

  return (
    <Box sx={styles.listContainer} data-testid="language-badges">
      {sortedLanguages.map(([lang, bytes]) => (
        <LanguageBadge
          key={lang}
          language={lang}
          percentage={(bytes / total) * 100}
        />
      ))}
      {remainingCount > 0 && (
        <Typography component="span" sx={styles.moreText}>
          +{remainingCount} more
        </Typography>
      )}
    </Box>
  );
};

export { LanguageBadgeList };

