import styled, { css } from "styled-components";
import { media } from "./utils";

export const __bgFixed = css`
  position: absolute;
  top: 0;
`;

export const _sc1 = css`
  position: absolute;
`;

export const _sc2 = css`
  position: absolute;
`;

export const _sc3 = css`
  position: absolute;
`;

export const _sc6 = css`
  position: absolute;
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
  bottom: -48px;
  right: -32px;
  z-index: 2;
  width: 800px;

  ${media.tablet`
    bottom: 48px;
    right: 64px;
    width: 1200px;
  `}

  ${media.desktop`
    bottom: 24px;
    width: 800px;
  `}

  ${media.wide`
    bottom: 64px;
    width: 900px;
  `}

  ${media.extraWide`
    width: 1200px;
  `}

  ${media.maxWide`
    bottom: 0;
    width: 2000px;
  `}
`;

export const _midWizard = styled.div`
  ${_sc1}
  right: -48px;
  bottom: -32px;
  z-index: 2;
  width: 800px;

  ${media.tablet`
    bottom: 48px;
    right: 64px;
    width: 1200px;
  `}

  ${media.desktop`
    bottom: 24px;
    width: 800px;
  `}

  ${media.wide`
    bottom: 72px;
    width: 900px;
  `}

  ${media.extraWide`
    width: 1200px;
  `}

  ${media.maxWide`
    bottom: 0;
    width: 2000px;
  `}
`;

export const _frontWizard = styled.div`
  ${_sc1}
  right: -32px;
  bottom: -32px;
  z-index: 2;
  width: 800px;

  ${media.tablet`
    bottom: 48px;
    right: 64px;
    width: 1200px;
  `}

  ${media.desktop`
    bottom: 24px;
    width: 800px;
  `}

  ${media.wide`
    bottom: 72px;
    width: 900px;
  `}

  ${media.extraWide`
    width: 1200px;
  `}

  ${media.maxWide`
    bottom: 0;
    width: 2000px;
  `}
`;

export const _wandTile = styled.div`
  ${_sc2}
  top: 176px;
  left: -92px;
  z-index: 2;
  width: 800px;

  ${media.tablet`
    left: -110px;
    top: -108px;
    width: 1300px;
  `}

  ${media.desktop`
    top: 0px;
    width: 1100px;
  `}

  ${media.wide`
    top: -165px;
    width: 1400px;
  `}

  ${media.extraWide`
    top: -330px;
    width: 1700px;
  `}

  ${media.largeWide`
    top: -500px;
    width: 2000px;
  `}

  ${media.maxWide`
    top: -680px;
    width: 2300px;
  `}
`;

export const _wizardAndBook = styled.div`
  ${_sc2}
  top: 180px;
  left: -104px;
  z-index: 2;
  width: 800px;

  ${media.tablet`
    left: -130px;
    top: -108px;
    width: 1300px;
  `}

  ${media.desktop`
    top: 0px;
    width: 1100px;
  `}

  ${media.wide`
    left: -15px;
    top: -165px;
    width: 1400px;
  `}

  ${media.extraWide`
    top: -330px;
    width: 1700px;
  `}

  ${media.largeWide`
    top: -500px;
    width: 2000px;
  `}

  ${media.maxWide`
    top: -680px;
    width: 2300px;
  `}
`;

export const _particlesForest = styled.div`
  ${_sc3}
  top: -50px;
  left: -500px;
  z-index: 2;
  width: 1000px;

  ${media.tablet`
    width: 1600px;
    top: -350px;
    left: -700px;
  `}

  ${media.desktop`
    left: 32px;
    top: -25px;
    width: 1100px;
  `}

  ${media.wide`
    left: 64px;
    top: -112px;
    width: 1400px;
  `}

  ${media.extraWide`
    top: -425px;
    left: -15px;
    width: 1700px;
  `}

  ${media.largeWide`
    top: -475px;
    width: 1800px;
  `}

  ${media.maxWide`
    top: -750px;
    width: 2300px;
  `}
`;

export const _wizardsScene = styled.div`
  ${_sc3}
  top: -50px;
  left: -500px;
  z-index: 2;
  width: 1000px;

  ${media.tablet`
    width: 1600px;
    top: -350px;
    left: -700px;
  `}

  ${media.desktop`
    left: 32px;
    top: -25px;
    width: 1100px;
  `}

  ${media.wide`
    left: 64px;
    top: -112px;
    width: 1200px;
  `}

  ${media.extraWide`
    top: -425px;
    left: -15px;
    width: 1700px;
  `}

  ${media.largeWide`
    top: -475px;
    width: 1800px;
  `}

  ${media.maxWide`
    top: -750px;
    width: 2300px;
  `}
`;

export const _particlesForestWizard = styled.div`
  ${_sc6}
  top: -150px;
  left: -500px;
  z-index: 2;
  width: 1200px;

  ${media.tablet`
    width: 1800px;
    top: -450px;
    left: -650px;
  `}

  ${media.desktop`
    left: -425px;
    top: -45px;
    width: 1100px;
  `}

  ${media.wide`
    width: 1200px;
    top: -125px;
  `}

  ${media.extraWide`
    width: 1700px;
  `}

  ${media.largeWide`
    left: -725px;
    top: -475px;
    width: 1800px;
  `}

  ${media.maxWide`
    left: -825px;
    top: -750px;
    width: 2300px;
  `}
`;

export const _wizard = styled.div`
  ${_sc6}
  top: -150px;
  left: -500px;
  z-index: 2;
  width: 1200px;

  ${media.tablet`
    width: 1800px;
    top: -450px;
    left: -650px;
  `}

  ${media.desktop`
    left: -425px;
    top: -45px;
    width: 1100px;
  `}

  ${media.wide`
    left: -425px;
    top: -125px;
    width: 1200px;
  `}

  ${media.extraWide`
    top: -425px;
    left: -650px;
    width: 1700px;
  `}

  ${media.largeWide`
    left: -725px;
    top: -475px;
    width: 1800px;
  `}

  ${media.maxWide`
    left: -925px;
    top: -750px;
    width: 2300px;
  `}
`;

export const _parent = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
`;
