import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ErrorState } from "./ErrorState";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("ErrorState", () => {
  it("should render error message and title", () => {
    renderWithTheme(<ErrorState error="Something went wrong" />);

    expect(screen.getByText("Oops! Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("should render retry button and call onRetry when clicked", async () => {
    const user = userEvent.setup();
    const onRetry = jest.fn();
    renderWithTheme(<ErrorState error="Error" onRetry={onRetry} />);

    const button = screen.getByRole("button", { name: /Try Again/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it("should not render retry button when onRetry is not provided", () => {
    renderWithTheme(<ErrorState error="Error" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
