import React, { useEffect } from "react";
import ReactGA from "react-ga";

const TRACKING_ID = "G-ZTF0DHQ9JD";

const useGoogleAnalytics = () => {
	const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

	useEffect(() => {
		ReactGA.initialize(TRACKING_ID, { debug: isDev });
	}, []);
};

export default useGoogleAnalytics;
