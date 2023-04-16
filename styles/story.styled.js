import styled from "styled-components";
import { media } from "./utils";

export const _story = styled.div`
  min-height: 155vh;
  position: relative;
  overflow: hidden;

  ${media.tablet`
    min-height: 120vh;
  `}

  ${media.desktop`
    min-height: 100vh;
  `}
`;

export const _float = styled.div`
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
`;

export const _overlay = styled.div`
  position: absolute;
  min-width: 100%;
  width: 100%;
  min-height: 155vh;
  height: 100vh;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 70%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 1;

  ${media.tablet`
    min-height: 120vh;
  `}

  ${media.desktop`
    z-index: 3;
    min-height: 100vh;
  `}
`;

export const _background = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 155vh;
  height: 155vh;
  background-image: url("/trees.webp");
  background-size: cover;
  background-position: center;
  z-index: -1;

  ${media.tablet`
    min-height: 120vh;
  `}

  ${media.desktop`
    min-height: 100vh;
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
  padding-top: 64px;

  ${media.tablet`
    padding-top: 96px;
  `}

  ${media.desktop`
    padding-top: 64px;
    align-items: flex-start;
  `}

  ${media.wide`
    padding-top: 10vw;
  `}
`;

export const _info = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 580px;
  margin-left: 0;
  padding: 32px;
  z-index: 9999;
  border-radius: 20px;
  border: 2px solid rgba(255,255,255,0.2);
  background: rgba(28, 21, 66, 0.32);
  backdrop-filter: blur(40px) saturate(110%) hue-rotate(32deg) brightness(160%) contrast(120%);
  box-shadow: 0 8px 24px 0 rgba(85, 48, 48, 0.36);

  > h1 {
    font-weight: 800;
    line-height: 40px;
    color: #fff9f6;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 36px;
    text-align: center;
    padding: 0 0 16px 0;
    text-shadow: 1px 1px 0 #314959;

    ${media.desktop`
      text-align: left;
      font-size: 32px;
      line-height: 36px;
      padding: 0 0 32px 0;
    `}

    ${media.wide`
      line-height: 44px;
      font-size: 42px;
    `}
  }

  ${media.desktop`
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
  `}

  ${media.wide`
    width: 750px;
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
  text-shadow: 1px 1px 0 #314959;

  ${media.tablet`
    width: 90%;
    line-height: 21px;
    font-size: 16px;
  `}

  ${media.desktop`
    text-align: left;
    width: 100%;
    line-height: 21px;
    font-size: 16px;
  `}

  ${media.wide`
    line-height: 21px;
    font-size: 16px;
  `}
`;

export const _wrapper = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.desktop`
    
  `}
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
    background-color: #395d6f;
    border-bottom: 4px solid #314959;
    color: #fff;
    padding: 8px 32px;
    font-size: 16px;
    height: 54px;
    transition: all 0.15s ease-in;
    margin-right: 15px;
    white-space: nowrap;

    ${media.desktop`
      margin-right: 15px;
      font-size: 14px;
      height: 42px;
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
  left: 96px;
  top: 40%;
  z-index: 1;

  ${media.tablet`
    width: 1200px;
    left: 100px;
    top: 30%;
  `}

  ${media.desktop`
    left: 0;
    top: 0;
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
    padding-top: 5vw;
    padding-right: 0px;
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
  top: 88px;
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