import { PLACE_ORDER, RETRIEVE_ORDER } from "../actions/types";

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_ORDER:
      return { ...state, order: action.payload };
    case PLACE_ORDER:
      return state;
    default:
      return state;
  }
};
