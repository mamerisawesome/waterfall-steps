import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./Title";
import themes from "../../theme";
import { ThemeProvider } from 'styled-components';

test("renders title h1", () => {
  const titleProps = {
    children: "title",
  };
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Title.H1 {...titleProps} />
    </ThemeProvider>
  );
  const titleComponent = getByText(titleProps.children);
  expect(titleComponent).toBeInTheDocument();
  expect(titleComponent.nodeName.toLowerCase()).toBe("h1");
});

test("renders title h2", () => {
  const titleProps = {
    children: "title",
  };
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Title.H2 {...titleProps} />
    </ThemeProvider>
  );
  const titleComponent = getByText(titleProps.children);
  expect(titleComponent).toBeInTheDocument();
  expect(titleComponent.nodeName.toLowerCase()).toBe("h2");
});

test("renders title h3", () => {
  const titleProps = {
    children: "title",
  };
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Title.H3 {...titleProps} />
    </ThemeProvider>
  );
  const titleComponent = getByText(titleProps.children);
  expect(titleComponent).toBeInTheDocument();
  expect(titleComponent.nodeName.toLowerCase()).toBe("h3");
});

test("renders title h4", () => {
  const titleProps = {
    children: "title",
  };
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Title.H4 {...titleProps} />
    </ThemeProvider>
  );
  const titleComponent = getByText(titleProps.children);
  expect(titleComponent).toBeInTheDocument();
  expect(titleComponent.nodeName.toLowerCase()).toBe("h4");
});

test("renders title h5", () => {
  const titleProps = {
    children: "title",
  };
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Title.H5 {...titleProps} />
    </ThemeProvider>
  );
  const titleComponent = getByText(titleProps.children);
  expect(titleComponent).toBeInTheDocument();
  expect(titleComponent.nodeName.toLowerCase()).toBe("h5");
});

test("renders title h6", () => {
  const titleProps = {
    children: "title",
  };
  const { getByText } = render(
    <ThemeProvider theme={themes["bright"]}>
      <Title.H6 {...titleProps} />
    </ThemeProvider>
  );
  const titleComponent = getByText(titleProps.children);
  expect(titleComponent).toBeInTheDocument();
  expect(titleComponent.nodeName.toLowerCase()).toBe("h6");
});
