import styled from "styled-components";
import { media } from "./utils";

export const _hero = styled.div`
  min-height: 140vh;
  position: relative;

  ${media.tablet`
    min-height: 120vh;
  `}
`;

export const _float = styled.div`
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
`;

export const _background = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 140vh;
  height: 140vh;
  background-image: url("/books.png");
  background-size: cover;
  background-position: center;
  z-index: -1;

  ${media.tablet`
    min-height: 120vh;
    height: 120vh;
  `}
`;

export const _main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  max-width: 95%;

  ${media.tablet`
    padding-left: 32px; 
  `}

  ${media.desktop`
    padding-top: 64px;
  `}
`;

export const _info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin-left: 0;
  padding: 96px 16px 0;

  > h1 {
    font-weight: 800;
    line-height: 62px;
    color: #fff9f6;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 36px;
    text-align: center;

    ${media.tablet`
      padding: 32px 0;
      font-size: 54px;
      line-height: 62px;
    `}

    ${media.desktop`
      text-align: left;
      font-size: 32px;
      line-height: 40px;
      padding: 0 0 16px;
    `}

    ${media.wide`
      line-height: 62px;
      font-size: 54px;
    `}
  }

  ${media.desktop`
      padding: 0;
      width: 70%;
  `}

  ${media.extraWide`
    width: 47%;
  `}
`;

export const _desc = styled.div`
  font-weight: 200;
  color: #fff9f6;
  letter-spacing: 1px;
  line-height: 21px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  width: 100%;
  padding-bottom: 16px;

  ${media.tablet`
    width: 90%;
    font-size: 24px;
    line-height: 32px;
  `}

  ${media.wide`
    padding-right: 32px;
    font-size: 15px;
  `}
`;

export const _wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const _subtitle = styled.div`
  font-weight: 200;
  color: #fff9f6;
  letter-spacing: 1px;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 28px;
`;

export const _button = styled.div`
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-weight: 200;
    letter-spacing: 0.5px;
    cursor: pointer;
    background-color: white;
    border: 1px solid #fff9f6;
    color: #3d232c;
    padding: 8px;
    font-size: 16px;
    height: 54px;
    width: 220px;
    transition: all 0.15s ease-in;

    ${media.desktop`
      margin-right: 15px;
      font-size: 14px;
      height: 42px;
      width: 180px;
    `}

    &:hover {
      transform: translateY(-4px);
    }
  }
`;
