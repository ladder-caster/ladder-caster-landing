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
  max-width: 95%;
  padding-top: 125px;
  padding: 0 32px;

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
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-left: 0;
  padding: 16px;
  padding-top: 32px;
  z-index: 99999;

  > h1 {
    font-weight: 800;
    line-height: 72px;
    color: #fff9f6;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 54px;
    ${media.mobile`
        padding: 0 0 16px;
        font-size: 84px;
    `}
  }

  ${media.mobile`
      padding: 0;
  `}

  ${media.desktop`
        padding: 0;
    `}
`;

export const _desc = styled.div`
  font-weight: 200;
  color: #fff9f6;
  letter-spacing: 1px;
  line-height: 28px;
  width: 90%;
  font-size: 32px;
  font-family: "Poppins", sans-serif;

  ${media.mobile`
    font-size: 24px;
  `}
`;

export const _wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
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
    font-size: 14px;
    width: 180px;
    height: 42px;
    transition: all 0.15s ease-in;
    margin-right: 15px;
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
