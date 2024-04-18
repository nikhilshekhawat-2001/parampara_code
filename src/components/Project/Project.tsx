import React from 'react';
import styled from 'styled-components';
import Product1 from '../../assets/product1.png';
import Product2 from '../../assets/product2.png';


// Styled component for the section container
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the product container
const ProductContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
  gap: 20px;
	padding: 20px; /* Added padding */

	@media (max-width: 756px) {
		flex-wrap: wrap;
	}
`;

// Styled component for the product card
const ProductCard = styled.div`
	width: 50%; /* Adjusted width to accommodate spacing */
	display: flex;
  align-items: center;
	background-color: #f9f9f9; /* Base color of the cards */
	padding: 70px 50px 50px 50px;
	margin-bottom: 20px; /* Added margin between cards */
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;

	@media (max-width: 500px) {
		flex-direction: column;
    width: 100%;
	}
`;

// Styled component for the product image
const ProductImage = styled.img`
	width: 250px;
	aspect-ratio: 250/350;
	border-radius: 5px;

	@media (max-width: 768px) {
    width: 200px;
	}
`;

// Styled component for the product content
const ProductContent = styled.div`
	width: 50%;
	min-width: 150px;
	padding-left: 20px;

	@media (max-width: 500px) {
		width: 98%;
	}
`;

// Styled component for the product title
const ProductTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

// Styled component for the product description
const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Styled component for the learn more button
const LearnMoreButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ProductBanner = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Heading = styled.div`
	padding: 15px 60px;
	font-size: 2rem;
	font-weight: bold;
	width: fit-content;
	left: 50%;
	transform: translate(-50%);
	border-radius: 10px;
	color: white;
	top: 15px;
	position: absolute;
	display: flex;
	justify-content: center;
	background-color: #5ea24a;

	@media (max-width: 756px) {
		position: relative;
		transform: translate(-50%);
	}
`;

export function Project() {
  return (
		<div style={{position:"relative"}}>
			<Heading>Two Good</Heading>
			<SectionContainer>
				<ProductContainer>
					<ProductCard>
						<ProductImage
							src={Product1}
							alt="Parampara Kachhi Ghani Mustard Oil"
						/>
						<ProductContent>
							<ProductTitle>Parampara Kachhi Ghani Mustard Oil</ProductTitle>
							<ProductDescription>
								Parampara Kachhi Ghani Mustard Oil contains Omega 3 PUFA that
								contributes towards maintaining normal blood cholesterol levels.
								All our oils are fortified with Vitamins A & D, further ensuring
								that food cooked not only tastes great, but is nutritious too.
							</ProductDescription>
							<LearnMoreButton>LEARN MORE</LearnMoreButton>
						</ProductContent>
					</ProductCard>
					<ProductCard>
						<ProductImage src={Product2} alt="Parampara Refined Soybean Oil" />
						<ProductContent>
							<ProductTitle>Parampara Refined Soybean Oil</ProductTitle>
							<ProductDescription>
								Parampara Refined Soybean Oil contains Omega 6 PUFA & Omega 3
								PUFA in a proportion that help in maintaining normal blood
								cholesterol levels, besides tocopherols which are natural
								antioxidants.
							</ProductDescription>
							<LearnMoreButton>LEARN MORE</LearnMoreButton>
						</ProductContent>
					</ProductCard>
				</ProductContainer>
			</SectionContainer>
		</div>
	);
};
