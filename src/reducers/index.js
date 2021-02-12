import { combineReducers } from "redux";
import addressReducer from "./addressReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productDetailReducer from "./productDetailReducer";
import productReducer from "./productReducer";
import { reducer as formReducer } from "redux-form";
import orderReducer from "./orderReducer";

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  product: productDetailReducer,
  cartProducts: cartReducer,
  addresses: addressReducer,
  order: orderReducer,
  form: formReducer,
});
