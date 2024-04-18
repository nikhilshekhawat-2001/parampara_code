import styled from "styled-components";
import soyaChunk from "../../assets/image.png";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1.5rem;
	margin: 50px 0;
	color: black;
`;

const Heading = styled.div`
	font-size: 3rem;
	background-repeat: repeat;
	-webkit-background-clip: text;
	text-align: center;
	font-weight: 800;
`;

const Content = styled.div`
	padding: 10px 100px;
	font-size: 1.2rem;

	@media (max-width: 756px) {
		padding: 20px 0 0 0;
		font-size: 1rem;
	}
`;

interface ContentShowProps {
	content: string;
}

export const ContentShow: React.FC<ContentShowProps> = ({
	content,
}) => {
	return (
		<Container>
			<Heading style={{ fontSize: "2rem" }}>
				<span>A fusion</span>
				<span style={{ color: "#e85017" }}> of taste and </span>
				<span>tradition</span>
			</Heading>
			<Content>{content}</Content>
		</Container>
	);
};
