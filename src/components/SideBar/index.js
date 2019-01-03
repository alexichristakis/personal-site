import React from "react";
import { Link } from "react-scroll";

import "./SideBar.scss";

const SectionLink = ({ to, title }) => (
	<Link
		className="svg-wrapper-section"
		activeClass="sidebar-section-active"
		to={to}
		spy={true}
		smooth={true}
		duration={500}
	>
		<svg height="150" width="40" xmlns="http://www.w3.org/2000/svg">
			{title.split("").map((char, i) => (
				<text key={i} className="sidebar-section-title" x={4} y={18 * i + 20} textAnchor="middle">
					{char}
				</text>
			))}
			<rect className="shape-section" height="150" width="40" />
		</svg>
	</Link>
);

const SideBar = () => (
	<div className="sidebar-container">
		<SectionLink to="about-section" title="ABOUT" />
		<SectionLink to="photo-section" title="PHOTOS" />
		<SectionLink to="design-section" title="DESIGN" />
		<SectionLink to="code-section" title="CODE" />
	</div>
);

export default SideBar;
