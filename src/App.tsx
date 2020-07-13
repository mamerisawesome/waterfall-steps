import React, { useState } from 'react';
import {
  ThemeProvider,
  GlobalStyleComponent,
  createGlobalStyle,
} from 'styled-components';
import themes, { FontStack } from "./theme";
import { Layout } from "./components/Layout";
import { ThemeToggleProvider } from "./contexts/themeToggle";
import { StepProvider } from "./contexts/step";
import { Stepper } from "./pages/Stepper";

const GlobalStyle: GlobalStyleComponent<any, any> = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
    background-color: ${props => (
      props.theme.colors.gray[0]
    )};
  }
  body {
    margin: 0;
    padding: 0;
  }
  main {
    min-height: ${window.innerHeight-144}px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
  footer {
    clear: both;
    position: relative;
  }
  @media only screen and (max-width: 599px) {
    header {
      padding-left: 20px;
      padding-right: 20px;
    }
    footer {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  @media only screen and (min-width: 600px) {
    header {
      padding-left: 80px;
      padding-right: 80px;
    }
    footer {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
  @media only screen and (min-width: 768px) {
    header {
      padding-left: 200px;
      padding-right: 200px;
    }
    footer {
      padding-left: 200px;
      padding-right: 200px;
    }
  }
`;

const App = () => {
  const [theme, setTheme] = useState<string>("bright");
  return (
    <ThemeToggleProvider value={
      (): void => {
        theme === "bright"
          ? setTheme("dark")
          : setTheme("bright");
      }
    }>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <FontStack />
        <Layout>
          <StepProvider state={{currentStep: 0, maxStep: 3}}>
            <Stepper />
          </StepProvider>
        </Layout>
      </ThemeProvider>
    </ThemeToggleProvider>
  );
};

export default App;
