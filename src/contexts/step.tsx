import React, { FC, Dispatch, createContext, useReducer } from "react";
import stepReducer, { StateType } from "../reducers/step";

type StepComponentProps = FC<{
  state?: StateType,
}>;

type DispatchType = {
  step: StateType,
  dispatch: Dispatch<any>,
};

const initialState = {
  currentStep: 0,
  maxStep: 3
};

const StepContext = createContext<DispatchType>({
  step: initialState,
  dispatch: () => null,
});

export const StepProvider: StepComponentProps = ({
  children,
  state = initialState,
}) => {
  const [step, dispatch] = useReducer(
    stepReducer,
    state
  );
  return (
    <StepContext.Provider value={{step, dispatch}}>
      {children}
    </StepContext.Provider>
  );
};

export default StepContext;
