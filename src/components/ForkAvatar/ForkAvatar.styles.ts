import type { SxProps, Theme } from "@mui/material/styles";
import { BACKGROUND, SHADOWS } from "@/styles/colors";

export const styles = {
  avatarLink: (index: number, isHovered: boolean) =>
    ({
      position: "relative",
      ml: index === 0 ? 0 : -1,
      zIndex: isHovered ? 10 : 1,
      transform: isHovered ? "scale(1.1)" : "scale(1)",
      transition: "transform 0.2s, z-index 0s",
    } as SxProps<Theme>),
};

export const getAvatarStyle = (isHovered: boolean): React.CSSProperties => ({
  borderRadius: "50%",
  border: `2px solid ${BACKGROUND.dark}`,
  boxShadow: isHovered ? SHADOWS.glow : "none",
  transition: "box-shadow 0.2s",
});

