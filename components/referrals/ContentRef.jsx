import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import {
  useWalletModal,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  _conditions,
  _connectContainer,
} from "../../styles/referrals.styled";
import Nav from "../nav";
import {
  BuddyContext,
  LADAMint,
  ORGANIZATION,
} from "../../wallet/BuddyContext";
import { Client } from "../../wallet/Connection";
import { useTranslation } from "react-i18next";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Success } from "./Success";
import { useMesh } from "../../core/state/mesh/useMesh";
import {
  BUDDY,
  BUDDY_CHEST,
  BUDDY_SOL_CHEST,
  CLIENT,
  STATUS_REF,
  STEP,
} from "../../core/actions";
import { QRCode } from "./QRCode";
import StatusRef from "./StatusRef.jsx";

const REF_BASIS_POINTS = 1000;

const EMAIL_STATUS = "EMAIL_STATUS";
const BUDDY_STATUS = "BUDDY_STATUS";

function Content({ refId }) {
  const { t } = useTranslation();
  const [step, setStep] = useMesh(STEP);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hover, setHover] = useState(false);
  const { connected, signTransaction } = useWallet();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const { setVisible } = useWalletModal();
  const anchorWallet = useAnchorWallet();
  const [client, setClient] = useMesh(CLIENT);
  const [buddy, setBuddy] = useMesh(BUDDY);
  const prevBuddy = useRef(buddy);
  const [status, setStatus] = useMesh(STATUS_REF);
  const [, setBuddySolChest] = useMesh(BUDDY_SOL_CHEST);
  const [, setBuddyChest] = useMesh(BUDDY_CHEST);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const changeStatus = useCallback(
    (type, statusLabel, message) => {
      setStatus({
        ...status.current,
        [type]: {
          status: statusLabel,
          message: message,
        },
      });
    },
    [status]
  );

  const fetchBuddy = useCallback(
    async (client) => {
      const bud = await new BuddyContext(client).getBuddy(ORGANIZATION);
      if (bud) {
        setBuddy(bud);

        // const budSolChest = await new BuddyContext(client).getSOLChest(
        //   bud.account.name
        // );
        // if (budSolChest) setBuddySolChest(budSolChest);

        try {
          const budChest = await new BuddyContext(client).getMintChest(
            bud.account.name,
            bud.account.organization,
            LADAMint
          );
          setBuddyChest(budChest);
        } catch (e) {
          console.log("fetching mint chest failure:", e);
        }
      }
    },
    [client]
  );

  const linkBuddy = async () => {
    setLoading(true);
    const buddyContext = new BuddyContext(client);

    try {
      const signedTx = await signTransaction(
        await buddyContext.linkTransaction(
          ORGANIZATION,
          username,
          REF_BASIS_POINTS,
          refId && refId.toLowerCase() !== ORGANIZATION
            ? refId.toLowerCase()
            : ""
        )
      );
      const linked = await client.connection.sendRawTransaction(
        signedTx.serialize()
      );
      console.log("success", linked);
      setStep(2);
    } catch (e) {
      changeStatus(
        BUDDY_STATUS,
        "error",
        typeof e === "string" ? e : e.message
      );
      console.log("error", e);
      setError(e);
    }
    setLoading(false);
  };

  const createContact = async (email) => {
    setLoading(true);
    try {
      const url =
        "https://gnead1lomc.execute-api.us-east-1.amazonaws.com/prod/emails";

      const config = {};

      const response = await axios.post(
        url,
        {
          email,
          referrer: "",
          subscribe: false,
        },
        config
      );

      console.log("response", response);
      localStorage.setItem("email", "true");
      setStep(1);
    } catch (e) {
      changeStatus(
        EMAIL_STATUS,
        "error",
        typeof e === "string" ? e : e.message
      );
      console.log("waitlist error", e);
    }
    setLoading(false);
  };

  // const getWaitlist = async () => {
  //   try {
  //     const url =
  //       "https://gnead1lomc.execute-api.us-east-1.amazonaws.com/prod/emails";

  //     return await axios.get(url);
  //   } catch (e) {
  //     console.log("waitlist error", e);
  //   }
  // };

  useEffect(() => {
    if (!prevBuddy.current && buddy) {
      setStep(3);
    }
  }, [buddy]);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setStep(1);
    }
  }, []);

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

  const multiStep = useMemo(() => {
    let comp, nodeRef;
    switch (step) {
      case 0: {
        nodeRef = ref0;
        comp = (
          <>
            <_actionDescription>{t("referrals.email")}</_actionDescription>
            <_inputContainer>
              <_input
                placeholder={"Email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    createContact(email);
                  }
                }}
              />
            </_inputContainer>
            <_buttonContainer>
              <_actionButton
                onClick={() => {
                  createContact(email);
                }}
              >
                {!loading ? t("referrals.step") : <_loading />}
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
                {!loading ? t("referrals.account") : <_loading />}
              </_actionButton>
            </_buttonContainer>
          </>
        );
        break;
      }
      case 2: {
        nodeRef = ref2;
        comp = (
          <Success
            fetchBuddy={async () => {
              await fetchBuddy(client);
              setStep(3);
            }}
          />
        );
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
  }, [step, username, email, hover, loading]);

  return (
    <_page>
      <Nav />
      <_background>
        <_squareRight />
        <_squareLeft />
      </_background>
      <_body>
        <_subtitle>{t("referrals.title")}</_subtitle>
        <_title>{t("referrals.header")}</_title>
        <_connectContainer>
          <WalletMultiButton />
        </_connectContainer>
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
            <img src="/T4_chest.webp" width="250px" height="250px" />
          </_coinAnimate>
          <_wizard>
            <img src="/wizLimited.webp" width="500px" />
          </_wizard>
          <_innerBox>
            <_promoTitle>{t("referrals.save")}</_promoTitle>
            {multiStep}
          </_innerBox>
        </_box>
        <_conditions>{t("referrals.conditions")}</_conditions>
      </_body>
      <StatusRef />
    </_page>
  );
}

export default Content;
