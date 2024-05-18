import { css } from "@emotion/react";
import normalize from "normalize.css";
const globalStyles = css`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html,
  body,
  section,
  div {
    font-family: "Open Sans", "Sans-serif";
    transition-duration: 0.2s;
    transition-property: background-color, color;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

export default globalStyles;
