import type { SxProps, Theme } from "@mui/material/styles";
import {
  GRADIENTS,
  BORDER,
  PRIMARY,
  BACKGROUND,
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
    alignItems: "center",
    gap: 2.5,
    flex: 1,
  } as SxProps<Theme>,

  avatarLink: {
    position: "relative",
    flexShrink: 0,
  } as SxProps<Theme>,

  avatarContainer: (isHovered: boolean) =>
    ({
      position: "relative",
      width: 64,
      height: 64,
      borderRadius: "50%",
      overflow: "hidden",
      border: "2px solid",
      borderColor: isHovered ? PRIMARY[500] : BORDER.solid,
      transition: "all 0.3s",
    } as SxProps<Theme>),

  onlineIndicator: (isHovered: boolean) =>
    ({
      position: "absolute",
      bottom: -2,
      right: -2,
      width: 16,
      height: 16,
      bgcolor: PRIMARY.main,
      borderRadius: "50%",
      border: `2px solid ${BACKGROUND.dark}`,
      opacity: isHovered ? 1 : 0,
      transition: "opacity 0.3s",
    } as SxProps<Theme>),

  userInfo: {
    flex: 1,
    minWidth: 0,
  } as SxProps<Theme>,

  usernameLink: {
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

  typeBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.75,
    mt: 0.75,
    px: 1.25,
    py: 0.25,
    fontSize: "0.75rem",
    fontWeight: 500,
    borderRadius: 5,
    bgcolor: BACKGROUND.slate["800-100"],
    color: TEXT.tertiary,
    border: `1px solid ${BORDER.default}`,
  } as SxProps<Theme>,

  viewProfileButton: {
    color: TEXT.secondary,
    borderColor: BORDER.default,
    bgcolor: BACKGROUND.slate["800-80"],
    borderRadius: 3,
    px: 2,
    "&:hover": {
      bgcolor: PRIMARY[100],
      borderColor: PRIMARY[300],
      color: PRIMARY.light,
    },
  } as SxProps<Theme>,

  buttonText: {
    display: { xs: "none", sm: "inline" },
  } as SxProps<Theme>,
};
