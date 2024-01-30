import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsReducer/fetchProducts",
  async () => {
    let response = axios.get("https://api.escuelajs.co/api/v1/products");
    return response.data;
  }
);

const productsReducer = createSlice({
  name: "productsReducer",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default productsReducer.reducer;
