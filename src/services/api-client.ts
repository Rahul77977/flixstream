import axios from 'axios';

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "8f7148f19b11419891ff1fbd47a84f05",
  },
});
