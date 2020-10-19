import React, { Component } from "react";
import "./modal.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.hendleKeyDown);
    window.addEventListener("click", this.handleCloseOnOverlay);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.hendleKeyDown);
    window.removeEventListener("click", this.handleCloseOnOverlay);
  }

  hendleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleCloseOnOverlay = (e) => {
    if (e.target.id === "overlay") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="overlay" id="overlay">
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}
