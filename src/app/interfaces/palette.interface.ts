export interface IPalette {
  direction: string;
  palette: Palette;
}

export interface Palette {
  mode: string;
  common: Common;
  primary: ColorPalette;
  secondary: ColorPalette;
  grey: ColorPalette;
  info: ColorPalette;
  error: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  contrastThreshold: number;
  tonalOffset: number;
  text: Text;
  divider: string;
  background: Background;
  action: Action;
}

export interface Action {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledBackground: string;
  disabledOpacity: number;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}

export interface Background {
  paper: string;
  default: string;
}

export interface Common {
  black: string;
  white: string;
}

export interface ColorPalette {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  main?: string;
  contrastText?: string;
  A100?: string;
}

export interface Text {
  primary: string;
  secondary: string;
  disabled: string;
}
