import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";
import themes from "../../theme";
import { ThemeProvider } from 'styled-components';

test("renders bright header", () => {
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Header />
    </ThemeProvider>
  );
  const headerText = getByText("Monty Hall");
  expect(headerText).toBeInTheDocument();
  expect(headerText).toHaveStyle("color: #141414");
  const toggleButton = getByText("⚙");
  expect(toggleButton).toBeInTheDocument();
  expect(toggleButton).toHaveStyle("color: #262626");
});

test("renders dark header", () => {
  const { getByText } = render(
    <ThemeProvider theme={themes["dark"]}>
      <Header />
    </ThemeProvider>
  );
  const headerText = getByText("Monty Hall");
  expect(headerText).toBeInTheDocument();
  expect(headerText).toHaveStyle("color: #f1f1f1");
  const toggleButton = getByText("⚙");
  expect(toggleButton).toBeInTheDocument();
  expect(toggleButton).toHaveStyle("color: #f1f1f1");
});
