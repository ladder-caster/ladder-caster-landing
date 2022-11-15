import {
  _qrCode,
  _qrContainer,
  _qr,
  _code,
  _url,
  _codeDesc,
  _chestAction,
} from "../../styles/referrals.styled";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useMesh } from "../../core/state/mesh/useMesh";
import {
  BUDDY,
  BUDDY_CHEST,
  CLIENT,
  STATUS_REF,
} from "../../core/actions/actions";
import { useTranslation } from "react-i18next";
import { BuddyContext, ORGANIZATION } from "../../wallet/BuddyContext";

const CHEST_STATUS = "CHEST_STATUS";
export const QRCode = () => {
  const { t } = useTranslation();
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const ref = useRef();
  const [client] = useMesh(CLIENT);
  const [buddy] = useMesh(BUDDY);
  const [buddyChest, setBuddyChest] = useMesh(BUDDY_CHEST);
  const [status, setStatus] = useMesh(STATUS_REF);

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

  const fixChest = useCallback(async () => {
    const buddyContext = new BuddyContext(client);
    changeStatus(CHEST_STATUS, "loading", t("referrals.creatingChest"));

    try {
      const linked = await buddyContext.createChest(
        ORGANIZATION,
        buddy.account.name
      );

      changeStatus(CHEST_STATUS, "success", t("referrals.successChest"));
      setBuddyChest({});
      console.log("success", linked);
    } catch (e) {
      changeStatus(
        CHEST_STATUS,
        "error",
        typeof e === "string" ? e : e.message
      );
      console.log("error", e);
    }
  }, [buddy]);

  useEffect(() => {
    if (buddy) {
      setUrl("https://laddercaster.com/r/" + buddy.account.name);
    }
  }, [buddy]);

  useEffect(() => {
    // Dynamically import qr-code-styling only client-side
    if (typeof window !== "undefined") {
      import("qr-code-styling").then(({ default: QRCodeStyling }) => {
        const qrCode = new QRCodeStyling({
          width: 150,
          height: 150,
          data: url,
          dotsOptions: {
            color: "#fff",
            type: "rounded",
          },
          backgroundOptions: {
            color: "#212349",
          },
          cornersSquareOptions: {
            type: "extra-rounded",
          },
          cornersDotOptions: {
            type: "dot",
          },
        });

        qrCode.append(ref.current);
        setQrCode(qrCode);
      });
    }
  }, []);

  useEffect(() => {
    if (qrCode) {
      qrCode.update({
        data: url,
      });
    }
  }, [url, qrCode]);

  return (
    <_qrCode>
      <_qrContainer>
        <_code>
          <_qr id="qrcode" ref={ref} />
        </_code>
        <_url>{url}</_url>
        {!buddyChest && (
          <>
            <_codeDesc>{t("referrals.fixAccount")} </_codeDesc>
            <_chestAction
              onClick={() => {
                fixChest();
              }}
            >
              {t("referrals.createChest")}
            </_chestAction>
          </>
        )}
      </_qrContainer>
    </_qrCode>
  );
};
