import axios from "axios";
import { useSelector } from "react-redux";
const BASE_URL = "http://12332.fullstack.clarusway.com/";

const useAxios = () => {
    const {token} = useSelector(state => state.auth)


  const axiosWithToken = axios.create({
    baseURL: "http://12332.fullstack.clarusway.com/",
    timeout: 1000,
    headers: { "Authorization": `Token ${token}` },
  });



  return {axiosWithToken}
};

export default useAxios;
