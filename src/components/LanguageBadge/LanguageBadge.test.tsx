import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LanguageBadge } from "./LanguageBadge";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("LanguageBadge", () => {
  it("should render language name", () => {
    renderWithTheme(<LanguageBadge language="TypeScript" />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("should render percentage when provided", () => {
    renderWithTheme(<LanguageBadge language="TypeScript" percentage={45.5} />);
    expect(screen.getByText("46%")).toBeInTheDocument();
  });
});
