import React from "react";

const Dot = ({ point, style }) => {
	return (
		<div
			className={"dot"}
			style={{
				...style,
				left: point.x,
				top: point.y
				// transform: `scale(${style.scale})`,
				// WebkitTransform: `scale(${style.scale})`
			}}
		/>
	);
};

export default Dot;
