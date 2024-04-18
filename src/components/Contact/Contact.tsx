import React from "react";
import styled from "styled-components";
import Layer1 from "../../assets/Layer1.png";
import Layer2 from "../../assets/Layer2.png";

const SectionContainer = styled.section`
	color: #fff;
	padding: 50px 0;
`;

const ContentWrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	display: flex;
	justify-content: center;

	@media (max-width: 1000px) {
		flex-wrap: wrap;
	}
`;

const Card = styled.div`
	width: 23%;
	text-align: center;
	padding: 20px;

	@media (max-width: 1000px) {
		width: 100%;
		min-width: 200px;
		max-width: 300px;
	}
`;

const CardIcon = styled.img`
	width: 80px;
	margin-bottom: 20px;
`;

const CardTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 10px;
`;

export type Thought = {
	color: string;
	text: string;
	image: string;
	alt: string;
};

interface ContactProps {
	thoughts: Thought[];
}

export const Contact: React.FC<ContactProps> = ({ thoughts }) => {
	return (
		<SectionContainer>
			<ContentWrapper>
				{thoughts.map((item) => (
					<Card style={{ backgroundColor: item.color }}>
						<CardIcon src={item.image} alt={item.alt} />
						<CardTitle>{item.text}</CardTitle>
					</Card>
				))}
			</ContentWrapper>
		</SectionContainer>
	);
};
