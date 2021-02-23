import _ from "lodash";
import {
  ADD_ADDRESS,
  EDIT_ADDRESS,
  REMOVE_ADDRESS,
  RETRIEVE_ADDRESSES,
} from "../actions/types";

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_ADDRESSES:
      return { ...state, addresses: action.payload };
    case ADD_ADDRESS:
      return { ...state, addresses: action.payload };
    case REMOVE_ADDRESS:
      return _.omit(state, action.payload);
    case EDIT_ADDRESS:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
