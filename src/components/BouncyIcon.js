import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

const MoreIcon = () => (
	<Parallax offsetYMax={"100px"} offsetYMin={"-100px"} slowerScrollRate>
		<div className={"bouncy-div"}>
			<div className={"chevron"}>
				<FaChevronDown />
			</div>
		</div>
	</Parallax>
);

export default MoreIcon;
