import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./action";


const initState = { cart: JSON.parse(localStorage.getItem('cart')) || [] }
export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: action.payload }
    case REMOVE_FROM_CART:
      return {...state, cart: action.payload }
    case UPDATE_QUANTITY:
      return {...state, cart: action.payload }
    default:
      return state;
  }
};
