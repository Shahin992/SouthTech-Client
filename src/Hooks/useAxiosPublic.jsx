import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://south-tech-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
