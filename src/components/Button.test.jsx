import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  test("renders without errors", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("calss onClick when clicked", () => {
    const mockedOnClick = jest.fn();
    render(<Button onClick={mockedOnClick} />);

    userEvent.click(screen.getByRole("button"));

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
