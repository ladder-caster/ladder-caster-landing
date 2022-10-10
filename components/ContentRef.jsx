import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  _page,
  _body,
  _title,
  _description,
  _background,
  _squareRight,
  _squareLeft,
  _box,
  _innerBox,
  _comment,
  _promoTitle,
  _coinAnimate,
  _wizard,
  _stepContainer,
  _actionDescription,
  _buttonContainer,
  _actionButton,
  _input,
  _inputContainer,
  _progressPromo,
  _loading,
} from "../styles/referrals.styled";
import Nav from "./nav";
import { BuddyContext } from "../wallet/BuddyContext";
import { Client } from "../wallet/Connection";
import { initBuddyClient, useWalletStore } from "../zustand";
import { useTranslation } from "react-i18next";
import {
  CSSTransition,
  SwitchTransition,
  Transition,
} from "react-transition-group";
import { SuccessComponent } from "./referrals/SuccessComponent";

function Content({ refId }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hover, setHover] = useState(false);
  const { connected } = useWallet();
  const [username, setUsername] = useState("");
  const prevConnected = useRef(connected);
  const { setVisible } = useWalletModal();
  const anchorWallet = useAnchorWallet();
  const setClient = useWalletStore((state) => state.setClient);
  const client = useWalletStore((state) => state.client);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    if (connected) {
      Client.connect(anchorWallet, "buddylink").then((res) =>
        initBuddyClient(res)
      );
    } else {
      setClient(null);
    }
  }, [connected]);

  const linkBuddy = async () => {
    setLoading(true);
    const buddyContext = new BuddyContext(client);

    try {
      const linked = await buddyContext.linkTransaction(
        "LadderCaster",
        username,
        9999,
        refId && refId !== "LadderCaster" ? refId : ""
      );
      console.log("success", linked);
      setStep(3);
    } catch (e) {
      console.log("error", e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (step === 0 && !prevConnected.current & connected) {
      setStep(1);
    }
  }, [step, connected, prevConnected]);

  const multiStep = useMemo(() => {
    let comp, nodeRef;
    switch (step) {
      case 0: {
        nodeRef = ref0;
        comp = (
          <>
            <_actionDescription>
              Create your buddylink acccount and get awesome promotions!
            </_actionDescription>
            <_buttonContainer>
              <_actionButton
                onClick={() => {
                  if (connected) setStep(1);
                  else setVisible(true);
                }}
                $hover={hover}
              >
                LINK ME!
              </_actionButton>
            </_buttonContainer>
          </>
        );
        break;
      }
      case 1: {
        nodeRef = ref1;
        comp = (
          <>
            <_actionDescription>
              Get a username unique to you!
            </_actionDescription>
            <_buttonContainer>
              <_inputContainer>
                <_input
                  placeholder={"USERNAME"}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && username.length > 3) {
                      setStep(2);
                    }
                  }}
                />
              </_inputContainer>
              <_comment>(click enter ↵ to submit)</_comment>
            </_buttonContainer>
          </>
        );
        break;
      }
      case 2: {
        nodeRef = ref2;
        comp = (
          <>
            <_actionDescription>
              Hey {username}, <br /> complete the transaction
            </_actionDescription>
            <_buttonContainer>
              <_actionButton
                onClick={() => {
                  linkBuddy();
                }}
              >
                {!loading ? "Create Buddy" : <_loading />}
              </_actionButton>
            </_buttonContainer>
          </>
        );
        break;
      }
      case 3: {
        nodeRef = ref3;
        //Redirection to dashboard
        comp = <SuccessComponent />;
        break;
      }
    }

    return (
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={step}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <_stepContainer ref={nodeRef}>{comp}</_stepContainer>
        </CSSTransition>
      </SwitchTransition>
    );
  }, [step, username, hover]);

  return (
    <_page>
      <Nav simple />
      <_background>
        <_squareRight />
        <_squareLeft />
      </_background>
      <_body>
        <_title>{t("referrals.title")}</_title>
        <_description>{t("referrals.description")}</_description>
        <_box
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <_coinAnimate>
            <img src="/T4_chest.png" width="250px" height="250px" />
          </_coinAnimate>
          <_wizard>
            <img src="/wizLimited.png" width="500px" />
          </_wizard>

          <_innerBox>
            {/* <_progressPromo></_progressPromo> */}
            <_promoTitle>Save 10% on gameplay fees</_promoTitle>
            {multiStep}
          </_innerBox>
        </_box>
      </_body>
    </_page>
  );
}

export default Content;
