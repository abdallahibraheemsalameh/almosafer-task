"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { GitHubRepository } from "@/types";
import {
  useRepositoryLanguages,
  useRepositoryForks,
} from "@/hooks/useRepositoryDetails";
import { LanguageBadgeList } from "@/components/LanguageBadgeList";
import { ForkAvatars } from "@/components/ForkAvatars";
import { truncateString, formatNumber, formatDate } from "@/utils";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  INTERSECTION_ROOT_MARGIN,
  MAX_TOPICS_DISPLAY,
  MAX_LANGUAGES_DISPLAY,
} from "@/lib/constants";
import { PRIMARY, BORDER } from "@/styles/colors";
import { styles } from "./RepositoryCard.styles";

interface RepositoryCardProps {
  repository: GitHubRepository;
}

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const [owner, repo] = repository.full_name.split("/");

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: INTERSECTION_ROOT_MARGIN,
  });

  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (inView && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  const { data: languages, isLoading: languagesLoading } =
    useRepositoryLanguages({
      owner,
      repo,
      enabled: hasBeenVisible,
    });

  const { data: forks, isLoading: forksLoading } = useRepositoryForks({
    owner,
    repo,
    enabled: hasBeenVisible && repository.forks_count > 0,
  });

  return (
    <Box
      component="article"
      ref={ref}
      data-testid="repository-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={styles.card(isHovered)}
    >
      <Box sx={styles.hoverOverlay(isHovered)} />

      <Box sx={styles.content}>
        <Box sx={styles.header}>
          <Box
            component="a"
            href={repository.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.avatarLink}
          >
            <Box sx={styles.avatarContainer}>
              <Image
                src={repository.owner.avatar_url}
                alt={`${repository.owner.login}'s avatar`}
                width={40}
                height={40}
                style={{
                  borderRadius: 8,
                  border: isHovered
                    ? `2px solid ${PRIMARY[300]}`
                    : `2px solid ${BORDER.solid}`,
                }}
              />
            </Box>
          </Box>

          <Box sx={styles.titleContainer}>
            <Box
              component="a"
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.repoLink}
            >
              <Typography component="span" sx={styles.ownerText}>
                {owner}/
              </Typography>
              {repo}
            </Box>
            {repository.description && (
              <Typography sx={styles.description}>
                {truncateString(repository.description)}
              </Typography>
            )}
          </Box>

          <Box sx={styles.starBadge}>
            <StarIcon sx={{ fontSize: 16 }} />
            <Typography sx={styles.starCount}>
              {formatNumber(repository.stargazers_count)}
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.languagesSection}>
          {!hasBeenVisible || languagesLoading ? (
            <Box sx={styles.skeletonContainer}>
              {[1, 2, 3].map((i) => (
                <Box key={i} sx={styles.skeletonBadge} />
              ))}
            </Box>
          ) : languages && Object.keys(languages).length > 0 ? (
            <LanguageBadgeList
              languages={languages}
              maxDisplay={MAX_LANGUAGES_DISPLAY}
            />
          ) : repository.language ? (
            <Box component="span" sx={styles.singleLanguage}>
              {repository.language}
            </Box>
          ) : null}
        </Box>

        <Box sx={styles.statsRow}>
          <Box sx={styles.statItem} title="Forks">
            <ForkRightIcon sx={{ fontSize: 16 }} />
            <span>{formatNumber(repository.forks_count)}</span>
          </Box>
          <Box sx={styles.statItem} title="Open Issues">
            <ErrorOutlineIcon sx={{ fontSize: 16 }} />
            <span>{formatNumber(repository.open_issues_count)}</span>
          </Box>
          {repository.license && (
            <Box sx={styles.statItem} title="License">
              <VerifiedUserIcon sx={{ fontSize: 16 }} />
              <span>
                {repository.license.spdx_id || repository.license.key}
              </span>
            </Box>
          )}
          <Box sx={styles.statItem} title="Last updated">
            <AccessTimeIcon sx={{ fontSize: 16 }} />
            <span>Updated {formatDate(repository.updated_at)}</span>
          </Box>
        </Box>

        {repository.forks_count > 0 && (
          <Box sx={styles.forksSection}>
            <ForkAvatars
              forks={forks || []}
              isLoading={!hasBeenVisible || forksLoading}
            />
          </Box>
        )}

        {repository.topics && repository.topics.length > 0 && (
          <Box sx={styles.topicsContainer}>
            {repository.topics.slice(0, MAX_TOPICS_DISPLAY).map((topic) => (
              <Box
                component="a"
                key={topic}
                href={`https://github.com/topics/${topic}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.topicBadge}
              >
                {topic}
              </Box>
            ))}
            {repository.topics.length > MAX_TOPICS_DISPLAY && (
              <Typography component="span" sx={styles.moreTopics}>
                +{repository.topics.length - MAX_TOPICS_DISPLAY} more
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const MemoizedRepositoryCard = memo(RepositoryCard);
export { MemoizedRepositoryCard as RepositoryCard };
export default MemoizedRepositoryCard;
