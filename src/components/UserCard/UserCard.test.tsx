import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { UserCard } from "./UserCard";
import { mockUsers } from "@/test/mocks/handlers";

const theme = createTheme({ palette: { mode: "dark" } });

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("UserCard", () => {
  const mockUser = mockUsers[0];

  it("should render user login and avatar", () => {
    renderWithTheme(<UserCard user={mockUser} />);

    expect(screen.getByText(mockUser.login)).toBeInTheDocument();
    expect(
      screen.getByAltText(`${mockUser.login}'s avatar`)
    ).toBeInTheDocument();
  });

  it("should link to user profile in new tab", () => {
    renderWithTheme(<UserCard user={mockUser} />);

    const links = screen.getAllByRole("link");
    const profileLink = links.find(
      (link) => link.getAttribute("href") === mockUser.html_url
    );

    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute("target", "_blank");
  });

  it("should render user type badge", () => {
    renderWithTheme(<UserCard user={mockUser} />);
    expect(screen.getByText(mockUser.type)).toBeInTheDocument();
  });
});
