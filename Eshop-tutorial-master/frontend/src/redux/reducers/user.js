// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the user
const initialState = {
  isAuthenticated: false,
};

// Create a slice of the state for the user
const userSlice = createSlice({
  // Give the slice a name
  name: 'user',
  // Pass the initial state
  initialState,
  // Define the reducers for the slice
  reducers: {
    // Load a user
    LoadUserRequest: (state) => {
      state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    LoadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    // Update user information
    updateUserInfoRequest: (state) => {
      state.loading = true;
    },
    updateUserInfoSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    updateUserInfoFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update user address
    updateUserAddressRequest: (state) => {
      state.addressloading = true;
    },
    updateUserAddressSuccess: (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    },
    updateUserAddressFailed: (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    },

    // Delete user address
    deleteUserAddressRequest: (state) => {
      state.addressloading = true;
    },
    deleteUserAddressSuccess: (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    },
    deleteUserAddressFailed: (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    },

    // Get all users for admin
    getAllUsersRequest: (state) => {
      state.usersLoading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.usersLoading = false;
      state.users = action.payload;
    },
    getAllUsersFailed: (state, action) => {
      state.usersLoading = false;
      state.error = action.payload;
    },

    // Clear errors
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessages: (state) => {
      state.successMessage = null;
    },
  },
});

// Export the reducer and action creators from the slice
export const {
  LoadUserRequest,
  LoadUserSuccess,
  LoadUserFail,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoFailed,
  updateUserAddressRequest,
  updateUserAddressSuccess,
  updateUserAddressFailed,
  deleteUserAddressRequest,
  deleteUserAddressSuccess,
  deleteUserAddressFailed,
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFailed,
  clearErrors,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

/* older code is down */

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: false,
// };

// export const userReducer = createReducer(initialState, {
//   LoadUserRequest: (state) => {
//     state.loading = true;
//   },
//   LoadUserSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.loading = false;
//     state.user = action.payload;
//   },
//   LoadUserFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//     state.isAuthenticated = false;
//   },

//   // update user information
//   updateUserInfoRequest: (state) => {
//     state.loading = true;
//   },
//   updateUserInfoSuccess: (state, action) => {
//     state.loading = false;
//     state.user = action.payload;
//   },
//   updateUserInfoFailed: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   // update user address
//   updateUserAddressRequest: (state) => {
//     state.addressloading = true;
//   },
//   updateUserAddressSuccess: (state, action) => {
//     state.addressloading = false;
//     state.successMessage = action.payload.successMessage;
//     state.user = action.payload.user;
//   },
//   updateUserAddressFailed: (state, action) => {
//     state.addressloading = false;
//     state.error = action.payload;
//   },

//   // delete user address
//   deleteUserAddressRequest: (state) => {
//     state.addressloading = true;
//   },
//   deleteUserAddressSuccess: (state, action) => {
//     state.addressloading = false;
//     state.successMessage = action.payload.successMessage;
//     state.user = action.payload.user;
//   },
//   deleteUserAddressFailed: (state, action) => {
//     state.addressloading = false;
//     state.error = action.payload;
//   },

//   // get all users --- admin
//   getAllUsersRequest: (state) => {
//     state.usersLoading = true;
//   },
//   getAllUsersSuccess: (state,action) => {
//     state.usersLoading = false;
//     state.users = action.payload;
//   },
//   getAllUsersFailed: (state,action) => {
//     state.usersLoading = false;
//     state.error = action.payload;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
//   clearMessages: (state) => {
//     state.successMessage = null;
//   },
// });
