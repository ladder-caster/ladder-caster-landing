import styled, { css } from "styled-components";
import { media } from "./utils";

export const _faq = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #302052;
`;

export const _container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 32px;
  background-color: #271849;
  backdrop-filter: blur(6px);
  border-radius: 2px;
  margin: 24px 0 0;
  height: 100%;
  transition: all 100ms;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  ${media.desktop`
        padding: 32px 24px;
        &:focus {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }`}

  ${media.mobile`
    padding: 28px 32px;
  `}
`;
export const _float = styled.div`
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
`;

export const _wrapper = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  min-height: 100vh;

  ${media.desktop`
    padding-top: 0;
  `}
  > div {
    width: 40%;
    > h1 {
      font-weight: 800;
      line-height: 62px;
      color: #fff9f6;
      letter-spacing: 1px;
      margin: 0;
      font-family: "Poppins", sans-serif;
      font-size: 54px;
      max-width: 70%;

      ${media.mobile`
        padding: 0 0 300px;
        font-size: 54px;
    `}
    }
  }
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

export const _desc = styled.div`
  position: relative;
  color: fff9f6;
  font-size: 16px;
  letter-spacing: 2px;
  text-shadow: 1px 1px 0 rgba(52, 42, 60, 0.1);
  max-height: 0px;
  overflow: hidden;
  transition: all 50ms ease;
  ${media.mobile`
    font-size: 12px;
    
  `}

  > div {
    opacity: 0;
    transition-property: opacity;
    transition-duration: 50ms;
    transition-delay: 0s;
  }
`;

export const _expanded = styled.div`
  max-height: 275px;
  margin: 32px 0 0;

  > div {
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.1s;
    transition-delay: 0.05s;
  }
`;

export const _title = styled.div`
  position: relative;
  color: #fff9f6;
  font-size: 14px;
  letter-spacing: 2px;
  text-shadow: 1px 1px 0 rgba(52, 42, 60, 0.1);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-transform: uppercase;
  ${media.mobile`
    font-size: 11px;
    
  `}

  > svg {
    width: 18px;
    height: 18px;
    transform: ${({ $active }) =>
      $active ? " rotate(270deg)" : "rotate(90deg)"};
    transition: all 0.3s ease-in;
  }
`;

export const _button = styled.div`
  padding: 12px 24px;
  color: #fff9f6;
  text-transform: uppercase;
  font-size: 12px;
  border: 1px solid #fff9f6;
  border-radius: 6px;
  margin-left: 32px;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 2px;
  &:hover {
    color: #9a8ea4;
    background-color: #fff9f6;
  }
`;
