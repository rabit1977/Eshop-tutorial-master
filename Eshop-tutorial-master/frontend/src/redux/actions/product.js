import axios from "axios";
import { server } from "../../server";

// Use async/await syntax and try/catch blocks for error handling
// Use camelCase for naming variables and functions
// Use constants for action types
// Use arrow functions for action creators

// create product
export const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";
export const PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS";
export const PRODUCT_CREATE_FAIL = "PRODUCT_CREATE_FAIL";

export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get All Products of a shop
export const GET_ALL_PRODUCTS_SHOP_REQUEST = "GET_ALL_PRODUCTS_SHOP_REQUEST";
export const GET_ALL_PRODUCTS_SHOP_SUCCESS = "GET_ALL_PRODUCTS_SHOP_SUCCESS";
export const GET_ALL_PRODUCTS_SHOP_FAIL = "GET_ALL_PRODUCTS_SHOP_FAIL";

export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_SHOP_REQUEST });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({ type: GET_ALL_PRODUCTS_SHOP_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_SHOP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL";

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all products
export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};



/* Older code is down */

// import axios from "axios";
// import { server } from "../../server";

// // create product
// export const createProduct = (newForm) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "productCreateRequest",
//     });

//     const config = { headers: { "Content-Type": "multipart/form-data" } };

//     const { data } = await axios.post(
//       `${server}/product/create-product`,
//       newForm,
//       config
//     );
//     dispatch({
//       type: "productCreateSuccess",
//       payload: data.product,
//     });
//   } catch (error) {
//     dispatch({
//       type: "productCreateFail",
//       payload: error.response.data.message,
//     });
//   }
// };

// // get All Products of a shop
// export const getAllProductsShop = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllProductsShopRequest",
//     });

//     const { data } = await axios.get(
//       `${server}/product/get-all-products-shop/${id}`
//     );
//     dispatch({
//       type: "getAllProductsShopSuccess",
//       payload: data.products,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllProductsShopFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// // delete product of a shop
// export const deleteProduct = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "deleteProductRequest",
//     });

//     const { data } = await axios.delete(
//       `${server}/product/delete-shop-product/${id}`,
//       {
//         withCredentials: true,
//       }
//     );

//     dispatch({
//       type: "deleteProductSuccess",
//       payload: data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: "deleteProductFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all products
// export const getAllProducts = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllProductsRequest",
//     });

//     const { data } = await axios.get(`${server}/product/get-all-products`);
//     dispatch({
//       type: "getAllProductsSuccess",
//       payload: data.products,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllProductsFailed",
//       payload: error.response.data.message,
//     });
//   }
// };
