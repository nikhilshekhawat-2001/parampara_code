import React from 'react';
import styled from "styled-components";

const SectionContainer = styled.section`
	background-size: cover;
	background-position: center;
	color: #fff;
	text-align: center;
	padding: 200px 0; /* Increased padding for increased height */
`;

const TextContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	transform: rotate(-5deg);
`;

const Heading = styled.h2`
	font-size: 5rem;
	font-weight: bold;
	font-family: "Lobster", sans-serif;
	-webkit-text-stroke: 3px white;
	text-wrap: nowrap;
	-webkit-text-fill-color: transparent;
	margin-bottom: 20px;

	@media (max-width: 756px) {
		font-size: 2rem;
		-webkit-text-stroke: 1px white;
	}
`;

const Subheading = styled.p`
	font-size: 1.5rem;
	font-style: italic;
`;

interface BannerProps {
	image: any;
	text?: string;
}

export const Banner: React.FC<BannerProps> = ({ image, text }) => {
	return (
		<SectionContainer
			style={{
				backgroundImage: `url(${image})`,
			}}>
			{text && (
				<TextContainer>
					<Heading>
						<div>Aaiye swad ki parampara</div>
						<span>ko banaye rakhen</span>
					</Heading>
				</TextContainer>
			)}
		</SectionContainer>
	);
};
