import axios from "axios";
import { server } from "../../server";

// Use async/await syntax and try/catch blocks for error handling
// Use camelCase for naming variables and functions
// Use constants for action types
// Use arrow functions for action creators

// get all sellers --- admin
export const GET_ALL_SELLERS_REQUEST = "GET_ALL_SELLERS_REQUEST";
export const GET_ALL_SELLERS_SUCCESS = "GET_ALL_SELLERS_SUCCESS";
export const GET_ALL_SELLERS_FAIL = "GET_ALL_SELLERS_FAIL";

export const getAllSellers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_SELLERS_REQUEST });

    const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
      withCredentials: true,
    });

    dispatch({ type: GET_ALL_SELLERS_SUCCESS, payload: data.sellers });
  } catch (error) {
    dispatch({
      type: GET_ALL_SELLERS_FAIL,
      payload: error.response.data.message,
    });
  }
};



/* older code is down */

// import axios from "axios";
// import { server } from "../../server";

// // get all sellers --- admin
// export const getAllSellers = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllSellersRequest",
//     });

//     const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
//       withCredentials: true,
//     });

//     dispatch({
//       type: "getAllSellersSuccess",
//       payload: data.sellers,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllSellerFailed",
//       payload: error.response.data.message,
//     });
//   }
// };