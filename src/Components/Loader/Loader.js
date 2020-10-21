import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../Loader/loader.css";

export default function Spiner() {
  return (
    <div className="loader">
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />;
    </div>
  );
}
