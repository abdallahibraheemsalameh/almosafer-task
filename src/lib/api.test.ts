import { githubApi, searchGitHub } from "./api";
import {
  createMockFetch,
  createMockFetchError,
  createMockFetchRateLimited,
  mockUserSearchResponse,
  mockRepositorySearchResponse,
} from "@/test/mocks/handlers";

describe("GitHubApiService", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("searchUsers", () => {
    it("should return empty results for empty query", async () => {
      const result = await githubApi.searchUsers("");
      expect(result).toEqual({
        total_count: 0,
        incomplete_results: false,
        items: [],
      });
    });

    it("should fetch users successfully", async () => {
      global.fetch = createMockFetch();
      const result = await githubApi.searchUsers("test");

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("/search/users?q=test"),
        expect.any(Object)
      );
      expect(result).toEqual(mockUserSearchResponse);
    });
  });

  describe("searchRepositories", () => {
    it("should fetch repositories successfully", async () => {
      global.fetch = createMockFetch();
      const result = await githubApi.searchRepositories("react");

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("/search/repositories?q=react"),
        expect.any(Object)
      );
      expect(result).toEqual(mockRepositorySearchResponse);
    });
  });

  describe("error handling", () => {
    it("should throw error for HTTP errors", async () => {
      global.fetch = createMockFetchError(404, "Not Found");
      await expect(githubApi.searchUsers("test")).rejects.toThrow("Not Found");
    });

    it("should handle rate limiting", async () => {
      global.fetch = createMockFetchRateLimited();
      await expect(githubApi.searchUsers("test")).rejects.toThrow(
        /Rate limit exceeded/
      );
    });
  });
});

describe("searchGitHub", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    global.fetch = createMockFetch();
  });

  it("should search users when searchType is users", async () => {
    const result = await searchGitHub("test", "users", 1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/search/users"),
      expect.any(Object)
    );
    expect(result).toEqual(mockUserSearchResponse);
  });

  it("should search repositories when searchType is repositories", async () => {
    const result = await searchGitHub("test", "repositories", 1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/search/repositories"),
      expect.any(Object)
    );
    expect(result).toEqual(mockRepositorySearchResponse);
  });
});
