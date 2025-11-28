"use client";

import { useQuery } from "@tanstack/react-query";
import { githubApi } from "@/lib/api";
import {
  LANGUAGES_STALE_TIME,
  LANGUAGES_GC_TIME,
  DEFAULT_STALE_TIME,
  DEFAULT_GC_TIME,
  FORKS_TO_DISPLAY,
} from "@/lib/constants";

interface UseRepositoryLanguagesOptions {
  owner: string;
  repo: string;
  enabled?: boolean;
}
interface UseRepositoryForksOptions {
  owner: string;
  repo: string;
  enabled?: boolean;
}

const useRepositoryLanguages = ({
  owner,
  repo,
  enabled = true,
}: UseRepositoryLanguagesOptions) => {
  return useQuery({
    queryKey: ["repository-languages", owner, repo],
    queryFn: () => githubApi.getRepositoryLanguages(owner, repo),
    enabled: enabled && !!owner && !!repo,
    staleTime: LANGUAGES_STALE_TIME,
    gcTime: LANGUAGES_GC_TIME,
  });
};

const useRepositoryForks = ({
  owner,
  repo,
  enabled = true,
}: UseRepositoryForksOptions) => {
  return useQuery({
    queryKey: ["repository-forks", owner, repo],
    queryFn: () => githubApi.getRepositoryForks(owner, repo, FORKS_TO_DISPLAY),
    enabled: enabled && !!owner && !!repo,
    staleTime: DEFAULT_STALE_TIME,
    gcTime: DEFAULT_GC_TIME,
  });
};
export { useRepositoryForks, useRepositoryLanguages };
