import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/",
  //baseURL: "https://videobrowser-298103-default-rtdb.firebaseio.com/",
});
