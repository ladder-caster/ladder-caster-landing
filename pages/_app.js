import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GoogleAnalytics trackPageViews gaMeasurementId={"239906010"}/>
			<Component {...pageProps} />
		</>
	);
}

export default appWithTranslation(MyApp);
