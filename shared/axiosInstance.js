import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "www.themealdb.com/api/json/v1/1",
});

export default axiosInstance;
