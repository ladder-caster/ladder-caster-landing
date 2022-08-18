import styled from "styled-components";
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
  max-width: 1200px;
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
  font-weight: 600;
  line-height: 1;
  color: #fff9f6;
  letter-spacing: 1px;
  text-shadow: 1px 1px 0 rgba(52, 42, 60, 0.5);
  font-family: "Poppins", sans-serif;
  padding-left: 8px;
  font-size: 14px;

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
  }

  ${media.mobile`
    padding-left: 24px;
    font-size: 18px;
  `}
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
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  display: none;

  ${media.tablet`
    margin-right: 32px;
    display: flex;
  `}
  ${media.desktop`
    margin-right: 0;
    display: flex;
  `}
  ${media.wide`
    margin-right: 80px;
    display: flex;
  `}
`;

export const _link = styled.a`
  position: relative;
  padding: 4px;
  cursor: pointer;
  color: #fff9f6;
  font-size: 16px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 rgba(52, 42, 60, 0.5);
  font-weight: 600;
  display: none;
  margin: 0 6px;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff9f6;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    box-shadow: 2px 2px 3px rgba(52, 42, 60, 0.5);
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
    margin: 0 24px;
  `}
`;

export const _button = styled.a`
  color: #8553ca;
  background-color: #fff9f6;
  text-transform: uppercase;
  font-size: 14px;
  border: 2px solid #fff9f6;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 2px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  margin-left: 0;
  width: 180px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  ${media.tablet`
    padding: 12px 32px;
    width: 250px;
    margin-left: 8px;
    color: #535ab6;
    background-color: #fff9f6;
  `}
  ${media.desktop`
    padding: 12px 32px;
    margin-left: 32px;
  `}
`;
