import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchStart } from "../features/authSlice";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const login = async (userInfo) => {
    const BASE_URL = "http://12332.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};

export default useAuthCall;
