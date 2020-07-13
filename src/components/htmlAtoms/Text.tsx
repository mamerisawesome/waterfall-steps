import React, { FC } from "react";
import styled from "styled-components";

type TextComponentProps = FC<{ className?: string }>;

const Span: TextComponentProps = ({ className, children }) => (
  <span className={className}>{children}</span>
);

const Paragraph: TextComponentProps = ({ className, children }) => (
  <p className={className}>{children}</p>
);

export const Text = {
  Span: styled(Span)`
    color: ${props => props.theme.colors.gray[5]};
    font-family: ${props => props.theme.fonts.span.families};
  `,
  Paragraph: styled(Paragraph)`
    color: ${props => props.theme.colors.gray[5]};
    font-family: ${props => props.theme.fonts.span.families};
  `,
};
