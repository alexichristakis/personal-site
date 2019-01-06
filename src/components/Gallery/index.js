import React, { Component } from "react";
import { Element } from "react-scroll";
// import { ParallaxBanner } from "react-scroll-parallax";

import Image from "./Image";

import "./Gallery.scss";

import PHOTOS from "../../assets/images";

class Gallery extends Component {
	state = { columns: [] };

	static getDerivedStateFromProps(nextProps, prevState) {
		const { width } = nextProps.screen;

		let columns, num_columns;
		if (width <= 400) num_columns = 1;
		else if (width <= 1065) num_columns = 2;
		else if (width <= 1200) num_columns = 3;
		else if (width <= 1500) num_columns = 4;
		else if (width > 1500) num_columns = 5;

		// no need to update
		if (num_columns == prevState.columns.length) return null;

		// columns = generateColumns({ num_columns, photos: photos });
		const sorted_photos = PHOTOS.sort((a, b) => b.ratio - a.ratio);

		// generate columns
		columns = Array(num_columns).fill(null);
		columns = columns.map(column => ({ photos: [], height: 0 }));

		sorted_photos.forEach(photo => {
			let shortest_column = 0;
			columns.forEach(({ height }, i) => {
				if (height < columns[shortest_column].height) shortest_column = i;
			});

			// insert at a random location (to shuffle the order)
			let photo_ref = columns[shortest_column].photos;
			let index = (photo_ref.length + 1) * Math.random();
			photo_ref = photo_ref.splice(index, 0, photo);

			columns[shortest_column].height += photo.ratio;
		});

		return { columns };
	}

	render() {
		const { columns } = this.state;

		return (
			<Element className="section-container" name="photo-section">
				<section className="gallery">
					{columns.map(({ photos }, column_index) => (
						<div key={column_index} className="column">
							{photos.map(({ src, caption, ratio }, photo_index) => (
								<Image key={photo_index} src={src} ratio={ratio} num_columns={columns.length} />
							))}
						</div>
					))}
				</section>
			</Element>
		);
	}
}

export default Gallery;

// <h2 className="photo-caption">{caption}</h2>

//*<ParallaxBanner className="image-wrapper" layers={[{ image, amount: 0.1 }]} />*
