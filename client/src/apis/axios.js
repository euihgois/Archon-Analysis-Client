import axios from "axios";

const instance = axios.create({
  baseURL: "https://archon-analysis-amaryllis.herokuapp.com/",
});

export default instance;
