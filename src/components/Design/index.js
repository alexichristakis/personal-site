import React from "react";
import { Element } from "react-scroll";

import "./Design.scss";

const accordion_pages = [
	{ src: require("../../assets/accordion/cover.png") },
	{ src: require("../../assets/accordion/full cover.png") },
	{ src: require("../../assets/accordion/1.png") },
	{ src: require("../../assets/accordion/2.png") },
	{ src: require("../../assets/accordion/3.png") },
	{ src: require("../../assets/accordion/4.png") },
	{ src: require("../../assets/accordion/5.png") },
	{ src: require("../../assets/accordion/6.png") },
	{ src: require("../../assets/accordion/7.png") },
	{ src: require("../../assets/accordion/8.png") },
	{ src: require("../../assets/accordion/full.png") }
];

const zine_pages = [
	{ src: require("../../assets/public property/public property zine.png") },
	{ src: require("../../assets/public property/public property zine2.png") },
	{ src: require("../../assets/public property/public property zine3.png") },
	{ src: require("../../assets/public property/public property zine4.png") },
	{ src: require("../../assets/public property/public property zine5.png") },
	{ src: require("../../assets/public property/public property zine6.png") },
	{ src: require("../../assets/public property/public property zine7.png") },
	{ src: require("../../assets/public property/public property zine8.png") },
	{ src: require("../../assets/public property/public property zine9.png") },
	{ src: require("../../assets/public property/public property zine10.png") },
	{ src: require("../../assets/public property/public property zine11.png") },
	{ src: require("../../assets/public property/public property zine12.png") },
	{ src: require("../../assets/public property/public property zine13.png") }
];

const open = () => {
	window.open("https://drive.google.com/open?id=15JZi0SyjlQCUvVDhd-Ar48Kdcz5iSe1w");
};

const Design = () => (
	<Element className="section-container design" name="design-section">
		<h1>Design</h1>
		<h2>Accordion</h2>
		<p>
			Project done for ART 469b: Advanced Graphic Design. Students chose a designer to write about
			in an 'accordion' format restricted only by the limitation of printing on a single side. My
			accordion (on Ralph Schraivogel) contains 5 sections: training & work, stylistic regularities,
			influence & context, Henry Van de Velde, and black & white series. I designed the folding to
			accomodate a variety of opening possibilities which each allow for a different experience. The
			final product was produced on an Epson Inkjet large-format printer.
		</p>
		<p onClick={open} className="pointer-events">
			Read all the text and download the full pdf by clicking here.
		</p>
		<div className="pages">
			{accordion_pages
				.sort((a, b) => a.index - b.index)
				.map(({ src }, i) => (
					<img key={i} className="page " alt="accordion page" src={src} />
				))}
		</div>
		<h2>Public Property</h2>
		<p>
			Zine done for ART 368a: Graphic Design Methodologies. Images of abandoned or decrepit bikes in
			New Haven were collected over the course of the semester.
		</p>
		<div className="pages">
			{zine_pages
				.sort((a, b) => a.index - b.index)
				.map(({ src }, i) => (
					<img key={i} className="page" alt="zine page" src={src} />
				))}
		</div>
	</Element>
);

export default Design;
