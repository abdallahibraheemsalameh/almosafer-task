interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
  score: number;
}

interface UserSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}
export type { GitHubUser, UserSearchResponse };
