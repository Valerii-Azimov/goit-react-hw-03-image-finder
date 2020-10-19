import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?page=${page}&key=17916364-315350d6aa1d9b654f7b6ef04&image_type=photo&orientation=horizontal&per_page=4&q=${searchQuery}`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};
