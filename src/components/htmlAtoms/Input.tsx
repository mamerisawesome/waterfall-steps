import React, { FC, useState } from "react";
import styled, { StyledComponent, css } from "styled-components";

type InputComponentProps = FC<any>;

const generateInputComponent = (
  inputType: string,
): StyledComponent<InputComponentProps, {}> => {
  const Component: InputComponentProps = ({
    label,
    className,
    onFocus = (): any => {},
    onBlur = (): any => {},
    onChange = (): any => {},
    inputRule = (): boolean => true,
    ...props
  }) => {
    const [isActive, setIsActive] = useState<Boolean>(false);
    const [isValid, setIsValid] = useState<Boolean>(true);

    return (
      <div
        className={[
          className,
          label ? "has-label" : "",
          isActive ? "active" : "",
          isValid ? "" : "error",
        ].join(" ")}
      >
        {label &&
          <span>{label}</span>
        }
        <input
          type={inputType}
          onFocus={(e): void => {
            setIsActive(true);
            onFocus(e);
          }}
          onBlur={(e): void => {
            setIsActive(false);
            onBlur(e);
          }}
          onChange={(e): void => {
            setIsValid(inputRule(e));
            onChange(e);
          }}
          {...props}
        />
      </div>
    )
  };
  return styled(Component)`
    position: relative;
    &.has-label {
      margin-top: 1.90rem;
    }
    margin-bottom: 0.5rem;
    ${props => css`
      &.active span {
        color: ${props.theme.colors.accent[4]};
      }
      &.error span {
        color: ${props.theme.buttons.error.bg};
      }
      & span {
        position: absolute;
        left: 0;
        top: -0.95rem;
        color: ${props.theme.colors.gray[3]};
        font-size: ${props.theme.fontSizes[0]};
        transition: color .2s linear;
      }
      & input {
        margin: 0;
        width: 100%;
        padding: 8px 2px;
        border: none;
        border-radius: 0;
        background-color: transparent;
        border-bottom: 1.5px solid ${props.theme.colors.gray[1]};
        color: ${props.theme.colors.gray[4]};
        font-family: ${props.theme.fonts.span.families};
        box-shadow: none;

        &:focus,
        &:active {
          border-bottom: 1.5px solid ${props.theme.colors.accent[3]};
          transition: border .3s;
        }
      }
      &.error input {
        border-bottom: 1.5px solid ${props.theme.buttons.error.bg};
      }
    `}
  `;
};

export const Input = {
  Text: generateInputComponent("text"),
  Number: generateInputComponent("number"),
};
