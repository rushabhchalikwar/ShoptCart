import { FETCH_PRODUCTS, SEARCH } from "../actions/types";

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case SEARCH:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};
