import Head from 'next/head';
import React, { useEffect } from 'react';
import sal from 'sal.js';
import {
	StyledContacts,
	StyledMain,
	StyledSkills,
} from '../../components/About/StyledElements';
const salOptions = {
	'data-sal': 'slide-up',
	'data-sal-delay': 200,
	'data-sal-duration': 200,
	'data-sal-easing': 'ease',
};
const About = () => {
	useEffect(() => {
		sal({
			animateClassName: 'sal-animate',
			disabled: false,
			once: false,
			root: null,
			rootMargin: '0% 0%',
			selector: '[data-sal]',
			threshold: 0.3,
		}).reset();
	}, []);
	return (
		<>
			<Head>
				<title>About Hayitmurod Eshimov</title>
			</Head>
			<StyledMain data-scroll>
				<div className="container">
					<h1 {...salOptions} data-scroll>
						About me
					</h1>
					<p data-scroll {...salOptions}>
						I'm a software engineer specializing Front-End development,
						although I consider myself a code generalist and get excited
						about solving just about any problem.
					</p>
				</div>
			</StyledMain>
			<StyledSkills>
				<div className="container">
					<h2 {...salOptions}>My Skills</h2>
					<h3 {...salOptions}>01. UX / UI</h3>
					<div className="content">
						<div className="left">
							<p {...salOptions}>
								Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. In recusandae repellendus inventore et eos
								doloremque voluptas, ea ut cumque quia itaque harum
							</p>
						</div>
						<div className="right">
							<ul {...salOptions}>
								<li>User Experience</li>
								<li>User Interface</li>
								<li>HTML Semantics</li>
								<li>CSS</li>
								<li>Sass</li>
								<li>Less</li>
								<li>Bootstrap</li>
								<li>Material UI</li>
								<li>Ant Design</li>
							</ul>
						</div>
					</div>
					<h3 {...salOptions}>02. Programming</h3>
					<div className="content">
						<div className="left">
							<p {...salOptions}>
								Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. In recusandae repellendus inventore et eos
								doloremque voluptas, ea ut cumque quia itaque harum
							</p>
						</div>
						<div className="right">
							<ul {...salOptions}>
								<li>Javascript</li>
								<li>React</li>
								<li>NextJS</li>
								<li>ES6</li>
								<li>Babel</li>
								<li>Webpack</li>
								<li>Npm</li>
								<li>Rest api</li>
								<li>Redux</li>
							</ul>
						</div>
					</div>
					<h3 {...salOptions}>03. Tools</h3>
					<div className="content">
						<div className="left">
							<p {...salOptions}>
								Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. In recusandae repellendus inventore et eos
								doloremque voluptas, ea ut cumque quia itaque harum
							</p>
						</div>
						<div className="right">
							<ul {...salOptions}>
								<li>Git</li>
								<li>Gitlab</li>
								<li>Github</li>
								<li>Figma</li>
								<li>Postman</li>
								<li>Vscode</li>
								<li>Trello</li>
							</ul>
						</div>
					</div>
				</div>
			</StyledSkills>
			<StyledContacts>
				<div className="container">
					<h2 {...salOptions}>Contacts</h2>
					<ul>
						<li {...salOptions}>
							<a href="tel:+998933030207">+99 893 303 02 07</a>
						</li>
						<li {...salOptions}>
							<a
								target="_blank"
								href="https://mail.google.com/mail/u/0/#inbox?compose=new"
							>
								hayitmurod707@gmail.com
							</a>
						</li>
					</ul>
					<h4 {...salOptions}>Social Media</h4>
					<ul>
						<li {...salOptions}>
							<a href="https://github.com/hayitmurod707" target="_blank">
								Github
							</a>
						</li>
						<li {...salOptions}>
							<a href="https://gitlab.com/hayitmurod707" target="_blank">
								Gitlab
							</a>
						</li>
						<li {...salOptions}>
							<a
								href="https://www.facebook.com/hayitmurod.eshimov"
								target="_blank"
							>
								Facebook
							</a>
						</li>
						<li {...salOptions}>
							<a
								href="https://www.instagram.com/hayitmurod707/"
								target="_blank"
							>
								Instagram
							</a>
						</li>
						<li {...salOptions}>
							<a
								href="https://www.linkedin.com/in/hayitmurod-eshimov-29b0b1207/"
								target="_blank"
							>
								Linkedin
							</a>
						</li>
					</ul>
				</div>
			</StyledContacts>
		</>
	);
};
export default About;
