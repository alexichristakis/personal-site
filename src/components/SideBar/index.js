import React from "react";
import { Link } from "react-scroll";

import "./SideBar.scss";

const SectionLink = ({ to, title }) => (
	<Link
		className="sidebar-section-container"
		activeClass="sidebar-section-active"
		to={to}
		spy={true}
		smooth={true}
		duration={500}
	>
		<div className="svg-wrapper-section">
			<svg height="150" width="40" xmlns="http://www.w3.org/2000/svg">
				<rect className="shape-section" height="150" width="40" />
			</svg>
			<h1 className="sidebar-section-title">{title}</h1>
		</div>
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
