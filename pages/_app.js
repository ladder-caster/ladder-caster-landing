import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          type="text/javascript"
          src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=VUN8Ba"
        ></script>
      </Head>
      <GoogleAnalytics trackPageViews gaMeasurementId={"G-ZTF0DHQ9JD"} />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
