"use client";

import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import type { GitHubFork } from "@/types";
import { styles, getAvatarStyle } from "./ForkAvatar.styles";

interface ForkAvatarProps {
  fork: GitHubFork;
  index: number;
}

const ForkAvatar = ({ fork, index }: ForkAvatarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip title={fork.owner.login} arrow placement="top">
      <Box
        component="a"
        href={fork.html_url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={styles.avatarLink(index, isHovered)}
      >
        <Image
          src={fork.owner.avatar_url}
          alt={`${fork.owner.login}'s avatar`}
          width={28}
          height={28}
          style={getAvatarStyle(isHovered)}
        />
      </Box>
    </Tooltip>
  );
};

export { ForkAvatar };
