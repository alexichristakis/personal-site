import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

const MoreIcon = () => {
	return (
		<Parallax offsetYMax={"75px"} offsetYMin={"-75px"} slowerScrollRate>
			<div className={"bouncy-div"}>
				<div className={"chevron"}>
					<FaChevronDown />
				</div>
			</div>
		</Parallax>
	);
};

export default MoreIcon;
