import React, { FC } from "react";
import styled, { css } from "styled-components";

const MainComponent: FC<{className?: string}> = ({
  className,
  children,
}) => {
  return (
    <main className={className}>{children}</main>
  );
};

export const Main = styled(MainComponent)`
  padding-top: 20px;
  padding-bottom: 20px;
  ${props => css`
    background-color: ${props.theme.colors.gray[0]};
    color: ${props.theme.colors.gray[5]};
  `};
`;
