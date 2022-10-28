import { css } from "styled-components";
const breakpoints = {
  tiny: 375,
  mini: 400,
  mobile: 450,
  tablet: 700,
  desktop: 900,
  wide: 1200,
  extraWide: 1400,
  maxWide: 2000,
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
