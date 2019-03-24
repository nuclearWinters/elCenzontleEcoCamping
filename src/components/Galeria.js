import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import a1 from "../imgs/a1.JPG"
import a2 from "../imgs/a2.JPG"
import a3 from "../imgs/a3.JPG"
import a4 from "../imgs/a4.jpg"
import a5 from "../imgs/a5.JPG"
import a6 from "../imgs/a6.JPG"
import a7 from "../imgs/a7.jpg"
import b1 from "../imgs/b1.jpeg"
import b2 from "../imgs/b2.jpeg"
import b3 from "../imgs/b3.jpeg"
import b4 from "../imgs/b4.jpeg"
import b5 from "../imgs/b5.jpeg"
import b6 from "../imgs/b6.jpeg"
import b7 from "../imgs/b7.jpeg"
import b8 from "../imgs/b8.jpeg"
import b9 from "../imgs/b9.jpeg"
import b10 from "../imgs/b10.jpeg"
import b11 from "../imgs/b11.jpeg"
import b12 from "../imgs/b12.jpeg"
import b13 from "../imgs/b13.jpeg"
import b14 from "../imgs/b14.jpeg"
import b15 from "../imgs/b15.jpeg"
import b16 from "../imgs/b16.jpeg"
import b17 from "../imgs/b17.jpeg"
import b18 from "../imgs/b18.jpeg"
import b19 from "../imgs/b19.jpeg"
import b20 from "../imgs/b20.jpeg"
import b21 from "../imgs/b21.jpeg"
import b22 from "../imgs/b22.jpeg"
import b23 from "../imgs/b23.jpeg"
import b24 from "../imgs/b24.jpeg"
import b25 from "../imgs/b25.jpeg"
import b26 from "../imgs/b26.jpeg"
import b27 from "../imgs/b27.jpeg"
import b28 from "../imgs/b28.jpeg"
import b29 from "../imgs/b29.jpeg"
import b30 from "../imgs/b30.jpeg"

const images = [
  {
    original: a1,
    thumbnail: a1,
    originalAlt: "Camping Laguna Milagros, Huay Pix (31)"
    },
    {
    original: a2,
    thumbnail: a2,
    originalAlt: "Camping Laguna Milagros, Huay Pix (32)"
    },
    {
    original: a3,
    thumbnail: a3,
    originalAlt: "Camping Laguna Milagros, Huay Pix (33)"
    },
    {
    original: a4,
    thumbnail: a4,
    originalAlt: "Camping Laguna Milagros, Huay Pix (34)"
    },
    {
    original: a5,
    thumbnail: a5,
    originalAlt: "Camping Laguna Milagros, Huay Pix (35)"
    },
    {
    original: a6,
    thumbnail: a6,
    originalAlt: "Camping Laguna Milagros, Huay Pix (36)"
    },
    {
    original: a7,
    thumbnail: a7,
    originalAlt: "Camping Laguna Milagros, Huay Pix (37)"
    },
    {
    original: b1,
    thumbnail: b1,
    originalAlt: "Camping Laguna Milagros, Huay Pix (1)"
    },
    {
    original: b2,
    thumbnail: b2,
    originalAlt: "Camping Laguna Milagros, Huay Pix (2)"
    },
    {
    original: b3,
    thumbnail: b3,
    originalAlt: "Camping Laguna Milagros, Huay Pix (3)"
    },
    {
    original: b4,
    thumbnail: b4,
    originalAlt: "Camping Laguna Milagros, Huay Pix (4)"
    },
    {
    original: b5,
    thumbnail: b5,
    originalAlt: "Camping Laguna Milagros, Huay Pix (5)"
    },
    {
    original: b6,
    thumbnail: b6,
    originalAlt: "Camping Laguna Milagros, Huay Pix (6)"
    },
    {
    original: b7,
    thumbnail: b7,
    originalAlt: "Camping Laguna Milagros, Huay Pix (7)"
    },
    {
    original: b8,
    thumbnail: b8,
    originalAlt: "Camping Laguna Milagros, Huay Pix (8)"
    },
    {
    original: b9,
    thumbnail: b9,
    originalAlt: "Camping Laguna Milagros, Huay Pix (9)"
    },
    {
    original: b10,
    thumbnail: b10,
    originalAlt: "Camping Laguna Milagros, Huay Pix (10)"
    },
    {
    original: b11,
    thumbnail: b11,
    originalAlt: "Camping Laguna Milagros, Huay Pix (11)"
    },
    {
    original: b12,
    thumbnail: b12,
    originalAlt: "Camping Laguna Milagros, Huay Pix (12)"
    },
    {
    original: b13,
    thumbnail: b13,
    originalAlt: "Camping Laguna Milagros, Huay Pix (13)"
    },
    {
    original: b14,
    thumbnail: b14,
    originalAlt: "Camping Laguna Milagros, Huay Pix (14)"
    },
    {
    original: b15,
    thumbnail: b15,
    originalAlt: "Camping Laguna Milagros, Huay Pix (15)"
    },
    {
    original: b16,
    thumbnail: b16,
    originalAlt: "Camping Laguna Milagros, Huay Pix (16)"
    },
    {
    original: b17,
    thumbnail: b17,
    originalAlt: "Camping Laguna Milagros, Huay Pix (17)"
    },
    {
    original: b18,
    thumbnail: b18,
    originalAlt: "Camping Laguna Milagros, Huay Pix (18)"
    },
    {
    original: b19,
    thumbnail: b19,
    originalAlt: "Camping Laguna Milagros, Huay Pix (19)"
    },
    {
    original: b20,
    thumbnail: b20,
    originalAlt: "Camping Laguna Milagros, Huay Pix (20)"
    },
    {
    original: b21,
    thumbnail: b21,
    originalAlt: "Camping Laguna Milagros, Huay Pix (21)"
    },
    {
    original: b22,
    thumbnail: b22,
    originalAlt: "Camping Laguna Milagros, Huay Pix (22)"
    },
    {
    original: b23,
    thumbnail: b23,
    originalAlt: "Camping Laguna Milagros, Huay Pix (23)"
    },
    {
    original: b24,
    thumbnail: b24,
    originalAlt: "Camping Laguna Milagros, Huay Pix (24)"
    },
    {
    original: b25,
    thumbnail: b25,
    originalAlt: "Camping Laguna Milagros, Huay Pix (25)"
    },
    {
    original: b26,
    thumbnail: b26,
    originalAlt: "Camping Laguna Milagros, Huay Pix (26)"
    },
    {
    original: b27,
    thumbnail: b27,
    originalAlt: "Camping Laguna Milagros, Huay Pix (27)"
    },
    {
    original: b28,
    thumbnail: b28,
    originalAlt: "Camping Laguna Milagros, Huay Pix (28)"
    },
    {
    original: b29,
    thumbnail: b29,
    originalAlt: "Camping Laguna Milagros, Huay Pix (29)"
    },
    {
    original: b30,
    thumbnail: b30,
    originalAlt: "Camping Laguna Milagros, Huay Pix (30)"
    },
  ]

class Galeria extends Component {
  render() {
    return (
        <div className="galeria-index">
            <ImageGallery items={images} showPlayButton={false} autoPlay={true} slideInterval={5000}/>
        </div>
    );
  }
}

export default Galeria;