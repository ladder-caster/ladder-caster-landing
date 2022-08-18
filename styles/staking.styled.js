import styled, { css } from "styled-components";
import { media } from "./utils";

export const _page = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1c1542;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Poppins", sans-serif;
  color: #fff9f6;
  letter-spacing: 0.4px;
`;

export const _content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 128px;
  padding-bottom: 64px;
`;

export const _column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;

export const _title = styled.div`
  font-size: 42px;
  font-weight: 600;
  line-height: 66px;
  margin-bottom: 8px;
  text-align: center;
  background: linear-gradient(
    135deg,
    hsla(192, 91%, 82%, 1) 7%,
    hsla(236, 98%, 80%, 1) 53%,
    hsla(265, 53%, 56%, 1) 78%,
    hsla(354, 38%, 61%, 1) 89%,
    hsla(30, 100%, 59%, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const _subTitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  text-align: center;
  max-width: 500px;
`;

export const _grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(42px, max-content));
  column-gap: 96px;
  row-gap: 56px;
  margin-top: 48px;
  grid-template-areas:
    " a b c"
    " d e f";
  justify-content: center;
  align-items: center;
`;

export const _stakingTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;

  ${({ $item }) =>
    $item &&
    css`
      text-align: center;
      margin-top: 16px;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    `}
`;

export const _stakingContent = styled.div`
  font-size: 26px;
  font-weight: 700;
  line-height: 36px;
  margin-top: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const _item = styled.div`
  position: relative;
  width: 250px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 4px;
  padding-top: 12px;
  justify-self: center;
  align-self: center;

  box-shadow: 0px 0px 8px 8px rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);

  cursor: ${({ $connected }) => ($connected ? "pointer" : "default")};

  ${({ $active }) =>
    $active &&
    css`
      border: 1px solid rgba(255, 255, 255, 1);
    `}

  ${({ $color }) => {
    switch ($color) {
      case "orange":
        return css`
          box-shadow: 0px 0px 8px 8px rgba(255, 152, 48, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 152, 48, 0.3);

          ${({ $connected }) =>
            $connected &&
            css`
              &:hover {
                box-shadow: 0px 0px 16px 9px rgba(255, 152, 48, 0.5);
                border: 2px solid rgba(255, 255, 255, 0.7);
                background: rgba(255, 152, 48, 0.5);
              }
            `}
          ${({ $active }) =>
            $active &&
            css`
              box-shadow: 0px 0px 16px 9px rgba(255, 152, 48, 0.5);
              border: 2px solid rgba(255, 255, 255, 0.7);
              background: rgba(255, 152, 48, 0.5);
            `}
        `;
      case "purple":
        return css`
          box-shadow: 0px 0px 8px 8px rgba(133, 83, 202, 0.35);
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: rgba(133, 83, 202, 0.35);
          ${({ $connected }) =>
            $connected &&
            css`
              &:hover {
                box-shadow: 0px 0px 16px 9px rgba(133, 83, 202, 0.5);
                border: 2px solid rgba(255, 255, 255, 0.7);
                background: rgba(133, 83, 202, 0.5);
              }
            `}
          ${({ $active }) =>
            $active &&
            css`
              box-shadow: 0px 0px 16px 9px rgba(133, 83, 202, 0.5);
              border: 2px solid rgba(255, 255, 255, 0.7);
              background: rgba(133, 83, 202, 0.5);
            `}
        `;
      case "blue":
        return css`
          box-shadow: 0px 0px 8px 8px rgba(166, 234, 251, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: rgba(166, 234, 251, 0.3);
          ${({ $connected }) =>
            $connected &&
            css`
              &:hover {
                box-shadow: 0px 0px 16px 9px rgba(166, 234, 251, 0.5);
                border: 2px solid rgba(255, 255, 255, 0.7);
                background: rgba(166, 234, 251, 0.4);
              }
            `}
          ${({ $active }) =>
            $active &&
            css`
              box-shadow: 0px 0px 16px 9px rgba(166, 234, 251, 0.5);
              border: 2px solid rgba(255, 255, 255, 0.7);
              background: rgba(166, 234, 251, 0.4);
            `}
        `;
    }
  }};
`;

export const _apy = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
`;

export const _container = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const _contentSubtitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  font-style: normal;
  text-align: center;
`;

export const _modal = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  border-radius: 20px;
  padding: 32px;

  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const _modalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 96px;
  margin-bottom: 32px;
  gap: 16px;
`;

export const _modalTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;

  ${({ $color }) => {
    switch ($color) {
      case "blue":
        return css`
          color: rgba(166, 234, 251, 1);
        `;
      case "purple":
        return css`
          color: rgba(176, 138, 229, 1);
        `;
      case "orange":
        return css`
          color: rgba(255, 152, 48, 1);
        `;
    }
  }}
`;

export const _inputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const _valueContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: max-content;
  min-height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 14px;
  padding: 16px 88px 16px 52px;
  gap: 8px;
  cursor: pointer;
  position: relative;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.6);
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
`;

export const _maxButton = styled.div`
  height: fit-content;
  align-items: center;
  margin: 0 auto;
  color: #989efe;
  background-color: rgba(166, 234, 251, 0.2);
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  right: 16px;
  padding: 6px 14px;
  &:hover {
    color: #a8adff;
    background-color: rgba(166, 234, 251, 0.1);
  }
`;

export const _button = styled.button`
  ${({ $stake }) =>
    $stake &&
    css`
      height: 52px;
      border: none;
      outline: none;
      font-size: 18px;
      color: #fff9f6;
      text-align: center;
      background-color: #868efe;
      border-radius: 8px;
      padding: 4px 32px 4px 32px;
      cursor: pointer;

      &:hover {
        background-position: 90% 100%;
      }
    `}

  ${({ $secondary }) =>
    $secondary &&
    css`
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      border-radius: 8px;
      padding: 8px 20px;
      cursor: pointer;

      color: #989efe;
      border: 1px solid #989efe;
      background-color: transparent;

      &:hover {
        color: #c3c7ff;
        border: 1px solid #c3c7ff;
      }

      &:disabled {
        color: #989ffe93;
        border: 1px solid #989ffe93;
        cursor: default;
      }
    `}
`;

export const _detailSegment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 0;
`;

export const _row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ $top }) =>
    $top &&
    css`
      margin-top: 4px;
      margin-bottom: 24px;
    `}
`;

export const _icon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
`;

export const _info = styled.div`
  ${({ $row }) =>
    $row &&
    css`
      display: flex;
      flex-direction: row;
      gap: 8px;
    `}
  ${({ $spread }) =>
    $spread &&
    css`
      display: flex;
      width: 200px;
      justify-content: space-between;
    `}
`;

export const _text = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  align-self: center;
  justify-self: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${({ $duration }) =>
    $duration &&
    css`
      display: contents;
    `}

  ${({ $color }) => {
    switch ($color) {
      case "blue":
        return css`
          font-weight: 600;
          color: rgba(166, 234, 251, 1);
        `;
      case "purple":
        return css`
          font-weight: 600;
          color: rgba(176, 138, 229, 1);
        `;
      case "orange":
        return css`
          font-weight: 600;
          color: rgba(255, 152, 48, 1);
        `;
    }
  }}
`;

export const _selectContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding-right: 8px;
`;

export const _select = styled.select`
  cursor: pointer;
  position: relative;
  background-color: transparent;
  font-family: inherit;
  color: #fff9f6;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px 8px 16px;
`;

export const _connectCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const _connectButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff9f6;
  padding: 12px 32px;
  transition: transform 0.2s ease-in;
  border-radius: 12px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const _connectText = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #8553ca;
  letter-spacing: 2px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 0.05);
  }
`;
