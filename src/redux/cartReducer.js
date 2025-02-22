import { ADD_TO_CART } from "./action";

const initState = { cart: [] };
export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: action.payload}
    default:
      return state;
  }
};
