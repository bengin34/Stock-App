import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";


const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const BASE_URL = "http://12332.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data))
      navigate("/stock")
     
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
    }
  };

  
  
  
  const register = async (userInfo) => {
    
    dispatch(fetchStart())
    try {
      const {data} = await axios.post(`${BASE_URL}account/register/`,{...userInfo, password2:userInfo.password})
      dispatch(registerSuccess(data))
      navigate("/stock")
      console.log(data)
      return data
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }
  

  const logOut =  () => {
    dispatch(logoutSuccess())
    navigate("/")
  }


  
  
  return { login, register,logOut };
};

export default useAuthCall;
