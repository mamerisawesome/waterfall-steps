import React, { FC } from "react";
import styled, { css } from "styled-components";

const FooterComponent: FC<{className?: string}> = ({
  className,
}) => {
  return (
    <footer className={className}>© 2020</footer>
  );
};

export const Footer = styled(FooterComponent)`
  padding-top: 10px;
  padding-bottom: 10px;
  ${props => css`
    box-shadow: ${props.theme.shadows[0]};
    font-family: ${props.theme.fonts.footer.families};
    font-size: ${props.theme.fontSizes[0]};
    font-weight: ${props.theme.fontWeights.bold};
    background-color: ${props.theme.colors.accent[1]};
    color: ${props.theme.colors.gray[5]};
  `};
`;
