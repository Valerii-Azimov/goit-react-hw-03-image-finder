import React from "react";
import "./imageGallery.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images, toggleModal, handleLargeFoto }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          url={webformatURL}
          toggleModal={toggleModal}
          onShow={() => handleLargeFoto(largeImageURL)}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
}
