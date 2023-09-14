import { render, screen, fireEvent } from "@testing-library/react";
import Income from "../Incomes";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const addIncome = (tasks) => {
  const inputElement = screen.getByPlaceholderText(
    /Enter the source of income/i
  );
  const buttonElement = screen.getByRole("button", {
    name: /Add Income/i,
  });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

/**
 * Test scenarios for adding a new income on the income list when an user adds a new entry using the "Add Income" button
 */

describe("Add income and display in list", () => {
  test("should render a newly added income on the Income list", async () => {
    render(
      <Provider store={store}>
        <Income />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      /Enter the source of income/i
    );
    const buttonElement = await screen.findByRole("button", {
      name: /Add Income/i,
    });
    fireEvent.change(inputElement, { target: { value: "Freelance" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Freelance/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should append multiple new income entries on the existing Income list", async () => {
    render(
      <Provider store={store}>
        <Income />
      </Provider>
    );
    const initialDivElements = screen.getAllByTestId("income-source");
    addIncome(["Fulltime job", "Freelancing", "Tenant's rent"]);
    const divElements = screen.getAllByTestId("income-source");
    expect(divElements.length).toBe(initialDivElements.length + 3);
  });

  test("should have empty input after a new income entry is made", async () => {
    render(
      <Provider store={store}>
        <Income />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      /Enter the source of income/i
    );
    const buttonElement = await screen.findByRole("button", {
      name: /Add Income/i,
    });
    fireEvent.change(inputElement, { target: { value: "Freelance" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
