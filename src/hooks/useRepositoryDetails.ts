"use client";

import { useQuery } from "@tanstack/react-query";
import { githubApi } from "@/lib/api";

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
    staleTime: 30 * 60 * 1000, // cache for 30 minutes
    gcTime: 60 * 60 * 1000, // garbage collect after 1 hour
  });
};

const useRepositoryForks = ({
  owner,
  repo,
  enabled = true,
}: UseRepositoryForksOptions) => {
  return useQuery({
    queryKey: ["repository-forks", owner, repo],
    queryFn: () => githubApi.getRepositoryForks(owner, repo, 3),
    enabled: enabled && !!owner && !!repo,
    staleTime: 5 * 60 * 1000, // cache for 5 minutes
    gcTime: 10 * 60 * 1000, // garbage collect after 10 minutes
  });
};
export { useRepositoryForks, useRepositoryLanguages };
