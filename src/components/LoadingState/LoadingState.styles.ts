import type { SxProps, Theme } from "@mui/material/styles";
import { BACKGROUND, BORDER, SKELETON } from "@/styles/colors";

export const styles = {
  card: {
    borderRadius: 4,
    bgcolor: BACKGROUND.slate["800-50"],
    border: `1px solid ${BORDER.default}`,
    p: 3,
  } as SxProps<Theme>,

  header: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 2,
  } as SxProps<Theme>,

  avatarSkeleton: {
    bgcolor: "grey.700",
  } as SxProps<Theme>,

  titleSkeleton: {
    bgcolor: "grey.700",
    mb: 1,
  } as SxProps<Theme>,

  descriptionSkeleton: {
    bgcolor: SKELETON.background,
  } as SxProps<Theme>,

  badgesContainer: {
    display: "flex",
    gap: 1,
    mb: 2,
  } as SxProps<Theme>,

  badgeSkeleton: {
    bgcolor: SKELETON.background,
    borderRadius: 5,
  } as SxProps<Theme>,

  statsContainer: {
    display: "flex",
    gap: 2,
  } as SxProps<Theme>,

  statSkeleton: {
    bgcolor: SKELETON.background,
  } as SxProps<Theme>,
};
