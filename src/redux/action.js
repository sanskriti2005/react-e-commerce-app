import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

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
    localStorageCart = [{ ...productObj, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(localStorageCart));
  } else {
    let quantity;
    const objFind = cart.find((cartItem) => cartItem.id === productObj.id);
    if (objFind) {
      quantity = objFind.quantity + 1;
    }
    const objForLocalStorage = { ...objFind, quantity: quantity };
    const updatedCart = cart.filter(
      (cartItem) => cartItem.id !== objFind.id && cartItem
    );
    localStorageCart = [...updatedCart, objForLocalStorage];
    localStorage.setItem("cart", JSON.stringify(localStorageCart));
  }
  dispatch({ type: ADD_TO_CART, payload: localStorageCart });
};

export const removeFromCart = (id) => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const updatedCart = cart.filter((cartItem) => cartItem.id !== id && cartItem);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  dispatch({ type: REMOVE_FROM_CART, payload: updatedCart });
};

export const updateQuantity = (productObj, quantityFromCart) => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let localStorageCart;
  const objFind = cart.find((cartItem) => cartItem.id === productObj.id);
  let quantity = Number(quantityFromCart);
  const objForLocalStorage = { ...objFind, quantity: quantity };
  const updatedCart = cart.filter(
    (cartItem) => cartItem.id !== objFind.id && cartItem
  );
  localStorageCart = [...updatedCart, objForLocalStorage];
  localStorage.setItem("cart", JSON.stringify(localStorageCart));
  dispatch({ type: UPDATE_QUANTITY, payload: localStorageCart })
};
