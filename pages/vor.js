import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  _backWizard,
  _cloudsDaytime,
  _cloudsSunset,
  _forceField,
  _frontWizard,
  _lightAndParticles,
  _midGroundLightTransition,
  _midWizard,
  _skyTransition,
  _wandTile,
  _wizardAndBook,
  _parent,
} from "../styles/vor.styled";

const VOR = () => {
  const loopControls = {
    loop: true,
    autoplay: true,
  };

  const scrollControls = {
    loop: false,
    autoplay: false,
  };

  const BGArray = [
    {
      filename: "skyTransition",
      sComponent: _skyTransition,
      controls: scrollControls,
      isScroll: true,
    },
    {
      filename: "midGroundLightTransition",
      sComponent: _midGroundLightTransition,
      controls: scrollControls,
      isScroll: true,
    },
    {
      filename: "cloudsDaytime",
      sComponent: _cloudsDaytime,
      controls: loopControls,
    },
    {
      filename: "cloudsSunset",
      sComponent: _cloudsSunset,
      controls: loopControls,
    },
    {
      filename: "forceField",
      sComponent: _forceField,
      controls: loopControls,
    },
  ];

  const SCR1Array = [
    {
      filename: "lightAndParticles",
      sComponent: _lightAndParticles,
      controls: loopControls,
    },
    { filename: "backWizard", sComponent: _backWizard, controls: loopControls },
    { filename: "midWizard", sComponent: _midWizard, controls: loopControls },
    {
      filename: "frontWizard",
      sComponent: _frontWizard,
      controls: loopControls,
    },
  ];

  const SCR2Array = [
    { filename: "wandTile", sComponent: _wandTile, controls: loopControls },
    {
      filename: "wizardAndBook",
      sComponent: _wizardAndBook,
      controls: loopControls,
    },
  ];

  const [lottie, setLottie] = useState(null);
  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  const handleAnimationComponent = useCallback(
    (arr) => {
      if (lottie) {
        let list = [];

        arr.forEach((obj) => {
          list.push(
            <Animation
              animate={obj}
              lottie={lottie}
              controls={obj.controls}
              _sComponent={obj.sComponent}
              isScroll={obj.isScroll}
            />
          );
        });
        return list;
      }
      return null;
    },
    [lottie]
  );

  const animationsBG = useMemo(() => {
    return handleAnimationComponent(BGArray);
  }, [BGArray, lottie]);

  const animationSCR1 = useMemo(() => {
    return handleAnimationComponent(SCR1Array);
  }, [SCR1Array, lottie]);

  const animationSCR2 = useMemo(() => {
    return handleAnimationComponent(SCR2Array);
  }, [SCR2Array, lottie]);

  return (
    <div id="container1-2">
      {animationsBG}
      <_parent>{animationSCR1}</_parent>
      <_parent>{animationSCR2}</_parent>
    </div>
  );
};

export default VOR;

const Animation = ({ lottie, animate, controls, _sComponent, isScroll }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        path: `/animations/${animate.filename}.json`,
        ...controls,
      });

      if (isScroll) {
        window.addEventListener("scroll", () => {
          let supportPageOffset = window.pageXOffset !== undefined;
          let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
          let scroll = {
            x: supportPageOffset
              ? window.pageXOffset
              : isCSS1Compat
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft,
            y: supportPageOffset
              ? window.pageYOffset
              : isCSS1Compat
              ? document.documentElement.scrollTop
              : document.body.scrollTop,
          };

          let scrollPercent =
            (scroll.y /
              (document.documentElement.offsetHeight - window.innerHeight)) *
            100;

          let scrollPercentRounded = Math.round(
            scrollPercent > 100 ? 100 : scrollPercent
          );

          animation.goToAndStop((scrollPercentRounded / 100) * 1500);
        });
      }

      return () => animation.destroy();
    }
  }, [lottie, ref.current]);

  return <_sComponent ref={ref} />;
};
