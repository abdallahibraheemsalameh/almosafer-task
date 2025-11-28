"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { GitHubUser } from "@/types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import { styles } from "./UserCard.styles";

interface UserCardProps {
  user: GitHubUser;
}

const UserCard = ({ user }: UserCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      component="article"
      data-testid="user-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={styles.card(isHovered)}
    >
      <Box sx={styles.hoverOverlay(isHovered)} />

      <Box sx={styles.content}>
        <Box
          component="a"
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          sx={styles.avatarLink}
        >
          <Box sx={styles.avatarContainer(isHovered)}>
            <Image
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              fill
              style={{ objectFit: "cover" }}
              sizes="64px"
            />
          </Box>
          <Box sx={styles.onlineIndicator(isHovered)} />
        </Box>

        <Box sx={styles.userInfo}>
          <Box
            component="a"
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.usernameLink}
          >
            {user.login}
          </Box>
          <Box component="span" sx={styles.typeBadge}>
            {user.type === "Organization" ? (
              <BusinessIcon sx={{ fontSize: 12 }} />
            ) : (
              <PersonIcon sx={{ fontSize: 12 }} />
            )}
            {user.type}
          </Box>
        </Box>

        <Button
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          size="small"
          endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
          sx={styles.viewProfileButton}
        >
          <Box component="span" sx={styles.buttonText}>
            View Profile
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

const MemoizedUserCard = memo(UserCard);
export { MemoizedUserCard as UserCard };
export default MemoizedUserCard;

