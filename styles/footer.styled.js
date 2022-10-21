import styled from "styled-components";
import { media } from "./utils";

export const _footer = styled.div`
  background: #27223b;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff9f6;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 48px 16px 84px;
  height: 100%;

  ${media.mobile`
    justify-content: center;
    padding: 48px 32px 84px;
  `}
  ${media.desktop`
    height: 45vh;
  `}
`;

export const _wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 0;
  align-items: flex-start;

  ${media.desktop`
    flex-direction: row;
    padding-top: 64px;
  `}
`;

export const _logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 800;
  line-height: 1;
  color: #fff9f6;
  letter-spacing: 1px;
  text-shadow: 1px 1px 0 rgba(52, 42, 60, 0.1);
  font-family: "Poppins", sans-serif;
  align-items: flex-start;
  padding: 24px 24px 8px;
  font-size: 20px;

  > svg {
    width: 80px;
    height: 80px;
    margin-bottom: 8px;

    ${media.desktop`
        width: 60px;
        height: 60px;
    `}
  }

  > span {
    letter-spacing: 2px;
    font-size: 9px;
    color: #828282;
    padding-top: 12px;
    font-weight: 400;
  }

  ${media.mobile`
    align-items: center;
    padding: 32px;
  `}

  ${media.desktop`
    font-size: 18px;
  `}
`;

export const _container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0 0;
  align-items: flex-start;

  ${media.desktop`
    padding: 32px 16px;

  `}
`;

export const _title = styled.div`
  position: relative;
  padding: 4px 0;
  color: #fff9f6;
  font-size: 15px;
  letter-spacing: 2px;
  margin: 0px 24px;
  text-shadow: 1px 1px 0 rgba(52, 42, 60, 0.1);
  font-weight: 800;
  text-transform: uppercase;

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

  ${media.mobile`
    text-transform: initial;
  `}
`;

export const _link = styled.a`
  position: relative;
  padding: 4px 0;
  cursor: pointer;
  color: rgb(173, 181, 189);
  letter-spacing: 2px;
  text-shadow: 1px 1px 0 rgba(52, 42, 60, 0.1);
  text-transform: uppercase;
  font-size: 15px;
  margin: 0px 24px;
  font-weight: 200;

  ${media.mobile`
    font-size: 14px;
    margin: 4px 24px;
    text-transform: initial;
  `}
`;

export const _social = styled.a`
  position: relative;
  padding: 4px 0;
  cursor: pointer;
  margin: 8px 24px;
  color: #fff9f6;
  padding: 8px;
  border: none;
  font-size: 15px;
  width: 210px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 8px 24px 0 rgb(0 0 0 / 15%);
  font-weight: 200;
  transition: all 0.1s ease;
  > svg {
    fill: #fff9f6;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
