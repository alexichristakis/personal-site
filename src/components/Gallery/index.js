import React from "react";
import { Element } from "react-scroll";
import { ParallaxBanner } from "react-scroll-parallax";

import "./Gallery.scss";

// https://drive.google.com/file/d/FILE_ID/edit?usp=sharing
// https://drive.google.com/uc?export=download&id=FILE_ID

// const photos = [
// 	"https://drive.google.com/uc?export=download&id=1z-GeeScMs8VzCpSQIAT55xAWM4ybYC-M",
// 	"https://drive.google.com/uc?export=download&id=1GB9u4p1VJ4JKj3Y9iis4FXUIR2QcFB4I",
// 	"https://drive.google.com/uc?export=download&id=1bDejeTq7tUJ5fcaVG9mpdQ9JDijDO6c3",
// 	"https://drive.google.com/uc?export=download&id=1Vdz0FZZk8y85aN6cApuwqain_hxq4pk3",
// 	"https://drive.google.com/uc?export=download&id=1m7rlzy6rSD2lEj4YbPpXEi7HsyW-C5NA",
// 	"https://drive.google.com/uc?export=download&id=1mV-5g4isHW4TjecAadHxOyJ6DAk73DOl",
// 	"https://drive.google.com/uc?export=download&id=1LDAoqtsEhnpVkqptycoyijvqpVrwdOw8",
// 	"https://drive.google.com/uc?export=download&id=1f8c2h_mt3G-G_c9SoUdEMD2PeERJIGNa",
// 	"https://drive.google.com/uc?export=download&id=1lMy_vKKdcsPuUfYOzbUvJjVw2_7BvIG_",
// 	"https://drive.google.com/uc?export=download&id=1GlbVdaKGVgCJwtG9dHKwi1Has6b5jvoO",
// 	"https://drive.google.com/uc?export=download&id=130Up7m2ltRv-fP38vsvAp3npNxRUcaiE",
// 	"https://drive.google.com/uc?export=download&id=1hPf0vfUGLBoOlrdCZwIhFuJ5_904OdCv",
// 	"https://drive.google.com/uc?export=download&id=12EtB68IymU71HqH_bTbcCOC3meCA1P_P",
// 	"https://drive.google.com/uc?export=download&id=14iJ_rv-TpuW2dvDFGNdvIYkkj45osm5A",
// 	"https://drive.google.com/uc?export=download&id=1EnatBHwUSHv_s9OmpuGM0L4Bw2zWqQdD",
// 	"https://drive.google.com/uc?export=download&id=1U2-EaWQyHJQb_bbg8y7XlBQlDrYZMtw3",
// 	"https://drive.google.com/uc?export=download&id=1Etw0ACUtBrYtxzfrV-W3hIGQpV-pJqQv",
// 	"https://drive.google.com/uc?export=download&id=1UX17x58tYyXruxfaVlfi5sgmFrCBwzyR",
// 	"https://drive.google.com/uc?export=download&id=1f4s9miVos0az9X3mef7JmIG9L19Hd-7m",
// 	"https://drive.google.com/uc?export=download&id=1ynunkL8ygFzkigWDlARjnYhuDKs3tYgt",
// 	"https://drive.google.com/uc?export=download&id=1LptFvnHBviNwE15DUjbNzyCak8y6vJhV",
// 	"https://drive.google.com/uc?export=download&id=1zLSM_zS1oaeTiCHk3wV92ML2b7fHep5a",
// 	"https://drive.google.com/uc?export=download&id=1X0qXDoc-6au7WipfyR2D-DLPBqpl5qwk",
// 	"https://drive.google.com/uc?export=download&id=1iNOR4GPQ_9iu4AkYZUn8hMDSA_MID0ac",
// 	"https://drive.google.com/uc?export=download&id=1d6a_rDvg9pP-5sV8-TJcKD-bPdmliaXh"
// ];

const photos = [
	{ image: require("../../assets/images/_DSC0391.jpg"), caption: "Ocean Park" },
	{ image: require("../../assets/images/_DSC0476.jpg"), caption: "Ocean Park" },
	{ image: require("../../assets/images/_DSC0513.jpg"), caption: "Ocean Park" },
	{ image: require("../../assets/images/_DSC0948.jpg"), caption: "Gothic Basin" },
	{
		image: require("../../assets/images/_DSC0985-Pano.jpg"),
		caption: "Gothic Basin"
	},
	{
		image: require("../../assets/images/_DSC1379-Pano.jpg"),
		caption: "Gothic Basin"
	},
	{ image: require("../../assets/images/_DSC4216.jpg"), caption: "Pierson College" },
	{ image: require("../../assets/images/_DSC4410.jpg"), caption: "New Haven" },
	{ image: require("../../assets/images/_DSC4417.jpg"), caption: "New Haven" },
	{ image: require("../../assets/images/_DSC4456.jpg"), caption: "JoJos" },
	{ image: require("../../assets/images/_DSC4726.jpg"), caption: "Pierson College" },
	{ image: require("../../assets/images/_DSC5377-2.jpg"), caption: "Norwich" },
	{ image: require("../../assets/images/_DSC6575.jpg"), caption: "Rooftop" },
	{ image: require("../../assets/images/_DSC6845.jpg"), caption: "Window" },
	{ image: require("../../assets/images/_DSC7320.jpg"), caption: "Snoqualmie" },
	{ image: require("../../assets/images/_DSC8250.jpg"), caption: "Maison Mathis" },
	{ image: require("../../assets/images/_DSC8267.jpg"), caption: "MoMA" },
	{ image: require("../../assets/images/_DSC8274.jpg"), caption: "NYC" },
	// /image: / {require("../../assets/images/_DSC8287.jpg"), caption: "location"},
	{ image: require("../../assets/images/_DSC8294.jpg"), caption: "NYC" },
	{ image: require("../../assets/images/_DSC9149.jpg"), caption: "Mount Defiance" },
	{ image: require("../../assets/images/_DSC9248.jpg"), caption: "Diablo Lake" },
	{ image: require("../../assets/images/_DSC9417.jpg"), caption: "Iron Peak" },
	// /image: / {require("../../assets/images/_DSC9422.jpg"), caption: "location"},
	{ image: require("../../assets/images/_DSC9955.jpg"), caption: "Bellevue" }
];

const Gallery = () => (
	<Element className="section-container gallery" name="photo-section">
		{photos.map(({ image, caption }, i) => (
			<div className="image-container">
				<ParallaxBanner key={i} className="image-wrapper" layers={[{ image, amount: 0.1 }]} />
				<h2 className="photo-caption">{caption}</h2>
			</div>
		))}
	</Element>
);
export default Gallery;
