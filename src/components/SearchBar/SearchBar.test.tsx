import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SearchBar } from "./SearchBar";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("SearchBar", () => {
  it("should display value and placeholder", () => {
    renderWithTheme(
      <SearchBar
        value="test query"
        onChange={jest.fn()}
        placeholder="Search..."
      />
    );

    expect(screen.getByTestId("search-input")).toHaveValue("test query");
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should call onChange when typing", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    renderWithTheme(<SearchBar value="" onChange={onChange} />);

    await user.type(screen.getByTestId("search-input"), "r");

    expect(onChange).toHaveBeenCalledWith("r");
  });

  it("should show and handle clear button", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    renderWithTheme(<SearchBar value="test" onChange={onChange} />);

    expect(screen.getByTestId("clear-search")).toBeInTheDocument();
    await user.click(screen.getByTestId("clear-search"));

    expect(onChange).toHaveBeenCalledWith("");
  });

  it("should show loading spinner when isLoading is true", () => {
    const { container } = renderWithTheme(
      <SearchBar value="test" onChange={jest.fn()} isLoading={true} />
    );

    expect(
      container.querySelector(".MuiCircularProgress-root")
    ).toBeInTheDocument();
  });
});
