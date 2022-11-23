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

  > div {
    min-width: 100%;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    z-index: -1;
    position: fixed;
  }
`;

export const _background = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  position: fixed;
  background-image: url("/bg1.webp");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const _main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-top: 125px;

  ${media.tiny`
    padding-top: 20vh;
  `}

  ${media.tablet`
    padding-top: 15vh;
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
  z-index: 10;
  padding-top: 32px;

  ${media.desktop`
    padding-left: 24px;
  `}

  > h1 {
    font-weight: 800;
    line-height: 32px;
    color: #fff9f6;
    letter-spacing: 1px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    text-align: center;
    text-shadow: 1px 1px 0 #388fe5;

    ${media.mobile`
        padding: 0 0 16px;
    `}
    ${media.tablet`
      font-size: 54px
    `}
    ${media.desktop`
      font-size: 54px
      text-align: left;
    `}
    ${media.extraWide`
        line-height: 72px;
        font-size: 54px
    `}
  }

  ${media.tablet`
    padding-top: 32px;
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
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 8px;
  text-shadow: 1px 1px 0 #388fe5;

  ${media.tablet`
    margin-top: 8px;
    font-size: 26px;
  `}

  ${media.desktop`
    text-align: left;
    width: 90%;
  `}
`;

export const _wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  ${media.tablet`
    justify-content: center;
    flex-direction: row;
    margin-top: 16px;
  `}
`;

export const _button = styled.div`
  &:nth-child(1) {
    ${media.tablet`
       margin-right: 16px;
    `}
  }
  > a {
    width: 200px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
    background: #ff9830;
    font-size: 14px;
    color: #fff;
    padding: 8px 32px;
    transition: all 0.15s ease-in;
    margin: 0 8px;
    white-space: nowrap;
    box-shadow: 0px 8px 24px 0 rgb(0 0 0 / 15%);

    ${media.tablet`
      margin: 0;
      font-size: 14px;
      width: 200px;
      height: 48px;
      margin: 0 8px;
    `}

    ${media.desktop`
      font-size: 14px;
      width: 200px;
      height: 48px;
      margin: 0;
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
  height: calc(125vh + 125px);
  position: absolute;
  bottom: -120vh;
  right: -324px;
  z-index: 1;

  /* ${media.tablet`
    height: calc(120vh + 210px);
    bottom: -110vh;
    right: -224px;
  `} */

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
    width: 2000px;
  `}
`;

export const _sideCliff = styled.img`
  width: 350px;
  position: absolute;
  bottom: -84px;
  right: 0;
  z-index: 4;

  /* ${media.tablet`
    width: 600px;
    bottom: -40px;
  `} */

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
  width: 200px;
  position: absolute;
  bottom: 170px;
  right: -16px;
  z-index: 1;

  /* ${media.tablet`
    right: 0;
    bottom: 300px;
    width: 350px;
  `} */

  ${media.desktop`
    bottom: 190px;
    width: 250px;
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
  width: 450px;
  position: absolute;
  bottom: 0px;
  right: -16px;
  z-index: 3;

  /* ${media.tablet`
    bottom: 72px;
    width: 750px;
  `} */

  ${media.desktop`
    right: 0;
    bottom: 30px;
    width: 500px;
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
  position: fixed;
  bottom: -10px;
  left: 0;
  z-index: -1;
  display: none;

  ${media.desktop`
    display: block;
  `}
`;

export const _bottomBG = styled.img`
  position: fixed;
  bottom: 0;
  z-index: -1;
  width: 800px;
  bottom: 0;
  left: -96px;

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
  `}

  ${media.largeWide`
    width: 2000px;
  `}

  ${media.maxWide`
    width: 3200px;
  `}
`;

export const _mountainsMid = styled.img`
  bottom: 100px;
  position: fixed;
  z-index: -1;
  width: 800px;
  left: -96px;

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
  `}

  ${media.largeWide`
    bottom: 240px;
    width: 2000px;
  `}

  ${media.maxWide`
    width: 2400px;
  `}
`;

export const _sky = styled.img`
  position: fixed;
  z-index: -1;
  left: -250px;
  width: 1300px;

  ${media.tablet`
    width: 1300px;
    left: -112px;
  `}

  ${media.desktop`
    width: 1300px;
    left: 0;
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
    width: 2400px;
  `}
`;

export const _social = styled.a`
  position: relative;
  cursor: pointer;
  color: #fff9f6;
  padding: 8px;
  border: none;
  font-size: 15px;
  width: 200px;
  height: 48px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 8px 24px 0 rgba(56, 143, 229, 0.36);
  font-weight: 500;
  transition: all 0.1s ease;
  > svg {
    fill: #fff9f6;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  &:first-child {
    margin-right: 16px;
  }
  &:last-child {
    margin-left: 16px;
  }
  ${media.desktop`
    display: flex;
  `}
`;

export const _refer = styled.div`
  position: relative;
  z-index: 99999;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.24);
  min-width: 164px;
  width: 224px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 152, 48, 0.69);
  border: 2px solid rgba(255, 152, 48, 0.69);
  backdrop-filter: blur(40px) saturate(110%) hue-rotate(160deg) brightness(60%)
    contrast(110%);
  box-shadow: 0 8px 24px 0 rgba(85, 48, 48, 0.36);
  cursor: pointer;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 100%;
    height: 100%;
  }
`;
