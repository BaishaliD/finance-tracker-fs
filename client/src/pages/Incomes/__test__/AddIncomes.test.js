import { render, screen, fireEvent } from "@testing-library/react";
import AddIncomeForm from "../AddIncomeForm";

describe("Add Income", () => {
  describe("Source of income", () => {
    test("should render input element for source of income", async () => {
      render(
        <AddIncomeForm
          formData={{}}
          setFormData={jest.fn()}
          handleSubmit={jest.fn()}
        />
      );
      const inputElement = screen.getByPlaceholderText(
        /Enter the source of income/i
      );
      expect(inputElement).toBeInTheDocument();
    });

    test("should be able to type in input", async () => {
      render(
        <AddIncomeForm
          formData={{}}
          setFormData={jest.fn()}
          handleSubmit={jest.fn()}
        />
      );
      const inputElement = screen.getByPlaceholderText(
        /Enter the source of income/i
      );
      fireEvent.change(inputElement, { target: { value: "Freelance" } });
      expect(inputElement.value).toBe("Freelance");
    });
  });
});
