import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    purchases: null,
    sales: null,
    products: null,
    brands: null,
    firms: null,
    categories: null,
    loading:false,
    error:false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: {data, url} }) => {
      state.loading = false;
      state[url] = data
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
