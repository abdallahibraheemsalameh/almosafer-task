import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LanguageBadgeList } from "./LanguageBadgeList";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("LanguageBadgeList", () => {
  const mockLanguages = {
    TypeScript: 50000,
    JavaScript: 30000,
    CSS: 10000,
    HTML: 5000,
    Python: 3000,
    Shell: 2000,
  };

  it("should render languages up to maxDisplay and show +N more", () => {
    renderWithTheme(
      <LanguageBadgeList languages={mockLanguages} maxDisplay={3} />
    );

    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("+3 more")).toBeInTheDocument();
  });

  it("should sort languages by bytes descending", () => {
    const { container } = renderWithTheme(
      <LanguageBadgeList languages={mockLanguages} maxDisplay={3} />
    );

    const badges = container.querySelectorAll('[class*="MuiBox"]');
    expect(badges[0]).toHaveTextContent("TypeScript");
  });

  it("should return null for empty languages", () => {
    const { container } = renderWithTheme(<LanguageBadgeList languages={{}} />);
    expect(container.firstChild).toBeNull();
  });
});
