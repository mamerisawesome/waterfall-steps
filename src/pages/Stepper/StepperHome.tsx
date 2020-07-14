import React, { FC, useContext } from "react";
import StepContext from "../../contexts/step";
import styled from "styled-components";
import { Button } from "../../components/htmlAtoms";

type Page0Props = (
  FC<{ className?: string }>
  | void
);

const Page0Component: Page0Props = ({ className }) => {
  const { step, dispatch } = useContext(StepContext);

  if (step.currentStep !== 0) {
    return null;
  }

  return (
    <div className={className}>
      <Button.Primary onClick={() => {dispatch({type: "next"})}}>
        New Request
      </Button.Primary>
    </div>
  );
};

export const Page0 = styled(Page0Component)`
  & button {
    width: 200px;
    height: 100px;
    font-size: 25px;
    background-color: ${props => props.theme.colors.accent[4]};
      color: ${props => props.theme.colors.gray[0]};
      &:hover {
        background-color: ${props => props.theme.colors.accent[5]};
      }
      &:active {
        background-color: ${props => props.theme.colors.accent[3]};
      }
  }
`;
