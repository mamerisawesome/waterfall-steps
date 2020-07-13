import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";
import themes from "../../theme";
import { ThemeProvider } from 'styled-components';

test("renders button primary", () => {
  const buttonProps = {
    children: "button",
  };

  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Button.Primary {...buttonProps}/>
    </ThemeProvider>
  );

  const buttonComponent = getByText(buttonProps.children);

  expect(buttonComponent).toBeInTheDocument();
  expect(buttonComponent).toHaveStyle("background-color: #5cdbd3");
});

test("renders button success", () => {
  const buttonProps = {
    children: "button",
  };

  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Button.Success {...buttonProps}/>
    </ThemeProvider>
  );

  const buttonComponent = getByText(buttonProps.children);

  expect(buttonComponent).toBeInTheDocument();
  expect(buttonComponent).toHaveStyle("background-color: #c7e6a1");
});

test("renders button warning", () => {
  const buttonProps = {
    children: "button",
  };

  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Button.Warning {...buttonProps}/>
    </ThemeProvider>
  );

  const buttonComponent = getByText(buttonProps.children);

  expect(buttonComponent).toBeInTheDocument();
  expect(buttonComponent).toHaveStyle("background-color: #fffca1");
});

test("renders button error", () => {
  const buttonProps = {
    children: "button",
  };

  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Button.Error {...buttonProps}/>
    </ThemeProvider>
  );

  const buttonComponent = getByText(buttonProps.children);

  expect(buttonComponent).toBeInTheDocument();
  expect(buttonComponent).toHaveStyle("background-color: #ff6e77");
});

test("renders button disabled", () => {
  const buttonProps = {
    children: "button",
    disabled: true,
  };

  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Button.Error {...buttonProps}/>
    </ThemeProvider>
  );

  const buttonComponent = getByText(buttonProps.children);

  expect(buttonComponent).toBeInTheDocument();
  expect(buttonComponent).toBeDisabled();
});

test("renders button disabled", () => {
  let isClickedFlag = false;
  const buttonProps = {
    children: "button",
    onClick: () => isClickedFlag = true,
  };

  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Button.Error {...buttonProps}/>
    </ThemeProvider>
  );

  const buttonComponent = getByText(buttonProps.children);
  buttonComponent.click();
  expect(isClickedFlag).toBe(true);
});
