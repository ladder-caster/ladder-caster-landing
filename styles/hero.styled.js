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
  background-image: url("/background-dark.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const _overlay = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #aea8ff, #2c00cb 20%, #000000 30%);
  opacity: 0.25;
  z-index: -1;
`;

export const _main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 125px;

  ${media.tiny`
    padding-top: 110px;
  `}
  ${media.mobile`
    padding-top: 30vh;
  `}
`;

export const _chain = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: #fff9f6;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px rgba(52, 42, 60, 0.5);
  position: absolute;
  bottom: 16px;
  width: 100%;
  right: auto;
  justify-content: center;
  > svg {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }

  ${media.mobile`
    justify-content: flex-end;
    right: 24px;
  `}
`;

export const _info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  right: 0;
  left: 0;
  width: 100%;
  margin-left: 0;
  padding: 16px;
  padding-top: 32px;
  > h1 {
    font-weight: 700;
    line-height: 72px;
    color: #fff9f6;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 48px;
    ${media.mobile`
        padding: 0 0 16px;
        font-size: 86px;
    `}
  }

  ${media.mobile`
      padding: 0;
  `}

  ${media.desktop`
        padding: 0;
        width: 650px;
        margin: 0 auto;
    `}
`;

export const _brush = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  > img {
    width: 100%;
    height: 100%;
    ${media.mobile`
        max-height: 390px
    `}
    ${media.desktop`
        left: 0;
        height: 35vw;
        max-height: 390px;
    `};
  }

  ${media.mobile`
    top: calc(50% - 200px);
  `};
  ${media.desktop`
    top: calc(50% - 215px);
  `};
`;

export const _desc = styled.div`
  padding-bottom: 32px;
  font-weight: 600;
  color: #fff9f6;
  text-align: center;
  letter-spacing: 1px;
  line-height: 28px;
  width: 90%;
  font-size: 16px;

  ${media.mobile`
    padding-bottom: 16px;
    margin-bottom: 48px;
    width: 450px;
    font-size: 18px;
  `}
`;

export const _wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 48px;
  left: 0;
  right: 0;
  height: 45vh;

  ${media.mobile`
  height: 40vh;
  
  `}
`;

export const _button = styled.div`
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 8px 24px 0 rgb(0 0 0 / 55%);
    border: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    background: none;
    background: rgb(212, 185, 89);
    background: linear-gradient(
      132deg,
      rgb(156 138 73) 0%,
      rgb(78 111 100) 51%,
      rgb(30 65 84) 100%
    );
    color: #fff9f6;
    padding: 8px;
    border: none;
    font-size: 16px;
    width: 260px;
    height: 64px;
    transition: all 0.15s ease-in;
    margin-top: 54px;
    > div {
      display: flex;
      align-items: center;
    }
    > svg {
      width: 24px;
      margin-right: 12px;
      fill: #fff9f6;
    }
    > span {
      display: flex;
      align-items: center;
      > h2 {
        background-color: red;
        background-image: linear-gradient(45deg, #ffd547, #28c5f9);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 1px;
      }
      > svg {
        width: 32px;
        margin-right: 16px;
      }
    }
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const _discord = styled.div`
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 8px 24px 0 rgb(0 0 0 / 55%);
    border: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    background: none;
    background-color: #5159e9;
    color: #fff9f6;
    padding: 8px;
    border: none;
    font-size: 16px;
    width: 260px;
    height: 64px;
    transition: 0.15s ease-in;
    margin-top: 12px;
    > span {
      display: flex;
      align-items: center;
      > svg {
        width: 28px;
        margin-right: 8px;
        fill: #fff9f6;
      }
    }

    &:hover {
      background-color: #363b9f;
    }

    ${media.mobile`
        margin-top: 24px;
    `}
  }
`;
