import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = await res.data;
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {}
};

export const addToCart = (productObj) => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let localStorageCart;
  if (cart == null) {
    localStorageCart = [{ ...productObj }];
    localStorage.setItem("cart", JSON.stringify(localStorageCart));
  } else {
    localStorageCart = [...cart, { ...productObj }];
    localStorage.setItem("cart", JSON.stringify(localStorageCart));
  }
  dispatch({ type: ADD_TO_CART, payload: localStorageCart });
};
