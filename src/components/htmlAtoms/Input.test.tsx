import React, { ChangeEvent } from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Input } from "./Input";
import themes from "../../theme";
import { ThemeProvider } from 'styled-components';

test("renders input type text", () => {
  const inputProps = {
    label: "label",
    placeholder: "placeholder",
    value: "input",
  };

  const { getByPlaceholderText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Input.Text {...inputProps}/>
    </ThemeProvider>
  );

  const inputComponent = getByPlaceholderText(inputProps.placeholder);
  expect(inputComponent).toBeInTheDocument();
});

test("renders input type number", () => {
  const inputProps = {
    label: "label",
    placeholder: "placeholder",
    value: "input",
  };

  const { getByPlaceholderText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Input.Number {...inputProps}/>
    </ThemeProvider>
  );

  const inputComponent = getByPlaceholderText(inputProps.placeholder);
  expect(inputComponent).toBeInTheDocument();
});

test("renders focused input", () => {
  const inputProps = {
    label: "label",
    placeholder: "placeholder",
    value: "input",
  };

  const { container, getByPlaceholderText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Input.Text {...inputProps}/>
    </ThemeProvider>
  );

  const inputComponent = getByPlaceholderText(inputProps.placeholder);
  act(() => inputComponent.focus());
  expect(inputComponent).toHaveFocus();
});

test("executes input value change", () => {
  const inputProps = {
    placeholder: "placeholder",
  };

  const { getByPlaceholderText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Input.Text {...inputProps}/>
    </ThemeProvider>
  );

  const inputComponent = getByPlaceholderText(inputProps.placeholder);
  fireEvent.change(inputComponent, { target: { value: "test" } })
  expect(inputComponent.value).toBe("test");
});

test("renders input success on inputRule", () => {
  const inputProps = {
    placeholder: "placeholder",
    inputRule: (e: ChangeEvent<HTMLInputElement>) => e.target.value === "valid"
  };

  const { getByPlaceholderText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Input.Text {...inputProps}/>
    </ThemeProvider>
  );

  const inputComponent = getByPlaceholderText(inputProps.placeholder);
  fireEvent.change(inputComponent, { target: { value: "valid" } });
  expect(inputComponent.parentElement.classList.contains("error")).toBe(false);
});

test("renders input error on inputRule", () => {
  const inputProps = {
    placeholder: "placeholder",
    inputRule: (e: ChangeEvent<HTMLInputElement>) => e.target.value === "valid"
  };

  const { getByPlaceholderText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Input.Text {...inputProps}/>
    </ThemeProvider>
  );

  const inputComponent = getByPlaceholderText(inputProps.placeholder);
  fireEvent.change(inputComponent, { target: { value: "notvalid" } });
  expect(inputComponent.parentElement.classList.contains("error")).toBe(true);
});
