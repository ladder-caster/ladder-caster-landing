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
  background-image: url("/books.webp");
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
  max-width: 560px;
  margin-left: 0;
  padding: 96px 16px 0;

  > h1 {
    font-weight: 800;
    line-height: 40px;
    color: #fff9f6;
    text-shadow: 1px 1px 0 #553030;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 36px;
    text-align: center;

    ${media.tablet`
      padding: 0 0 32px 0;
      font-size: 36px;
      line-height: 40px;
    `}

    ${media.desktop`
      text-align: center;
      font-size: 32px;
      line-height: 40px;
      padding: 0 0 32px 0;
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
  text-shadow: 1px 1px 0 #553030;
  letter-spacing: 1px;
  line-height: 21px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  width: 100%;
  padding-bottom: 16px;

  ${media.tablet`
    width: 90%;
    line-height: 21px;
  font-size: 16px;
  `}

  ${media.desktop`
    text-align: center;
    width: 100%;
    line-height: 21px;
  font-size: 16px;
    padding-bottom: 16px;
  `}

  ${media.wide`
    padding-right: 32px;
    line-height: 21px;
    font-size: 16px;
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
  text-shadow: 1px 1px 0 #553030;
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
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
    background-color: #703a3e;
    border-bottom: 4px solid #553030;
    color: #fff;
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

export const _refer = styled.div`
  position: relative;
  z-index: 10;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.24);
  min-width: 164px;
  width: 224px;
  min-height: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 8px;
  background-color: rgba(255, 152, 48, 0.69);
  border: 2px solid rgba(255, 152, 48, 0.69);
  backdrop-filter: blur(40px) saturate(110%) hue-rotate(20deg) brightness(60%)
    contrast(110%);
  box-shadow: 0 8px 24px 0 rgba(85, 48, 48, 0.36);
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
