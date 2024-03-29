import styled from "styled-components";
import { media } from "./utils";

export const _playgame = styled.div`
  position: relative;
  overflow: hidden;
  //min-height: 140vh;

  ${media.desktop`
    // min-height: 100vh;
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
  background-image: url("/trees.webp");
  background-size: cover;
  background-position: center;
  z-index: -1;

  ${media.desktop`
    min-height: 100vh;
  `}
`;

export const _main = styled.main`
  //min-height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  max-width: 100%;
  ${media.desktop`
    align-items: flex-start;
  `}
`;

export const _info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  margin-left: 0;
  padding: 16px;
  background-color: #303f5a;
  z-index: 9999;

  ${media.desktop`
    
    flex-direction: row;
  `}
`;

export const _info_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 0;
  padding: 16px;

  ${media.desktop`
    max-width: 560px;
  `}

  > h1 {
    font-weight: 800;
    line-height: 40px;
    color: #fff9f6;
    text-shadow: 1px 1px 0 #314959;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 36px;
    text-align: center;
    padding: 0 0 16px 0;

    ${media.desktop`
      text-align: left;
      font-size: 32px;
      line-height: 40px;
      padding: 0 0 16px 0;
    `}

    ${media.wide`
      line-height: 62px;
      font-size: 54px;
    `}
  }

  ${media.tablet`
    padding: 0;
    width: 65%;
  `}

  ${media.desktop`
    align-items: flex-start;
    justify-content: flex-start;
    width: 450px;
  `}

  ${media.wide`
    width: 85%;
  `}
`;

export const _desc = styled.div`
  font-weight: 200;
  color: #fff9f6;
  text-shadow: 1px 1px 0 #314959;
  letter-spacing: 1px;
  line-height: 21px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  width: 100%;
  padding: 16px;

  ${media.desktop`
    text-align: left;
    width: 100%;
    line-height: 21px;
    font-size: 13px;
    padding: 0;
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
  text-shadow: 1px 1px 0 #314959;
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
    background-color: #ffa64d;
    color: #fff;
    padding: 8px 32px;
    font-size: 16px;
    height: 54px;
    transition: all 0.15s ease-in;
    margin-right: 15px;

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

export const _light = styled.img`
  width: 100%;
  position: absolute;
  width: 900px;
  left: -112px;
  top: 40%;
  z-index: 1;

  ${media.tablet`
    width: 1200px;
    left: 100px;
    top: 30%;
  `}

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

export const _backGrass = styled.img`
  width: 1700px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

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

export const _fgGrass = styled.img`
  width: 1700px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

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

export const _refer = styled.div`
  position: relative;
  z-index: 99999;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.24);
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
  backdrop-filter: blur(40px) saturate(110%) hue-rotate(160deg) brightness(60%) contrast(110%);
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