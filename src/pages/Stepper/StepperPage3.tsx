import React, { FC, useContext } from "react";
import StepContext from "../../contexts/step";
import styled from "styled-components";
import { Title, Button } from "../../components/htmlAtoms";

type Page3Props = (
  FC<{ className?: string }>
  | void
);

const Page3Component: Page3Props = ({ className }) => {
  const { step, dispatch } = useContext(StepContext);

  if (step.currentStep !== 3) {
    return null;
  }

  return (
    <div className={className}>
      <Title.H1>Success!</Title.H1>
      <Button.Success onClick={() => {dispatch({type: "reset"})}}>
        Home
      </Button.Success>
    </div>
  );
};

export const Page3 = styled(Page3Component)``;
