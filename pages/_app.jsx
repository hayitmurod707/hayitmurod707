import App from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import 'sal.js/dist/sal.css';
import Cursor from '../layout/Cursor';
import ScrollProgress from '../layout/ScrollProgress';
import Sidebar from '../layout/Sidebar';
import ToggleMenu from '../layout/ToggleButton';
import '../styles/style.css';
const AppComponent = ({ Component, pageProps }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="IE=edge" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="author" content="Hayitmurod Eshimov" />
				<meta name="background-color" content="#ffffff" />
				<meta name="cache-control" content="no-cache" />
				<meta name="generator" content="next-js" />
				<meta name="resource-type" content="document" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, viewport-fit=cover"
				/>
				<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
			</Head>
			<Sidebar open={open} setOpen={setOpen} />
			<div id="outer-container">
				<main id="page-wrap">
					<Component {...pageProps} />
					<ScrollProgress />
				</main>
			</div>
			<ToggleMenu setOpen={setOpen} open={open} />
			<Cursor />
		</>
	);
};
AppComponent.getInitialProps = async appContext => ({
	...(await App.getInitialProps(appContext)),
});
export async function getServerSideProps({ Component, ctx }) {
	let pageProps = {};
	if (Component.getServerSideProps) {
		pageProps = await Component.getServerSideProps(ctx);
	}
	return {
		props: {
			pageProps,
		},
	};
}
export default AppComponent;
