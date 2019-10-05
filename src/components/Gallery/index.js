import React, { Component } from "react";
import { Element } from "react-scroll";
// import { ParallaxBanner } from "react-scroll-parallax";

import Image from "./Image";

import "./Gallery.scss";

class Gallery extends Component {
  state = {
    columns: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { screen, photos } = nextProps;
    const { width } = screen;

    let columns, num_columns;
    if (width <= 400) num_columns = 1;
    else if (width <= 1065) num_columns = 2;
    else if (width <= 1200) num_columns = 3;
    else if (width <= 1500) num_columns = 4;
    else if (width > 1500) num_columns = 5;

    // no need to update if the number of columns isn't changing
    if (num_columns === prevState.columns.length) return null;
    else {
      // sort by decreasing aspect ratio
      const sorted_photos = photos.sort((a, b) => b.ratio - a.ratio);

      // generate empty columns
      columns = Array(num_columns).fill(null);
      columns = columns.map(column => ({ photos: [], height: 0 }));

      // fill columns with makespan implementation
      sorted_photos.forEach(photo => {
        let shortest_column = 0;

        // find shortest column
        columns.forEach(({ height }, i) => {
          if (height < columns[shortest_column].height) shortest_column = i;
        });

        // insert at a random location
        let photo_ref = columns[shortest_column].photos;
        let index = (photo_ref.length + 1) * Math.random();
        photo_ref = photo_ref.splice(index, 0, photo);

        columns[shortest_column].height += photo.ratio;
      });

      return { columns };
    }
  }

  render() {
    const { columns } = this.state;

    return (
      <Element className="section-container photos" name="photos">
        <h1>Photos</h1>
        <section className="gallery">
          {columns.map(({ photos }, column_index) => (
            <div key={column_index} className="column">
              {photos.map(({ src, caption, ratio }, photo_index) => (
                <Image
                  key={photo_index}
                  src={src}
                  ratio={ratio}
                  num_columns={columns.length}
                />
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
