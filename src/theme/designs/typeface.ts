import { createGlobalStyle, GlobalStyleComponent } from "styled-components";
import { TypefaceType } from "../types";
import merriweatherUrl from "../../fonts/Merriweather-Light.ttf";
import latoUrl from "../../fonts/Lato-Regular.ttf";

export const mainFont: TypefaceType = {
  families: [
    "merriweather",
    "Playfair Display",
    "serif",
  ].join(","),
};

export const subFont: TypefaceType = {
  families: [
    "lato",
    "Roboto",
    "Arial",
  ].join(","),
};

export const FontStack: GlobalStyleComponent<any, any> = createGlobalStyle`
  @font-face {
    font-family: 'merriweather';
    src: url(${merriweatherUrl});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'lato';
    src: url(${latoUrl});
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: ${subFont.families};
  }
`;
