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
  width: 100%;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  padding: 8px 8px;

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
    padding: 0 24px;
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

export const _container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.25s ease-in-out;

  ${({ $checked }) =>
    $checked &&
    css`
      transform: translateX(0);
    `}

  ${media.desktop`
    transform: translateX(0);
    position: static;
    display: flex;
    height: auto;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 32px 0;
  `};

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
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);

  ${media.desktop`
    background-color: inherit;
    height: auto;
    width: auto;
    backdrop-filter: blur(12px) saturate(140%) contrast(120%);
    padding: 12px 16px;
    margin-right: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 760px;
    border-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 24px 0 rgba(56, 143, 229, 0.36);

    ${({ $staking }) =>
      $staking &&
      css`
        border: 1px solid rgba(255, 255, 255, 0.5);
        backdrop-filter: none;
        box-shadow: none;
      `};
  `};
  > a {
    position: relative;
    padding: 2px;
    cursor: pointer;
    color: #fff9f6;
    font-size: 28px;
    letter-spacing: 2px;
    margin: 0 6px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;

    ${media.desktop`
      font-size: 14px;
      text-shadow: 1px 1px 0 #388fe5;
    `}

    ${({ $staking }) =>
      $staking &&
      css`
        text-shadow: none;
      `};

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
  }
`;

export const _link = styled.a``;

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

export const _refer = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.24);
  padding: 8px;
  min-width: 164px;
  width: 164px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px) saturate(140%) contrast(120%);
  box-shadow: 0 8px 24px 0 rgba(56, 143, 229, 0.36);
`;

export const _menuContainer = styled.div`
  width: 32px;
  height: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${media.desktop`
    display: none;
  `};
`;
export const _menu = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  transition: all 0.4s ease;
`;

export const _strike = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background: white;
  height: 2px;
  width: 100%;
  transition: all 0.4s ease;
  border-radius: 10px;

  &:nth-child(1),
  &:nth-child(3) {
    position: absolute;
  }

  &:nth-child(2) {
    width: 60%;
    left: 40%;
  }

  &:nth-child(1) {
    top: -10px;
  }

  &:nth-child(3) {
    top: 10px;
  }

  ${({ $checked }) =>
    $checked &&
    css`
      &:nth-child(1) {
        top: 0;
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        background: transparent;
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        top: 0;
        transform: rotate(135deg);
      }
    `}
`;
