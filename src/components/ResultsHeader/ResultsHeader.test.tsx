import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ResultsHeader } from "./ResultsHeader";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("ResultsHeader", () => {
  it("should render total count for repositories", () => {
    renderWithTheme(
      <ResultsHeader totalCount={100} searchType="repositories" />
    );

    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText(/repositories/i)).toBeInTheDocument();
  });

  it("should render total count for users", () => {
    renderWithTheme(<ResultsHeader totalCount={50} searchType="users" />);

    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText(/users/i)).toBeInTheDocument();
  });

  it("should format large numbers with commas", () => {
    renderWithTheme(
      <ResultsHeader totalCount={1000000} searchType="repositories" />
    );

    expect(screen.getByText("1,000,000")).toBeInTheDocument();
  });
});
