import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import axios from "axios";
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
import { BuddyContext, ORGANIZATION } from "../wallet/BuddyContext";
import { Client } from "../wallet/Connection";
import { initBuddyClient, useWalletStore } from "../zustand";
import { useTranslation } from "react-i18next";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { SuccessComponent } from "./referrals/SuccessComponent";
import {LC_USER} from "../core/actions";
import {useMesh} from "../core/state/mesh/useMesh";

const REF_BASIS_POINTS = 9999;

function Content({ refId }) {
  const { t } = useTranslation();
  const [user] = useMesh(LC_USER);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hover, setHover] = useState(false);
  const { connected } = useWallet();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const prevConnected = useRef(connected);
  const { setVisible } = useWalletModal();
  const anchorWallet = useAnchorWallet();
  const setClient = useWalletStore((state) => state.setClient);
  const client = useWalletStore((state) => state.client);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref3 = useRef(null);

  console.log('user data', user);

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
        ORGANIZATION,
        username,
        REF_BASIS_POINTS,
        refId && refId !== ORGANIZATION ? refId : ""
      );
      console.log("success", linked);
      setStep(2);
    } catch (e) {
      console.log("error", e);
      setError(e);
    }
    setLoading(false);
  };

  const getWaitlist = async () => {
    try {
      const url = 'https://gnead1lomc.execute-api.us-east-1.amazonaws.com/prod/emails';

      return await axios.get(url);
    } catch (e) {
      console.log('waitlist error', e);
    }
  };


  const createContact = async (email) => {
    try {
      const url = 'https://gnead1lomc.execute-api.us-east-1.amazonaws.com/prod/emails';

      const config = {
        headers: {'Access-Control-Allow-Origin': '*'}
      };

      return await axios.post(url, {
        email,
        referrer: '',
        subscribe: false
      }, config);
    } catch (e) {
      console.log('waitlist error', e);
    }
  };

  const multiStep = useMemo(() => {
    let comp, nodeRef;
    switch (step) {
      case 0: {
        nodeRef = ref0;
        comp = (
          <>
            <_actionDescription>
              Enter your email to create your buddy link
            </_actionDescription>
            <_inputContainer>
              <_input
                placeholder={"Email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && username.length > 3) {
                    createContact(email);
                  }
                }}
              />
            </_inputContainer>
            <_buttonContainer>
              <_actionButton
                onClick={() => {
                  createContact(email);
                  setStep(1);
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
              Choose a username
            </_actionDescription>
            <_buttonContainer>
              <_inputContainer>
                <_input
                  placeholder={"Username"}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && username.length > 3) {
                      linkBuddy();
                    }
                  }}
                />
              </_inputContainer>
              <_actionButton
                onClick={() => {
                  if (!connected) setVisible(true);
                  else linkBuddy();
                }}
              >
                {!loading ? "Create Buddy" : <_loading />}
              </_actionButton>
            </_buttonContainer>
          </>
        );
        break;
      }
      case 2: {
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
  }, [step, username, email, hover]);

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
            <_promoTitle>Save 10% on shop fees</_promoTitle>
            {}
            {multiStep}
          </_innerBox>
        </_box>
      </_body>
    </_page>
  );
}

export default Content;
