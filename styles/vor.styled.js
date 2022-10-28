import styled, { css } from "styled-components";
import { media } from "./utils";

export const __bgFixed = css`
  position: absolute;
  top: 0;
  /* height: 100vh;
  width: 100vw; */
`;

export const _sc1 = css`
  position: absolute;
`;

export const _sc2 = css`
  position: absolute;
  top: 122vh;
`;

export const _sc3 = css`
  position: absolute;
  top: 222vh;
`;

export const _sc6 = css`
  position: absolute;
  top: 532vh;
`;

export const _skyTransition = styled.div`
  ${__bgFixed}
`;

export const _midGroundLightTransition = styled.div`
  ${__bgFixed}
  width: 110vw;
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
export const _mountainLightTransition = styled.div`
  ${__bgFixed}
`;

export const _lightAndParticles = styled.div`
  ${_sc1}
  top: 100vh;
  left: 0;
  z-index: 1;
  display: none;
`;

export const _backWizard = styled.div`
  ${_sc1}
  bottom: 48px;
  right: 32px;
  z-index: 2;
  width: 1400px;
`;

export const _midWizard = styled.div`
  ${_sc1}
  right: 32px;
  bottom: 48px;
  z-index: 2;
  width: 1400px;
`;

export const _frontWizard = styled.div`
  ${_sc1}
  right: 32px;
  bottom: 48px;
  z-index: 2;
  width: 1400px;
`;

export const _wandTile = styled.div`
  ${_sc2}
  top: calc(100vh + 244px);
  left: 64px;
  z-index: 2;
  width: 1600px;
`;

export const _wizardAndBook = styled.div`
  ${_sc2}
  top: calc(100vh + 284px);
  left: 66px;
  z-index: 2;
  width: 1475px;
`;

export const _particlesForest = styled.div`
  ${_sc3}
  left: 8px;
  z-index: 2;
  width: 100%;
`;

export const _wizardsScene = styled.div`
  ${_sc3}
  right: -96px;
  z-index: 2;
  width: 1500px;

  ${media.extraWide`
    right: 24px;
  `}
`;

export const _particlesForestWizard = styled.div`
  ${_sc6}
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;

  > svg {
    position: absolute;
    left: -40vw;
    width: 100% !important;
  }
`;

export const _wizard = styled.div`
  ${_sc6}
  left: -650px;
  z-index: 2;
  width: 1500px;
`;

export const _parent = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
`;
