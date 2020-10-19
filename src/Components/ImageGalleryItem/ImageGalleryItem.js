import React from "react";
import "./imageGalleryItem.css";

export default function ImageGalleryItem({ url, toggleModal, onShow, id }) {
  return (
    <li onClick={toggleModal} className="imageGalleryItem">
      <img
        src={url}
        alt=""
        id={id}
        onClick={onShow}
        className="imageGalleryItem-image"
      />
    </li>
  );
}
