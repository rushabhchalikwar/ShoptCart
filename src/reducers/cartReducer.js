import { RETRIVE_CART } from "../actions/types";

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case RETRIVE_CART:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
