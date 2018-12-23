import React from "react";

const Dot = ({ point, style }) => {
	return (
		<div
			className={"dot"}
			style={{
				...style,
				left: point.x - 1,
				top: point.y - 1,
				transform: `scale(${style.scale})`,
				WebkitTransform: `scale(${style.scale})`
			}}
		/>
	);
};

export default Dot;
