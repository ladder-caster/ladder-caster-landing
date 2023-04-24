import styled, { css, keyframes } from "styled-components";
import { media } from "../../../styles/utils";

export const _stake = styled.div`
  width: 100%;
  padding: 0 8px;
`;

export const _container = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);

  > div {
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);

    &:last-child {
      border-bottom: none;
    }
  }
`;
