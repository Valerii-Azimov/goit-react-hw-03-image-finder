import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Spiner() {
  return <Loader type="Bars" color="#00BFFF" height={80} width={80} />;
}
