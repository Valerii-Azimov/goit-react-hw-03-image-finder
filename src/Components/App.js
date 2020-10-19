import React, { Component } from "react";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery.js";
import Modal from "./Modal/Modal";
import imagesApi from "../services/imagesApi";
import ButtonLoadMore from "./Button/Button";

import "./app.css";

export default class App extends Component {
  state = {
    images: [],
    largeImageURL: null,
    loading: false,
    showModal: false,
    error: null,
    searchQuery: "",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      // console.log("ok");
      this.fetchImages(nextQuery);
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({
      loading: true,
    });

    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };
  // axios
  //   .get(
  //     "https://pixabay.com/api/?q=flower&page=1&key=17916364-315350d6aa1d9b654f7b6ef04&image_type=photo&orientation=horizontal&per_page=4"
  //     // &image_type=photo&orientation=horizontal&per_page=12
  //     // "https://hn.algolia.com/api/v1/search?query=react"
  //   )
  //   .then((response) => this.setState({ images: response.data.hits }))
  //   .catch((error) => this.setState({ error }))
  //   .finally(() => this.setState({ loading: false }));

  toggleModal = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  handleLargeFoto = (url) => {
    this.setState({ largeImageURL: url });
    console.log(url);
  };

  render() {
    const { images, showModal, largeImageURL, error, loading } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <p>Whoops, something went wrong</p>}

        {loading ? (
          // <div>Loading...</div>
          <Loader />
        ) : (
          <ImageGallery
            images={images}
            toggleModal={this.toggleModal}
            handleLargeFoto={this.handleLargeFoto}
          ></ImageGallery>
        )}
        {images.length > 0 && !loading && (
          <ButtonLoadMore fetchImages={this.fetchImages} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL}></img>
          </Modal>
        )}
      </div>
    );
  }
}
