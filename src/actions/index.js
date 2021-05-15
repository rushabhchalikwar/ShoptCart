import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  ADD_TO_CART,
  RETRIVE_CART,
  RETRIEVE_ADDRESSES,
  ADD_ADDRESS,
  RETRIEVE_ORDER,
  REMOVE_ADDRESS,
  EDIT_ADDRESS,
  PLACE_ORDER,
  REMOVE_CART_PRODUCT,
} from "../actions/types";
import products from "../apis/products";

export const signIn = (userId, firstName, lastName, email, imageURL) => {
  return {
    type: SIGN_IN,
    payload: { userId, firstName, lastName, email, imageURL },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const search = (searchTerm) => async (dispatch) => {
  const response = await products.get("/products");
  const filterProduct = response.data.filter((product) => {
    return product.title.toUpperCase().includes(searchTerm.toUpperCase());
  });

  dispatch({ type: FETCH_PRODUCTS, payload: filterProduct });
};

export const fetchProducts = () => async (dispatch) => {
  const response = await products.get("/products");

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await products.get(`/products/${id}`);

  dispatch({ type: FETCH_PRODUCT, payload: response.data });
};

export const addTocart = (product) => async (dispatch, getState) => {
  const { userId } = getState().auth.user;
  const { id } = product;
  const response = await products.post("/cart", {
    userId,
    productId: id,
    product,
  });

  dispatch({ type: ADD_TO_CART, payload: response.data });

  history.push("/checkout/cart");
};

export const retrieveCart = () => async (dispatch, getState) => {
  const { userId } = getState().auth.user;
  const response = await products.get(`/cart/${userId}`);

  dispatch({ type: RETRIVE_CART, payload: response.data });
};

export const retrieveAddresses = () => async (dispatch, getState) => {
  //const response = await products.get(`/addresses.json`);
  const { userId } = getState().auth.user;
  const response = await products.get(`/addresses/${userId}`);

  dispatch({ type: RETRIEVE_ADDRESSES, payload: response.data });
};

export const addAddress = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth.user;
  const response = await products.post("/addresses", {
    ...formValues,
    customer_id: userId,
  });

  console.log(response);

  dispatch({ type: ADD_ADDRESS, payload: getState().addresses.addresses });
  history.push("/my/addresses");
};

export const retrieveOrder = () => async (dispatch, getState) => {
  //const response = await products.get(`/addresses.json`);
  const { userId } = getState().auth.user;
  const response = await products.get(`/orders/${userId}`);

  dispatch({ type: RETRIEVE_ORDER, payload: response.data });
};

export const removeAddress = (id) => async (dispatch) => {
  await products.delete(`/addresses/${id}`);

  dispatch({ type: REMOVE_ADDRESS, payload: id });
  history.push("/");
  history.push("/my/addresses");
};

export const editAddress = (id, formValues) => async (dispatch) => {
  const response = await products.patch(`/addresses/${id}`, formValues);
  dispatch({ type: EDIT_ADDRESS, payload: response.data });
  history.push("/");
  history.push("/my/addresses");
};

export const placeOrder = (orderDetails) => async (dispatch, getState) => {
  const response = await products.post("/orders", orderDetails);

  dispatch({ type: PLACE_ORDER, payload: response.data });

  history.push("/my/orders");
};

export const removeCartProduct = () => async (dispatch, getState) => {
  const { userId } = getState().auth.user;
  await products.delete(`/cart/${userId}`);

  dispatch({ type: REMOVE_CART_PRODUCT, payload: userId });
  history.push("/");
  history.push("/checkout/cart");
};
