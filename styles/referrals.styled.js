import styled, { css, keyframes } from "styled-components";
import { media } from "./utils";

export const fadeIn = keyframes`
  0% {
    opacity: 0.0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1.0;
  }
`;

export const fadeInMoveLeft = keyframes`
0% {
  opacity: 0.0;
  transform: translate(-100px);

}
100% {
  opacity: 1.0;
}
`;

export const fadeInMoveRight = keyframes`
0% {
  opacity: 0.0;
  transform: translate(100px);
}
100% {
  opacity: 1.0;
}
`;

export const _page = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: "Poppins", sans-serif;
  color: #fff9f6;
  letter-spacing: 0.4px;
  overflow: hidden;
`;

export const _background = styled.div`
  position: relative;
  width: 0;
  height: 0;
`;

export const _square = css`
  position: absolute;
  background-color: white;
  width: 1000px;
  height: 1000px;
  opacity: 0.1;
  border-radius: 8px;
`;

export const _squareRight = styled.div`
  ${_square}
  transform: translate(450px, -200px) rotate(45deg);
`;

export const _squareLeft = styled.div`
  ${_square}
  transform: translate(-150%) rotate(45deg);
`;

export const _body = styled.div`
  max-width: 1200px;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    padding-top: 200px;
  `}
`;

export const _title = styled.div`
  padding-bottom: 32px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in;
  text-shadow: 2px 2px 0 rgba(52, 42, 60, 0.1);
  width: 100%;
  padding: 16px;

  ${media.tablet`
    font-size: 48px;
  `}
`;

export const _description = styled.div`
  font-size: 14px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in;
  animation-delay: 0.25s;
  animation-fill-mode: backwards;
  text-shadow: 2px 2px 0 rgba(52, 42, 60, 0.1);

  width: 100vw;
  padding: 0 16px;

  ${media.tablet`
    width: 65%;
    padding: 16px;
  `}
`;

export const _linkMe = styled.div``;

export const _box = styled.div`
  position: relative;
  width: 95vw;
  min-height: 500px;
  height: 500px;
  background-color: rgb(235, 235, 235);
  margin-top: 48px;
  margin-bottom: 48px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;

  ${media.tablet`
  border-radius: 32px;
    width: 75vw;
  `}
`;

export const _innerBox = styled.div`
  margin: 16px;
  background-color: rgb(33, 35, 73);
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;

  ${media.tablet`
    margin: 32px;
    width: calc(100% - 64px);
    height: calc(100% - 64px);
  `}
`;

export const _promoTitle = styled.div`
  margin-top: 48px;
  padding: 8px 16px;
  border-radius: 32px;
  background-color: rgb(48, 56, 103);
  box-shadow: 0px 10px 70px 2px rgba(0, 0, 0, 0.5);
  color: #989efe;
`;

export const floatAnimation = keyframes`
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-20px);
    }
    100% {
        transform: translatey(0px);
    }
`;

export const _coinAnimate = styled.div`
  position: absolute;
  top: 50px;
  right: -125px;

  display: none;

  ${media.desktop`
    display: block;
  `}
`;

export const _wizard = styled.div`
  position: absolute;
  top: 45px;
  display: none;
  left: -230px;

  ${media.desktop`
    display: block;
  `}

  ${media.wide`
    left: -190px;
  `}
`;

export const _progressPromo = styled.div`
  width: 400px;
  height: 75px;
`;

export const _stepContainer = styled.div`
  border-radius: 8px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _actionDescription = styled.div`
  text-align: center;
  max-width: 420px;
  padding: 0 0 16px 0;
  font-size: 24px;
  font-weight: 700;
  width: 100%;

  ${media.tablet`
    padding: 0 64px 16px 64px;
  `};
`;

export const _buttonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const _comment = styled.div`
  padding-top: 8px;
  font-size: 12px;
  opacity: 0.5;
`;

export const _actionButton = styled.div`
  border-radius: 4px;
  background: rgb(98, 91, 254);
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 1s box-shadow, 1s transform;
  margin-top: 24px;
  font-weight: 700;
  letter-spacing: 2px;

  &:hover {
    box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.66);
    transform: translate(0px, -10px) scale(1.1);
  }

  ${({ $hover }) => {
    if ($hover)
      return css`
        box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.66);
        transform: translate(0px, -10px) scale(1.1);
      `;
  }}

  &:active {
    transform: translate(0px, -10px) scale(0.9);
  }
`;

export const _input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  letter-spacing: 1px;
  color: inherit;
  line-height: 24px;
  font-weight: bold;
  background: transparent;
  text-align: left;
  cursor: pointer;

  &::placeholder {
    font-size: 12px;
  }
`;

export const _inputContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: max-content;
  min-height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 14px;
  padding: 16px;
  cursor: pointer;
  position: relative;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const _loading = styled.div`
  border: 2px solid transparent;
  border-top: 2px solid #fff9f6;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation-name: ${spin};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const _successContainer = styled.div`
  margin-top: -64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _confetti = styled.div`
  width: 200px;
  height: 200px;
`;

export const _redirection = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: light;
  cursor: pointer;
  padding: 8px 16px;
  background: rgb(98, 91, 254);
  border-radius: 16px;
  transition: 0.2s transform;

  > span {
    padding-right: 8px;
    border-right: 1px solid white;
  }
  > svg {
    margin-left: 8px;
    width: 6px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
