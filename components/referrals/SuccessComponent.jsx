import { useEffect } from "react";
import { useRef, useState } from "react";
import { chevron } from "../../shared/icons";
import {
  _confetti,
  _successContainer,
  _actionDescription,
  _redirection,
} from "../../styles/referrals.styled";

export const SuccessComponent = ({ fetchBuddy }) => {
  const [lottie, setLottie] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        path: `/animations/success-confetti.json`,
        loop: false,
        autoplay: true,
      });
    }
  }, [ref.current]);

  return (
    <_successContainer>
      <_confetti ref={ref} />
      <_actionDescription>
        Welcome to the buddy link network!
      </_actionDescription>
      <_redirection
        onClick={async () => {
          await fetchBuddy();
          setStep(3);
        }}
      >
        <span>Manage your account</span> {chevron()}
      </_redirection>
    </_successContainer>
  );
};
