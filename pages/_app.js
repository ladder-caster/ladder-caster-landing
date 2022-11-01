import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GoogleAnalytics trackPageViews />
			<Component {...pageProps} />
		</>
	);
}

export default appWithTranslation(MyApp);
