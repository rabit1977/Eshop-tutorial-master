// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the product
const initialState = {
  isLoading: true,
};

// Create a slice of the state for the product
const productSlice = createSlice({
  // Give the slice a name
  name: 'product',
  // Pass the initial state
  initialState,
  // Define the reducers for the slice
  reducers: {
    // Create a product
    productCreateRequest: (state) => {
      state.isLoading = true;
    },
    productCreateSuccess: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    },
    productCreateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },

    // Get all products of a shop
    getAllProductsShopRequest: (state) => {
      state.isLoading = true;
    },
    getAllProductsShopSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getAllProductsShopFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Delete a product of a shop
    deleteProductRequest: (state) => {
      state.isLoading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    deleteProductFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get all products
    getAllProductsRequest: (state) => {
      state.isLoading = true;
    },
    getAllProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    getAllProductsFailed: (state, action) => {
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
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  getAllProductsShopRequest,
  getAllProductsShopSuccess,
  getAllProductsShopFailed,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailed,
  getAllProductsRequest,
  getAllProductsSuccess,
  getAllProductsFailed,
  clearErrors,
} = productSlice.actions;

export const productReducer = productSlice.reducer;





/* Older code down refactored up */

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const productReducer = createReducer(initialState, {
//   productCreateRequest: (state) => {
//     state.isLoading = true;
//   },
//   productCreateSuccess: (state, action) => {
//     state.isLoading = false;
//     state.product = action.payload;
//     state.success = true;
//   },
//   productCreateFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.success = false;
//   },

//   // get all products of shop
//   getAllProductsShopRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllProductsShopSuccess: (state, action) => {
//     state.isLoading = false;
//     state.products = action.payload;
//   },
//   getAllProductsShopFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // delete product of a shop
//   deleteProductRequest: (state) => {
//     state.isLoading = true;
//   },
//   deleteProductSuccess: (state, action) => {
//     state.isLoading = false;
//     state.message = action.payload;
//   },
//   deleteProductFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // get all products
//   getAllProductsRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllProductsSuccess: (state, action) => {
//     state.isLoading = false;
//     state.allProducts = action.payload;
//   },
//   getAllProductsFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
  
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });
