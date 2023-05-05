import styled, { css } from "styled-components";

export const _container = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  margin: 40px 8px 0;
  width: 100%;
  overflow: auto;

  max-height: 600px;
`;

export const _grid = styled.table`
  width: 100%;
  background: rgba(255, 255, 255, 0.06);
  border-collapse: collapse;
  border-style: hidden;
  min-width: 700px;
`;

export const _head = styled.thead`
  > tr {
    > td {
      padding-top: 8px;
      padding-bottom: 8px;

      &:first-child {
        padding-left: 32px;
      }

      &:last-child {
        padding-right: 32px;
      }
    }
  }
`;

export const _body = styled.tbody`
  > tr {
    border-top: 2px solid rgba(255, 255, 255, 0.5);

    > td {
      padding-top: 32px;
      padding-bottom: 32px;
      &:first-child {
        padding-left: 32px;
      }

      &:last-child {
        padding-right: 32px;
      }
    }
  }
`;

export const _row = styled.tr`
  margin: 0 16px;
`;

export const _cell = styled.td``;

export const _title = styled.div`
  font-weight: bold;

  ${({ $tier }) => {
    switch ($tier) {
      case 1:
      case 4:
        return css`
          color: rgb(166, 234, 251);
        `;
      case 2:
      case 5:
        return css`
          color: rgb(176, 138, 229);
        `;
      case 3:
      case 6:
        return css`
          color: rgb(255, 152, 48);
        `;
    }
  }}
`;

export const _claim = styled.button`
  background: rgba(255, 249, 246, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  padding: 4px 16px;
`;

export const _right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const _rightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _unstake = styled.button`
  padding: 16px 32px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-weight: bold;

  ${({ $tier, $active }) => {
    switch ($tier) {
      case 1:
      case 4:
        return css`
          background: #3c8fa2;
          ${!$active &&
          css`
            opacity: 0.5;
          `}
        `;
      case 2:
      case 5:
        return css`
          background: #6a2d99;
          ${!$active &&
          css`
            opacity: 0.5;
          `}
        `;
      case 3:
      case 6:
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

export const _tooltip = styled.div`
  position: relative;
`;

export const _tooltipContent = styled.div`
  position: absolute;
  background-color: #4c4a66;
  box-shadow: 5px 7px 15px -3px rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  right: 0;
  bottom: 25px;

  ${({ $big }) =>
    $big &&
    css`
      min-width: 200px;
    `}
`;
