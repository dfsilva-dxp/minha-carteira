import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    waves: string;
    color: {
      background: string;
      text: string;
      shape: string;

      white: string;
      gray400: string;
      blue700: string;
      green500: string;
      yellow500: string;
      red500: string;
    };
  }
}
