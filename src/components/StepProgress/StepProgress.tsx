import React, { FC, useContext } from "react";
import StepContext from "../../contexts/step";
import styled from "styled-components";

type StepProgressComponentProps = FC<{
  className?: string,
}>;

const CircleDimension = 65;
const StyledCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  background-image: linear-gradient(
    to bottom right,
    ${props => props.theme.colors.accent[1]},
    ${props => props.theme.colors.accent[4]}
  );
  border-radius: ${CircleDimension/2}px;
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
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.gray[0]};
    display: inline;
    float: none;
  }
`;

const LineConnector = styled.div`
  width: 100px;
  border-bottom: 2px solid black;
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
              "step-number",
              (page+1) === step.currentStep ? "active" : "",
              (page+1) > step.currentStep ? "disabled" : "",
            ].join(" ")}
          >
            <span>{page+1}</span>
          </StyledCircle>
          {id + 1 !== step.maxStep &&
            <LineConnector className="step-connector" />
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
  @media only screen and (max-width: 599px) {
    & div.step-number {
      height: ${CircleDimension/2}px;
      width: ${CircleDimension/2}px;
      & span {
        font-size: ${props => props.theme.fontSizes[0]};
      }
    }
    & div.step-connector {
      margin-top: ${CircleDimension/4}px;
      margin-left: ${CircleDimension-(CircleDimension*0.475)}px;
      margin-right: ${CircleDimension-(CircleDimension*0.98)}px;
    }
  }
  @media only screen and (min-width: 600px) {
    & div.step-number {
      height: ${CircleDimension/1.5}px;
      width: ${CircleDimension/1.5}px;
      & span {
        font-size: ${props => props.theme.fontSizes[1]};
      }
    }
    & div.step-connector {
      margin-top: ${CircleDimension/3}px;
      margin-left: ${CircleDimension-(CircleDimension*0.325)}px;
      margin-right: ${CircleDimension-(CircleDimension*0.98)}px;
    }
  }
  @media only screen and (min-width: 720px) {
    & div.step-number {
      height: ${CircleDimension}px;
      width: ${CircleDimension}px;
      & span {
        font-size: ${props => props.theme.fontSizes[3]};
      }
    }
    & div.step-connector {
      margin-top: ${CircleDimension/2}px;
      margin-left: ${CircleDimension*1.15}px;
      margin-right: ${CircleDimension/6}px;
    }
  }
`;
