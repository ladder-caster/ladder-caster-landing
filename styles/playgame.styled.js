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

export const _main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0 auto;
  max-width: 95%;
  padding-top: 125px;

  ${media.tiny`
    padding-top: 110px;
  `}
  ${media.mobile`
    padding-top: 30vh;
  `}
`;

export const _info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
  margin-left: 0;
  padding: 16px;
  padding-top: 32px;

  > h1 {
    font-weight: 800;
    line-height: 62px;
    color: #fff9f6;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 54px;

    ${media.mobile`
    width: 80%;
        padding: 0 0 16px;
        font-size: 54px;
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
  line-height: 21px;
  width: 90%;
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  padding-right: 32px;

  ${media.mobile`
    width: 100%;
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
  font-size: 54px;

  ${media.mobile`
        font-size: 28px;
    `}
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
    color: #303f5a;
    padding: 8px;
    font-size: 14px;
    width: 180px;
    height: 42px;
    transition: all 0.15s ease-in;
    margin-right: 15px;

    &:hover {
      transform: translateY(-4px);
    }
  }
`;
