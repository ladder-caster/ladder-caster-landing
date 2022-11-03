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
  _mountainLightTransition,
  _particlesForest,
  _wizardsScene,
  _wizard,
  _particlesForestWizard,
  _container,
} from "../styles/vor.styled";

const VOR = ({ render }) => {
  const loopControls = {
    loop: true,
    autoplay: true,
  };

  const loopControlsStop = {
    loop: false,
    autoplay: false,
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
    // {
    //   filename: "mountainLightTransition",
    //   sComponent: _mountainLightTransition,
    //   controls: loopControlsStop,
    // },
    // {
    //   filename: "midGroundLightTransition",
    //   sComponent: _midGroundLightTransition,
    //   controls: loopControlsStop,
    //   isScroll: true,
    // },
    // {
    //   filename: "cloudsDaytime",
    //   sComponent: _cloudsDaytime,
    //   controls: loopControlsStop,
    // },
    // {
    //   filename: "cloudsSunset",
    //   sComponent: _cloudsSunset,
    //   controls: loopControlsStop,
    // },
  ];

  const forcefield = [
    {
      filename: "forceField",
      sComponent: _forceField,
      controls: loopControls,
    },
  ];

  const SCR1Array = [
    // {
    //   filename: "lightAndParticles",
    //   sComponent: _lightAndParticles,
    //   controls: loopControls,
    // },
    {
      filename: "backWizard",
      sComponent: _backWizard,
      controls: loopControls,
    },
    {
      filename: "midWizard",
      sComponent: _midWizard,
      controls: loopControls,
    },
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

  const SCR3Array = [
    {
      filename: "particlesForest",
      sComponent: _particlesForest,
      controls: loopControls,
    },
    {
      filename: "wizardsScene",
      sComponent: _wizardsScene,
      controls: loopControls,
    },
  ];

  const SCR6Array = [
    {
      filename: "particlesForest",
      sComponent: _particlesForestWizard,
      controls: loopControls,
    },
    {
      filename: "wizard",
      sComponent: _wizard,
      controls: loopControls,
    },
  ];

  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  const handleAnimationComponent = useCallback(
    (arr, screen) => {
      if (lottie) {
        let list = [];

        arr.forEach((obj, key) => {
          list.push(
            <Animation
              key={`${key}-${screen}`}
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
    return handleAnimationComponent(BGArray, "bg");
  }, [BGArray, lottie]);

  const animationSCR1 = useMemo(() => {
    return handleAnimationComponent(SCR1Array, "SCR1");
  }, [SCR1Array, lottie]);

  const animationSCR2 = useMemo(() => {
    return handleAnimationComponent(SCR2Array, "SCR2");
  }, [SCR2Array, lottie]);

  const animationSCR3 = useMemo(() => {
    return handleAnimationComponent(SCR3Array, "SCR3");
  }, [SCR3Array, lottie]);

  const animationSCR6 = useMemo(() => {
    return handleAnimationComponent(SCR6Array, "SCR4");
  }, [SCR6Array, lottie]);

  const animationForceField = useMemo(() => {
    return handleAnimationComponent(forcefield, "forcefield");
  }, [forcefield, lottie]);

  const animation = useMemo(() => {
    switch (render) {
      case "SCR1": {
        return <_parent>{animationSCR1}</_parent>;
      }
      case "SCR2": {
        return <div>{animationSCR2}</div>;
      }
      case "SCR3": {
        return <div>{animationSCR3}</div>;
      }
      case "SCR6": {
        return <div>{animationSCR6}</div>;
      }
      case "bg": {
        return <div>{animationsBG}</div>;
      }
      case "forcefield": {
        return <div>{animationForceField}</div>;
      }
      default:
        return <></>;
    }
  }, [
    render,
    animationSCR1,
    animationSCR2,
    animationSCR3,
    animationSCR6,
    animationsBG,
    animationForceField,
  ]);

  return <_container id="container1-2">{animation}</_container>;
};

export default VOR;

const Animation = ({ lottie, animate, controls, _sComponent, isScroll }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState(0);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (animationData) {
      let finalControls = { ...controls };
      if (window.innerWidth < 900) {
        finalControls.autoplay = false;
      }
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        path: `/animations/${animate.filename}.json`,
        ...finalControls,
        rendererSettings: { preserveAspectRatio: "none" },
      });

      if (isScroll) {
        window.addEventListener("scroll", () => {
          if (window.outerWidth > 900) {
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

            animation.goToAndStop((scrollPercentRounded / 100) * 10000);

            let MAX_POSITION = 100;

            setPosition(
              Math.min((scrollPercentRounded / 100) * MAX_POSITION * 5, 90)
            );
          }
        });
      }

      return () => animation.destroy();
    }
  }, [animationData]);

  useEffect(() => {
    if (lottie && ref.current) {
      import(`/public/animations/${animate.filename}.json`).then(
        setAnimationData
      );
    }
  }, [lottie, ref.current]);

  return (
    <_sComponent
      ref={ref}
      style={{
        transition: "transform 0.1s",
        transform: `translateY(-${position}px)`,
      }}
    />
  );
};
