import styled, { css, keyframes } from "styled-components";

export const _overlay = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;

  padding: 0 0 16px 16px;
`;

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const _card = styled.div`
  position: relative;
  width: 275px;
  display: flex;
  align-items: center;
  background-color: #4c4a66;
  box-shadow: 5px 7px 15px -3px rgba(0, 0, 0, 0.5);
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
`;

export const _cardInfo = styled.div`
  padding-left: 8px;
`;

export const _cardIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
`;

export const _loading = css`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
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

export const _error = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #db4040;
  border-radius: 100%;

  &:after {
    content: "!";
  }
`;

export const _success = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #52d180;
  height: 24px;
  width: 24px;
  border-radius: 100%;
  &:after {
    content: "";
    position: relative;
    top: -10%;
    display: block;
    transform: rotate(45deg);
    height: 12px;
    width: 6px;
    border-bottom: 1.5px solid #fff9f6;
    border-right: 1.5px solid #fff9f6;
  }
`;

export const _iconStatus = styled.div`
  ${({ $item }) => {
    switch ($item) {
      case "error":
        return _error;
      case "success":
        return _success;
      case "loading":
        return _loading;
    }
  }}
`;
