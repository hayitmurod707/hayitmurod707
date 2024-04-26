import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
const StyledElement = styled.section`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 600px;
	justify-content: center;
	width: 100%;
	& h1 {
		color: var(--white);
		font-size: 48px;
		font-weight: 800;
		margin: 0;
		text-align: center;
		@media screen and (max-width: 768px) {
			font-size: 36px;
		}
	}
	& p {
		color: var(--light);
		font-size: 18px;
		font-weight: 500;
		margin: 20px 0 30px 0;
		text-align: center;
	}
	& div {
		width: 250px;
		& a {
			align-items: center;
			background: var(--sky);
			border-radius: 8px;
			color: var(--white);
			display: flex;
			font-size: 18px;
			font-weight: 600;
			height: 56px;
			justify-content: center;
			width: 100%;
		}
	}
	@media screen and (max-width: 1440px) {
		height: 100vh;
	}
`;
const Error = () => (
	<>
		<Head>
			<title>Page not found!</title>
		</Head>
		<StyledElement className="container">
			<h1>Page not found!</h1>
			<p>The page you are looking for has been deleted or did not exist.</p>
			<div>
				<Link href="/">
					<a>Home page</a>
				</Link>
			</div>
		</StyledElement>
	</>
);
export default Error;
