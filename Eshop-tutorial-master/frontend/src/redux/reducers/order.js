// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the order
const initialState = {
  isLoading: true,
};

// Create a slice of the state for the order
const orderSlice = createSlice({
  // Give the slice a name
  name: "order",
  // Pass the initial state
  initialState,
  // Define the reducers for the slice
  reducers: {
    // Get all orders of a user
    getAllOrdersUserRequest: (state) => {
      state.isLoading = true;
    },
    getAllOrdersUserSuccess: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    getAllOrdersUserFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get all orders of a shop
    getAllOrdersShopRequest: (state) => {
      state.isLoading = true;
    },
    getAllOrdersShopSuccess: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    getAllOrdersShopFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get all orders for admin
    adminAllOrdersRequest: (state) => {
      state.adminOrderLoading = true;
    },
    adminAllOrdersSuccess: (state, action) => {
      state.adminOrderLoading = false;
      state.adminOrders = action.payload;
    },
    adminAllOrdersFailed: (state, action) => {
      state.adminOrderLoading = false;
      state.error = action.payload;
    },

    // Clear errors
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Export the reducer and action creators from the slice
export const {
  getAllOrdersUserRequest,
  getAllOrdersUserSuccess,
  getAllOrdersUserFailed,
  getAllOrdersShopRequest,
  getAllOrdersShopSuccess,
  getAllOrdersShopFailed,
  adminAllOrdersRequest,
  adminAllOrdersSuccess,
  adminAllOrdersFailed,
  clearErrors,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;




/* Older code from down refactored */

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const orderReducer = createReducer(initialState, {
//   // get all orders of user
//   getAllOrdersUserRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllOrdersUserSuccess: (state, action) => {
//     state.isLoading = false;
//     state.orders = action.payload;
//   },
//   getAllOrdersUserFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
  
//   // get all orders of shop
//   getAllOrdersShopRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllOrdersShopSuccess: (state, action) => {
//     state.isLoading = false;
//     state.orders = action.payload;
//   },
//   getAllOrdersShopFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // get all orders for admin
//   adminAllOrdersRequest: (state) => {
//     state.adminOrderLoading = true;
//   },
//   adminAllOrdersSuccess: (state, action) => {
//     state.adminOrderLoading = false;
//     state.adminOrders = action.payload;
//   },
//   adminAllOrdersFailed: (state, action) => {
//     state.adminOrderLoading = false;
//     state.error = action.payload;
//   },

//   clearErrors: (state) => {
//     state.error = null;
//   },
// });