import { ADD_ADDRESS, RETRIEVE_ADDRESSES } from "../actions/types";

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_ADDRESSES:
      return { ...state, addresses: action.payload };
    case ADD_ADDRESS:
      return { ...state, addresses: action.payload };
    default:
      return state;
  }
};
