import { ColorType } from "../types";

export const bright: ColorType = {
  brand: "#7DCD85",
  accent: ["#f0fff0", "#e4f2e4", "#a7d9aa", "#7dcd85", "#41804b", "#295933"],
  gray: ["#fafafa", "#d9d9d9", "#8c8c8c", "#595959", "#262626", "#141414"],
  primary: {
    fg: "#262626",
    bg: ["#87e8de", "#5cdbd3", "#36cfc9"],
  },
  success: {
    fg: "#262626",
    bg: ["#e4f2d0", "#c7e6a1", "#a8d975"],
  },
  warning: {
    fg: "#262626",
    bg: ["#ffffc9", "#fffca1", "#fff679"],
  },
  error: {
    fg: "#262626",
    bg: ["#ff969a", "#ff6e77", "#fc4457"],
  },
};

export const dark: ColorType = {
  brand: "#5f9364",
  accent: ["#405843", "#4d7151", "#5f9364", "#70b477", "#9ac79d", "#ccdccd"],
  gray: ["#232323", "#363636", "#494949", "#bcbcbc", "#e2e2e2", "#f1f1f1"],
  primary: {
    fg: "#f1f1f1",
    bg: ["#203c3b", "#346e6a", "#439590"],
  },
  success: {
    fg: "#f1f1f1",
    bg: ["#4a533e", "#657353", "#889d70"],
  },
  warning: {
    fg: "#f1f1f1",
    bg: ["#5b5a3e", "#7e7c53", "#adab70"],
  },
  error: {
    fg: "#f1f1f1",
    bg: ["#5b2f32", "#7e3d41", "#ad4f54"],
  },
};

export const getColors = (preset: string | void): ColorType => {
  if (preset === "dark") {
    return dark;
  }
  return bright;
};
