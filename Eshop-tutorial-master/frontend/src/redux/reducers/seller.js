// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the seller
const initialState = {
  isLoading: true,
};

// Create a slice of the state for the seller
const sellerSlice = createSlice({
  // Give the slice a name
  name: 'seller',
  // Pass the initial state
  initialState,
  // Define the reducers for the slice
  reducers: {
    // Load a seller
    LoadSellerRequest: (state) => {
      state.isLoading = true;
    },
    LoadSellerSuccess: (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
    },
    LoadSellerFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    },

    // Get all sellers for admin
    getAllSellersRequest: (state) => {
      state.isLoading = true;
    },
    getAllSellersSuccess: (state, action) => {
      state.isLoading = false;
      state.sellers = action.payload;
    },
    getAllSellerFailed: (state, action) => {
      state.isLoading = false;
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
  LoadSellerRequest,
  LoadSellerSuccess,
  LoadSellerFail,
  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellerFailed,
  clearErrors,
} = sellerSlice.actions;

export const sellerReducer = sellerSlice.reducer;





/* Older code is down */

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const sellerReducer = createReducer(initialState, {
//   LoadSellerRequest: (state) => {
//     state.isLoading = true;
//   },
//   LoadSellerSuccess: (state, action) => {
//     state.isSeller = true;
//     state.isLoading = false;
//     state.seller = action.payload;
//   },
//   LoadSellerFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.isSeller = false;
//   },

//   // get all sellers ---admin
//   getAllSellersRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllSellersSuccess: (state, action) => {
//     state.isLoading = false;
//     state.sellers = action.payload;
//   },
//   getAllSellerFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });