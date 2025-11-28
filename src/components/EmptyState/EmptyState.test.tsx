import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { EmptyState } from "./EmptyState";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("EmptyState", () => {
  it("should render initial state message for repositories", () => {
    renderWithTheme(<EmptyState searchType="repositories" />);

    expect(screen.getByText(/Search GitHub repositories/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Enter a search query to find public repositories/i)
    ).toBeInTheDocument();
  });

  it("should render initial state message for users", () => {
    renderWithTheme(<EmptyState searchType="users" />);

    expect(screen.getByText(/Search GitHub users/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Enter a search query to find GitHub users/i)
    ).toBeInTheDocument();
  });

  it("should render no results message with suggestions when query exists", () => {
    renderWithTheme(
      <EmptyState searchType="repositories" query="nonexistent" />
    );

    expect(screen.getByText(/No results found/i)).toBeInTheDocument();
    expect(screen.getByText(/"nonexistent"/)).toBeInTheDocument();
    expect(screen.getByText(/Check your spelling/i)).toBeInTheDocument();
  });
});
