import styled, { css, keyframes } from "styled-components";
import { media } from "../../../../styles/utils";

export const _item = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 32px;
   `}
`;

export const _left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;

  ${media.tablet`
    margin-bottom: 0;
  `}
`;

export const _middle = styled.div``;

export const _right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.tablet`
    flex-direction: row;
    align-items: center;
  `}
`;

export const _title = styled.div`
  font-weight: bold;

  ${({ $tier }) => {
    switch ($tier) {
      case 1:
        return css`
          color: rgb(166, 234, 251);
        `;
      case 2:
        return css`
          color: rgb(176, 138, 229);
        `;
      case 3:
        return css`
          color: rgb(255, 152, 48);
        `;
    }
  }}
`;

export const _apr = styled.div``;

export const _input = styled.div`
  background: #1b153f;
  box-shadow: inset 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 12px;

  display: flex;
  align-items: center;
`;

export const _inputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  > img {
    width: 32px;
    height: 32px;
  }
`;

export const _inputBox = styled.input`
  background: transparent;
  border: none;
  font-size: 16px;
  color: #fff;
  font-weight: bold;

  ${media.tablet`
    font-size: 20px;
  `}

  &::placeholder {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const _inputMax = styled.button`
  background: rgba(255, 249, 246, 0.1);
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.015em;

  ${({ $tier }) => {
    switch ($tier) {
      case 1:
        return css`
          color: rgb(166, 234, 251);
        `;
      case 2:
        return css`
          color: rgb(176, 138, 229);
        `;
      case 3:
        return css`
          color: rgb(255, 152, 48);
        `;
    }
  }}
`;

export const _action = styled.button`
  border: none;
  border-radius: 8px;
  height: 56px;
  width: 140px;
  color: #fff;
  margin-top: 16px;

  > div {
    &:first-child {
      font-size: 24px;
      font-weight: bold;
    }
    &:last-child {
      font-size: 12px;
    }
  }

  ${media.tablet`
    margin-top: 0;
    margin-left: 32px;
  `}

  ${({ $tier, $active }) => {
    switch ($tier) {
      case 1:
        return css`
          background: #3c8fa2;
          ${!$active &&
          css`
            opacity: 0.5;
          `}
        `;
      case 2:
        return css`
          background: #6a2d99;
          ${!$active &&
          css`
            opacity: 0.5;
          `}
        `;
      case 3:
        return css`
          background: #a45c28;
          ${!$active &&
          css`
            opacity: 0.5;
          `}
        `;
    }
  }}
`;
