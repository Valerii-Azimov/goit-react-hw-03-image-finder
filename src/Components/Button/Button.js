import React from "react";
import "../Button/button.css";

export default function ButtonLoadMore({ fetchImages }) {
  return (
    <button type="button" onClick={fetchImages} className="button">
      Load More
    </button>
  );
}
