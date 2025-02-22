import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = await res.data;
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {}
};
