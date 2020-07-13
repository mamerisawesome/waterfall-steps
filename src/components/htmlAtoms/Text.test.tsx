import React from "react";
import { render } from "@testing-library/react";
import { Text } from "./Text";
import themes from "../../theme";
import { ThemeProvider } from 'styled-components';

test("renders text span", () => {
  const textProps = {
    children: "text",
  };
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Text.Span {...textProps} />
    </ThemeProvider>
  );
  const textComponent = getByText(textProps.children);
  expect(textComponent).toBeInTheDocument();
  expect(textComponent.nodeName.toLowerCase()).toBe("span");
});

test("renders text paragraph", () => {
  const textProps = {
    children: "text",
  };
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Text.Paragraph {...textProps} />
    </ThemeProvider>
  );
  const textComponent = getByText(textProps.children);
  expect(textComponent).toBeInTheDocument();
  expect(textComponent.nodeName.toLowerCase()).toBe("p");
});
