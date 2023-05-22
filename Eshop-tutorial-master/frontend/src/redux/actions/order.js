import axios from "axios";
import { server } from "../../server";

// Use async/await syntax and try/catch blocks for error handling
// Use camelCase for naming variables and functions
// Use constants for action types
// Use arrow functions for action creators

// get all orders of user
export const GET_ALL_ORDERS_USER_REQUEST = "GET_ALL_ORDERS_USER_REQUEST";
export const GET_ALL_ORDERS_USER_SUCCESS = "GET_ALL_ORDERS_USER_SUCCESS";
export const GET_ALL_ORDERS_USER_FAIL = "GET_ALL_ORDERS_USER_FAIL";

export const getAllOrdersOfUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ORDERS_USER_REQUEST });

    const { data } = await axios.get(`${server}/order/get-all-orders/${userId}`);

    dispatch({ type: GET_ALL_ORDERS_USER_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: GET_ALL_ORDERS_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all orders of seller
export const GET_ALL_ORDERS_SHOP_REQUEST = "GET_ALL_ORDERS_SHOP_REQUEST";
export const GET_ALL_ORDERS_SHOP_SUCCESS = "GET_ALL_ORDERS_SHOP_SUCCESS";
export const GET_ALL_ORDERS_SHOP_FAIL = "GET_ALL_ORDERS_SHOP_FAIL";

export const getAllOrdersOfShop = (shopId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ORDERS_SHOP_REQUEST });

    const { data } = await axios.get(
      `${server}/order/get-seller-all-orders/${shopId}`
    );

    dispatch({ type: GET_ALL_ORDERS_SHOP_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: GET_ALL_ORDERS_SHOP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all orders of Admin
export const ADMIN_ALL_ORDERS_REQUEST = "ADMIN_ALL_ORDERS_REQUEST";
export const ADMIN_ALL_ORDERS_SUCCESS = "ADMIN_ALL_ORDERS_SUCCESS";
export const ADMIN_ALL_ORDERS_FAIL = "ADMIN_ALL_ORDERS_FAIL";

export const getAllOrdersOfAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ALL_ORDERS_REQUEST });

    const { data } = await axios.get(`${server}/order/admin-all-orders`, {
      withCredentials: true,
    });

    dispatch({ type: ADMIN_ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ADMIN_ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};


/* older code is down */

// import axios from 'axios';
// import { server } from '../../server';

// // get all orders of user
// export const getAllOrdersOfUser = (userId) => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'getAllOrdersUserRequest',
//     });

//     const { data } = await axios.get(
//       `${server}/order/get-all-orders/${userId}`
//     );

//     dispatch({
//       type: 'getAllOrdersUserSuccess',
//       payload: data.orders,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'getAllOrdersUserFailed',
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all orders of seller
// export const getAllOrdersOfShop = (shopId) => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'getAllOrdersShopRequest',
//     });

//     const { data } = await axios.get(
//       `${server}/order/get-seller-all-orders/${shopId}`
//     );

//     dispatch({
//       type: 'getAllOrdersShopSuccess',
//       payload: data.orders,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'getAllOrdersShopFailed',
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all orders of Admin
// export const getAllOrdersOfAdmin = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'adminAllOrdersRequest',
//     });

//     const { data } = await axios.get(`${server}/order/admin-all-orders`, {
//       withCredentials: true,
//     });

//     dispatch({
//       type: 'adminAllOrdersSuccess',
//       payload: data.orders,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'adminAllOrdersFailed',
//       payload: error.response.data.message,
//     });
//   }
// };
