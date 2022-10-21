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
`;

export const _wrapper = styled.div`
  max-width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 4px;
  padding-top: 24px;

  ${media.tiny`
    padding-right: 0;
  `}

  ${media.mobile`
    padding-top: 0;
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
  font-size: 14px;
  z-index: 100;

  > svg {
    cursor: pointer;
    width: 50px;
    height: 50px;
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
    padding-left: 24px;
    font-size: 18px;
  `}

  ${({ $simple }) => {
    if ($simple) {
      return css`
        color: white;
        padding: 48px;
        font-size: 32px;

        ${media.mobile`
          font-size: 24px;
        `}
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
  }
`;

export const _container = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px 0 0;

  ${media.mobile`
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
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0;
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
  `}

  ${media.desktop`
    margin: 0 64px;
  `}
`;

export const _button = styled.a`
  z-index: 10;
  color: white;
  background-color: transparent;
  font-size: 14px;
  border: 1px solid #fff9f6;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 2px;
  font-weight: 200;
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  margin-left: 0;
  width: 180px;
  font-family: "Poppins", sans-serif;

  &:hover {
    color: #8553ca;
    background-color: rgba(255, 255, 255, 1);
  }

  ${media.tablet`
    padding: 12px 32px;
    width: 200px;
    margin-left: 8px;
  `}

  ${media.desktop`
    width: 225px;
    padding: 12px 32px;
  `}
  
  ${media.wide`
    width: 220px;
    margin-left: 32px;
  `}
`;
