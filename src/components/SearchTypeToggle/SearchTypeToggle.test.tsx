import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SearchTypeToggle } from "./SearchTypeToggle";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("SearchTypeToggle", () => {
  it("should render both toggle options", () => {
    renderWithTheme(
      <SearchTypeToggle value="repositories" onChange={jest.fn()} />
    );

    expect(screen.getByTestId("toggle-repositories")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-users")).toBeInTheDocument();
  });

  it("should highlight selected option", () => {
    renderWithTheme(
      <SearchTypeToggle value="repositories" onChange={jest.fn()} />
    );

    expect(screen.getByTestId("toggle-repositories")).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(screen.getByTestId("toggle-users")).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });

  it("should call onChange when option is clicked", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    renderWithTheme(<SearchTypeToggle value="users" onChange={onChange} />);

    await user.click(screen.getByTestId("toggle-repositories"));

    expect(onChange).toHaveBeenCalledWith("repositories");
  });

  it("should be disabled when disabled prop is true", () => {
    renderWithTheme(
      <SearchTypeToggle value="repositories" onChange={jest.fn()} disabled />
    );

    expect(screen.getByTestId("toggle-repositories")).toBeDisabled();
    expect(screen.getByTestId("toggle-users")).toBeDisabled();
  });
});
