import { GitHubUser, GitHubRepository, GitHubFork } from "@/types";

// Mock user data
const mockUsers: GitHubUser[] = [
  {
    id: 1,
    login: "testuser1",
    avatar_url: "https://avatars.githubusercontent.com/u/1",
    html_url: "https://github.com/testuser1",
    type: "User",
    score: 100,
  },
  {
    id: 2,
    login: "testuser2",
    avatar_url: "https://avatars.githubusercontent.com/u/2",
    html_url: "https://github.com/testuser2",
    type: "Organization",
    score: 90,
  },
];

// Mock repository data
const mockRepositories: GitHubRepository[] = [
  {
    id: 1,
    name: "test-repo",
    full_name: "testuser1/test-repo",
    description: "A test repository for unit testing",
    html_url: "https://github.com/testuser1/test-repo",
    stargazers_count: 1000,
    watchers_count: 500,
    forks_count: 200,
    open_issues_count: 10,
    language: "TypeScript",
    topics: ["react", "typescript", "testing"],
    owner: mockUsers[0],
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    pushed_at: "2024-01-01T00:00:00Z",
    default_branch: "main",
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
    },
  },
  {
    id: 2,
    name: "another-repo",
    full_name: "testuser2/another-repo",
    description: "Another test repository",
    html_url: "https://github.com/testuser2/another-repo",
    stargazers_count: 500,
    watchers_count: 250,
    forks_count: 100,
    open_issues_count: 5,
    language: "JavaScript",
    topics: ["nodejs", "express"],
    owner: mockUsers[1],
    created_at: "2022-06-15T00:00:00Z",
    updated_at: "2024-02-01T00:00:00Z",
    pushed_at: "2024-02-01T00:00:00Z",
    default_branch: "main",
    license: null,
  },
];

// Mock forks data
const mockForks: GitHubFork[] = [
  {
    id: 101,
    owner: {
      id: 10,
      login: "forker1",
      avatar_url: "https://avatars.githubusercontent.com/u/10",
      html_url: "https://github.com/forker1",
      type: "User",
      score: 0,
    },
    html_url: "https://github.com/forker1/test-repo",
    created_at: "2024-01-15T00:00:00Z",
  },
  {
    id: 102,
    owner: {
      id: 11,
      login: "forker2",
      avatar_url: "https://avatars.githubusercontent.com/u/11",
      html_url: "https://github.com/forker2",
      type: "User",
      score: 0,
    },
    html_url: "https://github.com/forker2/test-repo",
    created_at: "2024-01-14T00:00:00Z",
  },
];

// Mock languages data
const mockLanguages: Record<string, number> = {
  TypeScript: 50000,
  JavaScript: 30000,
  CSS: 10000,
  HTML: 5000,
};

// Mock API responses
const mockUserSearchResponse = {
  total_count: 2,
  incomplete_results: false,
  items: mockUsers,
};

const mockRepositorySearchResponse = {
  total_count: 2,
  incomplete_results: false,
  items: mockRepositories,
};

export {
  mockUsers,
  mockRepositories,
  mockForks,
  mockLanguages,
  mockUserSearchResponse,
  mockRepositorySearchResponse,
};
// Mock fetch implementation
const createMockFetch = () => {
  return jest.fn().mockImplementation((url: string) => {
    if (url.includes("/search/users")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserSearchResponse),
        headers: new Headers(),
      });
    }
    if (url.includes("/search/repositories")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRepositorySearchResponse),
        headers: new Headers(),
      });
    }
    if (url.includes("/languages")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLanguages),
        headers: new Headers(),
      });
    }
    if (url.includes("/forks")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockForks),
        headers: new Headers(),
      });
    }
    return Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: "Not Found" }),
      headers: new Headers(),
    });
  });
};
export { createMockFetch };

// Mock error responses
const createMockFetchError = (status: number, message: string) => {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: false,
      status,
      json: () => Promise.resolve({ message }),
      headers: new Headers(),
    });
  });
};
export { createMockFetchError };
const createMockFetchRateLimited = () => {
  return jest.fn().mockImplementation(() => {
    const headers = new Headers();
    headers.set("X-RateLimit-Remaining", "0");
    headers.set(
      "X-RateLimit-Reset",
      String(Math.floor(Date.now() / 1000) + 3600)
    );
    return Promise.resolve({
      ok: false,
      status: 403,
      json: () => Promise.resolve({ message: "Rate limit exceeded" }),
      headers,
    });
  });
};
export { createMockFetchRateLimited };
