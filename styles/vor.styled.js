import styled, { css, keyframes } from "styled-components";

export const __bgFixed = css`
  position: fixed;
  /* height: 100vh; */
  width: 100vw;
`;

export const _sc1 = css`
  position: absolute;
`;

export const _sc2 = css`
  position: absolute;
`;

export const _skyTransition = styled.div`
  ${__bgFixed}
`;

export const _midGroundLightTransition = styled.div`
  ${__bgFixed}
`;

export const _cloudsDaytime = styled.div`
  ${__bgFixed}
`;

export const _cloudsSunset = styled.div`
  ${__bgFixed}
  opacity: 0;
`;

export const _forceField = styled.div`
  ${__bgFixed}
`;

export const _lightAndParticles = styled.div`
  ${_sc1}
`;

export const _backWizard = styled.div`
  ${_sc1}
  top: 48px;
  left: 128px;
`;

export const _midWizard = styled.div`
  ${_sc1}
  width: calc(100% - 164px);
  left: 164px;
  top: -64px;
`;

export const _frontWizard = styled.div`
  ${_sc1}
  width: calc(100% - 164px);
  left: 164px;
  top: -64px;
`;

export const _wandTile = styled.div`
  ${_sc2}
`;

export const _wizardAndBook = styled.div`
  ${_sc2}
`;

export const _parent = styled.div`
  height: 100vh;
  width: 100vw;
`;
