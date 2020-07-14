import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders home button", () => {
  const { getByText } = render(<App />);
  const homeButton = getByText("New Request");
  expect(homeButton).toBeInTheDocument();
});

test("render header", () => {
  const { getByText } = render(<App />);
  const headerText = getByText("Waterfall Steps");
  expect(headerText).toBeInTheDocument();
  expect(headerText).toHaveStyle("color: #141414");
  const toggleThemeButton = getByText("⚙");
  expect(toggleThemeButton).toBeInTheDocument();
});

test("toggle header theme color", () => {
  const { getByText } = render(<App />);
  const headerText = getByText("Waterfall Steps");
  getByText("⚙").click();
  expect(headerText).toHaveStyle("color: #f1f1f1");
});

test("render footer", () => {
  const { getByText } = render(<App />);
  const footerText = getByText("© 2020");
  expect(footerText).toBeInTheDocument();
  expect(footerText).toHaveStyle("color: #141414");
});

test("toggle footer theme color", () => {
  const { getByText } = render(<App />);
  const footerText = getByText("© 2020");
  getByText("⚙").click();
  expect(footerText).toHaveStyle("color: #f1f1f1");
});
