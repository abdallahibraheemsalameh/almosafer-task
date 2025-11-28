import { render, screen, waitFor } from "@/test/utils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RepositoryCard } from "./RepositoryCard";
import { mockRepositories, createMockFetch } from "@/test/mocks/handlers";

jest.mock("react-intersection-observer", () => ({
  useInView: () => ({ ref: jest.fn(), inView: true }),
}));

const theme = createTheme({ palette: { mode: "dark" } });

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0, staleTime: 0 },
    },
  });

const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </QueryClientProvider>
  );
};

describe("RepositoryCard", () => {
  const mockRepo = mockRepositories[0];

  beforeEach(() => {
    jest.resetAllMocks();
    global.fetch = createMockFetch();
  });

  it("should render repository name and description", () => {
    renderWithProviders(<RepositoryCard repository={mockRepo} />);

    expect(screen.getByText("test-repo")).toBeInTheDocument();
    expect(screen.getByText(mockRepo.description!)).toBeInTheDocument();
  });

  it("should render stats (stars, forks, issues)", () => {
    renderWithProviders(<RepositoryCard repository={mockRepo} />);

    expect(screen.getByText("1.0K")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("should render license and topics", () => {
    renderWithProviders(<RepositoryCard repository={mockRepo} />);

    expect(screen.getByText("MIT")).toBeInTheDocument();
    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("typescript")).toBeInTheDocument();
  });

  it("should link to repository", () => {
    renderWithProviders(<RepositoryCard repository={mockRepo} />);

    const repoLink = screen.getByText("test-repo").closest("a");
    expect(repoLink).toHaveAttribute("href", mockRepo.html_url);
  });

  it("should fetch and display languages when visible", async () => {
    renderWithProviders(<RepositoryCard repository={mockRepo} />);

    await waitFor(
      () => {
        expect(screen.getByTestId("language-badges")).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
