import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))