import React, { FC } from "react";
import styled, { StyledComponent, css } from "styled-components";

type ButtonComponentProps = FC<any>;

const ButtonComponent: ButtonComponentProps = (props) => (
  <button {...props} />
);

const generateButtonComponent = (
  type: string,
): StyledComponent<ButtonComponentProps, {}> => {
  return styled(ButtonComponent)`
    min-height: 32px;
    min-width: 100px;
    margin: 10px 10px;
    border: 1px;
    border-radius: 3px;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    ${props => css`
      font-family: ${props.theme.fonts.span.families};
      box-shadow: ${props.theme.shadows[4]};
      background-color: ${props.theme.buttons[type].bg};
      color: ${props.theme.buttons[type].fg};
      &:hover {
        background-color: ${props.theme.buttons[type].hover.bg};
      }
      &:active {
        background-color: ${props.theme.buttons[type].click.bg};
      }
      &:disabled {
        color: ${props.theme.colors.gray[2]};
        background-color: ${props.theme.colors.gray[1]};
      }
    `}
  `;
}

export const Button = {
  Primary: generateButtonComponent("primary"),
  Success: generateButtonComponent("success"),
  Warning: generateButtonComponent("warning"),
  Error: generateButtonComponent("error"),
};
