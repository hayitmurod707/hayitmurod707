import Head from 'next/head';
import React from 'react';
import Apotheca from '../../components/Works/Apotheca';
import Avloniy from '../../components/Works/Avloniy';
import ContestPrep from '../../components/Works/ContestPrep';
import Exadot from '../../components/Works/Exadot';
import { WorksContainer } from '../../components/Works/StyledElements';
const Works = () => {
	return (
		<>
			<Head>
				<title>Works</title>
			</Head>
			<section style={{ height: '100vh' }}>
				<h1 style={{ margin: 0 }}>I'm reacting to mouse move</h1>
			</section>
			<WorksContainer>
				<div className="container">
					<Apotheca />
					<Exadot />
					<ContestPrep />
					<Avloniy />
				</div>
			</WorksContainer>
			<section style={{ height: '100vh' }}>
				<h1 style={{ margin: 0 }}>I'm reacting to mouse move</h1>
			</section>
		</>
	);
};
export default Works;
