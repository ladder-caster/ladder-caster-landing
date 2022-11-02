import {
  _qrCode,
  _qrContainer,
  _qr,
  _code,
  _url,
  _codeDesc,
} from "../../styles/referrals.styled";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useMesh } from "../../core/state/mesh/useMesh";
import { BUDDY } from "../../core/actions/actions";

export const QRCode = () => {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const ref = useRef();
  const [buddy] = useMesh(BUDDY);

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
        <_codeDesc></_codeDesc>
      </_qrContainer>
    </_qrCode>
  );
};
