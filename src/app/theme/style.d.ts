import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      white: string;
      active_icon: string;
      inactive_icon: string;
    };
  }
}
