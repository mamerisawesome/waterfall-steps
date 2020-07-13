export type ThemeType = {
  [key: string]: (
    string
    | string[]
    | { [index: string] : string | string[] | number }
    | ComponentColorType
    | TypefaceType
    | ColorType
  );
};

export type ThemesType = {
  [key: string]: ThemeType;
};

export type ComponentColorType = {
  [key: string]: {
    [key: string]: string | string[];
  };
};

export type ColorType = {
  [key: string]: (
    string
    | string[]
    | { [index: string] : string | string[] }
    | ComponentColorType
  );
};

export type TypefaceType = {
  [key: string]: (
    string
  );
};
