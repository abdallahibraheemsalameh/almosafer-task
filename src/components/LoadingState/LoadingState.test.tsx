import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LoadingState } from "./LoadingState";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("LoadingState", () => {
  it("should render loading skeletons", () => {
    const { container } = renderWithTheme(<LoadingState />);

    expect(screen.getByTestId("loading-state")).toBeInTheDocument();
    expect(
      container.querySelectorAll(".MuiSkeleton-root").length
    ).toBeGreaterThan(0);
  });

  it("should render specified number of skeleton cards", () => {
    const { container } = renderWithTheme(<LoadingState count={3} />);

    expect(
      container.querySelectorAll(".MuiSkeleton-root").length
    ).toBeGreaterThan(0);
  });
});
