import React from "react";
import styled from "styled-components";
import ScrollAware from "react-scrolling-color-background";

import colors from "../lib/colors";

const COLORS = [colors.lightbackground, colors.darkbackground];

const Absolute = styled.div`
	position: absolute;
`;

const ColorBackground = () => {
	return (
		<Absolute>
			<ScrollAware
				selector=".js-color-stop[data-background-color]"
				colorDataAttribute="data-background-color"
				initialRgb="rgb(0, 0, 0)"
			/>
			{COLORS.map((rgbString, idx) => (
				<section
					key={idx}
					className="js-color-stop"
					data-background-color={rgbString}
					style={{ height: "100vh" }}
				/>
			))}
		</Absolute>
	);
};

export default ColorBackground;
