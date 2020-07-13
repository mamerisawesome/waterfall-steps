import React, {
  FC,
  ChangeEvent,
  useContext,
  useState,
  useEffect,
} from "react";
import StepContext from "../../contexts/step";
import styled from "styled-components";
import { Input, Button } from "../../components/htmlAtoms";

type Page1Props = (
  FC<{ className?: string }>
  | void
);

const Page1Component: Page1Props = ({ className }) => {
  const { step, dispatch } = useContext(StepContext);
  const [parts, setParts] = useState<string>("");

  useEffect(() => {
    if (step.parts) {
      setParts(step.parts ? step.parts.toString() : "");
    }
    if (step.currentStep === step.maxStep) {
      setParts("");
    }
  }, [step]);

  if (step.currentStep !== 1) {
    return null;
  }

  return (
    <div className={className}>
      <Input.Number
        label="Number of parts"
        value={parts}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setParts(e.target.value);
        }}
      />
      <Button.Warning onClick={() => {dispatch({type: "previous"})}}>
        Previous
      </Button.Warning>
      <Button.Primary disabled={!parts || parts === "0"} onClick={() => {
        dispatch({ type: "setPartsCount", parts: Number(parts) })
        dispatch({ type: "next" });
      }}>
        Next
      </Button.Primary>
    </div>
  );
};

export const Page1 = styled(Page1Component)``;
