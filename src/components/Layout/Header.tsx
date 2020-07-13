import React, { FC, useContext } from "react";
import styled, { css } from "styled-components";
import { Text, Button } from "../htmlAtoms";
import ThemeToggleContext from "../../contexts/themeToggle";

const StyledThemeToggle = styled(Button.Primary)`
  position: relative;
  float: right;
  right: 0px;
  top: -15px;
  min-width: 60px;
  margin-left: 0;
  margin-right: 0;
  font-size: ${props => props.theme.fontSizes[3]};
  background-color: ${props => props.theme.colors.accent[3]};
  box-shadow: none;
  border: 1px solid ${props => props.theme.colors.accent[4]};
  &:hover {
    color: ${props => props.theme.colors.gray[0]};
    background-color: ${props => props.theme.colors.accent[4]};
  }
`;

const HeaderComponent: FC<{className?: string}> = ({
  className,
}) => {
  const themeToggle = useContext(ThemeToggleContext);
  return (
    <header className={className}>
      <Text.Span>Monty Hall</Text.Span>
      <StyledThemeToggle onClick={(): void => {themeToggle()}}>
        ⚙
      </StyledThemeToggle>
    </header>
  );
};

export const Header = styled(HeaderComponent)`
  padding-top: 15px;
  padding-bottom: 15px;
  ${props => css`
    box-shadow: ${props.theme.shadows[0]};
    font-family: ${props.theme.fonts.header.families};
    font-size: ${props.theme.fontSizes[3]};
    font-weight: ${props.theme.fontWeights.bold};
    background-color: ${props.theme.colors.brand};
    color: ${props.theme.colors.gray[5]};
  `};
`;
