import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LoadingMore } from "./LoadingMore";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("LoadingMore", () => {
  it("should render loading indicator with text", () => {
    const { container } = renderWithTheme(<LoadingMore />);

    expect(screen.getByTestId("loading-more")).toBeInTheDocument();
    expect(screen.getByText(/Loading more results/i)).toBeInTheDocument();
    expect(
      container.querySelector(".MuiCircularProgress-root")
    ).toBeInTheDocument();
  });
});
