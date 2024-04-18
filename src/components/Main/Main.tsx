import HeroImage from "../../assets/hero.png";
import BannerImage from "../../assets/banner.png";

import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact, Thought } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Banner } from "../Banner/Banner";
import styled from "styled-components";
import Layer1 from "../../assets/Layer1.png";
import Layer2 from "../../assets/Layer2.png";

// Styled component for the text overlay
const TextOverlay = styled.div`
	position: absolute;
	top: 50%; /* Position at the vertical center */
	left: 50%; /* Position at the horizontal center */
	transform: translate(-50%, -50%) rotate(-5deg); /* Center the text */
	text-align: center;
	color: white;
	transform-origin: center;
`;

// Styled component for the title
const Title = styled.h1`
	-webkit-text-stroke: 10px white;
	text-wrap: nowrap;
	-webkit-text-fill-color: transparent;
	font-family: "Lilita", sans-serif;
	font-size: 14rem; /* Increase font size */
	margin-bottom: 0.5rem; /* Reduce margin bottom */
	font-weight: bold; /* Make the text bold */
	letter-spacing: 2px; /* Add letter spacing */

	@media (max-width: 756px) {
		font-size: 3rem;
		-webkit-text-stroke: 3px white;
	}
`;

export function Main() {
	const thoughts: Thought[] = [
		{
			color: "#a8c624",
			image: Layer1,
			alt: "Fortune's icon",
			text: "Fortune's world's most admired companies",
		},
		{
			color: "#6d961e",
			image: Layer1,
			alt: "Ethisphere's icon",
			text: "Ethisphere's world's most ethical companies",
		},
		{
			color: "#1f214b",
			image: Layer2,
			alt: "Corporate citizens icon",
			text: "100 best corporate citizens",
		},
		{
			color: "#522f7e",
			image: Layer2,
			alt: "Responsible sourcing icon",
			text: "Responsible sourcing",
		},
	];
	return (
		<Container>
			<Hero image={HeroImage}>
				<TextOverlay>
					<Title>Swad ke rishte</Title>
				</TextOverlay>
			</Hero>
			<About></About>
			<Project></Project>
			<Banner
				text="Aaiye swad ki parampara ko banaye rakhen"
				image={BannerImage}></Banner>
			<Contact thoughts={thoughts}></Contact>
		</Container>
	);
}