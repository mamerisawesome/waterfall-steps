import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

const LayoutComponent: FC<{className?: string}> = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  );
};

export const Layout = styled(LayoutComponent)`
${props => css`
    background-color: ${props.theme.colors.gray[0]};
  `};
`;
