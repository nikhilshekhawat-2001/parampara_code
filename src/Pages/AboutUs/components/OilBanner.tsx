import React from "react";
import styled from "styled-components";
import onion from "../../../assets/onion.png";
import tomato from "../../../assets/Tomato.png";

const SectionContainer = styled.section`
	background-size: cover;
	background-position: center;
	color: #fff;
	text-align: center;
	padding: 100px; /* Increased padding for increased height */

	@media (max-width: 500px) {
		padding: 50px 0 0 0;
	}
`;

export const ProductImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
export const ImageContainer = styled.div`
	position: absolute;
	width: 100px;
	height: 300px;
	z-index: -10;

	@media (max-width: 756px) {
		width: 50px;
	}
`;

// Styled component for the image
const StyledImage = styled.img`
	width: 100%;
	height: 100%; /* Spread the image all over the container */
	object-fit: cover; /* Ensure the image covers the entire container */
`;

const ExtraText = styled.div`
	text-align: center;
	padding-top:40px;
	font-size: 20px;
	width: 100%;
`

interface OilBannerProps {
	image: any;
}

export const OilBanner: React.FC<OilBannerProps> = ({ image }) => {
	return (
		<>
			<ExtraText>
				With over 75 years of experience, ADM utilises its deep industry
				knowledge, market insights, and innovation expertise to create solutions
				for today and tomorrow
			</ExtraText>
			<SectionContainer>
				<ImageContainer style={{ left: 0 }}>
					<ProductImage
						style={{ translate: "-50% -40%" }}
						src={onion}></ProductImage>
				</ImageContainer>
				<ImageContainer style={{ right: 0 }}>
					<ProductImage
						style={{ translate: "-50% 100%" }}
						src={tomato}></ProductImage>
				</ImageContainer>
				<StyledImage src={image} />
			</SectionContainer>
		</>
	);
};
