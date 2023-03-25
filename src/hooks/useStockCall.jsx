import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice";
import useAxios from "./useAxios";
import {toastErrorNotify,toastSuccessNotify} from "../helper/ToastNotify"

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    // const BASE_URL = "http://12332.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //     headers: { Authorization: `Token ${token}` },
      //   });
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`)
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be deleted`)
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;
