export interface IBaseTheme {
  breakpoints: Breakpoints;
  spacing: any[];
  palette: Palette;
  shape: Shape;
  unstable_sxConfig: UnstableSxConfig;
  mixins: Mixins;
  shadows: string[];
  typography: BaseThemeTypography;
  transitions: Transitions;
  zIndex: ZIndex;
}

export interface Breakpoints {}

export interface Mixins {
  toolbar: Toolbar;
}

export interface Toolbar {
  minHeight: number;
  '@media (min-width:0px)': MediaMinWidth0Px;
  '@media (min-width:600px)': Media;
}

export interface MediaMinWidth0Px {
  '@media (orientation: landscape)': Media;
}

export interface Media {
  minHeight: number;
}

export interface Palette {
  mode: string;
  common: Breakpoints;
  primary: Breakpoints;
  secondary: Breakpoints;
  grey: Breakpoints;
  info: Breakpoints;
  error: Breakpoints;
  success: Breakpoints;
  warning: Breakpoints;
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

export interface Text {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface Shape {
  borderRadius: number;
}

export interface Transitions {
  easing: Easing;
  duration: Duration;
}

export interface Duration {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}

export interface Easing {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}

export interface BaseThemeTypography {
  htmlFontSize: number;
  fontSize: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1Sm: Body1;
  h1Md: Body1;
  h1Lg: Body1;
  bodyXs: Body1;
  bodySm: Body1;
  bodyMd: Body1;
  bodyLg: Body1;
  body1: Body1;
  caption: Body1;
}

export interface Body1 {
  fontFamily: string;
  fontSize: string;
  fontWeight?: number;
  lineHeight: string;
}

export interface UnstableSxConfig {
  border: BackgroundColor;
  borderTop: BackgroundColor;
  borderRight: BackgroundColor;
  borderBottom: BackgroundColor;
  borderLeft: BackgroundColor;
  borderColor: BackgroundColor;
  borderTopColor: BackgroundColor;
  borderRightColor: BackgroundColor;
  borderBottomColor: BackgroundColor;
  borderLeftColor: BackgroundColor;
  outline: BackgroundColor;
  outlineColor: BackgroundColor;
  borderRadius: BackgroundColor;
  color: BackgroundColor;
  bgcolor: Bgcolor;
  backgroundColor: BackgroundColor;
  p: Breakpoints;
  pt: Breakpoints;
  pr: Breakpoints;
  pb: Breakpoints;
  pl: Breakpoints;
  px: Breakpoints;
  py: Breakpoints;
  padding: Breakpoints;
  paddingTop: Breakpoints;
  paddingRight: Breakpoints;
  paddingBottom: Breakpoints;
  paddingLeft: Breakpoints;
  paddingX: Breakpoints;
  paddingY: Breakpoints;
  paddingInline: Breakpoints;
  paddingInlineStart: Breakpoints;
  paddingInlineEnd: Breakpoints;
  paddingBlock: Breakpoints;
  paddingBlockStart: Breakpoints;
  paddingBlockEnd: Breakpoints;
  m: Breakpoints;
  mt: Breakpoints;
  mr: Breakpoints;
  mb: Breakpoints;
  ml: Breakpoints;
  mx: Breakpoints;
  my: Breakpoints;
  margin: Breakpoints;
  marginTop: Breakpoints;
  marginRight: Breakpoints;
  marginBottom: Breakpoints;
  marginLeft: Breakpoints;
  marginX: Breakpoints;
  marginY: Breakpoints;
  marginInline: Breakpoints;
  marginInlineStart: Breakpoints;
  marginInlineEnd: Breakpoints;
  marginBlock: Breakpoints;
  marginBlockStart: Breakpoints;
  marginBlockEnd: Breakpoints;
  displayPrint: DisplayPrint;
  display: Breakpoints;
  overflow: Breakpoints;
  textOverflow: Breakpoints;
  visibility: Breakpoints;
  whiteSpace: Breakpoints;
  flexBasis: Breakpoints;
  flexDirection: Breakpoints;
  flexWrap: Breakpoints;
  justifyContent: Breakpoints;
  alignItems: Breakpoints;
  alignContent: Breakpoints;
  order: Breakpoints;
  flex: Breakpoints;
  flexGrow: Breakpoints;
  flexShrink: Breakpoints;
  alignSelf: Breakpoints;
  justifyItems: Breakpoints;
  justifySelf: Breakpoints;
  gap: Breakpoints;
  rowGap: Breakpoints;
  columnGap: Breakpoints;
  gridColumn: Breakpoints;
  gridRow: Breakpoints;
  gridAutoFlow: Breakpoints;
  gridAutoColumns: Breakpoints;
  gridAutoRows: Breakpoints;
  gridTemplateColumns: Breakpoints;
  gridTemplateRows: Breakpoints;
  gridTemplateAreas: Breakpoints;
  gridArea: Breakpoints;
  position: Breakpoints;
  zIndex: BackgroundColor;
  top: Breakpoints;
  right: Breakpoints;
  bottom: Breakpoints;
  left: Breakpoints;
  boxShadow: BackgroundColor;
  width: Breakpoints;
  maxWidth: Breakpoints;
  minWidth: Breakpoints;
  height: Breakpoints;
  maxHeight: Breakpoints;
  minHeight: Breakpoints;
  boxSizing: Breakpoints;
  fontFamily: BackgroundColor;
  fontSize: BackgroundColor;
  fontStyle: BackgroundColor;
  fontWeight: BackgroundColor;
  letterSpacing: Breakpoints;
  textTransform: Breakpoints;
  lineHeight: Breakpoints;
  textAlign: Breakpoints;
  typography: UnstableSxConfigTypography;
}

export interface BackgroundColor {
  themeKey: string;
}

export interface Bgcolor {
  themeKey: string;
  cssProperty: string;
}

export interface DisplayPrint {
  cssProperty: boolean;
}

export interface UnstableSxConfigTypography {
  cssProperty: boolean;
  themeKey: string;
}

export interface ZIndex {
  mobileStepper: number;
  fab: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}
