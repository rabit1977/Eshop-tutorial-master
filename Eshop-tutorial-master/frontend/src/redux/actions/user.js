import axios from "axios";
import { server } from "../../server";

// Use async/await syntax and try/catch blocks for error handling
// Use camelCase for naming variables and functions
// Use constants for action types
// Use arrow functions for action creators

// load user
export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAIL = "LOAD_USER_FAIL";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// load seller
export const LOAD_SELLER_REQUEST = "LOAD_SELLER_REQUEST";
export const LOAD_SELLER_SUCCESS = "LOAD_SELLER_SUCCESS";
export const LOAD_SELLER_FAIL = "LOAD_SELLER_FAIL";

export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_SELLER_REQUEST });
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    dispatch({ type: LOAD_SELLER_SUCCESS, payload: data.seller });
  } catch (error) {
    dispatch({
      type: LOAD_SELLER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// user update information
export const UPDATE_USER_INFO_REQUEST = "UPDATE_USER_INFO_REQUEST";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
export const UPDATE_USER_INFO_FAIL = "UPDATE_USER_INFO_FAIL";

export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_INFO_REQUEST });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
        }
      );

      dispatch({ type: UPDATE_USER_INFO_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_INFO_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  
export const UPDATE_USER_ADDRESS_REQUEST = "UPDATE_USER_ADDRESS_REQUEST";
export const UPDATE_USER_ADDRESS_SUCCESS = "UPDATE_USER_ADDRESS_SUCCESS";
export const UPDATE_USER_ADDRESS_FAIL = "UPDATE_USER_ADDRESS_FAIL";

export const updateUserAddress =
  (country, city, address1, address2, zipCode, addressType) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_ADDRESS_REQUEST });

      const { data } = await axios.put(
        `${server}/user/update-user-addresses`,
        {
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType,
        },
        { withCredentials: true }
      );

      dispatch({
        type: UPDATE_USER_ADDRESS_SUCCESS,
        payload: {
          successMessage: "User address updated succesfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ADDRESS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// delete user address
export const DELETE_USER_ADDRESS_REQUEST = "DELETE_USER_ADDRESS_REQUEST";
export const DELETE_USER_ADDRESS_SUCCESS = "DELETE_USER_ADDRESS_SUCCESS";
export const DELETE_USER_ADDRESS_FAIL = "DELETE_USER_ADDRESS_FAIL";

export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_ADDRESS_REQUEST });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: DELETE_USER_ADDRESS_SUCCESS,
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all users --- admin
export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAIL = "GET_ALL_USERS_FAIL";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_USERS_REQUEST });

    const { data } = await axios.get(`${server}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};



/* older code is down */

// import axios from "axios";
// import { server } from "../../server";

// // load user
// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadUserRequest",
//     });
//     const { data } = await axios.get(`${server}/user/getuser`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: "LoadUserSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadUserFail",
//       payload: error.response.data.message,
//     });
//   }
// };

// // load seller
// export const loadSeller = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadSellerRequest",
//     });
//     const { data } = await axios.get(`${server}/shop/getSeller`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: "LoadSellerSuccess",
//       payload: data.seller,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadSellerFail",
//       payload: error.response.data.message,
//     });
//   }
// };

// // user update information
// export const updateUserInformation =
//   (name, email, phoneNumber, password) => async (dispatch) => {
//     try {
//       dispatch({
//         type: "updateUserInfoRequest",
//       });

//       const { data } = await axios.put(
//         `${server}/user/update-user-info`,
//         {
//           email,
//           password,
//           phoneNumber,
//           name,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       dispatch({
//         type: "updateUserInfoSuccess",
//         payload: data.user,
//       });
//     } catch (error) {
//       dispatch({
//         type: "updateUserInfoFailed",
//         payload: error.response.data.message,
//       });
//     }
//   };

// // update user address
// export const updatUserAddress =
//   (country, city, address1, address2, zipCode, addressType) =>
//   async (dispatch) => {
//     try {
//       dispatch({
//         type: "updateUserAddressRequest",
//       });

//       const { data } = await axios.put(
//         `${server}/user/update-user-addresses`,
//         {
//           country,
//           city,
//           address1,
//           address2,
//           zipCode,
//           addressType,
//         },
//         { withCredentials: true }
//       );

//       dispatch({
//         type: "updateUserAddressSuccess",
//         payload: {
//           successMessage: "User address updated succesfully!",
//           user: data.user,
//         },
//       });
//     } catch (error) {
//       dispatch({
//         type: "updateUserAddressFailed",
//         payload: error.response.data.message,
//       });
//     }
//   };

// // delete user address
// export const deleteUserAddress = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "deleteUserAddressRequest",
//     });

//     const { data } = await axios.delete(
//       `${server}/user/delete-user-address/${id}`,
//       { withCredentials: true }
//     );

//     dispatch({
//       type: "deleteUserAddressSuccess",
//       payload: {
//         successMessage: "User deleted successfully!",
//         user: data.user,
//       },
//     });
//   } catch (error) {
//     dispatch({
//       type: "deleteUserAddressFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all users --- admin
// export const getAllUsers = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllUsersRequest",
//     });

//     const { data } = await axios.get(`${server}/user/admin-all-users`, {
//       withCredentials: true,
//     });

//     dispatch({
//       type: "getAllUsersSuccess",
//       payload: data.users,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllUsersFailed",
//       payload: error.response.data.message,
//     });
//   }
// };