import React from "react";
import { bounceInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

import colors from "../lib/colors";

const BouncyDiv = styled.div`
	animation: 2s ${keyframes`${bounceInUp}`};
	position: absolute;
	bottom: -20px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Chevron = styled.div`
	transform: scaleX(2);
	color: ${colors.darkgray};
`;

const MoreIcon = () => {
	return (
		<Parallax offsetYMax={"75px"} offsetYMin={"-75px"} slowerScrollRate>
			<BouncyDiv>
				<Chevron>
					<FaChevronDown />
				</Chevron>
			</BouncyDiv>
		</Parallax>
	);
};

export default MoreIcon;
