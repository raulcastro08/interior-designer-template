import { DefaultTheme } from "styled-components";
import {
  TypographyVariant,
  typographyVariants,
} from "@ninjas/theme/typographyVariants";
import { Breakpoint, breakpoints } from "@ninjas/theme/breakpoints";

export type Variant =
  | "background"
  | "borders"
  | "primary"
  | "secondary"
  | "tertiary"
  | "modes";

export type ColorContent = {
  color?: string;
  contrastText?: string;
};

export type ColorVariant = "light" | "dark" | "main";

export type ColorType = {
  [key in ColorVariant]?: ColorContent;
};

export type Color = {
  // eslint-disable-next-line no-unused-vars
  [key in Variant]: ColorType;
};

const colors: Color = {
  background: {
    light: {
      color: "#FFFFFF",
    },
    main: {
      color: "#d5e1df",
    },
  },
  borders: {
    main: {
      color: "#F1F1F1",
    },
  },
  primary: {
    main: {
      color: "#de654e",
      contrastText: "#fff",
    },
  },
  secondary: {
    main: {
      color: "#222",
      contrastText: "#ffff",
    },
  },
  tertiary: {
    main: {
      color: "#fffa",
      contrastText: "#2212",
    },
    light: {
      color: "#ffff",
      contrastText: "#fff",
    },
  },
  modes: {
    dark: {},
  },
};

export interface Theme {
  colors: Color;
  typographyVariants: TypographyVariant;
  breakpoints: Breakpoint;
  borderRadius: string;
  fontFamily: string;
  transition: string;
}

const theme: DefaultTheme = {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: "12px",
  fontFamily: "'Montserrat', sans-serif, ",
  transition: "200ms ease-in-out",
};

export default theme;
