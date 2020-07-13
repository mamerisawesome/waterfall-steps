import { ThemeType, ThemesType } from "./types";
import { getColors } from "./designs/colors";
import { generateButtons } from "./components/buttons";
import { mainFont, subFont } from "./designs/typeface";

const generateThemeByPreset = (preset: string | void): ThemeType => {
  const colors = getColors(preset);
  return {
    colors: {
      brand: colors.brand,
      accent: colors.accent,
      gray: colors.gray,
      palette: ["#7dcd85", "#eef1b3", "#bd9037", "#bf5d37", "#9a4835"],
    },
    buttons: { ...generateButtons(preset) },
    fonts: {
      h1: mainFont,
      h2: mainFont,
      h3: subFont,
      h4: mainFont,
      h5: subFont,
      h6: subFont,
      body: subFont,
      span: subFont,
      p: subFont,
      header: mainFont,
      footer: mainFont,
    },
    fontWeights: {
      light: 300,
      normal: 400,
      bold: 700,
    },
    fontSizes: [
      "14px",
      "20px",
      "22px",
      "28px",
      "32px",
      "40px"
    ],
    shadows: [
      "0px 0px 10px rgba(0, 0, 0, 0.10)",
      "0px 0px 10px rgba(0, 0, 0, 0.125)",
      "0px 0px 10px rgba(0, 0, 0, 0.15)",
      "0px 0px 10px rgba(0, 0, 0, 0.20)",
      "0px 0px 5px rgba(0, 0, 0, 0.20)",
    ],
  };
};

export const themes: ThemesType = {
  bright: generateThemeByPreset(),
  dark: generateThemeByPreset("dark"),
};
