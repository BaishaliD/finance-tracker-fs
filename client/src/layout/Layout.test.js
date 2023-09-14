import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";

test("header should render text passed as heading prop", async () => {
  render(
    <Router>
      <Layout heading="My Header" />
    </Router>
  );
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
