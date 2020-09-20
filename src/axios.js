import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-d0d6b.cloudfunctions.net/api",
  //"http://localhost:5001/clone-d0d6b/us-central1/api", //THE API (cloud function) URL
});

export default instance;
