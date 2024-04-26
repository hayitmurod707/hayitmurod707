import styled from 'styled-components';
export const StyledMain = styled.section`
	height: 700px;
	@media screen and (max-width: 1440px) {
		height: 100vh;
	}
	& .container {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		& h1 {
			font-family: 'Attentica';
			font-size: 90px;
			letter-spacing: 3px;
			margin: 0;
			@media screen and (max-width: 768px) {
				font-size: 70px;
			}
		}
		& p {
			font-size: 24px;
			font-weight: 400;
			margin: 50px 0 0 0;
			max-width: 700px;
			@media screen and (max-width: 576px) {
				font-size: 22px;
				margin: 50px 0 0 0;
			}
		}
	}
`;
export const StyledSkills = styled.section`
	padding: 60px 0;
	@media screen and (max-width: 576px) {
		padding: 40px 0;
	}
	& .container {
		& h2 {
			font-family: 'Attentica';
			font-size: 80px;
			font-weight: 900;
			letter-spacing: 3px;
			margin: 30px 0;
			@media screen and (max-width: 768px) {
				font-size: 60px;
			}
		}
		& h3 {
			font-family: 'Attentica';
			font-size: 60px;
			letter-spacing: 2px;
			margin: 0;
			@media screen and (max-width: 768px) {
				font-size: 50px;
			}
		}
		& .content {
			display: flex;
			margin: 40px 0;
			@media screen and (max-width: 991px) {
				flex-direction: column;
			}
			& .left {
				width: 50%;
				@media screen and (max-width: 991px) {
					width: 100%;
				}
				& p {
					font-size: 20px;
					margin: 0;
					max-width: 400px;
					@media screen and (max-width: 991px) {
						max-width: 500px;
					}
				}
			}
			& .right {
				width: 50%;
				@media screen and (max-width: 991px) {
					margin: 30px 0 0 0;
					width: 100%;
				}
				& ul {
					column-count: 2;
					font-size: 18px;
					line-height: 160%;
					list-style-type: none;
					margin: 0;
					max-width: 400px;
					padding: 0;
					@media screen and (max-width: 991px) {
						max-width: 650px;
					}
				}
			}
		}
	}
`;
export const StyledContacts = styled.section`
	padding: 60px 0;
	@media screen and (max-width: 576px) {
		padding: 40px 0;
	}
	& .container {
		& h2 {
			font-family: 'Attentica';
			font-size: 80px;
			letter-spacing: 3px;
			margin: 0;
			@media screen and (max-width: 768px) {
				font-size: 50px;
			}
		}
		& h4 {
			font-size: 30px;
			font-weight: 500;
			margin: 0;
			@media screen and (max-width: 768px) {
				font-size: 26px;
			}
		}
		& ul {
			list-style-type: none;
			margin: 0;
			padding: 30px 0;
			& li {
				font-size: 24px;
				font-weight: 400;
				margin: 10px 0;
				@media screen and (max-width: 768px) {
					font-size: 22px;
				}
				@media screen and (max-width: 576px) {
					font-size: 20px;
				}
				& a {
					color: var(--black);
					padding: 0 0 0 40px;
					position: relative;
					text-decoration: none;
					&:hover {
						color: var(--blue);
						&:before {
							background-color: var(--blue);
							transform: translateX(10px);
						}
						&:after {
							border-color: var(--blue);
							transform: translateX(10px) rotate(45deg);
						}
					}
					&:before {
						background-color: var(--black);
						content: '';
						height: 2px;
						left: 0;
						position: absolute;
						top: 50%;
						transition: 300ms;
						width: 20px;
					}
					&:after {
						border: 2px solid var(--black);
						border-width: 2px 2px 0 0;
						content: '';
						height: 9px;
						left: 10px;
						position: absolute;
						top: calc(50% - 4px);
						transform: rotate(45deg);
						transition: 300ms;
						width: 9px;
					}
				}
			}
		}
	}
`;
