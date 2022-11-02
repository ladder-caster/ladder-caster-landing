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
  _subtitle,
  _conditions
} from "../styles/referrals.styled";
import Nav from "./nav";
import { BuddyContext, ORGANIZATION } from "../wallet/BuddyContext";
import { Client } from "../wallet/Connection";
import { useTranslation } from "react-i18next";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Success } from "./referrals/Success";
import { useMesh } from "../core/state/mesh/useMesh";
import { BUDDY, BUDDY_CHEST, CLIENT, STEP } from "../core/actions";
import { QRCode } from "./referrals/QRCode";
import {LC_USER} from "../core/actions";

const REF_BASIS_POINTS = 9999;

function Content({ refId }) {
  const { t } = useTranslation();
  const [step, setStep] = useMesh(STEP);
  const [user] = useMesh(LC_USER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hover, setHover] = useState(false);
  const { connected } = useWallet();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const prevConnected = useRef(connected);
  const { setVisible } = useWalletModal();
  const anchorWallet = useAnchorWallet();
  const [client, setClient] = useMesh(CLIENT);
  const [buddy, setBuddy] = useMesh(BUDDY);
  const prevBuddy = useRef(buddy);
  const [, setBuddyChest] = useMesh(BUDDY_CHEST);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const fetchBuddy = async (client) => {
    const bud = await new BuddyContext(client).getBuddy();
    if (bud) {
      setBuddy(bud);
      const budChest = await new BuddyContext(client).getSOLChest(
        bud.account.name
      );
      if (budChest) setBuddyChest(budChest);
    }
  };

  useEffect(() => {
    if (connected) {
      Client.connect(anchorWallet, "buddylink").then(async (client) => {
        await fetchBuddy(client);
        setClient(client);
      });
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
      const url =
        "https://gnead1lomc.execute-api.us-east-1.amazonaws.com/prod/emails";

      return await axios.get(url);
    } catch (e) {
      console.log("waitlist error", e);
    }
  };

  const createContact = async (email) => {
    try {
      const url =
        "https://gnead1lomc.execute-api.us-east-1.amazonaws.com/prod/emails";

      const config = {};

      await axios.post(
        url,
        {
          email,
          referrer: "",
          subscribe: false,
        },
        config
      );
      setStep(1);
    } catch (e) {
      console.log("waitlist error", e);
    }
  };

  useEffect(() => {
    if (!prevBuddy.current && buddy) {
      setStep(3);
    }
  }, [buddy]);

  const multiStep = useMemo(() => {
    let comp, nodeRef;
    switch (step) {
      case 0: {
        nodeRef = ref0;
        comp = (
          <>
            <_actionDescription>
              {t("referrals.email")}
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
            <_actionDescription>{t("referrals.username")}</_actionDescription>
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
                {!loading ? t('referrals.account') : <_loading />}
              </_actionButton>
            </_buttonContainer>
          </>
        );
        break;
      }
      case 2: {
        nodeRef = ref2;
        comp = <Success fetchBuddy={fetchBuddy} />;
        break;
      }
      case 3: {
        nodeRef = ref3;
        comp = <QRCode />;
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
        <_subtitle>{t("referrals.title")}</_subtitle>
        <_title>{t("referrals.header")}</_title>
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
            <_promoTitle>{t("referrals.save")}</_promoTitle>
            {multiStep}
          </_innerBox>
        </_box>
        <_conditions>
          {t("referrals.conditions")}
        </_conditions>
      </_body>
    </_page>
  );
}

export default Content;
