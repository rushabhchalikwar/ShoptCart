import { SEARCH } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};
