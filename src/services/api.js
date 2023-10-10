import axios from "axios";

const token = "348088421ad3fb3a9d6e56bb6a9a8f80";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: token,
  },
});
