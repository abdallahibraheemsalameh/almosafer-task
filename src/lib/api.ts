import {
  UserSearchResponse,
  RepositorySearchResponse,
  RepositoryLanguages,
  GitHubFork,
  GitHubApiError,
  SearchType,
} from "@/types";
import { GITHUB_API_BASE_URL, ITEMS_PER_PAGE } from "./constants";

class GitHubApiService {
  private baseUrl = GITHUB_API_BASE_URL;

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }

  private async fetchWithErrorHandling<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      const errorData: GitHubApiError = await response.json().catch(() => ({
        message: `HTTP error! status: ${response.status}`,
      }));

      // handle rate limiting
      if (response.status === 403) {
        const rateLimitRemaining = response.headers.get(
          "X-RateLimit-Remaining"
        );
        const rateLimitReset = response.headers.get("X-RateLimit-Reset");

        if (rateLimitRemaining === "0" && rateLimitReset) {
          const resetDate = new Date(parseInt(rateLimitReset) * 1000);
          throw new Error(
            `Rate limit exceeded. Please try again after ${resetDate.toLocaleTimeString()}`
          );
        }

        // abuse detection
        if (
          errorData.message?.includes("abuse") ||
          errorData.message?.includes("secondary rate limit")
        ) {
          throw new Error(
            "Too many requests. Please wait a moment and try again."
          );
        }
      }

      throw new Error(
        errorData.message || "An error occurred while fetching data"
      );
    }

    return response.json();
  }

  async searchUsers(
    query: string,
    page: number = 1
  ): Promise<UserSearchResponse> {
    if (!query.trim()) {
      return { total_count: 0, incomplete_results: false, items: [] };
    }

    const encodedQuery = encodeURIComponent(query.trim());
    const url = `${this.baseUrl}/search/users?q=${encodedQuery}&per_page=${ITEMS_PER_PAGE}&page=${page}`;

    return this.fetchWithErrorHandling<UserSearchResponse>(url);
  }

  async searchRepositories(
    query: string,
    page: number = 1
  ): Promise<RepositorySearchResponse> {
    if (!query.trim()) {
      return { total_count: 0, incomplete_results: false, items: [] };
    }

    const encodedQuery = encodeURIComponent(query.trim());
    const url = `${this.baseUrl}/search/repositories?q=${encodedQuery}&per_page=${ITEMS_PER_PAGE}&page=${page}`;

    return this.fetchWithErrorHandling<RepositorySearchResponse>(url);
  }

  async getRepositoryLanguages(
    owner: string,
    repo: string
  ): Promise<RepositoryLanguages> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/languages`;
    return this.fetchWithErrorHandling<RepositoryLanguages>(url);
  }

  async getRepositoryForks(
    owner: string,
    repo: string,
    perPage: number = 3
  ): Promise<GitHubFork[]> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/forks?sort=newest&per_page=${perPage}`;
    return this.fetchWithErrorHandling<GitHubFork[]>(url);
  }
}

// export a singleton instance
export const githubApi = new GitHubApiService();

// export search function for React Query
const searchGitHub = async (
  query: string,
  searchType: SearchType,
  page: number
): Promise<UserSearchResponse | RepositorySearchResponse> => {
  if (searchType === "users") {
    return githubApi.searchUsers(query, page);
  }
  return githubApi.searchRepositories(query, page);
};
export { searchGitHub };
