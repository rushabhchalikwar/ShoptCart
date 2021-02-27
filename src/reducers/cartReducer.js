import _ from "lodash";
import { REMOVE_CART_PRODUCT, RETRIVE_CART } from "../actions/types";

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case RETRIVE_CART:
      return { ...state, products: action.payload };
    case REMOVE_CART_PRODUCT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
