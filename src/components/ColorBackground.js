import React from "react";
import ScrollAware from "react-scrolling-color-background";

import colors from "../lib/colors";

const COLORS = [colors.lightbackground, colors.darkbackground];

const ColorBackground = () => (
	<div className="absolute">
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
	</div>
);

export default ColorBackground;
