import React from 'react';
import styled from 'styled-components';

import Section from '../Section/Section.styled';
import Header from '../Header/Header';
import Title, { StyledTitle } from '../Title/Title';

export default function Home() {
	return (
		<main>
			<Header></Header>
			<Hero color="yellow">
				<img
					src="/static/images/logo-promocao-desktop.png"
					alt="Logo Promocao"
				/>
				<div className="banner">
					<img
						src="/static/images/home-content.png"
						alt="Burger King no Pacote"
						width="670px"
					/>
				</div>
			</Hero>
			<HowToParticipate color="red">
				<StyledTitle level={2}>Veja como participar</StyledTitle>
				<Steps>
					<Step>
						<img
							className="step-number"
							src="/static/images/number-1.png"
							width="50"
						/>
						<img
							className="step-image"
							src="/static/images/step-1.png"
						/>
						<p>
							Compre produtos elma chips ® participantes da
							promoção
						</p>
					</Step>
					<Step>
						<img
							className="step-number"
							src="/static/images/number-2.png"
							width="50"
						/>
						<img
							className="step-image"
							src="/static/images/step-2.png"
						/>
						<p>
							Cadastre o código promocional aqui, por meio do sms
							27313 ou do whatsapp (11) 99496-8833
						</p>
					</Step>
					<Step>
						<img
							className="step-number"
							src="/static/images/number-3.png"
							width="50"
						/>
						<img
							className="step-image"
							src="/static/images/step-3.png"
						/>
						<p>
							Desucbra na hora se ganhou!
							<br />
							São milhares de prêmios burger king ®
						</p>
					</Step>
				</Steps>
			</HowToParticipate>
		</main>
	);
}

const Hero = styled(Section)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	.banner {
		margin-bottom: -150px;
		margin-top: 40px;
	}
`;

const HowToParticipate = styled(Section)`
	padding-top: 15%;
	text-align: center;
`;

const Steps = styled.div`
	display: flex;
	justify-content: center;
`;

const Step = styled.div`
	padding: 30px 20px;
	margin: 0 40px;
	width: 270px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: scale(1);
	transition: transform 280ms ease;
	&:hover {
		transform: scale(1.05);

		img.step-number {
			transform: rotate(15deg);
			filter: none;
		}
	}

	img.step-number {
		filter: grayscale(1) brightness(100);
		transition: transform 280ms ease, filter 100ms ease;
	}

	img.step-image {
		margin: 0;
		max-width: 270px;
	}
	p {
		font-size: 24px;
		text-transform: uppercase;
		color: white;
		backface-visibility: hidden;
		transform: translate3d(0, 0, 0);
		transform: scale(1);
	}
`;
