import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { userEvent } from "@storybook/testing-library";

describe("input", () => {
  test("render without errors", () => {
    render(<Input />);

    expect(screen.getByLabelText("Default label")).toBeInTheDocument();
  });

  test("calss OnChange when change happens", () => {
    const mockedOnChange = jest.fn();
    render(<Input onChange={mockedOnChange} />);

    const input = screen.getByLabelText("Default label");
    const MOCK_INPUT_VALUE = "Test 123";
    userEvent.type(input, MOCK_INPUT_VALUE);

    expect(input).toHaveValue(MOCK_INPUT_VALUE);
    expect(mockedOnChange).toHaveBeenCalled();
  });

  test("calls label property when call property label", () => {
    const mockedLabel = jest.fn();
    render(<Input property={mockedLabel} />);

    const input = screen.getAllByLabelText("Default label");
    const MOCK_INPUT_TEXT = "test 123";
    userEvent.type(input, MOCK_INPUT_TEXT);

    expect(input).toHaveTextContent(MOCK_INPUT_TEXT);
    expect(mockedLabel).toHaveBeenCalled();
  });
});
