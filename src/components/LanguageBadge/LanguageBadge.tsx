"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LANGUAGE_COLORS } from "@/lib/constants";
import { styles } from "./LanguageBadge.styles";

interface LanguageBadgeProps {
  language: string;
  percentage?: number;
  size?: "sm" | "md";
}

const LanguageBadge = ({
  language,
  percentage,
  size = "sm",
}: LanguageBadgeProps) => {
  const color = LANGUAGE_COLORS[language] || LANGUAGE_COLORS.default;

  return (
    <Box
      component="span"
      sx={styles.badge(size)}
      title={
        percentage !== undefined
          ? `${language}: ${percentage.toFixed(1)}%`
          : language
      }
    >
      <Box component="span" sx={styles.colorDot(color)} aria-hidden="true" />
      <Typography component="span" sx={styles.languageName}>
        {language}
      </Typography>
      {percentage !== undefined && (
        <Typography component="span" sx={styles.percentage}>
          {percentage.toFixed(0)}%
        </Typography>
      )}
    </Box>
  );
};

export { LanguageBadge };
