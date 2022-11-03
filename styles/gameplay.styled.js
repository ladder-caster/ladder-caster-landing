import Image from "next/image";
import styled from "styled-components";
import { media } from "./utils";

export const _gameplay = styled.div`
  min-height: 120vh;
  position: relative;
  overflow: hidden;
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
  min-height: 120vh;
  height: 120vh;
  background-image: url("/sunset.webp");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const _main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0 auto;
  max-width: 95%;
  padding-top: 64px;

  ${media.tablet`
    padding-top: 96px;
    align-items: center;
  `}

  ${media.desktop`
    padding-top: 64px;
    align-items: flex-end;
  `}

  ${media.wide`
    padding-top: 5vw;
    padding-right: 0px;
  `}

  ${media.extraWide`
    padding-right: 2vw;
    padding-top: 10vw;
  `}
`;

export const _info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-left: 0;
  padding: 64px 16px 0;
  z-index: 99999;

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
    padding: 16px 0;

    ${media.tablet`
      padding: 32px 0;
      font-size: 36px;
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

  ${media.tablet`
    width: 90%;
    padding: 16px;
  `}

  ${media.desktop`
    align-items: flex-start;
    justify-content: flex-start;
    width: 450px;
  `}

  ${media.wide`
    width: 600px;
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

  ${media.tablet`
    width: 90%;
    font-size: 24px;
    line-height: 32px;
  `}

  ${media.desktop`
    text-align: left;
    width: 100%;
    line-height: 21px;
    font-size: 13px;
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
  margin-top: 32px;

  ${media.desktop`
    margin-top: 16px;
  `}
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
    padding: 8px 32px;
    font-size: 16px;
    height: 54px;
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

export const _table = styled.img`
  width: 800px;
  position: absolute;
  bottom: 0;
  left: -96px;
  z-index: 1;

  ${media.tablet`
    width: 1300px;
    left: -112px;
  `}

  ${media.desktop`
    width: 1100px;
    left: 0;
  `}

  ${media.wide`
    width: 1400px;
  `}

  ${media.extraWide`
    width: 1700px;
    height: 632.188px;
  `}

  ${media.largeWide`
    width: 2000px;
  `}

  ${media.maxWide`
    width: 2300px;
  `}

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const _animationContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  height: 632px;
  width: 1700px;

  ${media.desktop`
    width: 1100px;
  `}

  ${media.wide`
    width: 1400px;
  `}

  ${media.extraWide`
    width: 1700px;
  `}

  ${media.largeWide`
    width: 2000px;
  `}

  ${media.maxWide`
    width: 2300px;
  `}
`;
