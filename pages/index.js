import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Hero from "../components/home/hero";
import Footer from "../components/footer";
import FAQ from "../components/home/faq";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Gameplay from "../components/home/gameplay";
import Story from "../components/home/story";
import Playgame from "../components/home/playgame";
import Items from "../components/home/items";

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>LadderCaster</title>
				<meta
					name='description'
					content='Real-time mobile strategy & NFT market economy game'
				/>
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content='LadderCaster' />
				<meta name='twitter:title' content='LadderCaster' />
				<meta property='og:site_name' content='LadderCaster' />
				<meta property='og:url' content='https://laddercaster.com/' />
				<meta name='twitter:url' content='https:/laddercaster.com' />
				<meta
					property='og:description'
					content='Real-time mobile strategy & NFT market economy game'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://website-5n2j62.s3.amazonaws.com/logo_open_graph.jpg'
				></meta>
				<meta
					name='twitter:image'
					content='https://website-5n2j62.s3.amazonaws.com/logo_open_graph.jpg'
				/>
			</Head>
			<Nav />
			<Hero />
			<Gameplay />
			<Story />
			<Items />
			<FAQ />
			<Playgame />
			<Footer />
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default Home;
