import { FETCH_PRODUCT, ADD_TO_CART } from "../actions/types";

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, product: action.payload };
    case ADD_TO_CART:
      return state;
    default:
      return state;
  }
};
