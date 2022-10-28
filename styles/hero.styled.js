import styled from "styled-components";
import { media } from "./utils";

export const _hero = styled.div`
  min-height: 100vh;
  position: relative;
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
  min-height: 100vh;
  height: 100vh;
  background-image: url("/bg1.png");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const _main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  padding-top: 125px;
  padding: 0 32px;

  ${media.tiny`
    padding-top: 20vh;
  `}

  ${media.tablet`
    align-items: center;
  `}

  ${media.desktop`
    padding-top: 30vh;
    max-width: 95%;
    justify-content: flex-start;
    align-items: flex-start;
  `}
`;

export const _info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 0;
  padding: 16px;
  padding-top: 32px;
  z-index: 99999;

  > h1 {
    font-weight: 800;
    line-height: 32px;
    color: #fff9f6;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 54px;
    text-align: center;

    ${media.tablet`
        padding: 0 0 16px;
    `}
    ${media.desktop`
      font-size: 4vw;
      text-align: left;
    `}
    ${media.extraWide`
        line-height: 72px;
        font-size: 5vw;
    `}
  }

  ${media.mobile`
      padding: 0;
  `}

  ${media.desktop`
    align-items: flex-start;
    width: 100%;
  `}
`;

export const _desc = styled.div`
  font-weight: 200;
  color: #fff9f6;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  text-align: center;

  ${media.mobile`
    font-size: 24px;
  `}

  ${media.desktop`
    text-align: left;
    width: 90%;
  `}
`;

export const _wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  ${media.desktop`
    margin-top: 16px;
  `}
`;

export const _button = styled.div`
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-weight: 200;
    letter-spacing: 0.5px;
    cursor: pointer;
    background: none;
    background-color: transparent;
    font-size: 14px;
    border: 1px solid #fff9f6;
    color: #fff9f6;
    padding: 8px;
    font-size: 16px;
    width: 180px;
    height: 42px;
    transition: all 0.15s ease-in;
    margin-right: 15px;

    ${media.tablet`
      font-size: 16px;
      height: 54px;
      width: 220px;
    `}

    ${media.desktop`
      font-size: 14px;
      height: 42px;
      width: 180px;
    `}

    > div {
      display: flex;
      align-items: center;
    }
    > svg,
    img {
      width: 16px;
      margin-left: 12px;
      fill: #fff9f6;
    }
    > span {
      display: flex;
      align-items: center;
      > svg {
        font-weight: 200;
        width: 24px;
        margin-left: 8px;
        fill: white;
      }
    }
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const _cliff = styled.img`
  height: calc(120vh + 210px);
  position: absolute;
  bottom: -110vh;
  right: -224px;
  z-index: 1;

  ${media.desktop`
    right: -48px;
    bottom: -100vh;
    height: calc(110vh + 120px);
    width: 1000px;
  `}

  ${media.wide`
    height: calc(110vh + 150px);
    width: 1200px;
  `}

  ${media.extraWide`
    height: calc(110vh + 210px);
    width: 1500px;
  `}

  ${media.maxWide`
    width: 2200px;
  `}
`;

export const _sideCliff = styled.img`
  width: 600px;
  position: absolute;
  bottom: -40px;
  right: 0;
  z-index: 4;

  ${media.desktop`
    bottom: -16px;
    width: 300px;
  `}

  ${media.wide`
    bottom: -16px;
    width: 375px;
  `}

  ${media.extraWide`
    bottom: -32px;
    width: 500px;
  `}
`;

export const _backLight = styled.img`
  width: 400px;
  position: absolute;
  bottom: 350px;
  right: 0;
  z-index: 1;

  ${media.tablet`
    bottom: 300px;
    width: 350px;
  `}

  ${media.desktop`
    bottom: 200px;
    width: 200px;
  `}

  ${media.wide`
    bottom: 250px;
    width: 300px;
  `}

  ${media.extraWide`
    bottom: 325px;
    width: 350px;
  `}
`;

export const _frontLight = styled.img`
  width: 850px;
  position: absolute;
  bottom: 72px;
  right: 0;
  z-index: 3;

  ${media.tablet`
    bottom: 72px;
    width: 750px;
  `}

  ${media.desktop`
    bottom: 50px;
    width: 425px;
  `}

  ${media.wide`
    bottom: 64px;
    width: 550px;
  `}

  ${media.extraWide`
    bottom: 100px;
    width: 650px;
  `}
`;

export const _sideLawn = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: none;

  ${media.desktop`
    display: block;
  `}
`;
