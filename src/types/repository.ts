import type { GitHubUser } from "./user";

interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  topics: string[];
  owner: GitHubUser;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  default_branch: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
  } | null;
}

interface RepositorySearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubRepository[];
}

interface RepositoryLanguages {
  [language: string]: number;
}

interface GitHubFork {
  id: number;
  owner: GitHubUser;
  html_url: string;
  created_at: string;
}

interface RepositoryWithDetails extends GitHubRepository {
  languages?: RepositoryLanguages;
  recentForks?: GitHubFork[];
}

export type {
  GitHubRepository,
  RepositorySearchResponse,
  RepositoryLanguages,
  GitHubFork,
  RepositoryWithDetails,
};
