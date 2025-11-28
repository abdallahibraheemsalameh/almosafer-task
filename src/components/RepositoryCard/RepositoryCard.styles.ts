import type { SxProps, Theme } from "@mui/material/styles";
import {
  GRADIENTS,
  BORDER,
  PRIMARY,
  WARNING,
  BACKGROUND,
  SKELETON,
  TEXT,
  SHADOWS,
} from "@/styles/colors";

export const styles = {
  card: (isHovered: boolean) =>
    ({
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      background: GRADIENTS.cardBackground,
      border: "1px solid",
      borderColor: isHovered ? PRIMARY[300] : BORDER.default,
      backdropFilter: "blur(4px)",
      transition: "all 0.3s ease-out",
      transform: isHovered ? "translateY(-4px)" : "none",
      boxShadow: isHovered ? SHADOWS.cardHover : "none",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    } as SxProps<Theme>),

  hoverOverlay: (isHovered: boolean) =>
    ({
      position: "absolute",
      inset: 0,
      opacity: isHovered ? 1 : 0,
      background: GRADIENTS.cardHover,
      transition: "opacity 0.3s",
      pointerEvents: "none",
    } as SxProps<Theme>),

  content: {
    position: "relative",
    p: 3,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  } as SxProps<Theme>,

  header: {
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    mb: 2,
  } as SxProps<Theme>,

  avatarLink: {
    flexShrink: 0,
  } as SxProps<Theme>,

  avatarContainer: {
    borderRadius: 2,
    overflow: "hidden",
    transition: "all 0.3s",
  } as SxProps<Theme>,

  titleContainer: {
    flex: 1,
    minWidth: 0,
  } as SxProps<Theme>,

  repoLink: {
    display: "block",
    fontSize: "1.125rem",
    fontWeight: 600,
    color: TEXT.primary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textDecoration: "none",
    "&:hover": { color: PRIMARY.light },
    transition: "color 0.2s",
  } as SxProps<Theme>,

  ownerText: {
    color: TEXT.muted,
    fontWeight: 400,
  } as SxProps<Theme>,

  description: {
    mt: 0.5,
    fontSize: "0.875rem",
    color: TEXT.tertiary,
  } as SxProps<Theme>,

  starBadge: {
    display: "flex",
    alignItems: "center",
    gap: 0.75,
    px: 1.5,
    py: 0.75,
    borderRadius: 5,
    bgcolor: WARNING[100],
    color: WARNING.main,
    border: `1px solid ${WARNING[200]}`,
  } as SxProps<Theme>,

  starCount: {
    fontSize: "0.875rem",
    fontWeight: 600,
  } as SxProps<Theme>,

  languagesSection: {
    mb: 2,
    minHeight: 28,
  } as SxProps<Theme>,

  skeletonContainer: {
    display: "flex",
    gap: 0.75,
  } as SxProps<Theme>,

  skeletonBadge: {
    height: 24,
    width: 64,
    borderRadius: 5,
    bgcolor: SKELETON.background,
    animation: "pulse 2s infinite",
    "@keyframes pulse": {
      "0%, 100%": { opacity: 1 },
      "50%": { opacity: 0.5 },
    },
  } as SxProps<Theme>,

  singleLanguage: {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.75,
    px: 1.25,
    py: 0.25,
    fontSize: "0.75rem",
    borderRadius: 5,
    bgcolor: BACKGROUND.slate["800-100"],
    color: TEXT.tertiary,
    border: `1px solid ${BORDER.default}`,
  } as SxProps<Theme>,

  statsRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 2,
    fontSize: "0.875rem",
    color: TEXT.tertiary,
    mb: 2,
  } as SxProps<Theme>,

  statItem: {
    display: "flex",
    alignItems: "center",
    gap: 0.75,
  } as SxProps<Theme>,

  forksSection: {
    pt: 2,
    borderTop: `1px solid ${BORDER.default}`,
  } as SxProps<Theme>,

  topicsContainer: {
    mt: "auto",
    pt: 2,
    display: "flex",
    flexWrap: "wrap",
    gap: 0.75,
  } as SxProps<Theme>,

  topicBadge: {
    px: 1.25,
    py: 0.25,
    fontSize: "0.75rem",
    borderRadius: 5,
    bgcolor: PRIMARY[100],
    color: PRIMARY.light,
    border: `1px solid ${PRIMARY[200]}`,
    textDecoration: "none",
    transition: "background-color 0.2s",
    "&:hover": {
      bgcolor: PRIMARY[200],
    },
  } as SxProps<Theme>,

  moreTopics: {
    px: 1.25,
    py: 0.25,
    fontSize: "0.75rem",
    color: TEXT.muted,
  } as SxProps<Theme>,
};
