import React, { FC } from "react";
import styled, { StyledComponent } from "styled-components";

type TitleComponentProps = FC<{ className?: string }>;
const generateTitleComponent = (
  heading: string,
): StyledComponent<TitleComponentProps, {}> => {
  const Component: TitleComponentProps = ({ className, children }) => {
    switch(heading) {
      case "h1": return <h1 className={className}>{children}</h1>
      case "h2": return <h2 className={className}>{children}</h2>
      case "h3": return <h3 className={className}>{children}</h3>
      case "h4": return <h4 className={className}>{children}</h4>
      case "h5": return <h5 className={className}>{children}</h5>
      case "h6": return <h6 className={className}>{children}</h6>
      default: return <span className={className}>{children}</span>
    }
  };
  return styled(Component)`
    color: ${props => props.theme.colors.gray[5]};
    font-family: ${props => props.theme.fonts[heading].families};
  `;
};

export const Title = {
  H1: generateTitleComponent("h1"),
  H2: generateTitleComponent("h2"),
  H3: generateTitleComponent("h3"),
  H4: generateTitleComponent("h4"),
  H5: generateTitleComponent("h5"),
  H6: generateTitleComponent("h6"),
};
