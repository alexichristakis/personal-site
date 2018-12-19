import React from "react";
import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";

const Container = styled.div`
	display: flex;
	margin-top: 10vh;
	flex-direction: row;
	flex-wrap: wrap;
	white-space: nowrap;
	align-items: center;
	justify-content: center;
	z-index: 10;
	pointer-events: none;
`;

const Image = styled.img`
	margin: 20px;
	width: 600px;
	height: 400px;
	z-index: 100;
	pointer-events: auto;
	transition: all 250ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
	&:hover {
		color: #afeeff;
		transform: scale(1.01);
	}
`;

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
	require("../assets/images/_DSC0391.jpg"),
	require("../assets/images/_DSC0476.jpg"),
	require("../assets/images/_DSC0513.jpg"),
	require("../assets/images/_DSC0948.jpg"),
	require("../assets/images/_DSC0985-Pano.jpg"),
	require("../assets/images/_DSC1379-Pano.jpg"),
	require("../assets/images/_DSC4216.jpg"),
	require("../assets/images/_DSC4410.jpg"),
	require("../assets/images/_DSC4417.jpg"),
	require("../assets/images/_DSC4456.jpg"),
	require("../assets/images/_DSC4726.jpg"),
	require("../assets/images/_DSC5377-2.jpg"),
	require("../assets/images/_DSC6575.jpg"),
	require("../assets/images/_DSC6845.jpg"),
	require("../assets/images/_DSC7320.jpg"),
	require("../assets/images/_DSC8250.jpg"),
	require("../assets/images/_DSC8267.jpg"),
	require("../assets/images/_DSC8274.jpg"),
	// require("../assets/images/_DSC8287.jpg"),
	require("../assets/images/_DSC8294.jpg"),
	require("../assets/images/_DSC9149.jpg"),
	require("../assets/images/_DSC9248.jpg"),
	require("../assets/images/_DSC9417.jpg"),
	// require("../assets/images/_DSC9422.jpg"),
	require("../assets/images/_DSC9955.jpg")
];

// <ParallaxBanner
// 	className="your-class"
// 	layers={[
// 		{
// 			image: "https://foo.com/foo.jpg",
// 			amount: 0.1,
// 			slowerScrollRate: false
// 		},
// 		{
// 			image: "https://foo.com/bar.png",
// 			amount: 0.2,
// 			slowerScrollRate: false
// 		}
// 	]}
// 	style={{
// 		height: "500px"
// 	}}
// >
// 	<h1>Banner Children</h1>
// </ParallaxBanner>;

const Gallery = () => {
	return (
		<Container>
			{photos.map((url, i) => (
				<ParallaxBanner
					layers={[{ image: url, amount: 0.1 }]}
					style={{
						margin: "20px",
						width: "600px",
						height: "400px",
						zIndex: "100"
					}}
				/>
			))}
		</Container>
	);
	// return (
	// 	<Container>
	// 		{photos.map((url, i) => {
	// 			return <Image key={i} src={url} />;
	// 		})}
	// 	</Container>
	// );
};
/*
<Image>
	<Parallax bgImage={url} strength={200}>
		<div style={{ width: "600px", height: "400px" }} />
	</Parallax>
</Image>
*/

export default Gallery;
