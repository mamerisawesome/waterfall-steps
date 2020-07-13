import React from "react";
import { StepProgress } from "../../components/StepProgress";
import { Page0 } from "./StepperHome";
import { Page1 } from "./StepperPage1";
import { Page2 } from "./StepperPage2";
import { Page3 } from "./StepperPage3";

export const Stepper = () => {
  return (
    <>
      <StepProgress />
      <Page0 />
      <Page1 />
      <Page2 />
      <Page3 />
    </>
  );
};
