export type StateType = {
  currentStep: number,
  parts?: number,
  maxStep?: number,
};

export type ActionType =
  | { type: "next"; }
  | { type: "previous"; }
  | { type: "reset"; }
  | { type: "setPartsCount"; parts: number; };

export default (
  state: StateType,
  action: ActionType
): StateType => {
  const { currentStep, maxStep } = state;
  switch(action.type) {
    case "next":
      if (maxStep && currentStep >= maxStep) {
        return state;
      }
      return {
        ...state,
        currentStep: currentStep + 1,
      };
    case "previous":
      if (currentStep === 0) {
        return state;
      }
      return {
        ...state,
        currentStep: currentStep - 1,
      };
    case "reset":
      return {
        currentStep: 0,
        maxStep,
      };
    case "setPartsCount":
      const { parts } = action;
      return {
        currentStep,
        maxStep,
        parts,
      };
    default:
      return state;
  }
};
