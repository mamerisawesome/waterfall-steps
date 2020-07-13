import React, { FC, useContext } from "react";
import StepContext from "../../contexts/step";
import styled from "styled-components";

type StepProgressComponentProps = FC<{
  className?: string,
}>;

const CircleDimension = 65;
const StyledCircle = styled.div`
  position: relative;
  float: left;
  background-image: linear-gradient(
    to bottom right,
    ${props => props.theme.colors.accent[1]},
    ${props => props.theme.colors.accent[4]}
  );
  border-radius: ${CircleDimension/2}px;
  height: ${CircleDimension}px;
  width: ${CircleDimension}px;
  margin: 0;
  &.active {
    background-image: linear-gradient(
      to bottom right,
      ${props => props.theme.colors.accent[1]},
      ${props => props.theme.colors.accent[2]}
    );
    box-shadow: ${props => props.theme.shadows[3]};
    & span {
      color: ${props => props.theme.colors.gray[5]};
    }
  }
  &.disabled {
    background-image: linear-gradient(
      to bottom right,
      ${props => props.theme.colors.gray[1]},
      ${props => props.theme.colors.gray[2]}
    );
    & span {
      color: ${props => props.theme.colors.gray[5]};
    }
  }
  & span {
    position: relative;
    font-size: ${props => props.theme.fontSizes[3]};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.gray[0]};
    top: ${CircleDimension/3.75}px;
    left: ${CircleDimension/2.75}px;
    display: inline;
    float: none;
  }
`;

const LineConnector = styled.div`
  width: 100px;
  border-bottom: 1px solid black;
  margin-top: ${CircleDimension/2}px;
  margin-left: ${CircleDimension*1.15}px;
  margin-right: ${CircleDimension/6}px;
`;

const StepProgressComponent: (StepProgressComponentProps|null) = ({
  className,
}) => {
  const { step } = useContext(StepContext);

  if (step.currentStep === 0) {
    return (<></>);
  }

  return (
    <div className={className}>
      {Array.from(Array(step.maxStep).keys()).map((page, id) => (
        <div key={id}>
          <StyledCircle
            className={[
              (page+1) === step.currentStep ? "active" : "",
              (page+1) > step.currentStep ? "disabled" : "",
            ].join(" ")}
          >
            <span>{page+1}</span>
          </StyledCircle>
          {id + 1 !== step.maxStep &&
            <LineConnector />
          }
        </div>
      ))}
    </div>
  );
};

export const StepProgress = styled(StepProgressComponent)`
  position: relative;
  display: flex;
  margin-bottom: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
