import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import useGoogleAnalytics from "../components/home/analytics";

function MyApp({ Component, pageProps }) {
	useGoogleAnalytics();
	return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
