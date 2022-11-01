import styled, { css } from "styled-components";
import { media } from "./utils";

export const _nav = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
  background: none;

  ${media.tablet`
    ${({ $simple }) =>
      $simple &&
      "linear-gradient( 180deg, rgba(79, 167, 236, 1) 40%, rgba(79, 167, 236, 0.5) 70%, transparent 100%)"}
  `}
`;

export const _wrapper = styled.div`
  max-width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 4px;

  ${media.tiny`
    padding-right: 0;
  `}
`;

export const _logo = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  padding-left: 8px;
  font-size: 12px;
  z-index: 100;

  > svg {
    cursor: pointer;
    width: 45px;
    height: 45px;
    margin-right: 4px;

    ${media.mobile`
        width: 60px;
        height: 60px;
        margin-right: 8px;
    `}
  }

  > span {
    cursor: pointer;

    ${media.tablet`
      display: none;
    `}

    ${media.desktop`
      display: inline;
    `}
  }

  ${media.mobile`
    font-size: 18px;
  `}

  ${media.tablet`
    padding-left: 24px;
  `}

  ${({ $simple }) => {
    if ($simple) {
      return css`
        padding: 32px 16px;

        ${media.desktop`
          padding: 48px;
        `}

        > span {
          display: none;

          ${media.desktop`
            display: inline;
          `}
        }
      `;
    } else {
      return css`
        color: #fff9f6;
      `;
    }
  }}
`;

export const _connectContainer = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px 0 0;

  > button,
  div > button {
    background-color: rgb(98, 91, 254);
    box-shadow: 0px 0px 32px -6px rgba(0, 0, 0, 0.1);

    > i {
      display: none;

      ${media.desktop`
        display: inline;
      `}
    }
  }
`;

export const _container = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 32px 0;

  ${media.tablet`
    padding: 48px 32px 48px 0;
  `}

  @media only screen and (max-height: 450px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 32px 0px 0;
  }
`;

export const _links = styled.div`
  display: none;

  ${media.tablet`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 0;
  `}
`;

export const _link = styled.a`
  position: relative;
  padding: 2px;
  cursor: pointer;
  color: #fff9f6;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 200;
  display: none;
  margin: 0 6px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #fff9f6;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  ${media.tablet`
    display: inline;
    margin: 0 16px;
  `}

  ${media.wide`
      margin: 0 64px;
  `}
`;

export const _button = styled.a`
  z-index: 10;
  color: #8553ca;
  background-color: rgba(255, 255, 255, 1);
  font-size: 12px;
  border: 1px solid #fff9f6;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 2px;
  font-weight: 200;
  display: flex;
  justify-content: center;
  padding: 10px 12px;
  margin-left: 0;
  width: 150px;
  font-family: "Poppins", sans-serif;
  margin-right: 8px;

  ${media.tablet`
    color: white;
    margin-right: 0px;
    background-color: transparent;
    &:hover {
      color: #8553ca;
      background-color: rgba(255, 255, 255, 1);
    }
    padding: 12px 32px;
    width: 225px;
    margin-left: 8px;
    font-size: 14px;
  `}

  ${media.desktop`
    padding: 12px 32px;
  `}
  
  ${media.wide`
    width: 220px;
    margin-left: 32px;
  `}
`;
