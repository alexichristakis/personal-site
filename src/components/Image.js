import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";

const Wrapper = styled.div`
	z-index: 10;
	margin: 20px;
	// width: 600px;
	// height: 400px;
	z-index: 100;
	pointer-events: auto;
	transition: all 250ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
	&:hover {
		color: #afeeff;
		transform: scale(1.01);
	}
`;

const Filler = styled.div`
	height: 400px;
`;

const Image = url => {
	return (
		<Parallax bgImage={url} strength={200}>
			<div style={{ height: "400px" }} />
		</Parallax>
	);
};

export default Image;
