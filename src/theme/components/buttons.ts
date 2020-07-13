import { getColors } from "../designs/colors";
import { ComponentColorType } from "../types";

const generateButtonTheme = (
  type: string,
  mode: string | void,
): any => {
  const colors = getColors(mode);
  const colorType = (colors[type] as ComponentColorType);
  return {
    fg: colorType.fg,
    bg: colorType.bg[1],
    hover: {
      bg: colorType.bg[0],
    },
    click: {
      bg: colorType.bg[2],
    },
  }
};

export const generateButtons = (mode: string | void): any => {
  return {
    "primary": generateButtonTheme("primary", mode),
    "success": generateButtonTheme("success", mode),
    "warning": generateButtonTheme("warning", mode),
    "error": generateButtonTheme("error", mode),
  };
};

export const buttons = {
  "primary": generateButtonTheme("primary"),
  "success": generateButtonTheme("success"),
  "warning": generateButtonTheme("warning"),
  "error": generateButtonTheme("error"),
};
