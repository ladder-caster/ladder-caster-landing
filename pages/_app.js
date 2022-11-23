import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId={"G-ZTF0DHQ9JD"} />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
